import { Fragment } from "react";
import { useState, useEffect } from "react";
import { Axios } from "axios";

function ListBlog(){
    const [state, setState] = useState([])
    useEffect(() => {
        getAllBlog();
    }, []);

    const getAllBlog = async () => {
        const result = await Axios.get("http://localhost:5000/api/blogs");
        setState(result.data.Data);
    };
    return(
        <Fragment>
            <h1>List Blogs</h1>
        </Fragment>
    )
}

export default ListBlog;