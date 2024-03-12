// UploadPopup.js
import React from "react";

const UploadPopup = ({ onClose }) => (
  <div className="upload-popup">
    <p>Upload Successful!</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default UploadPopup;
