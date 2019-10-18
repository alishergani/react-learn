// fetch("http://localhost:7979").then(json => json.json()).then(res => localStorage.setItem('fishes', JSON.stringify(res)))
// let's go!
import React from 'react'
import { render } from 'react-dom'
import Router from './components/Router'
import  './css/style.css'


render(<Router/>, document.querySelector("#main"))