import React from 'react';
import '../App/App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

const App = () => {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <hr />
        <Login />
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default App;
