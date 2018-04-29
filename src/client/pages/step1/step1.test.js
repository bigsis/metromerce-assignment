import React from 'react';
import { mount } from 'enzyme';
import Step1 from './step1';
import toJson from 'enzyme-to-json';
import { mockInput } from './mock';

describe('Step1 page', () => {
  it('should be defined', () => {
    expect(Step1).toBeDefined();
  });

  it('should match snapshot when format json', () => {
    const wrapper = mount(<Step1 />, { attachTo: document.body });
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setState({ input: JSON.stringify(mockInput) });
    wrapper.find('Button').simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
