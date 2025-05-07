import React, { useState } from 'react';
const SearchRedirect = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      redirectToBooking();
    }
  };

  const redirectToBooking = () => {
    const city = searchTerm.trim().toLowerCase();
    const url = `https://www.booking.com/city/in/${city}.en.html?aid=306395;label=${city}-5kXNn6yP6zmEYP0zmaWeCAS392865643339:pl:ta:p1360:p2:ac:ap:neg:fi:tikwd-1572069144:lp9147123:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c;ws=&gad_source=1&gclid=Cj0KCQjwqv2_BhC0ARIsAFb5Ac-qwgIogJSf_T5jk-JsFTc00UejyzV-sX2gz9MlYbyU7pytD-j4e2EaAi-xEALw_wcB`;

    window.location.href = url;
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a city "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        className="search-input"
      />
      <button
        onClick={redirectToBooking}
        className="search-button"
      >
        GO
      </button>
    </div>
  );
};

export default SearchRedirect;
