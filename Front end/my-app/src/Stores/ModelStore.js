import {observable , action , computed} from 'mobx';

 class postsStore
 {
      @observable posts =[
      {
        id : 44 ,
        usrPost : "noumane agouzil",
        img : "test" ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 4 ,
        postType : "Selling offer",
        price : 180 ,
        localisation : "casablanca"
      }
    ];
      @computed get PostsCounter()
      {
        return this.posts.length ;
      }
 }

 const store = new postsStore();
 export default store ;