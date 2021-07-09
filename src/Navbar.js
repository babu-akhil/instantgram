import './Navbar.css';
import MediaQuery from 'react-responsive'

import HomeIcon from './assets/home_black_24dp.svg'
import HomeIconActive from './assets/home_black_filled_24dp .svg'

import MessageIcon from './assets/forum_black_24dp.svg'
import MessageIconActive from './assets/forum_black_filled_24dp.svg'

import ExploreIcon from './assets/explore_black_24dp.svg'
import ExploreIconActive from './assets/explore_black_filled_24dp.svg'

import NotificationsIcon from './assets/favorite_border_black_24dp.svg'
import NotificationsIconActive from './assets/favorite_black_24dp.svg'

import AccountIcon from './assets/account_circle_black_24dp.svg'
import AccountIconActive from './assets/account_circle_black_filled_24dp.svg'


import {useState, useEffect} from 'react'

function Icon(props) {
  return (
    <div className = 'icon'>
       <img src = {props.active===props.name?props.IconActive:props.Icon}></img>
    </div>
  )
}

function Search() {

 return (
  <div className = 'search-div'>
    <input type = 'text' placeholder = 'Search' className = 'search'></input>
  </div>
 )
}

function Navbar() {
// Using state for now -> Replace with props from parent later
  let [active, setActive] = useState('home')


  return (
    <div className="Navbar">
      <div className = 'title'>
        Instantgram
      </div>
      <MediaQuery query = "(min-width: 600px)">
        <Search/>
      </MediaQuery>
      <div className = 'icons'>
        <Icon name= 'home' active ={active} IconActive = {HomeIconActive} Icon = {HomeIcon} />
        <Icon name = 'messages' active ={active} IconActive = {MessageIconActive} Icon = {MessageIcon} />
        <Icon name = 'explore' active ={active} IconActive = {ExploreIconActive} Icon = {ExploreIcon} />
        <Icon name = 'notifications' active ={active} IconActive = {NotificationsIconActive} Icon = {NotificationsIcon} />
        <Icon name = 'account' active ={active} IconActive = {AccountIconActive} Icon = {AccountIcon} />

      </div>
    </div>
  );
}

export default Navbar;
