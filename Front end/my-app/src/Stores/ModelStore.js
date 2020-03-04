import {observable  , computed} from 'mobx';

 class postsStore
 {
      @observable posts =[
      {
        id : 1 ,
        usrPost : "noumane agouzil ",
        usrImg : "https://img1.looper.com/img/gallery/the-social-network-screenwriter-aaron-sorkin-says-there-should-be-a-sequel/intro-1547327354.jpg",
        img : 'https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2019/12/1140-puppy-sad.jpg' ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 4 ,
        postType : "Selling offer",
        price : 180 ,
        localisation : "casablanca",
        date : 'Wed Mar 04 2020 09:35:52 GMT+0100 (GMT+01:00)'
      },
      {
        id : 2 ,
        usrPost : "Marie allen",
        usrImg : "https://feweek.co.uk/wp-content/uploads/2019/12/Corrina-Hembury-profile-700px.jpg",
        img : 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg' ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 4 ,
        postType : "Selling offer",
        price : 180 ,
        localisation : "casablanca",
        date : 'Wed Mar 04 2020 09:35:52 GMT+0100 (GMT+01:00)'
      },
      {
        id : 3 ,
        usrPost : "arthur fleck",
        usrImg : "https://content.linkedin.com/content/dam/business/talent-solutions/global/en_us/blog/2019/07/linkedin-profile-summaries-hero-v2.jpg",
        img : 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg' ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 4 ,
        postType : "Selling offer",
        price : 160 ,
        localisation : "casablanca",
        date : 'Mon Mar 02 2020 19:55:07 GMT+0100 (GMT+01:00)'
      },
      {
        id : 4 ,
        usrPost : "Bruce wayne",
        usrImg : "https://cdn.pixabay.com/photo/2016/11/21/14/53/adult-1845814__340.jpg",
        img : 'https://parade.com/wp-content/uploads/2018/03/golden-puppy-life-national-geographic-ftr.jpg' ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 3 ,
        postType : "Selling offer",
        price : 150 ,
        localisation : "casablanca",
        date : 'Sun Mar 01 2020 16:04:33 GMT+0100 (GMT+01:00)'
      }
    ];
      @computed get PostsCounter()
      {
        return this.posts.length ;
      }
 }

 const store = new postsStore();
 export default store ;