import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);
    return (<div className="navbar">
        <div className="left">
            <div className="logo">Flash Chat</div>
        </div>
        <div className="right">
            <img
                src={currentUser.photoURL}
                alt=""
                className="avatar"
            />
            <p>{currentUser.displayName}</p>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>);
};

export default Navbar;
