import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import CreatePlan from "../CreatePlan/CreatePlan";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/createplan" element={<CreatePlan />} />
            </Routes>
        </Router>
    );
}