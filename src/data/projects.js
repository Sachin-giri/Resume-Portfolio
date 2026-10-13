// Edit this file to add, remove, or update projects.
// Each project renders as a card in the Projects section.

export const projects = [
  {
    id: 'mission-alpha',
    title: 'Mission Alpha',
    tagline: '2D space adventure game',
    description:
      'A browser-based 2D game built with Phaser 3. Player movement, enemy AI, collision detection, a scoring system, animations, and sound effects, all running on Phaser\'s Scene architecture with rendering and asset loading tuned for smooth 60fps gameplay.',
    stack: ['Phaser 3', 'JavaScript', 'Canvas', 'Web Audio API'],
    demoUrl: '',
    codeUrl: '',
    kind: 'game',
    highlight: true,
  },
  {
    id: 'ai-support-chatbot',
    title: 'AI-Powered Customer Support Chatbot',
    tagline: 'Conversational support tool',
    description:
      'A support chatbot built on the OpenAI API with a React front end and a Node.js/Express backend. Handles multi-turn conversations, prompt design for consistent tone, and REST endpoints for message history and session handling.',
    stack: ['React.js', 'Node.js', 'OpenAI API', 'REST APIs'],
    demoUrl: '',
    codeUrl: '',
    kind: 'ai',
    highlight: true,
  },
  {
    id: 'cloud-fullstack-app',
    title: 'Cloud-Based Full Stack Application',
    tagline: 'Scalable web application',
    description:
      'An end-to-end web application with a React front end, a Node.js/Express API layer, and MongoDB for persistence. Built around reusable UI components and optimized client-server communication for faster load times.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
    demoUrl: '',
    codeUrl: '',
    kind: 'web',
    highlight: false,
  },
]
