import React from 'react'
function Slider() {
  return (
    <section class="slider" id="complex">
        <figure className="slider-effect">
					<div className="slider-image" style={{backgroundImage: `url(theme/assets/img/riverpark.jpg)`}}></div>
					<figcaption>
						<h2>ЖК «River Park»</h2>
						<p>ЖИЛОЙ КОМПЛЕКС КОМФОРТ-КЛАССА RIVER PARK</p>
						<a href="/river-park">Просмотреть</a>
				    </figcaption>	
		</figure>
    </section>
  )
}

export default Slider