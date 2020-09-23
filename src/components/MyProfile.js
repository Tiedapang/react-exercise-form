import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './myProfile.less';

class MyProfile extends Component {
    state = {
        name : '',
        genders: ["Male","Female"],
        gender: 'Male',
        description: ''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit=(event)=>{
        console.info(this.state.name,this.state.gender,this.state.description)
    }
  render() {
    return (

      <form onSubmit={this.handleSubmit}>
          <div className={"title"}>
              <p>My Profile</p>
          </div>
          <div className={"form-group"}>
              <p htmlFor="exampleInputName1">Name</p>
              <input type={'text'} className="form-control" id="exampleInputName1" name={'name'} onChange={this.handleChange} value={this.state.name} placeholder={'Your name'}></input>
          </div>

            <div className="form-group">
                <p>Gender:</p>
                <select defaultValue={this.state.gender} onChange={this.handleChange} className={"form-control"}>
                    <option value ="Male">Male</option>
                    <option value ="Female">Female</option>
                </select>
            </div>
            <div className={'descriptionLabel'}>
                <p>Description</p>
                <textarea className="form-control" rows="3" name={'description'} onChange={this.handleChange} value={this.state.description} placeholder={'Description about yourself'}></textarea>
            </div>

          <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                      <label>
                          <input type="checkbox"/> <a>I have read the terms of conduct</a>
                      </label>
                  </div>
              </div>
          </div>

            <input  className="btn btn-primary" type={'submit'} value={'Submit'} disabled={!this.state.name||!this.state.gender||!this.state.description}></input>
      </form>
    );
  }
}

export default MyProfile;


