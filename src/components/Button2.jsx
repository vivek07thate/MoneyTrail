import React from "react";
// import "../components/"; // Import the CSS file for styling

const Button2 = ({ onClick, styles }) => {
  const handleButtonClick = () => {
    // Display a pop-up window
    const popupWindow = window.open("", "MoneyTrailPopup", "width=400,height=300");

    // Write content to the pop-up window
    popupWindow.document.write("<p>Money Trail Pop-Up Content</p>");

    // Execute the provided onClick function if it exists
    onClick && onClick();
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none money-trail-button ${styles}`}
      onClick={handleButtonClick}
    >
      Track Your Money!
    </button>
  );
};


export default Button2;


