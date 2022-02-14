import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactForm extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-message-area mb-120 mb--100">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<h4 className="title-2">Get A Quote</h4>
						<form id="contact-form" >
						<div className="row">
							<div className="col-md-6">
							<div className="input-item input-item-name ltn__custom-icon">
								<input type="text" name="name" placeholder="Enter your name" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item input-item-email ltn__custom-icon">
								<input type="email" name="email" placeholder="Enter email address" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item">
								<select className="nice-select">
								<option>Select Service Type</option>
								<option>Property Management </option>
								<option>Mortgage Service </option>
								<option>Consulting Service</option>
								<option>Home Buying</option>
								<option>Home Selling</option>
								<option>Escrow Services</option>
								</select>
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item input-item-phone ltn__custom-icon">
								<input type="text" name="phone" placeholder="Enter phone number" />
							</div>
							</div>
						</div>
						<div className="input-item input-item-textarea ltn__custom-icon">
							<textarea name="message" placeholder="Enter message" defaultValue={""} />
						</div>
						<p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p>
						<div className="btn-wrapper mt-0">
							<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">get a free service</button>
						</div>
						<p className="form-messege mb-0 mt-20" />
						</form>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ContactForm