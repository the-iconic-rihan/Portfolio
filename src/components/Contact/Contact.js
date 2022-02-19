import React, { useRef } from 'react'
import './contact.css'
import EditMail from '../../img/EditMail.png';
import UserLocation from '../../img/UserLocation.png'
import IncomingCall from '../../img/IncomingCall.png';
const Contact = () => {
    const formRef = useRef()
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={IncomingCall} alt="" className="c-icon" />&nbsp;
                            +91- 4579123696
                        </div>
                        <div className="c-info-item">
                            <img src={UserLocation} alt="Address not available" className="c-icon" />&nbsp;
                            22B Baker's Street, Old London, London, U.K.
                        </div>
                        <div className="c-info-item">
                            <img src={EditMail} alt="Email not available" className="c-icon" />&nbsp;
                            rihanbagwan12@hgmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What is your Story?</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam!
                    </p>
                    <form class="row g-3 needs-validation" novalidate ref={formRef} onSubmit={handleSubmit}>
                        <div class="col-md-4">
                            <label for="validationCustom01" class="form-label">First name</label><br />
                            <input type="text" class="form-control" id="validationCustom01" value="Mark" placeholder='First Name' name="user_name" required className="input" />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom02" class="form-label">Last name</label><br />
                            <input type="text" class="form-control" id="validationCustom02" value="Otto" placeholder='Last name' name='Surname' className="input" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label><br />
                            <input type="email" class="form-control" name='email' id="exampleFormControlInput1" placeholder="name@example.com" className="input" />
                        </div>
                        <div class="mb-2">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='message' name='message'></textarea>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-success" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;