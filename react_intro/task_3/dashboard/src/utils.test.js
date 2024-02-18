import { assert } from 'assert';
import { shallow } from 'enzyme';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test Utils', () => {

  it('Tests that getFullYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    assert.strictEqual(getFullYear(), currentYear);
  });

  it('Validates the result of getFooterCopy with true', () => {
    assert.strictEqual(getFooterCopy(true), 'Holberton School');
  });

  it('Validates the result of getFooterCopy with false', () => {
    assert.strictEqual(getFooterCopy(false), 'Holberton School main dashboard');
  });

  it('Checks returned string for getLatestNotification', () => {
    const wrapper = shallow(<div dangerouslySetInnerHTML={getLatestNotification()} />);
    assert.strictEqual(wrapper.html(), '<div><strong>Urgent requirement</strong> - complete by EOD</div>');
  });
});
