import { motion } from 'framer-motion';
import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container className="text-center" style={{ marginTop: '15vh' }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="fw-bold mb-3"
        >
          Welcome to DevConnect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted mb-4"
        >
          A place where developers connect, collaborate, and grow together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <Button variant="primary" href="/register" className="me-3">Get Started</Button>
          <Button variant="outline-light" href="/login">Login</Button>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default Home;
