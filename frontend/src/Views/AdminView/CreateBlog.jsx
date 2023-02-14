import { Fragment } from "react";

function CreateBlog(){
    return(
        <Fragment>
            <h1>Create a Blog</h1>
            <div className="postBlog">
                <input type={Text} placeholder={"Msukan judul"} />
            </div>
        </Fragment>
    )
}

export default CreateBlog;