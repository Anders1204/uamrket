import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(null); // State to manage user authentication

  const items = [
    { id: 1, title: 'Item 1', description: 'This is item 1', price: 100 },
    // ...
  ];

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div className="app-container">
      {user ? (
        <div>
          <h1>Welcome, {user}!</h1>
          <ItemForm />
          <ItemList items={items} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;