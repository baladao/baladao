import React from 'react';
import About from './about.jsx';
import Header from './header.jsx';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <About { ...this.props } />
      </div>
    );
  }
};

export default Home;
