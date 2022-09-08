import {useContext} from "react";
import {
    BrowserRouter as Router, Routes, Route, Navigate,
} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./style.scss";

function App() {
    const {currentUser} = useContext(AuthContext);

    const ProtectRoute = ({children}) => {
        if (!currentUser) {
            return <Navigate to="/login"/>;
        }

        return children;
    };
    return (<Router>
        <Routes>
            <Route
                path="/"
                element={<ProtectRoute>
                    <Home/>
                </ProtectRoute>}
            />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>);
}

export default App;
