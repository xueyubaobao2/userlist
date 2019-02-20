import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import addUser from '../actions/addUser';
import {connect} from 'react-redux';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {fname : '', lname: '', sex:'', age: '', pwd:'', repwd: '', 
                       error:{fname: '', lname:'', pwd:'', repwd:''},
                       showError:{fname: false, lname: false, pwd: false, repwd: false} //check if onBlur is triggered and start to show error     
                      };
        //console.log(this.props.handleclick);
        //console.log(this.props.content);
  
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
        //e.preventDefault();
        this.props.addUser(this.state.fname, this.state.lname, this.state.sex, this.state.age, this.state.pwd, this.state.repwd,this.props.history);
       // console.log('trigger');
        // this.props.history.push('/1');   //redirect to somepage
        //this.setState({fname: '', lname: '', sex:'', age:'', pwd: '', repwd: ''});
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
                                    <input type="text"  id = 'fname' value={this.state.fname} onChange={this.handleFnameChange} onBlur={this.handleFnameOnBlur}></input>
                                    <span>{this.state.error.fname}</span>
                                    <p></p>
                                 </div>
                                 <div>
                                   <label htmlFor = 'lname'>Last Name </label>
                                    <input type="text"  id = 'lname' value={this.state.lname} onChange={this.handleLnameChange} onBlur={this.handleLnameOnBlur}></input>
                                    <span>{this.state.error.lname}</span>
                                 </div>
                                 <div>
                                   <label htmlFor = 'sex'>Sex</label>
                                    <input type="text"  id = 'sex' value={this.state.sex} onChange={this.handleSexChange}></input>
                                 </div>
                                 <div>
                                   <label htmlFor = 'age'>Age</label>
                                    <input type="number"  id = 'age' value={this.state.age} onChange={this.handleAgeChange}></input>
                                 </div>
                                 <div>
                                   <label htmlFor = 'pwd'>Password</label>
                                    <input type="password"  id = 'pwd' value={this.state.pwd} onChange={this.handlePwdChange} onBlur={this.handlePwdOnBlur}></input>
                                    <span>{this.state.error.pwd}</span>
                                 </div>
                                 <div>
                                   <label htmlFor = 'repwd'>Repeated Password</label>
                                    <input type="password"  id = 'repwd' value={this.state.repwd} onChange={this.handleRepwdChange} onBlur={this.handleRepwdOnBlur}></input>
                                    <span>{this.state.error.repwd}</span>
                                 </div>
                                   <button disabled = {!isValid} onClick = {this.handleSubmit}>Submit</button>
                                   <button><Link to = './'>Cancel</Link></button>
                              </div> 
                </div>
          
      )
    }
  };

  const mapDispathchToProps = dispatch => {
      //console.log(dispatch);
      return {
          addUser: (fname, lname, sex, age, pwd, repwd, history) => {
              dispatch(addUser(fname,lname,sex,age, pwd, repwd, history))
          }
      }
  }

  
  //If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
  export default connect(null, mapDispathchToProps)(AddUser);
  