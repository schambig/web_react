import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Notifications } from './Notifications';

/* Create a root instance using `ReactDOM.createRoot()` then call `render()` on
that root instance to render the `<App />` Component.
This method is part of React's concurrent mode API, introduced in React 18.
It allows for more advanced features related to concurrent rendering and is intended
for more complex applications where fine-grained control over rendering is necessary.
 */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div className="root-notifications">
//       <Notifications />
//     </div>
//     <App />
//   </React.StrictMode>
// );

/* 
This is the traditional way of rendering a React application.
It uses `ReactDOM.render()` to render the root component `<App />` into the DOM element
with the id of 'root'.
The `<React.StrictMode>` component enables strict mode, which helps identify
potential problems in your code during development.
 */
ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
This directly renders the `<App />` component into the DOM element with the id of 'root'
using `ReactDOM.render()`.
It's a concise and common way to render a React application, especially for simpler applications
where strict mode or advanced features like concurrent mode are not needed.
 */
// ReactDOM.render(<App />, document.getElementById('root'));

// The three of them accomplish the same
