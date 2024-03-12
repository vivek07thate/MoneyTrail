import React from "react";

const Services = () => {
  return (
    <div style={servicesContainerStyle}>
      <h1 style={servicesHeadingStyle}>Our Services</h1>
      <ul style={servicesListStyle}>
        <li style={serviceItemStyle1}>Service 1</li>
        <li style={serviceItemStyle2}>Service 2</li>
        <li style={serviceItemStyle3}>Service 3</li>
      </ul>
    </div>
  );
};



const servicesContainerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "40px"
};

const servicesHeadingStyle = {
  fontSize: "24px",
  textAlign: "center",
  marginBottom: "20px"
};

const servicesListStyle = {
  listStyle: "none",
  padding: "0"
};

const serviceItemStyle1 = {
  padding: "20px",
  marginBottom: "10px",
  borderRadius: "8px",
  color: "#fff",
  fontWeight: "bold",
  background: "linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)"
};

const serviceItemStyle2 = {
  padding: "20px",
  marginBottom: "10px",
  borderRadius: "8px",
  color: "#fff",
  fontWeight: "bold",
  background: "linear-gradient(-168.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)"
};

const serviceItemStyle3 = {
  padding: "20px",
  marginBottom: "10px",
  borderRadius: "8px",
  color: "#fff",
  fontWeight: "bold",
  background: "linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101d 95.11%)"
};
export default Services;