import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ToastProvider from "./components/ToastProvider";
import { ThemeProvider } from "next-themes";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <ToastProvider />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;