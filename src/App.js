import React from 'react';
import { FaCcVisa } from 'react-icons/fa';
import './App.css';
import image from './download.jpeg'
import visa from './Visa_Inc._logo.svg.png'
import hamburger from './hamburger.svg'
import arrow from './arrow.svg'
import check from './check.svg'

function App() {
  const styles = {
    favoritesContainer: {
      display: 'flex',
      marginLeft: '15px',
      marginTop: '10px',
   
    },
    favoriteCircle: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      border: '2px solid white',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'lightgrey', 
      marginLeft: -15, 
    },
    addIcon: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      border: '2px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -15,
      backgroundColor: '#f0f0f0',
    },
    addIconCircle: {
      position: 'absolute',
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: '2px dashed #333',
    },
    addIconPlus: {
      position: 'absolute',
      fontSize: 18,
      color: '#333',
      fontWeight: 'bold',
    },
  };
  
  return (
    <div className="mobile-app">
      {/* Top Purple Header Section */}
      <header className="header">
        <div className='menudesgn'>
          <div className='arrowback' >
            <img src={arrow} />
          </div>
          <div className='ham'>
            <img src={hamburger} />
          </div>
        </div>
        <h2>Total Balance</h2>
        <h1>$12,698</h1>
      </header>

      {/* White Content Section */}
      <div className="content">
        {/* Card Selection Section */}
        <section className="card-section">
          <h3>Choose card</h3>
          <div className="cards">
            <div className="card pink-card">
              <div className='checking'>
                <div>
                {Array(2).fill().map((i, _) => (
                  // <div key={i} className="avatar" />
                  <img src={check} className="avatar" />
                ))}
                </div>
                <div className='image234'>
                  <img src={check} alt='' />
                </div>
              </div>


              <div>
                <p>Balance</p>
                <h2>$8,567</h2>
              </div>
            </div>
            <div className="card white-card">
              {/* <FaCcVisa size={32} />*/}
              <img src={visa} alt="VISA" className="visa-logo" />
              <p>Balance</p>
              <h2>$4,131</h2>
            </div>
          </div>
        </section>

       <div className='favouritesss'>        
        <h3>Favorites</h3>
        <div style={styles.favoritesContainer}>    
      <div style={{ ...styles.favoriteCircle, backgroundImage: `url(${image})` }}></div>
      <div style={{ ...styles.favoriteCircle, backgroundImage: `url(${image})` }}></div>
      <div style={{ ...styles.favoriteCircle, backgroundImage: `url(${image})` }}></div>
      <div style={{ ...styles.favoriteCircle, backgroundImage: `url(${image})`}}></div>


      {/* Add Icon with Broken Circle */}
      <div style={styles.addIcon}>
      <div style={{...styles.addIcon, zIndex: 0, left: 40}}>
        <span style={styles.addIconCircle}></span>
        <span style={styles.addIconPlus}>+</span>
      </div>
      </div>
    </div>
    </div>



        {/* Selected Section */}
        {/* <section className="selected-section">
          <div className="selected-user">
            <div className="selected-avatar"></div>
            <div className="selected-details">
              <p className="selected-name">Bella Campbell</p>
              <p className="selected-amount">$589</p>
            </div>
          </div>

         
          <button className="send-button">Send</button>
        </section> */}
        <section className='sections'>
          <h3>Selected</h3>
          <div className='section001'>
            <p>Bella Campbell</p>
            <img src={image} alt='' />
          </div>
        </section>
        <div className='buttonss'>
          <button className='button1'>$589</button>
          <button className='button2'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
