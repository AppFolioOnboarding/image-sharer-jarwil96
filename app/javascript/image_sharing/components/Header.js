import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const title = this.props.title;
    return (
      <div>
        <Row>
          <Col lg={{ size: 4, offset: 4 }}>
            <h3 className='text-center'>
              {title}
            </h3>
          </Col>
        </Row>
      </div>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> afe3ae04a0c2bced0053d93ea781d4d31b354b6a
  }
}

export default Header;
