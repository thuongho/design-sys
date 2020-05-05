import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from './Link';

/** A straightforward link wrapper that renders an <a> with the passed props. What we are testing here is that the Link component passes the right props to the wrapper and itselfs
 */
// eslint-disable-next-line jsx-a11y/anchor-has-content
const LinkWrapper = (props) => <a {...props} />;

it('has a href attribute when rendering with linkWrapper', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Link href='https://google.com' LinkWrapper={LinkWrapper}>
      Link Text
    </Link>,
    div
  );

  expect(div.querySelector('a[href="https://google.com"]')).not.toBeNull();
  expect(div.textContent).toEqual('Link Text');

  ReactDOM.unmountComponentAtNode(div);
});
