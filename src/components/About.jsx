import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCode, FiCpu, FiZap } from 'react-icons/fi';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute -right-1/4 top-1/4 w-96 h-96 bg-highlight rounded-full filter blur-[128px] opacity-20"
        />
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute -left-1/4 bottom-1/4 w-96 h-96 bg-highlight rounded-full filter blur-[128px] opacity-20"
        />
      </motion.div>

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 mb-12"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-highlight font-mono text-lg"
            >
              01.
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-white"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 h-px bg-highlight/20"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Paragraphs with hover effect */}
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="text-[#ccd6f6] text-lg leading-relaxed pl-4 border-l-2 border-highlight/20 hover:border-highlight transition-all duration-300 font-medium tracking-wide bg-transparent mix-blend-normal"
              >
                My journey into the world of blockchain and Web3 began with a fascination for decentralized systems 
                and their potential to revolutionize the digital landscape. As a computer science student, I've always 
                been drawn to cutting-edge technologies that challenge traditional paradigms.
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="text-[#ccd6f6] text-lg leading-relaxed pl-4 border-l-2 border-highlight/20 hover:border-highlight transition-all duration-300 font-medium tracking-wide bg-transparent mix-blend-normal"
              >
                Beyond coding, I'm passionate about contributing to the Web3 ecosystem and building solutions that 
                make blockchain technology more accessible to everyone. I believe in the power of decentralized 
                systems to create a more transparent and equitable digital future.
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="text-[#ccd6f6] text-lg leading-relaxed pl-4 border-l-2 border-highlight/20 hover:border-highlight transition-all duration-300 font-medium tracking-wide bg-transparent mix-blend-normal"
              >
                When I'm not coding, you'll find me exploring new blockchain protocols, participating in hackathons, 
                or sharing my knowledge with the developer community through technical articles and open-source 
                contributions.
              </motion.p>
            </motion.div>

            {/* Currently Exploring section with enhanced animations */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#0a192f] p-8 rounded-lg shadow-lg relative overflow-hidden group border border-highlight/10 mix-blend-normal"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-highlight/5 via-transparent to-highlight/5"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FiZap className="text-2xl text-highlight" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-highlight">Currently Exploring</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="group relative overflow-hidden rounded-lg bg-[#0a192f] p-6 transition-all duration-300 hover:shadow-highlight border border-highlight/10 mix-blend-normal"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-highlight/5 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="p-3 bg-highlight/10 rounded-lg"
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiCode className="text-2xl text-highlight" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-[#ccd6f6] group-hover:text-highlight transition-colors tracking-wide">
                          Solana Development
                        </h4>
                      </div>
                      <p className="text-[#ccd6f6] text-lg font-medium tracking-wide">
                        Building decentralized applications on the fastest blockchain, exploring Solana's unique architecture and ecosystem.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative overflow-hidden rounded-lg bg-[#0a192f] p-6 transition-all duration-300 hover:shadow-highlight border border-highlight/10 mix-blend-normal"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-highlight/5 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="p-3 bg-highlight/10 rounded-lg"
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiCpu className="text-2xl text-highlight" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-[#ccd6f6] group-hover:text-highlight transition-colors tracking-wide">
                          AI Development
                        </h4>
                      </div>
                      <p className="text-[#ccd6f6] text-lg font-medium tracking-wide">
                        Creating intelligent solutions with Eliza, focusing on AI integration in blockchain applications.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;