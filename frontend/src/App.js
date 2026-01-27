import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
