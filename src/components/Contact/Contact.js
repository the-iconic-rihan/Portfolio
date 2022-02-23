import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../Context';
import { useContext } from 'react';
import EditMail from '../../img/EditMail.png';
import UserLocation from '../../img/UserLocation.png'
import IncomingCall from '../../img/IncomingCall.png';
const Contact = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const formRef = useRef()
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()  //the funtion to avoid refresing of page after clicking onSubmit button.

        emailjs.sendForm('rihanbagwan64@gmail.com', 'template_u2o33ie', formRef.current, 'user_Oiw43kVj4lTFJ6YUoghcd')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                    <form class="row  needs-validation" novalidate ref={formRef} onSubmit={handleSubmit}>
                        <div class="col-md">
                            <label for="validationCustom01" class="form-label">First name</label>
                            <input style={{ backgroundColor: darkMode && "#333" }} type="text" className="form-control input" id="validationCustom01" placeholder='First Name' name="user_name" required  />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md">
                            <label for="validationCustom02" class="form-label">Last name</label>
                            <input style={{ backgroundColor: darkMode && "#333" }} type="text" className="form-control input" id="validationCustom02" placeholder='Last name' name='Surname'  required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input style={{ backgroundColor: darkMode && "#333" }} type="email" className="form-control input" name='email' id="exampleFormControlInput1" placeholder="name@example.com"  />
                        </div>
                        <div class="mb-2">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea style={{ backgroundColor: darkMode && "#333" }} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='message' name='message'></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-success" type="submit">Submit</button>

                        </div>
                        {done && "Thank you ..."}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;