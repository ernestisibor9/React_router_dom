import React from 'react'
import Carousel from '../../inc/Carousel'
import Card from '../../inc/Card'
import Whoweare from '../../inc/Whoweare'
import Board from '../../inc/Board'

function Home() {
  return (
    <div>
        <Carousel/>
        <div className='col-12'>
            <h1 style={{textAlign:'center', marginTop:'40px', marginBottom:'40px'}}>Our Top Services</h1>
        </div>
        <Card/>
        <Card/>
        <Whoweare/>
        <Board/>
    </div>
  )
}

export default Home