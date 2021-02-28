import React from 'react';
import './App.css';
import ModalInput from './Components/ChildComponents/ModalInput';
import {Link as Li} from 'react-scroll';
function App () {
    return (                
      <>
      <div className='navbar'>
      <Li
                activeClass='active'
                to='MovieCard'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='link'
                >MovieCard</Li>
                <Li
                activeClass='active'
                to='AddMovie'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='link'
                >AddMovie</Li>
      </div>
      <div className="App">
      <ModalInput/>
      </div>
      </>
    );
  }

export default App;
