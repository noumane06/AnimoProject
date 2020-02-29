import {observable , action , computed} from 'mobx';

 class postsStore
 {
      @observable posts =[
      {
        id : 44 ,
        usrPost : "noumane agouzil",
        usrImg : "https://img1.looper.com/img/gallery/the-social-network-screenwriter-aaron-sorkin-says-there-should-be-a-sequel/intro-1547327354.jpg",
        img : 'https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2019/12/1140-puppy-sad.jpg' ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 4 ,
        postType : "Selling offer",
        price : 180 ,
        localisation : "casablanca"
      },
      {
        id : 84 ,
        usrPost : "noumane agouzil",
        usrImg : "https://img1.looper.com/img/gallery/the-social-network-screenwriter-aaron-sorkin-says-there-should-be-a-sequel/intro-1547327354.jpg",
        img : 'https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2019/12/1140-puppy-sad.jpg' ,
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