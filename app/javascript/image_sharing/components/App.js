import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';
<<<<<<< HEAD
import Footer from './Footer';
/* Put your components here: Flash Message, Form, Footer */
=======
import Footer from "./Footer";

>>>>>>> afe3ae04a0c2bced0053d93ea781d4d31b354b6a
class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div>
        <Header title={'Tell us what you think'} />
<<<<<<< HEAD
        <Footer />
=======
        /* Put your components here: Flash Message, Form, Footer */
>>>>>>> afe3ae04a0c2bced0053d93ea781d4d31b354b6a
      </div>
    )
  }
}

export default inject(
  'stores'
)(App);
