import React, { useState, useEffect } from 'react';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChangeInput = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChangeInput} />
    </form>
  );
}
