import { useContext } from "react";
import "./Navbar.css";

import { Link } from 'react-router-dom'
import DataContext from "../context/DataContext";

function Navbar (){
    
    let {user, cart} = useContext(DataContext);

    function getNumOfProds () {
        let numOfProds = 0;
        for(let i=0; i<cart.length; i++) {
            const prod = cart[i];
            numOfProds += prod.quantity;
        }
        return numOfProds;
    }
    
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/catalog">
                Catalog
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/list">
                Shopping List
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">
                About Us
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/admin">
                Admin Page
            </Link>
            </li>
        </ul>
    
    <form className="d-flex" role="search">

        <button className="btn btn-outline-dark me-2">
            {user.name}
        </button>

        <Link className="btn btn-outline-success" to="/cart">
            <span className="badge text-bg-light me-1">{getNumOfProds()}</span>
            Cart
        </Link>
    </form>
    </div>
    </div>
    </nav>
    );
}


export default Navbar;