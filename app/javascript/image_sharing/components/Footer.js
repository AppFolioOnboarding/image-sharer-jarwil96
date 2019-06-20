import React, { Component } from 'react';

class Footer extends Component {
  /* Implement your Footer component here */
  render() {
    var message = 'Copyright: AppFolio Inc. Onboarding';
    const pStyle = {
      fontSize: '10px',
      textAlign: 'center'
    };


    return (
      <body>
      <div>
      <footer >
      <p style={pStyle}>{message}</p>
      </footer>
        </div>
      </body>
    );
  }
}





export default Footer;
