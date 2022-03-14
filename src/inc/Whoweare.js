import React from 'react'
import Ororo from '../components/images/ororo.jpg'
import '../components/style.css'

function Whoweare() {
  return (
    <div>
        <section className='containerwho'>
            <div className='row'>
                <div className='col-12' style={{textAlign:'center'}}>
                    <h1 className='pt-4 pb-4' style={{color: 'white'}}>Who we are?</h1>
                    </div>

                    <div className='who'>
                        <div className='col-4'>
                            <img src={Ororo} alt = 'CR7'/>
                        </div>
                        <div className='col-4'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                                <br/><br/>
                                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                                Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla.
                                Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus consequat consequat.
                                Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique.
                                <br/><br/>
                                Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis.

                            </p>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Whoweare