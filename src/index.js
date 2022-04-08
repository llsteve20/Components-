import React from "react";
import {render} from "react-dom";
import faker from '@faker-js/faker';

import CommentDetail from "./CommentDetail";

const App = ()=>{
    return (
        <div className="ui container comments">
            <CommentDetail 
                author = "Sam" 
                timeAgo = "Today at 4:45 PM" 
                content="Nice Blog Post!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author = "Alex" 
                timeAgo = "Today at 2:00 PM" 
                content="I love the subject"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author = "Jane" 
                timeAgo = "Yesterday at 5:00 PM" 
                content="Great insight"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

render(<App />, document.querySelector('#root'));