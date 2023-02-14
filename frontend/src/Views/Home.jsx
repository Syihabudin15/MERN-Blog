import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "../Style/UserStyle/Home.scss";

function Home(){
    const [Blogs, setBLogs] = useState([]);

    const getAllBlog = async () => {
        const result = await axios.get("http://localhost:5000/api/blogs");
        setBLogs(result.data.Data);
    };

    useEffect(() => {
        getAllBlog();
    });
    return(
        <Fragment>
            <div className="Wrapper">
                <div className="listTitleBlog">
                  {
                    Blogs.map((b,i) => (
                        <div key={i}>
                            <h4>{b.title}</h4>
                            <p>{b.createdAt}</p>
                            <p>{b.subBody}</p>
                        </div>
                    ))
                  }
                </div>
            </div>
        </Fragment>
    )
}

export default Home;