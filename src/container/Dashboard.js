import React from "react";

export default function Dashboard(props) {
  return (
    <div className="Dashboard">
      <div>
        <h3>Username: {props.user.state.user.email}</h3>
        <p>Account Creation Date: {props.user.state.user.created_at}</p>
        <p>Last Updated: {props.user.state.user.updated_at}</p>
      </div>
      <div className="Dashboard__row"></div>
    </div>
  );
}
