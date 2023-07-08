import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./NavLink.css"
import SignupForm from './SignupForm';
const Home = () => {
  return (
    <div >
      <div style={{display:'flex'}}>
      <NavLink
        to="/counter/e1"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : 'inactive'
        }
      >
        counter
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : 'inactive'
        }
      >
        cart
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : 'inactive'
        }
      >
        form
      </NavLink>
      <div><SignupForm /></div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
