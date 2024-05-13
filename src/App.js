import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./Footer";
import Player from "./Players";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
