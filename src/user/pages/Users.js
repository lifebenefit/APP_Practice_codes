import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{
        id: "u1",
        name : 'Max schwartz',
        image : 'https://image.fmkorea.com/files/attach/new/20171104/486616/155548/825707403/c1d17e9b6d79bb902a331d6a3dd622cc.jpeg',
        places : 3
    }];

    return <UsersList items={USERS} />;
    // return <h2>User Works!</h2>
};

export default Users;
