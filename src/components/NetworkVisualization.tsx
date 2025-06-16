
import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  animated: boolean;
}

const NetworkVisualization = () => {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    const generateNodes = () => {
      const nodeCount = 8;
      const centerX = 400;
      const centerY = 300;
      const radius = 120;
      
      const newNodes: Node[] = [];
      
      // Central node
      newNodes.push({
        id: 0,
        x: centerX,
        y: centerY,
        size: 60,
        color: 'from-cyan-400 to-blue-500',
        animated: true
      });

      // Surrounding nodes
      for (let i = 1; i <= nodeCount; i++) {
        const angle = (i * 2 * Math.PI) / nodeCount;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        newNodes.push({
          id: i,
          x,
          y,
          size: 40,
          color: i % 2 === 0 ? 'from-purple-400 to-pink-500' : 'from-cyan-400 to-purple-500',
          animated: true
        });
      }

      setNodes(newNodes);
    };

    generateNodes();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        width="800"
        height="600"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 800 600"
      >
        {/* Connection lines */}
        {nodes.slice(1).map((node) => (
          <line
            key={`line-${node.id}`}
            x1={nodes[0]?.x}
            y1={nodes[0]?.y}
            x2={node.x}
            y2={node.y}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            className="animate-pulse-slow"
          />
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 0, 255, 0.3)" />
          </linearGradient>
        </defs>

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size / 2 + 10}
              fill="url(#glowGradient)"
              className="animate-pulse-slow"
            />
            {/* Main node */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size / 2}
              fill={`url(#node-${node.id})`}
              className={node.animated ? 'animate-float' : ''}
              style={{
                animationDelay: `${node.id * 0.5}s`,
                filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
              }}
            />
            {/* Inner highlight */}
            <circle
              cx={node.x - 5}
              cy={node.y - 5}
              r={8}
              fill="rgba(255, 255, 255, 0.3)"
            />
          </g>
        ))}

        {/* Additional gradient definitions for nodes */}
        <defs>
          <radialGradient id="glowGradient">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          {nodes.map((node) => (
            <linearGradient key={`gradient-${node.id}`} id={`node-${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={node.color.includes('cyan') ? '#00ffff' : '#ff00ff'} />
              <stop offset="100%" stopColor={node.color.includes('purple') ? '#8b5cf6' : '#3b82f6'} />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NetworkVisualization;
