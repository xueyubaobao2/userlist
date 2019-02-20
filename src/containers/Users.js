import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import {getUsers} from '../actions/users';
import {deleteUser} from '../actions/deleteUser';

import {aSort, dSort, search, pagination} from '../actions/index'
import UserRow from '../component/UserRow';

const pageSize = 5;
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};
        // if (this.props.match.params.id == null) {  //if home page redirect to page 1
        //     this.props.history.push('./1')   
               
        // }
    }

    componentDidMount() {
       //const {dispatch} = this.props;
       //console.log(this.props);
        //dispatch(getUsers);
        const {getUsers} = this.props;
        console.log(this.props);
        console.log(getUsers);
        console.log("call did mount");
        getUsers();
        // if (this.props.match.params.id == null) {  //if home page redirect to page 1
        //     this.props.history.push('./1')      
        // }
     }
     
     handleSearchChange = (event, pageNum) => {
        this.setState({search: event.target.value}, pageNum);
        this.props.search(event.target.value, pageNum);
        this.props.pagination(1);
        // this.props.history.push('./1')    //searching is global, redirect to page 1 to show searching data
        this.props.history.push('./') 
      }
      

     handlePagination = (pageNum) => {
         this.props.pagination(pageNum);
         //this.props.getUsers();
     }

    maxPageNum = (dataSize) => {
         let pageNum = dataSize / pageSize;
         return Math.ceil(pageNum);
       
    }
     render() {     
        console.log(this.props);
        const {users} = this.props;
        console.log(users);
        //console.log(users.showData);
        console.log(users.search);
        console.log(this.props.match.params.id);
        let {id} = this.props.match.params;
        console.log(id);
        let usersUI;
        if (users.isLoading) {
        usersUI = <p>Loading</p>
        }
        else if (users.error !== '') {
            usersUI = <p style={{ color: 'red' }}>{users.error}</p>
        }
        else if (users.data.length !== 0) {  
            let maxPageNum  
            let pageNumIterate= [];
            if (this.props.users.isSearch) {
                maxPageNum = this.maxPageNum(users.search.length);
            }
            else {
                maxPageNum = this.maxPageNum(users.data.length);
            }
            console.log(maxPageNum);
            for (let i = 1; i <= maxPageNum; i++) {
                pageNumIterate.push(i);
            }
            console.log(pageNumIterate);
            console.log(users.data);
            console.log(this.props.pages);
            let {page} = this.props.pages;
            console.log(page);
            usersUI = (
             <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>First Name {this.props.users.aSort? <button onClick = {()=> {this.props.aSort(this.props.match.params.id)}}>⬆</button> : <button  onClick = {()=> {this.props.dSort(this.props.match.params.id)}}>⬇</button>}</th>
                        <th>Last Name</th>
                        <th>Sex</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* {!this.props.users.isSearch? 
                          users.data.slice((id - 1) * pageSize, id * pageSize).map(user => {  
                            return  <UserRow key = {user._id} _id = {user._id} user = {user} delete = {() => {this.props.deleteUser(user._id)}} deleteUser = {this.props.deleteUser}></UserRow>
                         })
                          :users.search.slice((id - 1) * pageSize, id * pageSize).map(user => {   
                            console.log(users.search);
                            return <UserRow key = {user._id} _id = {user._id} user = {user} delete = {() => {this.props.deleteUser(user._id)}} deleteUser = {this.props.deleteUser}></UserRow>
                        })} */}
                        {!this.props.users.isSearch? 
                          users.data.slice((page - 1) * pageSize, page * pageSize).map(user => {  
                            return  <UserRow key = {user._id} _id = {user._id} user = {user} delete = {() => {this.props.deleteUser(user._id)}} deleteUser = {this.props.deleteUser}></UserRow>
                         })
                          :users.search.slice((page - 1) * pageSize, page * pageSize).map(user => {   
                            console.log(users.search);
                            return <UserRow key = {user._id} _id = {user._id} user = {user} delete = {() => {this.props.deleteUser(user._id)}} deleteUser = {this.props.deleteUser}></UserRow>
                        })}
                    </tbody>
                </Table>
                <div style = {{marginLeft: '30px'}}>
                       {pageNumIterate.map((ele) => {     
                            //  return <Link  key = {ele} to={`${ele}`}>{` ${ele}`}</Link>
                            return <button key = {ele} onClick = {() => {this.handlePagination(ele)}}>{ele}</button>
                            
                         }) }
                       
                 </div>
              </div>
            )
        }
        return (
            <div>
                <h2>Users</h2>
                <div>
                <label htmlFor = 'search'>search</label>
                <input type = 'text' id = 'search' value = {this.state.search} onChange = {this.handleSearchChange} ></input>
                </div>
                {usersUI} 
                <div>
                    <br></br>
                   <Button variant="primary"><Link to = '/addUser' style= {{color: 'white'}}>Add User</Link></Button>
                </div>
            </div>
        );
     }
};



const mapStateToProps = state => {
    //console.log(state.users);
    return {
        users: state.users,
        pages: state.pagination
    }
}

const mapDispatchToProps = dispatch => {
    return {
       getUsers: () => {dispatch(getUsers())},
       aSort:  (pageNum) => {dispatch(aSort(pageNum))},
       dSort: (pageNum) => {dispatch(dSort(pageNum))},
       deleteUser: (_id) => {dispatch(deleteUser(_id))},
       search: (keywords,pageNum) => {dispatch(search(keywords, pageNum))},
       pagination : (pageNum) => {dispatch(pagination(pageNum))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);