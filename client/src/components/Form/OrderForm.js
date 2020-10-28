import React from 'react';
import './OrderForm.scss';

const OrderForm = () => {
    return (
        <div className='order-form__container' id='order-form'>
            <div className='order-form__left'>
                <p>Just a few details and we will be in touch with you.</p>
            </div>
            {/* <div className='order-form__vertical'></div> */}
            <div className='order-form__right'>
                    <form>
                        <h1>Please complete details below</h1>
                        <div>
                            <label htmlFor='full-name'>
                                Full Name:
                            </label>
                            <input type='text' id='full-name' name='full-name' placeholder='Enter full name'/>

                        </div>

                        <div>
                            <label htmlFor='email'>
                                Email:
                            </label>
                            <input type='text' id='email' name='Email' placeholder='Enter email'/>
                        </div>

                        <div>
                            <label htmlFor='address'>
                                Address:
                            </label> 
                            <input type='text' id='address' name='Address' placeholder='Enter Address'/>
                        </div>

                        <div>
                            <label htmlFor='address'>
                                Date expected to receive:
                            </label> 
                            <input type='text' id='address' name='Address' placeholder='Date Expected'/>
                        </div>
                            <button type='submit' value='Submit'>Submit</button>
                    </form>
            </div>
        </div>
    )
};

export default OrderForm;