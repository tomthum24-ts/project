import React, { Component } from 'react'
import "./Login.css";
import { error } from 'jquery';
export class Login extends Component {
  constructor(){
    super();
    this.state={
      form :{
        email:'',
        password:''
      },
      error:{

      }
    }
  }
  //Check value input
  handleChangeValue= (e) => {
    const data= {...this.state.form};
    data[e.target.name]= e.target.value;
    this.setState({
      form:data
    });
  }
  //Submit Form
  handleSubmitValue =(e)=>{
    e.preventDefault();
    const {email,password}=this.state.form;
    const errors= {};
  // Validate form
    if(typeof email ==="string" && email.trim()===""){
      errors.email="Email không được để trống";
    }
    if(typeof password ==="string" && password.trim()===""){
      errors.password="Password không được để trống";
    }
    this.setState({
      errors:errors,
    });
  }
  render() {
    const {form,errors}= this.state;
    console.log(errors);
    return (
        <div>
        <div className="Header" style={{marginTop: '2em'}}></div>
        <div className="container" style={{boxShadow: 'gray 2px 2px 5px 1px', borderRadius: '10px'}}>
        <section className="vh-90" >
          
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form onSubmit={this.handleSubmitValue}>
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
    
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
    
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </div>
    
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>
    
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        name='email'
                        className={'form-control ${errors.email ? "is-valid": ""}'}
                        placeholder="Enter a valid email address"
                        onChange={this.handleChangeValue}
                      />
                   
                      <label className="form-label" >
                        Email address
                      </label>
                    </div>
    
                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        id="password"
                        name='password'
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        onChange={this.handleChangeValue}
                      />
                      <label className="form-label">
                        Password
                      </label>
                    </div>
    
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="Remember"
                          value=""
                          
                        />
                        <label className="form-check-label" htmlFor="Remember">
                          Remember me
                        </label>
                      </div>
                      <a href="#!" className="text-body">
                        Forgot password?
                      </a>
                    </div>
    
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                     
                      >
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <a href="#!" className="link-danger">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
       
          
        </section>
        </div>
        <div className="Bottom" style={{marginBottom: '2em'}}></div>
        </div>
    )
  }
}

export default Login