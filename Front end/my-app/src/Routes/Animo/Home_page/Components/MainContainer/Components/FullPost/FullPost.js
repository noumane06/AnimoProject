// Modules import 

import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react'; 
import { Skeleton } from 'antd';
// internal files and components 
import './CSS/FullPost.scss';
import '../../CSS/skeletonStyle.scss'
import HeadContainer from './Components/HeadContainer';
import BodyContainer from './Components/BodyContainer/BodyContainer';
import FooterContainer from './Components/FooterContainer/FooterContainer';

// Begin ** 
const FullPost = inject(
    'postsStore'
)(
    observer(({ postsStore }) =>
        {
        const [post, setImage] = useState({});
        const [loading , setLoad] = useState(true);
        useEffect(() => {
            let id = window.location.href.split("/")
            const get = postsStore.getPost(id[4]);
            get.then(res => {
                setImage(res);
                setLoad(false);
            }).catch(err => console.log(err));
        },[])
        return(
            <div>
                <div className="FullPostContainer">
                    <Skeleton loading={loading} active avatar paragraph={{ rows: 0 }}>
                        <HeadContainer post={post}/>
                    </Skeleton>
                    <Skeleton loading={loading} active title={false} height="180px" paragraph={{ rows: 10 }}>
                        <BodyContainer post={post}/>
                        <FooterContainer post={post}/>
                    </Skeleton>
                </div>
            <div className="ReportContainer">
                    <svg className="report_icon" height="12pt" viewBox="0 0 512 512" width="12pt">
                        <path d="m512 256c0 68.109375-26.441406 132.210938-74.449219 180.5-47.980469 48.25-111.851562 75.058594-179.871093 75.488281-.167969 0-.351563.011719-.519532 0-.378906.011719-.769531.011719-1.160156.011719-68.371094 0-132.660156-26.621094-181.011719-74.980469-48.359375-48.347656-74.988281-112.640625-74.988281-181.019531s26.628906-132.660156 74.988281-181.019531c48.351563-48.351563 112.640625-74.980469 181.011719-74.980469.390625 0 .769531 0 1.160156.0117188.179688 0 .359375 0 .539063.0078124 68.011719.4414068 131.878906 27.2421878 179.851562 75.4921878 48.007813 48.289062 74.449219 112.386719 74.449219 180.488281zm0 0" fill="#D02120" />
                        <path d="m512 256c0 68.109375-26.441406 132.210938-74.449219 180.5-47.980469 48.25-111.851562 75.058594-179.871093 75.488281-.167969 0-.351563.011719-.519532 0v-511.9765622c.179688 0 .359375 0 .539063.0078124 68.011719.4414068 131.878906 27.2421878 179.851562 75.4921878 48.007813 48.289062 74.449219 112.386719 74.449219 180.488281zm0 0" fill="#D02120" />
                        <path d="m257.265625 107.804688c.417969-.007813-.363281 0 0 0zm0 0" />
                        <path d="m299.921875 150.460938v114.4375c0 23.523437-19.132813 42.660156-42.652344 42.660156h-.109375c-10.988281-.320313-22.332031-4.757813-30.058594-12.488282-8.050781-8.058593-12.492187-18.769531-12.492187-30.171874v-114.4375c0-23.261719 19.3125-41.992188 42.550781-42.660157h.109375c23.519531 0 42.652344 19.140625 42.652344 42.660157zm0 0" fill="#fff" />
                        <path d="m257.265625 307.5625c-.363281 0 .363281.007812 0 0zm0 0" />
                        <path d="m297.640625 361.640625c0 22.269531-18.109375 40.378906-40.378906 40.378906h-.101563c-22.210937-.050781-40.269531-18.140625-40.269531-40.378906 0-22.230469 18.058594-40.320313 40.269531-40.371094h.101563c22.269531 0 40.378906 18.109375 40.378906 40.371094zm0 0" fill="#fff" />
                        <g fill="#ddebf0">
                        <path d="m297.640625 361.640625c0 22.269531-18.109375 40.378906-40.378906 40.378906h-.101563v-80.75h.101563c22.269531 0 40.378906 18.109375 40.378906 40.371094zm0 0" />
                        <path d="m299.921875 150.460938v114.4375c0 23.523437-19.132813 42.660156-42.652344 42.660156h-.109375v-199.757813h.109375c23.519531 0 42.652344 19.140625 42.652344 42.660157zm0 0" />
                        </g>
                    </svg>
                    <span className="span">Report the post</span>
            </div>
            </div>
                
        );
        } 
    )
)

export default FullPost ;
