// @ts-check

// Higher Order Component (HOC) - A component (HOC) that renders anothr component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p> the info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  const isAdmin = (showMessage) => (
    showMessage && <p>Please do not share this infomation it is private</p>
  )
  return (props) => (
    <div>
      {isAdmin(props.isAdmin)}
      <WrappedComponent {...props} />
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  const hasLoggedIn = (props) => (
    props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in to see the info</p>
  );

  return (props) => (
    <div>
      {hasLoggedIn(props)}
    </div>
  )
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="my information" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="my information" />, document.getElementById('app'))