import React from 'react'
import { FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div>
        <section className='footerContainer bg-dark'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12' style={{color: 'white', textAlign:'center', padding:'40px'}}>
                        <h6>&copy; 2022 all rights reserved Alabian Solution Ltd</h6>
                        <FaFacebook className='icon'/> 
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer