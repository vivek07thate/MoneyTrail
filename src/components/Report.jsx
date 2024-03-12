
import React, { useState } from 'react';
import { FcComboChart, FcDoughnutChart, FcPieChart, FcAreaChart, FcLineChart, FcBarChart } from 'react-icons/fc';
import Footer from './Footer';

const Report = ({ selectedIcon }) => { 
  const [activeSection, setActiveSection] = useState(0);

  const handleToggleSection = (index) => {
    setActiveSection(index);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row">
        {/* Left side with icons */}
        <div className="flex flex-col md:flex-row md:mr-8">
          {/* Render icons */}
          <div className="flex flex-wrap md:flex-col">
            <FcComboChart
              title="Consolidated Report"
              className="icon mb-4 md:mr-4"
              size={80} // Increase size
              onClick={() => handleToggleSection(0)}
            />
            <FcDoughnutChart
              title="Anomaly Distribution"
              className="icon mb-4 md:mr-4"
              size={80} // Increase size
              onClick={() => handleToggleSection(1)}
            />
            <FcPieChart
              title="Balance Fluctuations"
              className="icon mb-4 md:mr-4"
              size={80} // Increase size
              onClick={() => handleToggleSection(2)}
            />
            <FcAreaChart
              title="Anomaly Trail"
              className="icon mb-4 md:mr-4"
              size={80} // Increase size
              onClick={() => handleToggleSection(3)}
            />
            <FcLineChart
              title="Suspicious Transaction"
              className="icon mb-4 md:mr-4"
              size={80} // Increase size
              onClick={() => handleToggleSection(4)}
            />
            <FcBarChart
              title="Anomaly In Data"
              className="icon md:mr-4"
              size={80} // Increase size
              onClick={() => handleToggleSection(5)}
            />
          </div>
        </div>

        {/* Right side with report content */}
        <div className="bg-gray-100 p-8 rounded-lg flex-grow">
          <h1 className="text-3xl font-bold mb-4">Report</h1>

          {/* Navigation buttons for report sections */}
          <div className="flex flex-wrap mb-4">
            {[...Array(6)].map((_, index) => (
              <button
                key={index}
                className={`mr-4 mb-4 px-4 py-2 rounded focus:outline-none ${
                  activeSection === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => handleToggleSection(index)}
              >
                Section {index + 1}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          
          
            {activeSection === 2 && (
              <section className="rep3">
                <div className="container2">
                  <div>
                    <h2>Your anomaly in Data</h2>
                    <iframe
                      src="/assets/pie.html"
                      width="500"
                      height="400"
                      title="Your anomaly in Data"
                    ></iframe>
                    <p className="text-base">Your anomaly data will be displayed here.</p>
                    <p className="text-base">
                      The pie chart exhibits the distribution of anomaly
                      transactions, categorized under various segments. Normal
                      transactions form the largest portion, adhering to the
                      expected pattern. However, anomalies are dispersed across
                      distinct categories, each representing specific deviations
                      from the norm. Analyzing these categorized outliers is
                      paramount, as they can significantly influence
                      transaction analysis and modeling outcomes.
                    </p>
                  </div>
                </div>
              </section>
            )}
            {activeSection === 3 && (
              <section className="rep4">
                <div className="container2">
                  <div>
                    <h2>Anomaly distribution</h2>
                    <iframe src="/assets/pie2.html" width="500" height="400" title="Anomaly distribution"></iframe>
                    <p className="text-base">Your anomaly data will be displayed here.</p>
                    <p className="text-base">The pie chart exhibits the distribution of anomaly transactions, 
                      categorized under various segments. Anomalies are dispersed across distinct categories,
                      each representing specific deviations from the norm. Largest count of the Anomaly form the largest portion, 
                      adhering to the expected pattern. Analyzing these categorized outliers is paramount,
                      as they can significantly influence transaction analysis and modeling outcomes.</p>
                  </div>
                </div>
              </section>
            )}
            {activeSection === 4 && (
              <section className="rep5">
                <div>
                  <h2>Balance Chart</h2>
                  <iframe
                    src="/assets/balance_chart.html"
                    width="500"
                    height="400"
                    title="Balance Chart"
                  ></iframe>
                  <p className="text-base">Your anomaly data will be displayed here.</p>
                  <p className="text-base">The balance chart displays the fluctuation in account balances over a specified period. 
                    By visualizing balance changes, you can identify trends, irregularities, or anomalies in the account activity.
                    This visualization aids in understanding the financial health of the account and detecting any unusual behavior
                    that may require further investigation.</p>
                </div>
              </section>
            )}
            {activeSection === 5 && (
              <section className="rep6">
                <div>
                  <h2>Transaction Statistics</h2>
                  <iframe
                    src="/assets/transactions_statistics.html"
                    width="1000"
                    height="400"
                    title="Transaction Statistics"
                    className="wide-iframe"
                    allowFullScreen
                  ></iframe>
                  <p className="text-base">Your anomaly data will be displayed here.</p>
                  <p className="text-base">Transaction statistics provide valuable insights into the overall
                    performance and behavior of financial transactions within a specified period.
                    By analyzing transaction volume, frequency, and other relevant metrics, you can
                    identify patterns, trends, and potential anomalies that may require further investigation
                    or action.</p>
                </div>
              </section>
            )}
          </div>

        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Report;
