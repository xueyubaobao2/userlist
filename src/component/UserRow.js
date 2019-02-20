import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const UserRow = props => {
    const url = '/editUser/' + props._id;
    return (
        <tr>
            <td><button><Link to = {url}>Edit</Link></button></td>
            <td><Button variant="primary" onClick = {props.delete}>Delete</Button></td>
            <td>{props.user.fname}</td>
            <td>{props.user.lname}</td>
            <td>{props.user.sex}</td>
            <td>{props.user.age}</td>
        </tr>
    )
}

export default UserRow;