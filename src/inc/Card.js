import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div>
        <section className='container'>
            <div className='row mb-5'>
                <div className='col-4'>
                    <div className="card" style={{backgroundColor:'yellow'}}>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/" className="btn btn-primary">Home</Link>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/" className="btn btn-primary">Home</Link>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/" className="btn btn-primary">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Card