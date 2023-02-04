  import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
  import Login from './components/Login'
  import Header from './components/Header';
  import Home from './components/Home';

  import './App.css';

  function App() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  }

  export default App;
