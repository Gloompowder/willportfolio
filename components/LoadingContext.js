import React, { createContext, useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import Loading from '../components/Loading';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const handleStart = () => {
      // Show loading only on the first visit
      if (isFirstVisit) {
        setLoading(true);
      }
    };

    const handleComplete = () => {
      // Hide loading on every route change
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    // Set isFirstVisit to false after the first visit
    if (isFirstVisit) {
      setIsFirstVisit(false);
    }

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, [isFirstVisit]);

  return (
    <LoadingContext.Provider value={loading}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
