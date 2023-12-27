import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/submittedData.css'; 

const SubmittedData = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    
    document.title = 'Submitted Data'; // name the tab

    // hit the get api to fetch submitted forms data
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('https://evo-survey-website.onrender.com/get-submissions');
        console.log(response);
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="submission-list-container">
      <h2>Survey Form Submissions</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission._id}>
              <td>{submission.name}</td>
              <td>{submission.gender}</td>
              <td>{submission.nationality}</td>
              <td>{submission.email}</td>
              <td>{submission.phone}</td>
              <td>{submission.address}</td>
              <td>{submission.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedData;
