import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('is footer present', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).equal('Copyright: AppFolio Inc. Onboarding');
  });
});

