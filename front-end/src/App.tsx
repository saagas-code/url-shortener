import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Redirect from "./pages/redirect";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:link" element={<Redirect />} />
            </Routes>
        </Router>
    );
}

export default App;
