// src/components/ConversionForm.js
import React, { useState } from 'react';
import DMStoDDForm from './DMStoDDForm';
import DDtoDMSForm from './DDtoDMSForm';

const ConversionForm = () => {
  const [activeTab, setActiveTab] = useState('DMS to DD');

  const convertFrom = (formType) => {
    setActiveTab(formType);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-900 p-4 rounded-lg shadow-xl text-white">
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
