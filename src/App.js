import React from 'react';
import Header from './Header';

const App = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Peter', 'Jack', 'Ashwin'];
    const num = Math.floor(Math.random() * 3);
    return names[num];
  };

  return (
    <>
      <Header />
      <p>Welcome to the world {handleNameChange()}</p>
      <p>{`5 + 6 : ${5 + 6}`}</p>
      <p>Array : {[1, 2, 3]}</p>
    </>
  );
};

export default App;
