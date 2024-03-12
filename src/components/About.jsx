import React from 'react';
import Footer from './Footer';
import { img001, img002, img003, img004, img005, img006, img007, img008, img009 } from '../assets';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
  };

  return (
    <motion.div className="container mx-auto px-4 py-2 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-9">
        <ContentCard image={img001} title="Simplifying Investigations" description="The platform aims to streamline the investigation process, making it easier for investigators to track and analyze financial data." />
        <ContentCard image={img002} title="Improving Accuracy" description="By using advanced analytics and AI-based models, the platform aims to improve the accuracy and reliability of financial crime investigations." />
        <ContentCard image={img003} title="Enhancing Transparency" description="The platform provides customizable dashboards and visualizations that promote transparency and help investigators make sense of complex financial data." />
        <ContentCard image={img004} title="Detecting Financial Crimes" description="The platform's capabilities in identifying suspicious patterns and behaviors can help investigators detect financial crimes and prevent them from happening in the future." />
        <ContentCard image={img005} title="Facilitating Collaboration" description="The platform provides a centralized platform for investigators from different agencies and departments to collaborate and share information, leading to better outcomes in investigations." />
        <ContentCard image={img006} title="Data Validation" description="Check that all data from the investigation period are available and no duplicate files are loaded. The trailing balances for each transaction and statement of the same account shall also be validated by Money Trail." />
        <ContentCard image={img007} title="Powerful Visualizations" description="Customizable dashboards and advanced link analysis help investigators make sense of data and discover hidden trends and patterns." />
        <ContentCard image={img008} title="Automated Reports" description="Detailed reports focused on identifying flow of funds, highlighting suspicious behaviors and discovering trends are automatically generated to help investigators find the needle in the haystack." />
        <ContentCard image={img009} title="Advanced Analytics" description="Money Trail AI based analytics models help extract entity names and transaction types from narrations, identify and resolve similar sounding names, find suspicious patterns like circular transactions and related party transactions." />
      </div>
      <Footer />
    </motion.div>
  );
};

const ContentCard = ({ image, title, description }) => {
  // Generate a random light color for the border
  const randomLightColor = () => {
    const r = Math.floor(Math.random() * 100) + 155; // Red component
    const g = Math.floor(Math.random() * 100) + 155; // Green component
    const b = Math.floor(Math.random() * 100) + 155; // Blue component
    return `rgb(${r}, ${g}, ${b})`;
  };
  const randomBoxShadowColor = () => {
    const r = Math.floor(Math.random() * 256); // Red component
    const g = Math.floor(Math.random() * 256); // Green component
    const b = Math.floor(Math.random() * 256); // Blue component
    return `rgb(${r}, ${g}, ${b})`;
  };
  return (
    <motion.div className="rounded-lg overflow-hidden shadow-md p-6"
      whileHover={{ scale: 1.05 }}
      style={{ border: `2px solid ${randomLightColor()}`,boxShadow: `0px 6px 6px 2px ${randomBoxShadowColor()}` }}
    >
      <img src={image} alt={title} className="w-32 h-30 mb-4 mx-auto rounded-full" />
      <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
      <p className="mb-6 text-center text-lg">{description}</p>
    </motion.div>
  );
};

export default About;
