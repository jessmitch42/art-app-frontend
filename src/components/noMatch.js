import React from "react";

const NoMatch = ({ location }) => (
  <div className="wrapper">
    <h3>
      Uh oh! No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default NoMatch;
