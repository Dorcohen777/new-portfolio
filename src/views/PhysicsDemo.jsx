import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsDemo = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Bodies, World, Runner, Common, Mouse, MouseConstraint } = Matter;
    
    const colors = [
      '#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3', '#FF8C42',
      '#A8E6CF', '#DCD6F7', '#F7D794', '#B5EAD7', '#E2F0CB'
    ];
    
    const viewportHeight = window.innerHeight - 60;
    const viewportWidth = window.innerWidth;
    
    // Create engine with reduced gravity for space-like effect
    const engine = Engine.create({
      gravity: {
        x: 0,
        y: 0.5  // Reduced gravity (default is 1)
      }
    });
    engineRef.current = engine;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: viewportWidth,
        height: viewportHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    const canvas = render.canvas;
    canvas.style.cursor = 'default';

    Matter.Events.on(mouseConstraint, 'mousemove', (event) => {
      const mousePosition = event.mouse.position;
      const bodiesUnderMouse = Matter.Query.point(engine.world.bodies, mousePosition);
      if (bodiesUnderMouse.length > 0 && !bodiesUnderMouse[0].isStatic) {
        canvas.style.cursor = 'grab';
      } else {
        canvas.style.cursor = 'default';
      }
    });

    Matter.Events.on(mouseConstraint, 'startdrag', () => {
      canvas.style.cursor = 'grabbing';
    });

    Matter.Events.on(mouseConstraint, 'enddrag', () => {
      canvas.style.cursor = 'grab';
    });

    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Ground with high restitution for bouncy effect
    const ground = Bodies.rectangle(
      viewportWidth / 2,
      viewportHeight - 30,
      viewportWidth,
      60,
      { 
        isStatic: true,
        restitution: 1, // Maximum bounciness
        friction: 0.001, // Very low friction
        render: {
          fillStyle: '#000823'
        }
      }
    );

    // Walls with high restitution
    const leftWall = Bodies.rectangle(-30, viewportHeight / 2, 60, viewportHeight, {
      isStatic: true,
      restitution: 1,
      friction: 0.001,
      render: { visible: false }
    });

    const rightWall = Bodies.rectangle(viewportWidth + 30, viewportHeight / 2, 60, viewportHeight, {
      isStatic: true,
      restitution: 1,
      friction: 0.001,
      render: { visible: false }
    });

    World.add(engine.world, [ground, leftWall, rightWall]);

    Runner.run(Runner.create(), engine);
    Render.run(render);

    const createRandomShape = () => {
      const x = Math.random() * (viewportWidth - 100) + 50;
      const baseSize = Math.random() * 10 + 15;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Common physics properties for space-like behavior
      const physicsProps = {
        restitution: 0.9,    // High bounciness
        friction: 0.001,     // Very low friction
        frictionAir: 0.001,  // Very low air resistance
        density: 0.001,      // Low density for floaty feeling
        render: { 
          fillStyle: color,
          opacity: 0.9
        }
      };

      const shapes = ['circle', 'square', 'triangle', 'rectangle', 'polygon'];
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      
      let shape;
      
      switch(shapeType) {
        case 'circle':
          shape = Bodies.circle(x, -30, baseSize, physicsProps);
          break;
          
        case 'square':
          shape = Bodies.rectangle(x, -30, baseSize * 2, baseSize * 2, physicsProps);
          break;
          
        case 'triangle':
          shape = Bodies.polygon(x, -30, 3, baseSize * 1.5, physicsProps);
          break;
          
        case 'rectangle':
          shape = Bodies.rectangle(x, -30, baseSize * 3, baseSize * 1.5, physicsProps);
          break;
          
        case 'polygon':
          const sides = Math.floor(Math.random() * 3) + 5;
          shape = Bodies.polygon(x, -30, sides, baseSize * 1.5, physicsProps);
          break;
      }
      
      // Add slight rotation for more interesting movement
      Matter.Body.setAngularVelocity(shape, Common.random(-0.05, 0.05));
      
      World.add(engine.world, shape);
      
      if (engine.world.bodies.length > 50) {
        const bodiesToRemove = engine.world.bodies
          .filter(body => !body.isStatic && body.position.y > viewportHeight + 100);
        World.remove(engine.world, bodiesToRemove);
      }
    };

    intervalRef.current = setInterval(createRandomShape, 1000);

    let lastMousePos = { x: 0, y: 0 };
    let mouseVelocity = { x: 0, y: 0 };

    canvas.addEventListener('mousemove', (event) => {
      const newMousePos = { x: event.clientX, y: event.clientY };
      mouseVelocity = {
        x: newMousePos.x - lastMousePos.x,
        y: newMousePos.y - lastMousePos.y
      };
      lastMousePos = newMousePos;
    });

    Matter.Events.on(mouseConstraint, 'mouseup', (event) => {
      const body = mouseConstraint.body;
      if (body) {
        Matter.Body.setVelocity(body, {
          x: mouseVelocity.x * 0.4, // Increased throw velocity
          y: mouseVelocity.y * 0.4
        });
      }
    });

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight - 60;
      
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      
      Matter.Body.setPosition(ground, {
        x: newWidth / 2,
        y: newHeight - 30
      });
      Matter.Body.setPosition(leftWall, {
        x: -30,
        y: newHeight / 2
      });
      Matter.Body.setPosition(rightWall, {
        x: newWidth + 30,
        y: newHeight / 2
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('resize', handleResize);
      Mouse.clearSourceEvents(mouse);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div 
      ref={sceneRef} 
      style={{
        position: 'absolute',
        top: '60px',
        left: 0,
        width: '100%',
        height: 'calc(100vh - 60px)',
        zIndex: 1,
        overflow: 'hidden'
      }}
    />
  );
};

export default PhysicsDemo;