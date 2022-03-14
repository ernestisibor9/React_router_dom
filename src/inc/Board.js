import React, { useEffect } from 'react'
import Five from '../components/images/five.png'
import Four from '../components/images/four.png'
import Three from '../components/images/three.png'
import '../components/style.css'
import AOS  from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import { Link } from 'react-router-dom'

function Board() {

    useEffect(() => {
        AOS.init({duration:2000});
      }, []);

  return (
    <div>
        <section className='boardContainer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 style={{color:'white', textAlign:'center'}} className = 'pt-4'>Board of Directors</h1>
                    </div>
                    <div className='col-4'>
                        <Link to="/about">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                <img src={Five} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-4'>
                        <div class="card" data-aos="zoom-out-left">
                            <img src={Four} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card" data-aos="zoom-out-left">
                                <img src={Three} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Board