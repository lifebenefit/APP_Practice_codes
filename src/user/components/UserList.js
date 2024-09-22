import React from "react";

import UserItem from "./UserItem";
import './UserItem.css'

const UserList = props => {
    if (props.items.length == 0) {
        return (
            <div className="center">
                <h2>등록된 User 없음</h2>
            </div>
        );
    } else {
        return (
            <ul>
                {props.items.map(user => {
                    return <UserItem />;
                })}
            </ul>
        );
    };
};

export default UserList;