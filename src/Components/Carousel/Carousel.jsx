import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function CarouselImg() {
  return (
    <div>
        <Carousel autoPlay>
                <div>
                    <img src="theme/assets/img/riverpark/1.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/2.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/3.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/4.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/5.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/6.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/7.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/8.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/9.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/10.jpg" />
                </div>
                <div>
                    <img src="theme/assets/img/riverpark/11.jpg" />
                </div>
            </Carousel>
    </div>
  )
}

export default CarouselImg