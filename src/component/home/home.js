
import React from 'react'
import BottomMenu from './bottomMenu'
import Header from './header'
import  './home.scss'
import List from './list'
import Search from './search'
import ShoppingCard from './shoppingCard'
const Home = () => {
  return (
    <div className='FashionStoreHomePage'>

    <Header/>
        <Search/>
        <List/>
        <ShoppingCard/>
        <BottomMenu/>
    </div>
  )
}

export default Home