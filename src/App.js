import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ReactTreeCheckboxPage from './Pages/ReactTreeCheckboxPage';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/react-tree-checkbox" element={<ReactTreeCheckboxPage />} />
    </Routes>


  );
}

export default App;
