import { Fragment, useEffect, useState } from "react";
import axios from "axios";

import "../Style/UserStyle/Home.scss";
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const [Blogs, setBLogs] = useState([]);
    const navigate = useNavigate("");
    const getAllBlog = async () => {
        const result = await axios.get("http://localhost:5000/api/blogs");
        setBLogs(result.data.Data);
    };

    useEffect(() => {
        getAllBlog();
    },[]);

    const deleteBlog = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/api/blog/${id}`);
            getAllBlog();
        }
        catch(error){
            console.log(error);
        }
    };
    return(
        <Fragment>
            <div className="Wrapper">
                <div className="listTitleBlog">
                  {
                    Blogs.map(b => (
                        <div key={b._id} className="card">
                            <h3>{b.title}</h3>
                            <p>{b.subBody}</p>
                            <div className="updel">
                                <button onClick={() => navigate(`/update/${b._id}`) }>update</button>
                                <button onClick={() => deleteBlog(b._id)}>delete</button>
                            </div>
                        </div>
                    ))
                  }
                </div>
            </div>
        </Fragment>
    )
}

export default Home;