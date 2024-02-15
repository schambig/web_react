import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications () {
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        onClick={() => {console.log('Close button has been clicked')}}
        style={{
          float: 'right',
          height: '25px',
          width: '25px',
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
        }}>
        <img src={close_icon} style={{height: '20px', width: '20px'}} alt="Close"/>
      </button>          
      <p><strong>Here is the list of notifications</strong></p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={getLatestNotification()}></li>
      </ul>
    </div>
  );
}

export { Notifications };
