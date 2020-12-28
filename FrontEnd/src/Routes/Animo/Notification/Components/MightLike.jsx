
import React , {useEffect , useState} from 'react';
import Post from '../../Home_page/Components/MainContainer/Components/PostContainer/Components/post';
import axios from 'axios';

const MightLike = () => {
    const [post , setData] = useState();
    const [loading , setLoad] = useState(true);
    useEffect(()=>{
        axios.get('/posts/productId=5fdb9720f1218318c4ca5445',{withCredentials : true})
            .then(res => {
                setData(res.data);
                setLoad(false);
                console.log(res.data);
            }).catch(err => console.log(err));
    },[])
    return ( 
        <div className="MightLike">
            <div className="Top">
                <span>You might like this </span>
            </div>
            {!loading&&(<Post key={post._id} post={post} />)}
            <div className="Bottom">
                <span>Show more ! </span>
            </div>
        </div>
    );
}
 
export default MightLike;