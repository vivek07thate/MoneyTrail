import React, { useRef, useState } from 'react';
import LoadingPage from './LoadingPage';

const Button = ({ styles }) => {
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setUploadSuccess(true);
    }, 2000);
  };

  return (
    <div>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Analysis Transactions'}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {uploadSuccess && <LoadingPage />}
    </div>
  );
};

export default Button;
