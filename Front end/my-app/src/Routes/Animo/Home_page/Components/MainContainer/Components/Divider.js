import React from 'react';
import PostContainer from './PostContainer';
import DateComponent from './DateComponent';

export default function Divider(postsStore) {
        
        var rows = [];
        var posts = [];
        let CurrentDate = new Date().getDate() ;
        let lastDate = null ;
        var container = postsStore.posts ;
        
        for (let i = 0; i < container.length; i++) {
            let nextDate = null ;
            if (container[i+1] !== undefined) {
                nextDate = new Date(container[i+1].date);
                nextDate = nextDate.getDate();
            }

            let date = new Date(container[i].date);
            if (CurrentDate === date.getDate() ) {
                if (lastDate !== date.getDate()) {
                    rows.push(<DateComponent className="time" Title="Last 24 hours" key={container[i].id} />);
                }
                posts.push(container[i]);
                if (nextDate!== date.getDate() ) {
                    rows.push(<PostContainer posts={posts}/>);
                    posts = [];
                } 
            }else
            {
                if (lastDate !== date.getDate()) {
                    rows.push(<DateComponent className="time" Title={date} key={container[i].id} />);
                }
                posts.push(container[i]);
                if (nextDate !== date.getDate() ) {
                    rows.push(<PostContainer posts={posts}/>);
                    posts = [];
                } 
            }
            lastDate = date.getDate() ;
        }
    return rows ;
}