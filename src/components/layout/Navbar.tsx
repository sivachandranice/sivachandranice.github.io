
import React from 'react';

const Navbar = () => {
  console.log('Navbar component rendering...');
  return (
    <nav className="bg-dark-bg text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">Portfolio</h1>
      </div>
    </nav>
  );
};

export default Navbar;
