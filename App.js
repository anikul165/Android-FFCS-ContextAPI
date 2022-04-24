import React from 'react';
import MainScreen from './screens/MainScreen';
import CountContextProvider from './ContextAPI/countContextProvider';

export default function App() {
  return (
    <CountContextProvider>
      <MainScreen />
    </CountContextProvider>
  );
}
