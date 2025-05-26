import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div>
      <header className="App-header">
        <a
          className="App-link"
          href="https://emergent.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" />
        </a>
        <p className="mt-5">Building something incredible ~!</p>
      </header>
    </div>
  );
};

const CyberGame = () => {
  useEffect(() => {
    // Load the game HTML content directly
    const gameHTML = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CyberDefender 16-bit - Gra Edukacyjna</title>
</head>
<body>
    <iframe 
      src="/cybersecurity_game.html" 
      width="100%" 
      height="100vh" 
      frameborder="0"
      title="Cybersecurity Game"
    ></iframe>
</body>
</html>`;
    
    // Open game in new window
    const gameWindow = window.open('', '_blank');
    gameWindow.document.write(gameHTML);
    gameWindow.document.close();
  }, []);
  
  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h2>Opening Cybersecurity Game...</h2>
      <p>The game should open in a new window.</p>
      <p>If it doesn't open, please check your popup blocker settings.</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/cybersecurity_game.html" element={<CyberGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
