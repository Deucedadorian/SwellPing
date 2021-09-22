const windy = require('./components/windyAPI');

function App() {
  return (
    <div className="App">
      {/* <button onClick={windy}>call</button> */}
      {windy()}
    </div>
  );
}

export default App;
