import React from 'react'
import logo from '../../assets/icon-white2.png'
import styled from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../../redux/counterSlice';

function Header() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);

  function clear() {
    localStorage.removeItem('counter')
    dispatch(decrement())
  }
  
  return (
    <header className="border-bottom border-2 border-success ">
        <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid container-lg d-flex">
            <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src={logo} width={32} alt="logotip" />
            Pomofocus
            </a>
            <div className="d-flex">
            <span style={{backgroundColor: '#2c4fae'}} className="navbar-brand h-50 d-flex align-items-center p-2 text-light rounded-4 ">
            {count}
            </span>
            <span onClick={clear}  className={`navbar-brand h-50 d-flex align-items-center p-2 text-light rounded-4 ${styled.hovers}`}>
            Clear
            </span>
            </div>
           
        </div>
        </nav>
    </header>
  )
}

export default Header