import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
