import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Create Context
const ApiContext = createContext();

// Custom Hook to Use Context
export const useApi = () => useContext(ApiContext);

// Provider Component
export const ApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // Create Axios Instance
  const axiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Axios Interceptors for Requests
  axiosInstance.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  // Axios Interceptors for Responses
  axiosInstance.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      console.error('API Error:', error.response || error.message);
      return Promise.reject(error.response || error.message);
    }
  );

  // Reusable API Methods
  const get = async (url, config) => axiosInstance.get(url, config);
  const post = async (url, data, config) => axiosInstance.post(url, data, config);
  const put = async (url, data, config) => axiosInstance.put(url, data, config);
  const del = async (url, config) => axiosInstance.delete(url, config);

  return (
    <ApiContext.Provider value={{ get, post, put, del, loading }}>
      {children}
    </ApiContext.Provider>
  );
};
