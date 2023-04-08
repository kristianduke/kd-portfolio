import React from "react";
import './Post.css'

function Post(props){
    return(
        <div className={"post"}>
            <br/>
            <div className={"post-bar"}>
                <h2 className={"post-title"}>{props.icon ? <i className={props.icon}/> : null } {props.title}</h2>
                {props.github ? <div className={"post-links"}>
                    <a href={props.github} target={"_blank"} rel={"noreferrer"}><i className="fa-brands fa-github"></i></a>
                </div> : null}
            </div>
            <hr className={"secondary"}/>
            <div className={"post-description"}>
                {props.children}
            </div>
        </div>
    )
}

export default Post;