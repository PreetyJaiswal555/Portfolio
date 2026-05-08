import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

// Lazy load sections
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

const MainPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Suspense fallback={null}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </Suspense>
    <Footer />
  </motion.main>
);

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div style={{ minHeight: '100vh', background: '#030712', color: '#e2e8f0' }}>
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Loader */}
          <AnimatePresence>
            {!loaded && <Loader onComplete={() => setLoaded(true)} />}
          </AnimatePresence>

          {/* Only show app after loader */}
          {loaded && (
            <>
              <ScrollProgress />
              <Navbar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="*" element={
                  <Suspense fallback={null}>
                    <NotFound />
                  </Suspense>
                } />
              </Routes>
              <BackToTop />
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
