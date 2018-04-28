import React from 'react';
import { mount } from 'enzyme';
import Step1 from './step1';
import toJson from 'enzyme-to-json';

const mockInput = {
  0: [
    {
      id: 10,
      title: 'House',
      level: 0,
      children: [],
      parent_id: null
    }
  ],
  1: [
    {
      id: 12,
      title: 'Red Roof',
      level: 1,
      children: [],
      parent_id: 10
    },
    {
      id: 18,
      title: 'Blue Roof',
      level: 1,
      children: [],
      parent_id: 10
    },
    {
      id: 13,
      title: 'Wall',
      level: 1,
      children: [],
      parent_id: 10
    }
  ],
  2: [
    {
      id: 17,
      title: 'Blue Window',
      level: 2,
      children: [],
      parent_id: 12
    },
    {
      id: 16,
      title: 'Door',
      level: 2,
      children: [],
      parent_id: 13
    },
    {
      id: 15,
      title: 'Red Window',
      level: 2,
      children: [],
      parent_id: 12
    }
  ]
};

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
