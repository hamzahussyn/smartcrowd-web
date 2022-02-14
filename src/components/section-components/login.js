import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Login extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__login-area pb-65">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area text-center">
						<h1 className="section-title">Sign In <br />To  Your Account</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
						Sit aliquid,  Non distinctio vel iste.</p>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
					<div className="account-login-inner">
						<form  method="GET" className="ltn__form-box contact-form-box">
						<input type="text" name="email" placeholder="Email*" />
						<input type="password" name="password" placeholder="Password*" />
						<div className="btn-wrapper mt-0">
							<button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
						</div>
						<div className="go-to-btn mt-20">
							<a href="#"><small>FORGOTTEN YOUR PASSWORD?</small></a>
						</div>
						</form>
					</div>
					</div>
					<div className="col-lg-6">
					<div className="account-create text-center pt-50">
						<h4>DON'T HAVE AN ACCOUNT?</h4>
						<p>Add items to your wishlistget personalised recommendations <br />
						check out more quickly track your orders register</p>
						<div className="btn-wrapper go-top">
							<Link to="/register" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default Login