import Button from './Button';
import { motion } from 'framer-motion';
import Container from './Container';

export default function Hero() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Designs That Build Trust.
              <br />
              Websites That Generate Revenue.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-subtext max-w-xl"
            >
              We help ambitious brands grow through premium branding, Shopify stores, modern websites, and high-converting digital experiences.
            </motion.p>

            <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <Button>Book Free Consultation</Button>
              <Button variant="ghost">View Portfolio</Button>
            </motion.div>
          </div>

          {/* Right side: placeholder for animated 3D dashboard */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-64 bg-gradient-to-tr from-white to-secondaryBg rounded-2xl border border-border shadow-premium relative overflow-hidden">
              {/* Mock floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-8 left-6 w-56 h-28 bg-white rounded-xl border border-border p-4 shadow"
              >
                <div className="h-3 bg-border rounded w-32 mb-3" />
                <div className="h-3 bg-border rounded w-40" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-8 right-6 w-44 h-20 bg-white rounded-xl border border-border p-3 shadow"
              >
                <div className="h-3 bg-border rounded w-28 mb-2" />
                <div className="h-2 bg-border rounded w-20" />
              </motion.div>

              <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
