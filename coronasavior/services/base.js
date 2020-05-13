import axios from 'axios';
import React from 'react';
import { AsyncStorage } from 'react-native';

const base = axios.create({
  baseURL: 'http://coronasavior.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  }
});

base.interceptors.request.use(async (config) => {
  const res = await AsyncStorage.getItem('access');
  config.headers = {
    'Authorization': `Bearer ${res}`
  };
  return config;
});

export default base;