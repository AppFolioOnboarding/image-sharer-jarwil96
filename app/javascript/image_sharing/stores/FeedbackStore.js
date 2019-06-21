import {observable, action} from 'mobx';


export class FeedbackStore {

  @observable name = 'name';
  @observable comment = 'comments';

  @action
  setName = (val) => {
    this.name = val;
  }

  @action setComment = (val) => {
    this.comment = val;
  }



}

export default FeedbackStore;
