import { Fragment } from "react";

function CreateBlog(){
    return(
        <Fragment>
            <h1 className="createBlog">Create a Blog</h1>
            <div className="postBlog">
                <input type={Text} placeholder={"Judul"} className="inputTitle"/>
                <input type={Text} placeholder={"SubBody"} className="inputTitle"/>
                <input type="textarea" placeholder="Body" className="textArea"/>
                <input type={Text} placeholder={"Author"} className="inputTitle"/>
                <button className="button">Submit</button>
            </div>
        </Fragment>
    )
}

export default CreateBlog;