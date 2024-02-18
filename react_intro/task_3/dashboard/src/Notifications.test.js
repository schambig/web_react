import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import { getLatestNotification } from './utils';

describe('<Notifications /> Component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('ul').find('li');
    expect(listItems.length).toBe(3);
  });

  it('Renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();
    expect(text).toBe('Here is the list of notifications');
  });

  it('Renders the latest notification from utils', () => {
    const wrapper = shallow(<Notifications />);
    const latestNotificationElement = wrapper.find('li').at(2);
    expect(latestNotificationElement.prop('dangerouslySetInnerHTML')).toEqual({ __html: getLatestNotification() });
  });
});
