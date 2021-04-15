
//Cristian Guzman
// 1630275-2711


import React from 'react'
import ReactDOM from 'react-dom'
import Contador from './Contador'

import estilo from './index.css'


const divRoot= document.querySelector('#root')
ReactDOM.render(<Contador num1={10} num2={5} nombre={'Cristian Arvey Guzman'} />,divRoot)