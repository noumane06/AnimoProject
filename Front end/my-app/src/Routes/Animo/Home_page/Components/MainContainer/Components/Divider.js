import React from 'react';
import PostContainer from './PostContainer/PostContainer';
import DateComponent from './DateComponent';

export default function Divider(postsStore) {
        
        var rows = [];
        var posts = [];
        let CurrentDate = new Date() ;
        let lastDate = null ;
        var container = postsStore.posts ;
        
        for (let i = 0; i < container.length; i++) {
            let nextDate = null ;
            if (container[i+1] !== undefined) {
                nextDate = new Date(container[i+1].date);
                nextDate = nextDate.getDate();
            }

            let date = new Date(container[i].date);
            if (CurrentDate.getDate() === date.getDate() && CurrentDate.getMonth() === date.getMonth() && CurrentDate.getFullYear() === date.getFullYear()) 
            {
                if (lastDate !== date.getDate()) {
                    console.log(lastDate);
                    console.log(date.getDate());
                    rows.push(<DateComponent className="time" Title="Last 24 hours" key={date} />);
                }
                posts.push(container[i]);
                if (nextDate!== date.getDate() ) {
                    rows.push(<PostContainer posts={posts} key={container[i].id} />);
                    posts = [];
                } 
            }else
            {
                if (lastDate !== date.getDate()) {
                    rows.push(<DateComponent className="time" Title={date} key={date} />);
                }
                posts.push(container[i]);
                if (nextDate !== date.getDate() ) {
                    rows.push(<PostContainer posts={posts} key={container[i].id}/>);
                    posts = [];
                } 
            }
            lastDate = date.getDate() ;
        }
    return rows ;
}