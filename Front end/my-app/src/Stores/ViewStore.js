import {observable  ,action , computed} from 'mobx';

 class ViewStore
 {
      @observable state ={ activeLink : ""};
      @action changeState = (state) =>
      {
        this.state.activeLink = state ;
      };
      @computed get statecounter()
      {
          return this.state.activeLink ;
      }
 }

 const store = new ViewStore();
 export default store ;