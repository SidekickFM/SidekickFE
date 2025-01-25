import Chat from "./pages/Chat";
import CreateArt from "./pages/CreateArt";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/create-art" element={<CreateArt />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
