import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../Views/Home";
import CreateBlog from "../Views/AdminView/CreateBlog";
import Update from "../Views/AdminView/Update";

import "../Style/Theme.scss";

function RoutesApp(){
    
    return(
        <Fragment>
            <BrowserRouter>
                <div className="Header">
                    <div className="Logo">
                        <Link to={"/"}>SYIHAB</Link>
                    </div>
                    <div className="Menu">
                        <Link to={"/create"}>Create Blog</Link>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateBlog />} />
                    <Route path="/update/:id" element={<Update />} />
                </Routes>
                <div className="Footer">
                    Follow me
                </div>
            </BrowserRouter>
        </Fragment>
    )
}

export default RoutesApp;