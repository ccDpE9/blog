'use strict';

import React from 'react';
import { expect } from 'chai';
import { shallow, mount,render } from 'enzyme';
import Contact from '../Contact';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Contact />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Contact component form', () => {

  it('has a form component, and it has only two children', () => {
    expect(wrapped.find('.contact-form').length).toEqual(1);
    expect(wrapped.find('.contact-form')).to.have.descendant('input');
    expect(wrapped.find('.contact-form')).to.have.descendant('input');
  });

  // --- FORM
  
  it('has a email, textarea and button elements', () => {
    expect(wrapped.find('input').length).toEqual(1);
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('user can type in a input area', () => {
    wrapped.find('input').simulate('change', {
      target: { value: 'test@example.com' };
    });
  });

  it('user can type in a text area', () => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'Some text for testing purpose.' }
    });
  });

  it('submiting a form clears input and textarea fields', () => {
    // @TODO
  });


  // --- @TODO: VALIDATION

  it('invalid email address disables submit button and returns a proper error to the user', () => {
  });

  it('empty email field disables submit button and returns a proper error to the user', () => {
  });

  it('empty message field disables submit button and returns a propr error to the user', () => {
  });


  // --- @TODO: RECAPTCHA

  // --- REACT 
  
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    wrapped.find('.submit').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Contact.prototype, 'componentDidMount');
    expect(Contact.prototype.componentDidMount).to.have.property('callCount', 1);
    Contact.prototype.componentDidMount.restore();
  });

});
