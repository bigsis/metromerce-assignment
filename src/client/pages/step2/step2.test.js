import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import fetchMock from 'fetch-mock';
import Step2 from './step2';
import { mockRepo } from './mock';

fetchMock.get('*', mockRepo);
describe('Step2 page', () => {
  it('should be defined', () => {
    expect(Step2).toBeDefined();
  });

  it('should match snapshot when format json', () => {
    const wrapper = mount(<Step2 />, { attachTo: document.body });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
