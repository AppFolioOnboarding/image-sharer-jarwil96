import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';
import Footer from './Footer';
/* Put your components here: Flash Message, Form, Footer */
class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div>
        <Header title={'Tell us what you think'} />
        <Footer />
      </div>
    )
  }
}

export default inject(
  'stores'
)(App);
