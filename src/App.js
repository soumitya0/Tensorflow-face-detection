import "./App.css";
import Camera from "./components/Camera/Camera";
import SVGScreen from "./components/SVGScreen/SVGScreen";
function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <SVGScreen />
    </div>
  );
}

export default App;
