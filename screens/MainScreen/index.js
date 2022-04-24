import React from 'react';
import TopView from '../../components/TopView';
import {UseCountContext} from '../../ContextAPI/countContextProvider';

export default function MainScreen() {
  const countContext = UseCountContext();
  console.log(countContext);
  return (
    <>
      <TopView />
    </>
  );
}
