import React from 'react';
import './styles/app.scss';
import Header from './components/Header';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <main className="main-container">
      <Header />
      <SignUp />
    </main>
  );
};

export default App;
