import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Feed extends Component {

  render() {

    const x = this.props.stores.feedbackStore.name
    const pStyle = {
      textAlign: 'center'
    };


    return (
      <div>
        <form>
          <p  style={pStyle}>
            First name: <br/>
            <input
              type="text"
              name="name"
              value={this.props.stores.feedbackStore.name}
              onChange={e => this.props.stores.feedbackStore.setName(e.target.value)}
            /> <br/>
            Comments: <br/>
            <input
              type="text"
              name="comments"
              value={this.props.stores.feedbackStore.comment}
              onChange={e => this.props.stores.feedbackStore.setComment(e.target.value)}
            /> <br/>  <br/>
            <input type="submit" value="submit"/>
            {x}
          </p>
        </form>
      </div>

    );


  }
}

export default Feed;
