import React from "react";
import {render} from "react-dom";
import faker from '@faker-js/faker';

const App = ()=>{
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src = {faker.image.avatar() }/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metaData">
                        <span className="data">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src = {faker.image.avatar() }/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metaData">
                        <span className="data">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src = {faker.image.avatar() }/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metaData">
                        <span className="data">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>
        </div>
    );
};

render(<App />, document.querySelector('#root'));