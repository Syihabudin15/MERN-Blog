import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function Update(){
    const [title, setTitle] = useState("");
    const [subBody, setSubBody] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    const getById = async() => {
        const result = await axios.get(`http://localhost:5000/api/blog/${id}`);
        setTitle(result.data.title);
        setSubBody(result.data.subBody);
        setBody(result.data.body);
        setAuthor(result.data.author);

    };
    useEffect(() => {
        getById();
    }, []);

    const onUpdate = async (e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/api/blog/${id}`,{
                title,
                subBody,
                body,
                author
            });
            navigate("/");
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <Fragment>
            <div className="updateSection">
                <h1>Update Blog</h1>
                <div className="inputupdate">
                    <form onSubmit={onUpdate}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="subBody">Sub Body</label>
                        <input type="text" name="subBody" value={subBody} onChange={(e) => setSubBody(e.target.value)}/>
                        <label htmlFor="body">Body</label>
                        <input type="text" name="body" value={body} onChange={(e) => setBody(e.target.value)}/>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Update;