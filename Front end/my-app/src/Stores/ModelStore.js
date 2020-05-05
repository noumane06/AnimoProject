import {observable  , action , computed} from 'mobx';
import axios from "axios";

 class postsStore
 {
    
      @observable posts =[];
      @observable loading = true ;
      @action
      storingtoStores =  ()=>{
        return new Promise((resolve, reject) => {
          const url = "/posts";
          const token = window.localStorage.getItem("Tokens");
          axios.get(url, {
            headers: {
              'Authorization': `Basic ${token}`
            }
          }).then(res => {
            this.posts = res.data.posts;
            resolve(res.data.posts);
          }).then(() => setTimeout(()=>{
            this.loading = false;
          },1500))
          .catch(err => {
            reject(err);
          });
         })
        
      }
      @computed get
      loadingState (){
        return this.loading ;
      }
   async getPost(id) {
     const prom = await this.storingtoStores() ;
     const post = await prom.find(element => element._id === id);
     return post ;
   }
 }
 const store = new postsStore();
 export default store ;