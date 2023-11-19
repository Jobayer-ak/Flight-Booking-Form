/* eslint-disable react/no-unescaped-entities */

import FlightBook from './components/FlightBook';
import Header from './components/Header';
import PreviewBookingList from './components/PreviewBookingList';

function App() {
  return (
    <div>
      <Header/>
      <FlightBook />
      <div className='my-12'>

      </div>
      <PreviewBookingList/>
    </div>
  );
}

export default App;
