import {observable  , action , computed} from 'mobx';
import axios from "axios";

 class postsStore
 {
    
      @observable posts =[];
      @observable count = 0 ;
      @observable loading = true ;
      @action
      storingtoStores =  ()=>{
        return new Promise((resolve, reject) => {
          this.loading = true ;
          const page = 1 ;
          const url = "/posts?page="+ page;
          const token = window.localStorage.getItem("Tokens");
          axios.get(url, {
            headers: {
              'Authorization': `Basic ${token}`
            }
          }).then(res => {
            this.count = res.data.count ;
            this.posts = res.data.posts;
            resolve(this.posts);
          }).then(() => this.loading = false)
          .catch(err => {
            reject(err);
          });
         })
        
      };
      @action 
      LoadMore = (pageGiven)=>{
        return new Promise((resolve, reject) => {
          this.loading = true ;
          const page = pageGiven  === undefined ? 1 : pageGiven ;
          const url = "/posts?page="+ page;
          const token = window.localStorage.getItem("Tokens");
          axios.get(url, {
            headers: {
              'Authorization': `Basic ${token}`
            }
          }).then(res => {
            res.data.posts.forEach(element => {
                this.posts.push(element);
            });
            resolve(this.posts);
          }).then(() => this.loading = false)
          .catch(err => {
            reject(err);
          });
         })
      }
      @computed get
      Allpostcount (){
        return this.count ;
      };
      @computed get
      loadingState (){
        return this.loading ;
      };
      @computed get 
      howmanyposts ()
      {
        return this.posts.length ;
      }
   async getPost(id) {
    //  const prom = await this.storingtoStores() ;
     const post = await this.posts.find(element => element._id === id);
     return post ;
   }
 }
 const store = new postsStore();
 export default store ;