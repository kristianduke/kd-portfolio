import React from 'react';
import './Details.css';

function Details(){
    return(
        <div className="details">
            <div className="icon-container">
                <div>
                    <a href="https://github.com/kristianduke">
                        <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/kristian-duke/">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </div>
                <div>
                    <a href="mailto: contact@kristianduke.me">
                        <i className="fa-solid fa-envelope fa-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Details;