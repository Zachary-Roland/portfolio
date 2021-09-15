import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="aboveWaveContainer">
        <h1>This is where the app goes</h1>
        {/* <div className="waveContainer">
        <div className="wave"></div>
      </div> */}
      </div>
      <div className="wavesContainer">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <g className="parallax">
            <path
              id="1"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              fill="rgba(255,255,255,0.7"
            />
            <path
              id="2"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              fill="rgba(255,255,255,0.5)"
            />
            <path
              id="3"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              fill="rgba(255,255,255,0.3)"
            />
            <path
              id="4"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
