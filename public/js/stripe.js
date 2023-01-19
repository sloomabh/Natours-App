/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const Stripe = require('stripe');

const stripe = Stripe(
  'pk_test_51MQtyRI7qINSjC3mpZ2BST3c3emuTWoirjjuH6DRtoVP75y5LR4fOVmz0FIMbQTilhZKrj4bfDCIg6FrmMdSUNS300KH5p4hDA'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    // await stripe.redirectToCheckout({
    //  sessionId: session.data.session.id
    // });
    window.location.replace(session.data.session.url);
  } catch (err) {
    showAlert('error', err);
    console.log(err);
    showAlert('Error getting that request. Please try again', err);
  }
};
