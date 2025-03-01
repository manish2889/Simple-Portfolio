import { motion, useScroll, useTransform } from 'framer-motion'
import { FiCalendar, FiMail } from 'react-icons/fi'

const Contact = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])
  const scale = useTransform(scrollYProgress, [0.8, 0.9], [0.8, 1])

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-b from-card to-primary">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-highlight/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.215, 0.610, 0.355, 1.000],
              }
            }
          }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center">
            <motion.div 
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }
              }}
            >
              <span className="text-highlight font-mono text-lg">04. </span>
              <h2 className="text-4xl md:text-5xl font-bold text-textPrimary inline-block">
                Get In Touch
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-textPrimary text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a
                href="https://calendly.com/manishr2889/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-highlight/10 text-highlight rounded-lg border border-highlight/20 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(100, 255, 218, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <FiCalendar className="w-5 h-5" />
                <span className="font-mono">Schedule a Meeting</span>
              </motion.a>

              <motion.a
                href="mailto:manishr9844@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-transparent text-highlight rounded-lg border border-highlight hover:bg-highlight/10"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(100, 255, 218, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <FiMail className="w-5 h-5" />
                <span className="font-mono">Send Email</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-highlight/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  )
}

export default Contact 