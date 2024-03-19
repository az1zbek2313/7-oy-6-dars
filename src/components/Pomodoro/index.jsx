import React from "react";
import styled from "./index.module.css";
import next from '../../assets/next-white3.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";

function Pomodoro() {
  const body = document.getElementById("body");
  const [minut, setMinut] = useState(25)
  const [second, setSecond] = useState(0);
  const [work, setWork] = useState(true)
  const [active, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let counter = !localStorage.getItem('counter') ? 0 : JSON.parse(localStorage.getItem('counter'));

  work && body.setAttribute('style', 'background:rgb(40, 170, 203);') 

  useEffect(()=> {
    let interval;

    if (active) {
      interval = setInterval(() => {
        if (second == 0) {
          setMinut(minut-1);
          setSecond(59)
        }else{
          setSecond(second-1)
        }
        if (second == 1 && minut == 0) {
          setIsActive(false);
          setWork(true)
          dispatch(increment())
          navigate('/short');
          counter+=1;
          localStorage.setItem('counter', JSON.parse(JSON.stringify(counter)))
        }
        }, 1000)
    }

    return () => clearInterval(interval)
  }, [minut, second, active])

  function formatTime() {
    let min = ''
    let sec = ''
    let str = ''
    if (minut < 10) {
      min = "0" + minut + ':'
    } else {
      min = minut + ":"
    }
    if (second<10) {
      sec = "0"+second
    } else{
      sec = second
    }
    
    return  str = min + sec
  }

  function handleStart() {
    setIsActive(true)
  }

  function handlePause() {
    setIsActive(false)
  }
  return (
    <div className={styled.pomodoro}>
      <nav className="nav">
        <ul className={styled.list}>
          <li className="list">
            <NavLink className={styled.link} to="/">
              Pomodoro
            </NavLink>
          </li>
          <li className="list">
            <NavLink className={styled.link} to="/short">
              Short Break
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styled.time}>{formatTime()}</div>
      <div className={styled.btns}>
        { !active?
          <button
          onClick={handleStart}
          color="#af4e91"
          title="Press spacebar to start/pause"
          className={styled.btn}
        >
          START
        </button>
        :
        <button
          onClick={handlePause}
          color="#af4e91"
          title="Press spacebar to start/pause"
          className={styled.btn}
        >
          PAUSE
        </button>}
        <Link to={'/short'}>
            <img width={28} src={next} alt="icon"  />
        </Link>
      </div>
    </div>
  );
}

export default Pomodoro;
