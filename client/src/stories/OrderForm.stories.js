import React from 'react';
// import { action } from '@storybook/addon-actions'
import OrderForm from '../components/Form/OrderForm';
import '../components/Form/OrderForm.scss';
export default {
  title: 'OrderForm',
  component: OrderForm
};

export const getValueFromInputFields = () => {
  return (
    <OrderForm action='clicked'/>
  )
}

