import logo from './logo.svg';
import './App.css';
import MyComponent from './test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React with C3B
        </a>


        {/* <Welcome surname="Navarroooo"></Welcome>            */} {/* doesn't work here cuz "Welcome" is not exporting and you can only export once */}
        <MyComponent name="Rad" project="React 1"></MyComponent>     {/* every like MyComponent requires the variables'
                                                                       value to be written again that's why its different name and project */}
        <MyComponent name="Raddd" project="React 2"></MyComponent>
        <MyComponent name="Raddddd" project="React 3"></MyComponent>

      </header>
    </div>
  );
}

export default App;
