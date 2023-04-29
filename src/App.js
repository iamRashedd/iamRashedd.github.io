import picture from './rashed.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />
        <p>
          Rashedul Islam
        </p>
        <a
          className="App-link"
          href="https://github.com/iamRashedd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Profile
        </a>

        <a
          className="App-link"
          href="https://www.facebook.com/joker.rashed"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Profile
        </a>

      </header>
    </div>
  );
}

export default App;
