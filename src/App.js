import logo from './dark_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width={300}  alt="logo" />
        <p style={{marginTop:"100px", color:"black"}}>
          Site is under scheduled mainteneance, please come back later. Thank you!
        </p>
      </header>
    </div>
  );
}

export default App;
