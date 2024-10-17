import React, { useState } from 'react';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState(''); // State for status messages
  const [isError, setIsError] = useState(false); // State for error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatusMessage(response.data.message || 'Message sent successfully!');
      setIsError(false);
      // Clear form
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatusMessage(error.response?.data.message || 'Error sending message');
      setIsError(true);
    }
  };

  return (
    <div className="py-2 px-4 mx-auto max-w-screen-md"> 
      <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900"> 
        Contact Us 
      </h2> 
      <p className="mb-4 font-light text-gray-500 sm:text-xl text-center"> 
        Got an issue? Want to send feedback? Let us know. 
      </p> 
      <form onSubmit={handleSubmit} className='mb-10'> 
        <div className="flex flex-row"> 
          <div className="w-1/2 pr-2 "> 
            <label htmlFor="firstName" className="block my-2 text-left text-sm font-medium text-gray-900"> 
              First Name 
            </label> 
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              placeholder="Enter First Name"
              required 
            /> 
          </div> 
          <div className="w-1/2 pl-2"> 
            <label htmlFor="lastName" className="block my-2 text-left text-sm font-medium text-gray-900"> 
              Last Name 
            </label> 
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Last Name"
              required 
            /> 
          </div> 
        </div> 
        <div> 
          <label htmlFor="email" className="block my-2 text-left text-sm font-medium text-gray-900"> 
            Your email 
          </label> 
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
            placeholder="abc@gmail.com" 
            required 
          /> 
        </div> 
        <div> 
          <label htmlFor="subject" className="block my-2 text-left text-sm font-medium text-gray-900"> 
            Subject 
          </label> 
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
            placeholder="What issue/suggestion do you have?" 
            required 
          /> 
        </div> 
        <div> 
          <label htmlFor="message" className="block my-2 text-left text-sm font-medium text-gray-900"> 
            Your message 
          </label> 
          <textarea 
            rows="6" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" 
            placeholder="Query/Suggestion..." 
            required 
          /> 
        </div> 
        <button type="submit" className="mt-2 p-2 float-right text-white rounded-lg border-red-500 bg-red-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"> 
          Send message 
        </button> 
      </form>
      
      {/* Status Message Display */}
      {statusMessage && (
        <div className={`mt-4 p-2 text-center ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {statusMessage}
        </div>
      )}
    </div> 
  );
}

export default ContactUs;
