import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoute } from "./routes/AppRoute";
import { ThemeProvider } from "./context/ThemeContext";
import { ScrollToTop } from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
