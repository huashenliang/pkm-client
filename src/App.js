import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DeckList, DeckDetails, GenerateDeck } from "./Views";
import { Container } from "@mui/material";
import { Nav } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ToastContainer position="bottom-right" autoClose={5000} theme="light" />
      <Container>
        <Routes>
          <Route exact path="/" element={<DeckList />} />
          <Route exact path="/deck/:id" element={<DeckDetails />} />
          <Route exact path="/generateDeck" element={<GenerateDeck />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
