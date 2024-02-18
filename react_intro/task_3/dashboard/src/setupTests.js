// Enzyme is dead!!! use React Testing Library (RTL) instead
// https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
// Read the "PLEASE READ: ..." section
// https://www.udemy.com/course/react-testing-with-jest-and-enzyme/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879423894_._ad_535397245857_._kw__._de_c_._dm__._pl__._ti_aud-2281276439911%3Adsa-1007766171032_._li_9186209_._pd__._&matchtype=&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx0JK1Wg-4olNUBwg2WGYII0nuCmnHUbbFjeNioqoDCO8_sxLVOIWGBoCHWkQAvD_BwE&couponCode=2021PM25
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
