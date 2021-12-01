import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app-page">
        {/* SidebAR */}
        <Sidebar />
        {/* Recommended */}
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
