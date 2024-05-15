import React, { useState } from 'react';
import { Cog8ToothIcon } from '@heroicons/react/24/solid';
import ConvertForm from '../Forms/ConvertForm'; // Pastikan untuk mengimpor ConvertForm

const FloatingButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm); // Ini akan mengubah state showForm menjadi true atau false
  };

  return (
    <>
      <button
        className="fixed bottom-20 right-12 bg-white text-black p-2 rounded-full shadow-lg hover:bg-blue-200 transition duration-300 ease-in-out"
        onClick={handleClick}
      >
        <Cog8ToothIcon className="h-6 w-6" />
      </button>
      {showForm && <ConvertForm />} {/* Menampilkan atau menyembunyikan ConvertForm berdasarkan state showForm */}
    </>
  );
};

export default FloatingButton;
