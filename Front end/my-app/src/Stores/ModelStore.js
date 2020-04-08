import {observable  , computed} from 'mobx';

 class postsStore
 {
      @observable posts =[
      {
        id : 1 ,
        usrPost : "Noumane agouzil ",
        usrImg : "https://img1.looper.com/img/gallery/the-social-network-screenwriter-aaron-sorkin-says-there-should-be-a-sequel/intro-1547327354.jpg",
        img : 'https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2019/12/1140-puppy-sad.jpg' ,
        title : "Labrador for sell" ,
        descr : "Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans",
        stars : 4 ,
        postType : "Selling offer",
        price : 180 ,
        localisation : "casablanca",
        date : 'Thu Apr 02 2020 09:35:52 GMT+0100 (GMT+01:00)',
        animalsInfo : {
          Name : "cat" ,
          Age : "6 months",
          Species : "Cat",
          Race : "Siamoa" , 
          Medical_History : "No medical records"
        }
      },
      {
        id : 2 ,
        usrPost : "Mark zuckerberg",
        usrImg : "https://about.fb.com/wp-content/uploads/2019/01/mz.jpg",
        img : 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg' ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 4 ,
        postType : "Selling offer",
        price : 180 ,
        localisation : "casablanca",
        date: 'Wed Apr 01 2020 09:35:52 GMT+0100 (GMT+01:00)',
        animalsInfo: {
          Name: "cat",
          Age: "6 months",
          Species: "Cat",
          Race: "Siamoa",
          Medical_History: "No medical records"
        }
      },
      {
        id : 3 ,
        usrPost : "arthur fleck",
        usrImg : "https://image.tmdb.org/t/p/original/ugMwak0OmtGHVeKmxIwUqjal1R5.jpg",
        img : 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg' ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 4 ,
        postType : "Selling offer",
        price : 160 ,
        localisation : "casablanca",
        date: 'Mon Mar 02 2020 19:55:07 GMT+0100 (GMT+01:00)',
        animalsInfo: {
          Name: "cat",
          Age: "6 months",
          Species: "Cat",
          Race: "Siamoa",
          Medical_History: "No medical records"
        }
      },
      {
        id : 4 ,
        usrPost : "Bruce wayne",
        usrImg : "https://vignette.wikia.nocookie.net/thedarkknighttrilogy/images/9/96/Bruce_Wayne.jpg",
        img : 'https://parade.com/wp-content/uploads/2018/03/golden-puppy-life-national-geographic-ftr.jpg' ,
        title : "Labrador for sell" ,
        descr : "description test for fetching from stores",
        stars : 3 ,
        postType : "Selling offer",
        price : 150 ,
        localisation : "casablanca",
        date: 'Sun Mar 01 2020 16:04:33 GMT+0100 (GMT+01:00)',
        animalsInfo: {
          Name: "cat",
          Age: "6 months",
          Species: "Cat",
          Race: "Siamoa",
          Medical_History: "No medical records"
        }
      }
    ];
      @computed get PostsCounter()
      {
        return this.posts.length ;
      }
 }

 const store = new postsStore();
 export default store ;