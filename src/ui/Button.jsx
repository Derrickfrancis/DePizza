import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const baseStyles =
    'inlineblock text-sm rounded-full bg-yellow-300  font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-yellow-200 disabled:text-stone-400 ';

  const typeStyles = {
    primary: baseStyles + 'px-4 py-3 sm:py-4 md:px-6',
    small: baseStyles + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: baseStyles + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block rounded-full border border-stone-300 bg-transparent font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:border-stone-200 disabled:text-stone-400 px-4 py-3 md:py-4 md:px-6 hover:text-stone-800 text-sm',
  };
  if (to)
    return (
      <Link to={to} className={typeStyles[type]} disabled={disabled}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        className={typeStyles[type]}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button className={typeStyles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
