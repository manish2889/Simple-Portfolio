import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
  {
    title: "AQI Dashboard",
    description: "A real-time air quality monitoring dashboard built with React that provides comprehensive environmental data visualization and analysis. Features include real-time AQI monitoring, interactive map visualization, multiple data layers, AI-powered chatbot assistant, and PWA support.",
    tech: ["React 18", "Tailwind CSS", "Leaflet Maps", "Vite", "PWA", "OpenStreetMap API"],
    github: "https://github.com/aqihub/aqi-dashboard",
    external: "https://dashboard.aqi.co.in/",
    isComingSoon: false
  },
  {
    title: "Vide Digital Technologies Website",
    description: "A modern, responsive corporate website built with React, TypeScript, and Vite for a global digital marketing and technology solutions provider. Features sophisticated animations, SEO optimization, and comprehensive digital service offerings.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Vide-Digital-Technologies/VideDigitalTechnologies-Website",
    external: "https://vide-digital.netlify.app/",
    isComingSoon: false
  },
  {
    title: "Decentralized AI-Powered Prediction Market",
    description: "A blockchain-based prediction market platform that combines DeFi with AI-powered analysis for cryptocurrency price predictions. Features smart contract-based markets, Chainlink oracles, and automated reward distribution.",
    tech: ["React.js", "Solidity", "Web3.js", "Chainlink", "Tailwind CSS"],
    github: "https://github.com/manish2889/decentralized-prediction-market",
    external: "https://decentralized-prediction-market.vercel.app/",
    isComingSoon: false
  },
  {
    title: "EtherTrendAI: Gas Price Predictor",
    description: "A React-based web application that leverages AI technology to predict Ethereum gas prices, helping users optimize their transaction timing and costs on the Ethereum network.",
    tech: ["React.js", "Chart.js", "Etherscan API", "Tailwind CSS", "AI Prediction Engine"],
    github: "https://github.com/manish2889/ethertrendai-gas-predictor",
    external: "https://ethertrendai-gas-predictor.vercel.app/",
    isComingSoon: false
  },
  {
    title: "Web3 Chatbot",
    description: "A React-based chatbot application that integrates with LLaMA AI to provide intelligent responses to Web3 and blockchain-related queries. Features real-time chat interface with AI integration and dynamic message formatting.",
    tech: ["React 18", "LLaMA AI", "Tailwind CSS", "Custom Hooks"],
    github: "https://github.com/manish2889/web3-chatbot",
    external: "https://web3-chatbot.vercel.app/",
    isComingSoon: false
  },
  {
    title: "TokenPulseAI: DeFi Token Price Predictor",
    description: "An AI-powered DeFi analytics platform that provides real-time price predictions and market sentiment analysis for popular DeFi tokens, built with React and integrated with the LLaMA AI model.",
    tech: ["React.js", "Chart.js", "LLaMA AI", "Express.js", "Tailwind CSS"],
    github: "https://github.com/manish2889/tokenpulse-ai",
    external: "https://tokenpulse-ai.vercel.app/",
    isComingSoon: false
  },
  {
    title: "Ethereum Block Analyzer with AI Integration",
    description: "A Next.js-based web application that combines Ethereum blockchain data analysis with AI insights, providing detailed transaction analysis and intelligent interpretations of blockchain activity.",
    tech: ["Next.js 14", "React 18", "Etherscan API", "Gaia AI API", "Tailwind CSS"],
    github: "https://github.com/manish2889/gaia-etherscan-ai-project",
    external: "https://gaia-etherscan-ai-project.vercel.app/",
    isComingSoon: false
  },
  {
    title: "TokenTap: Web3 Token Faucet Interface",
    description: "A React-based web application that provides a user-friendly interface for interacting with an Ethereum token faucet smart contract, allowing users to request and manage test tokens on the blockchain.",
    tech: ["React 18", "Ethers.js", "MetaMask", "Smart Contracts", "CSS Animations"],
    github: "https://github.com/manish2889/tokentap",
    external: "https://tokentap.vercel.app/",
    isComingSoon: false
  }
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: index => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1
      }
    })
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${`rgba(100, 255, 218, 0.15)`} 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative mb-16">
            <motion.div 
              variants={titleVariants}
              className="flex items-center gap-4"
            >
              <span className="text-highlight font-mono text-lg">03.</span>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-textPrimary to-highlight">
                Featured Projects
              </h2>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-highlight via-highlight/50 to-transparent"
            />
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={projectVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                }}
                className="group relative bg-quaternary/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transform-gpu"
              >
                {/* Project card background effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-highlight/5 via-transparent to-highlight/5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-highlight/10 via-transparent to-transparent"
                  animate={{
                    x: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: index * 0.1
                      }}
                    >
                      <FiFolder className="text-3xl text-highlight" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-2xl font-bold text-textPrimary group-hover:text-highlight transition-colors duration-300"
                    >
                      {project.title}
                    </motion.h3>
                    <div className="flex-grow" />
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-highlight transition-colors"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <FiGithub className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-highlight transition-colors"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <FiExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-textPrimary text-lg mb-6 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          color: "#64ffda",
                          textShadow: "0 0 8px rgba(100, 255, 218, 0.3)"
                        }}
                        className="text-textSecondary text-sm font-mono px-3 py-1 rounded-full bg-highlight/5 border border-highlight/10 hover:border-highlight/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;