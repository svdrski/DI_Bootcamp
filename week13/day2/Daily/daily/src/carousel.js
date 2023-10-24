import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

class Carousels extends React.Component {
    render() {
        return( 
            <div style={{width: '400px', margin: 'auto'}}>
                <Carousel>
                    <div >
                        <img alt='Hong Kong' src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'/>
                        <p className="legend">Hong Kong</p>
                    </div>

                    <div>
                        <img alt='Macao' src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'/>
                        <p className="legend">Macao</p>
                    </div>

                    <div>
                        <img alt='Japan' src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp'/>
                        <p className="legend">Japan</p>
                    </div>

                    <div>
                        <img alt='Las Vegas' src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'/>
                        <p className="legend">Las Vegas</p>
                    </div>
                </Carousel>
            </div>
           
        )
    }
}

export default Carousels