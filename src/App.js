import './App.css';
import Navbar from './Navbar';
import Headline from './Headline';
import OurClient from './OurClient';
import Help from './Help';
import Info from './Info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Headline />
        <OurClient />
        <Help />
      <footer>
        <Info />
      </footer>
    </div>
  );
}

export default App;
