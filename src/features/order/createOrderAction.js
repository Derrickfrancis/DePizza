import { redirect } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import store from '../../store';
import { clearCart } from '../cart/cartSlice';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };
  // console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Phone enter a correct phone number we might need it to contact you ';

  if (Object.keys(errors).length > 0) return errors;

  // Everythng is okay create new order

  store.dispatch(clearCart());

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
