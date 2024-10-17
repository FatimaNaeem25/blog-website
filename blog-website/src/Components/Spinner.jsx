// Spinner.js
import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
            <Circles
                height={80}
                width={80}
                color="#ef4444"
                ariaLabel="loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Spinner;
