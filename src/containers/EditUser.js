import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {editUser} from '../actions/editUser';
import {connect} from 'react-redux';

class EditUser extends Component {
    constructor(props) {
        
        super(props);
        const { id }= this.props.match.params; //get url id for edit
        console.log(this.props);
       // console.log(this.props.users);
        let curUser = [];
        this.props.users.data.forEach((user) => {
            if (user._id === id) {
                //console.log(user.fname);
                curUser = user;
                return;
            }
        })
        //console.log(curUser);

        this.state = {fname: curUser.fname, lname: curUser.lname, sex:curUser.sex, age: curUser.age, pwd: curUser.pwd, repwd: curUser.repwd,
                      error:{fname: '', lname:'', pwd:'', repwd:''},
                      showError:{fname: false, lname: false, pwd: false, repwd: false}}
    }
  
    handleFnameChange = (event) => {
      this.setState({fname: event.target.value});
    }

    handleFnameOnBlur = (event) => {
        this.setState({showError: {...this.state.showError, fname: true}});
      }
  
    handleLnameChange = (event) => {
      this.setState({lname: event.target.value});
    }

    handleLnameOnBlur = (event) => {
        this.setState({showError: {...this.state.showError, lname: true}});
      }

    handleSexChange = (event) => {
        this.setState({sex: event.target.value});
      }

      handleAgeChange = (event) => {
        this.setState({age: event.target.value});
      }
  
      handlePwdChange = (event) => {
        this.setState({pwd: event.target.value});
      }

      handlePwdOnBlur = (event) => {
        this.setState({showError: {...this.state.showError, pwd: true}});
      }

      handleRepwdChange = (event) => {
        this.setState({repwd: event.target.value});
      }

      handleRepwdOnBlur = (event) => {
        this.setState({showError: {...this.state.showError, repwd: true}});
      }

     handleSubmit = e => {
        e.preventDefault();
        this.props.editUser(this.props.match.params.id, this.state.fname, this.state.lname, this.state.sex, this.state.age, this.state.pwd, this.state.repwd, this.props.history);
        this.setState({fname: '', lname: '', sex:'', age:'', pwd:'', repwd:''});
        //this.props.history.push('/1'); 
    }

    validateForm = () => {
        let {fname, lname, pwd, repwd, error, showError} = this.state;
        let isValid = true;
        error.fname = "";  //set to empty every time because validateForm will be teiggered every time state changed
        error.lname = "";
        error.pwd = "";
        error.repwd = "";
        if (fname.length === 0) {
          isValid = false;
          console.log(showError);
          if (showError.fname){
            error.fname = "can not be empty";
          } 
        }
        if (lname.length === 0) {
          isValid = false;
          if (showError.lname) {
            error.lname = "can not be empty";
          } 
        }
        if (pwd.length === 0 ) {
          isValid = false;
          if(showError.pwd) {
            error.pwd = "can not be empty"
          }
        }
        if (repwd !== pwd) {
          isValid = false;
          if (showError.repwd){
            error.repwd = "password is not match";
          }
         
         }
        return isValid;
    }

    render() {
      let isValid = this.validateForm();
      return (
                 <div >
                              <div >
                                 <div>
                                   <label htmlFor = 'fname'>First Name</label>
                                    <input type="text"  id = 'fname' value={this.state.fname} onChange={this.handleFnameChange}></input>
                                    <span>{this.state.error.fname}</span>
                                 </div>
                                 <div>
                                   <label htmlFor = 'lname'>Last Name </label>
                                    <input type="text"  id = 'lname' value={this.state.lname} onChange={this.handleLnameChange}></input>
                                    <span>{this.state.error.lname}</span>
                                 </div>
                                 <div>
                                   <label htmlFor = 'sex'>Sex</label>
                                    <input type="text"  id = 'sex' value={this.state.sex || ""} onChange={this.handleSexChange}></input>
                                 </div>
                                 <div>
                                   <label htmlFor = 'age'>Age</label>
                                    <input type="number"  id = 'age' value={this.state.age || ""} onChange={this.handleAgeChange}></input>
                                 </div>
                                 <div>
                                   <label htmlFor = 'pwd'>Password</label>
                                    <input type="password"  id = 'pwd' value={this.state.pwd} onChange={this.handlePwdChange}></input>
                                    <span>{this.state.error.pwd}</span>
                                 </div>
                                 <div>
                                   <label htmlFor = 'repwd'>Repeated Password</label>
                                    <input type="password"  id = 'repwd' value={this.state.repwd} onChange={this.handleRepwdChange}></input>
                                    <span>{this.state.error.repwd}</span>
                                 </div>
                                   <button disabled = {!isValid} onClick = {this.handleSubmit}>sumbit</button>
                                   <button><Link to = '/'>Cancel</Link></button>
                              </div> 
                </div>
          

      )
    }
  };


  const mapStateToProps = state => {
      return  {
          users : state.users
      }
  }



  const mapDispathchToProps = dispatch => {
      //console.log(dispatch);
      return {
          editUser: (_id, fname, lname, sex, age, pwd, repwd, history) => {
              dispatch(editUser(_id, fname, lname, sex,age, pwd, repwd, history))
          }
      }
  }

  
  //If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
  export default connect(mapStateToProps, mapDispathchToProps)(EditUser);
  

  