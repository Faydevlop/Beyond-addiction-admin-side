import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ReportCard = ({ report }) => {
    const openGoogleMaps = () => {
      const url = `https://www.google.com/maps/search/?api=1&query=${report.latitude},${report.longitude}`;
      window.open(url, '_blank');
    };
  
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
        <div className="relative h-48">
          <img 
            src={"https://static.vecteezy.com/system/resources/previews/010/801/642/non_2x/aerial-clean-top-view-of-the-night-time-city-map-with-street-and-river-001-vector.jpg"} 
            alt={`Location of ${report.issue}`} 
            className="w-full h-full object-cover"
          />
          {report.hasProof && (
            <span 
              className="absolute top-2 right-2 bg-teal-500 text-white rounded-full p-1 shadow-lg" 
              title="Proof Available"
            >
              📷
            </span>
          )}
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-[#008080] mb-2">{report.issue}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{report.description}</p>
  
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Suspect Details</h4>
            <p className="text-gray-600">
              <span className="font-semibold">suspect name:</span> {report.suspectname || 'Not Available'}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">suspect mobile:</span> {report.suspectMobile || 'Not Available'}
            </p>
          </div>
  
          <button 
            onClick={openGoogleMaps}
            className="w-full bg-[#008080] rounded-lg text-white py-2 px-4 mt-4 hover:bg-teal-700 transition duration-200 shadow-md"
          >
            Track Location
          </button>
        </div>
      </div>
    );
  };
  


const ReportContent = () => {

    const [reports, setReports] = useState([]); // Initialize state with an empty array
    const [loading, setLoading] = useState(false); // For loading state
    const [error, setError] = useState(null); // For error handling
  
    const getAllReports = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset any previous error
  
      try {
        const response = await axios.get('https://beyond.fayisnambiyath.in/api/report/getAllReports');

        setReports(response.data.reports); // Update state with fetched data
        console.log(response);
        
        
      } catch (err) {
        setError(err.message || 'Something went wrong'); // Handle error
      } finally {
        setLoading(false); // Stop loading
      }
    };
  
    useEffect(() => {
      getAllReports(); // Fetch reports on component mount
    }, []);
  

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-[#008080]">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportContent;

