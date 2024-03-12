import React from "react";

const App = () => {
  const handleMoneyTrailClick = () => {
    // Handle money trail button click logic here
    alert("Viewing Money Trail");
  };

  return (
    <div>
      <MoneyTrailButton onClick={handleMoneyTrailClick} styles="custom-styles" />
    </div>
  );
};

export default App;
