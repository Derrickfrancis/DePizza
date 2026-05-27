import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isIncCart = currentQuantity > 0;

  function handelAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-50 grayscale' : ''} rounded-md object-cover`}
      />
      <div className="flex grow flex-col pt-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="font-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}
          {isIncCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />{' '}
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isIncCart && (
            <Button type="small" onClick={handelAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
