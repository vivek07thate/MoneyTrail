import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';

const Register = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [spinner, setSpinner] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = inputData;

    if (username === '') {
      toast.error('Enter Your Name');
    } else if (email === '') {
      toast.error('Enter Your Email');
    } else if (!email.includes('@')) {
      toast.error('Enter Valid Email');
    } else if (password === '') {
      toast.error('Enter Your Password');
    } else if (password.length < 6) {
      toast.error('Password length minimum 6 characters');
    } else {
      setSpinner(true);

      try {
        const response = await axios.post('http://localhost:4000/api/auth/register', inputData);

        if (response.status === 200) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate('/');
          }, 5000);
        } else {
          toast.error(response.data.error);
        }
      } catch (err) {
        if (err.response && err.response.status === 409) {
          toast.error(err.response.data);
        } else {
          console.log(err);
          toast.error('An error occurred while processing your request');
        }
      } finally {
        setSpinner(false);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-90">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
          <p className="text-center">
            We are glad that you will be using Project Cloud to manage your tasks! We hope that you will like it.
          </p>
          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter Your Email Address"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-12"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 py-2 bg-gray-200 text-gray-600 rounded-md"
                  onClick={() => setPassShow(!passhow)}
                >
                  Show
                </button>
              </div>
            </div>
            <button
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSubmit}
            >
              {spinner ? <Spinner animation="border" className="mr-2" /> : null}
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{' '}
            <NavLink to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Log in
            </NavLink>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
