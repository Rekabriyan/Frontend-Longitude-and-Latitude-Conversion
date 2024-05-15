// src/components/ConversionForm.js
import React, { useState } from 'react';
import DMStoDDForm from './DMStoDDForm';
import DDtoDMSForm from './DDtoDMSForm';

const ConversionForm = () => {
  const [activeTab, setActiveTab] = useState('DMS to DD');
  const [isPopupVisible, setIsPopupVisible] = useState(true); // State baru untuk visibilitas pop-up

  const convertFrom = (formType) => {
    setActiveTab(formType);
  };

  // Fungsi untuk menutup pop-up
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isPopupVisible ? '' : 'hidden'}`}>
      <div className="bg-gray-900 p-4 rounded-lg shadow-xl text-white relative"> {/* Tambahkan 'relative' untuk positioning */}
        {/* Tombol untuk menutup pop-up */}
        <button
          className="absolute top-2 right-5 text-white text-2xl p-2"
          onClick={closePopup}
        >
          ×
        </button>
        <div className='flex justify-center mb-4'>
          <button
            className={`px-4 py-2 transition-colors duration-300 ${activeTab === 'DMS to DD' ? 'border-b-4 border-emerald-500' : 'border-b-4 border-transparent'}`}
            onClick={() => convertFrom('DMS to DD')}
          >
            DMS to DD
          </button>
          <button
            className={`px-4 py-2 transition-colors duration-300 ${activeTab === 'DD to DMS' ? 'border-b-4 border-emerald-500' : 'border-b-4 border-transparent'}`}
            onClick={() => convertFrom('DD to DMS')}
          >
            DD to DMS
          </button>
        </div>
        <div className="transition-opacity duration-300">
          {activeTab === 'DMS to DD' ? <DMStoDDForm /> : <DDtoDMSForm />}
        </div>
      </div>
    </div>
  );
};

export default ConversionForm;
