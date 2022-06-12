import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {  faBars } from '@fortawesome/free-solid-svg-icons';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Settings from './components/Settings';
import Navigation from './components/Navigation';



const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

export const App: React.FunctionComponent = () => {
  return (
    <>

        <div className="nav-area">
          <a href="/#" className="logo">
          <FontAwesomeIcon icon={faBars} />
          </a>
    <NavBar></NavBar>
   
   
    <a href={'/settings/'}>Settings</a>
        </div>
        <BrowserRouter>
             <Routes>
              <Route path="/settings/" element={<Settings />} />
              </Routes>
              </BrowserRouter>
    </>
  );
};
