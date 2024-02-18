// import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react'; // Import React if you're using JSX
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test Utils', () => {
  it('Tests that getFullYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  it('Validates the result of getFooterCopy with true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('Validates the result of getFooterCopy with false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  it('Checks returned string for getLatestNotification', () => {
    const wrapper = shallow(<div dangerouslySetInnerHTML={getLatestNotification()} />);
    expect(wrapper.html()).toBe('<div><strong>Urgent requirement</strong> - complete by EOD</div>');
  });
});
