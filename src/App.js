import './App.css';
import Example from './comp/cal';
import Testpage from './comp/testpage';

function App() {
  return (
    <div className="App">
      <div class="md:container md:mx-auto">
        <Testpage></Testpage>
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

