import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="placeholder:stone-400 focus:ring-opacity-50 w-20 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 focus:w-72 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
