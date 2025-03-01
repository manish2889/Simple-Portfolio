import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-8 text-center bg-primary border-t border-muted/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="container mx-auto px-4"
            >
                <p className="text-sm font-mono text-textSecondary">
                    <a
                        href="https://github.com/manish2889"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-highlight transition-colors"
                    >
                        Designed & Built by Manish R
                    </a>
                </p>
            </motion.div>
        </footer>
    );
}

export default Footer;
