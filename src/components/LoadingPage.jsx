import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LoadingPage = ({ onClose, resultData }) => {
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false); 
  const loadingTexts = ['Uploading', 'Converting to CSV', 'Processing'];

  useEffect(() => {
    let interval;
    if (!uploadComplete) { 
      interval = setInterval(() => {
        setLoadingTextIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % loadingTexts.length;
          return nextIndex;
        });
      }, 2000); 
    }

    return () => clearInterval(interval);
  }, [uploadComplete, loadingTexts.length]);

  useEffect(() => {
    if (loadingTextIndex === loadingTexts.length - 1) {
      alert('Loading process completed');
      setUploadComplete(true); 
    }
  }, [loadingTextIndex]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center relative w-72">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <p className="text-xl font-bold mb-4 text-gray-800">
          {uploadComplete ? 'Upload complete' : loadingTexts[loadingTextIndex]}...
        </p>
        <div className="spinner-border text-primary mb-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        {!uploadComplete && loadingTextIndex === 0 && (
          <p className="text-sm text-gray-600 mt-2">File is being converted into CSV format</p>
        )}
        {uploadComplete && (
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800">Result:</p>
            <pre className="text-sm text-gray-600 overflow-auto max-h-48">{JSON.stringify(resultData, null, 2)}</pre>
            <Link to="/report" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Go to Report Page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;

