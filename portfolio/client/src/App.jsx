/* App.jsx, Che Shing Winson Li, 301330329, 2024-05-26 */
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';


const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
    );
  };

export default App;
