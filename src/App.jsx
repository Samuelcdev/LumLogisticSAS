import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

