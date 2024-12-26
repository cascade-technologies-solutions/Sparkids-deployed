import React from 'react';
import { Link } from "react-router-dom";
//import Header from '../components/Header';
//import Footer from '../components/Footer';

import Sight from '../components/sight';
export const Insight = () => {
    return (
      <div>
        <p
          style={{textAlign: 'left', fontSize: '24px',fontFamily: 'Geologica',color: '#455a64',marginBottom:'-115px',padding:'0 150px',}}>
          <a href="/" style={{textDecoration: 'none',color: '#455a64',margin:'0 5px',}}
          > Home </a>|<span><Link
              to="/insight"style={{color: '#f58634',textDecoration: 'none',}}
            > Insight
            </Link>
          </span>
        </p>

      
        <Sight />
      </div>
    );
  };
  
  export default Insight;