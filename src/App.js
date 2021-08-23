import './App.css';
import Layout from './layouts/Layout';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Mission from './screens/Mission';
import Projects from './screens/Projects';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <Mission />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
