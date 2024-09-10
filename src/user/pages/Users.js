import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    // DB 대신 여기서 값 대입 [ 원래는 DB 에서 읽어와야 함 ]
    const USERS = [{
        id: "u1",
        name : 'Max schwartz',
        image : 'https://image.fmkorea.com/files/attach/new/20171104/486616/155548/825707403/c1d17e9b6d79bb902a331d6a3dd622cc.jpeg',
        places : 3
    }];

    // USER 가 없는 경우 일 때,
    // const USERS = [];

    return <UsersList items={USERS} />;
    // return <h2>User Works!</h2>
};

export default Users;
