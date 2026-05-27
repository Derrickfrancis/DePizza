import DeleteItem from './DeleteItem';
import { formatCurrency } from '../../utils/helpers';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQunatity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li
      key={pizzaId}
      className="py-3 sm:flex sm:items-center sm:justify-between"
    >
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="mt-1 flex items-center justify-between sm:mt-0 sm:gap-4">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQunatity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
