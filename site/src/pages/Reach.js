import React from 'react'

const Reach = () => {
    return (
        <div className='reach-main'>
            <div className='reach-container'>
                <div className='r-left'>
                    <div className='l-text'>
                        <h2>Contact Us</h2>
                        <h5>Have questions or suggestions? Drop us a message!</h5>
                    </div>
                    <div className='l-form'>
                        <div className='input'>
                            <h5>Name:</h5>
                            <input type='text'/>
                        </div>
                        <div className='input'>
                            <h5>Email:</h5>
                            <input type='email'/>
                        </div>
                        <div className='input'>
                            <h5>Message:</h5>
                            <textarea/>
                        </div>
                        <button className='send-btn'>Send Message</button>
                    </div>
                </div>
                <div className='r-right'>

                </div>
            </div>
        </div>
    );
}

export default Reach;