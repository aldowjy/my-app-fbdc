import React from "react";

const Status = (props) => {
    return <div>Hi, {props.isAuthenticated ? props.name : ""}</div>;
}

export default Status;