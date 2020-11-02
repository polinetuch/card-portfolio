import React, { useState } from 'react';
import './PersonalDetails.scss';

const OrderForm = () => {
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        email: '',
        address: '',
        dateExpected: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserDetails({
            fullName: e.target.value,
            email: e.target.value,
            address: e.target.value,
            dateExpected: e.target.value
        })
        console.log(userDetails);
    };

    const handleChange = (e) => {
        setUserDetails({
            fullName: e.target.value,
            email: e.target.value,
            address: e.target.value,
            dateExpected: e.target.value
        })
    };

    return (
        <div className='order-form__container' id='order-form'>
            <div className='order-form__left'>
                <p>Just a few details and we will be in touch with you.</p>
            </div>

            <div className='order-form__right'>
            <form onSubmit={handleSubmit}>
                        <h1>Please complete details below</h1>
                        <div>
                            <label htmlFor='full-name'>
                                Full Name:
                                <input type='text' 
                                    id='full-name' 
                                    name='fullName' 
                                    placeholder='Enter full name'
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div>
                            <label htmlFor='email'>
                                Email:
                                <input 
                                    type='text' 
                                    id='email' 
                                    name='email' 
                                    placeholder='Enter email'
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div>
                            <label htmlFor='address'>
                                Address:
                            </label> 
                            <input 
                                type='text' 
                                id='address' 
                                name='address' 
                                placeholder='Enter Address'
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor='address'>
                                Date expected to receive:
                                <input 
                                    type='text' 
                                    id='address' 
                                    name='dateExpected'
                                    placeholder='Date Expected'
                                    onChange={handleChange}
                                />
                            </label> 
                        </div>
                        <button type='submit' value='submit'>Next</button>
                    </form>
            </div>
        </div>
    )
};

export default OrderForm;