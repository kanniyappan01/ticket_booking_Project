import React from 'react';
import './Navbar.css';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogin =()=>{
    navigate('/login')
  }
  return (
    <header>
        <div className='container'>
            <div className='navbar'>
                <img src={"https://cdn3.ticketnew.com/tn/tn_logo/tn-logo-01.svg"} width={"120px"} alt="logo"/>
                <div className='account_wraper' onClick={handleLogin}>
                    <PersonIcon className='login_icon'/>
                    <span>Sign Up</span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar