import React from "react";
import './Post.css'
import { motion, useScroll } from "framer-motion";

function Post(props){
    return(
        <motion.div className={"post"} viewport={{once: true}} transition={{delay: 0.1}}
                    initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y:0}}>
            <br/>
            <div className={"post-bar"}>
                <h2 className={"post-title"}>{props.icon ? <i className={props.icon}/> : null } {props.title}</h2>
                {props.github ? <div className={"post-links"}>
                    <a href={props.github} target={"_blank"} rel={"noreferrer"}>
                        <motion.i whileHover={{scale: 1.2}} whileTap={{scale:0.95}} className="fa-brands fa-github"></motion.i>
                    </a>
                </div> : null}
            </div>
            <hr className={"secondary"}/>
            <div className={"post-description"}>
                {props.children}
            </div>
        </motion.div>
    )
}

export default Post;