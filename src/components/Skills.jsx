import { motion, useScroll, useTransform } from 'framer-motion';

const skillCategories = [
  {
    title: 'Web Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 80 },
      { name: 'TurboRepo', level: 75 },
    ],
  },
  {
    title: 'Web3 & Blockchain',
    skills: [
      { name: 'Solidity', level: 85 },
      { name: 'Hardhat', level: 80 },
      { name: 'Foundry', level: 75 },
      { name: 'Ethers.js', level: 85 },
      { name: 'Solana', level: 60 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'MonoRepo', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linux', level: 80 },
    ],
  },
];

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -right-1/4 top-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -left-1/4 bottom-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"
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
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            className="flex items-center gap-4 mb-12"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-highlight font-mono text-lg"
            >
              02.
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
              className="text-3xl font-bold text-textPrimary"
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 h-px bg-highlight/20"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(100, 255, 218, 0.15)',
                  y: -5
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
                className="bg-quaternary p-6 rounded-lg shadow-card relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="text-xl font-bold mb-4 text-highlight"
                  >
                    {category.title}
                  </motion.h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <motion.div 
                          className="flex justify-between mb-1"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5,
                            delay: skillIndex * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                        >
                          <span className="text-textPrimary font-medium">{skill.name}</span>
                          <span className="text-highlight">{skill.level}%</span>
                        </motion.div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ 
                              width: `${skill.level}%`,
                              opacity: 1
                            }}
                            transition={{ 
                              duration: 0.8,
                              delay: skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-highlight to-highlight/70"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-textPrimary text-sm">
              Currently exploring:{' '}
              <motion.span
                whileHover={{ 
                  scale: 1.1,
                  color: "#64ffda",
                  textShadow: "0 0 8px rgba(100, 255, 218, 0.3)"
                }}
                className="text-highlight inline-block font-medium"
              >
                Solana Development
              </motion.span>{' '}
              and{' '}
              <motion.span
                whileHover={{ 
                  scale: 1.1,
                  color: "#64ffda",
                  textShadow: "0 0 8px rgba(100, 255, 218, 0.3)"
                }}
                className="text-highlight inline-block font-medium"
              >
                AI Development (Building on Eliza)
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills; 