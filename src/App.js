import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';
import SinglePage from './pages/SinglePage';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:slug" element={<SinglePage />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
