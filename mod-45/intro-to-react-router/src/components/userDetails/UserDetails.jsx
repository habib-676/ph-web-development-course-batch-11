import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {name , website }=user;
    return (
        <div>
            <h3>User details here</h3>
            <h4>Name : {name}</h4>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDetails;