import React from 'react';
import ReactDom from 'react-dom';
//import Timer from './Timer';
//import Todo from './Todo';
import Game from './tic-tac-toe/Game';
import './index.css';


const mountNode = document.getElementById('root');
ReactDom.render(<Game />, mountNode);