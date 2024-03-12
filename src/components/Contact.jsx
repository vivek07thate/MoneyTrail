import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleMessageSend = () => {
    if (!name || !email || !messageText) {
      setError("Please fill in all fields.");
      return;
    }

    // Additional logic to send the message
    setMessage("Your message has been sent successfully!");
    clearFields();
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setMessageText("");
    setError("");
  };

  return (
    <div className="mt-8 text-center">
      <p className="font-poppins text-lg text-gray-400">If you have any queries, feel free to ask!</p>
      <div className="container mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col bg-gray-800 p-6 rounded-lg">
            <h2 className="font-poppins text-white text-2xl mb-4">Contact Information</h2>
            <div className="flex flex-col justify-center h-full">
              <p className="mb-2 text-center"><strong className="text-yellow-400">Address:</strong> Datta Meghe College of Engineering, Navi Mumbai-400708</p>
              <p className="mb-2 text-center"><strong className="text-yellow-400">Phone:</strong> +919370588220, +917087941377</p>
              <p className="mb-2 text-center"><strong className="text-yellow-400">Email:</strong> Kubernetra@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col bg-gray-800 p-6 rounded-lg">
            <h2 className="font-poppins text-white text-2xl mb-4">Send us a Message</h2>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-4 bg-transparent border-b-2 border-yellow-400 text-white py-2 px-3 focus:outline-none" />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 bg-transparent border-b-2 border-yellow-400 text-white py-2 px-3 focus:outline-none" />
            <textarea placeholder="Your Message" rows="5" value={messageText} onChange={(e) => setMessageText(e.target.value)} className="mb-4 bg-transparent border-2 border-yellow-400 text-white py-2 px-3 focus:outline-none"></textarea>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button onClick={handleMessageSend} className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-opacity-90">Send</button>
            {message && <p className="text-yellow-400 mt-2">{message}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;


