import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import axios from "axios"
import "./RiverPark.scss"
import COntactForm from '../../Components/ContactForm/COntactForm';
import Navbar2 from '../../Components/Navbar/Navbar2';
import Footer from '../../Components/Footer/Footer';
import Slider2 from '../../Components/Slider/Slider2';
import CarouselImg from '../../Components/Carousel/Carousel';
function RiverPark() {

	const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
    const $tabsWrapper = $('.tabs-wrapper');
    $tabsWrapper.find('.tab-item').not(':first').hide();

       $tabsWrapper.find('.tab').click(function() {
        $tabsWrapper.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
        $tabsWrapper.find('.tab-item').hide().eq($(this).index()).fadeIn();
        setActiveTab($(this).index());
       }).eq(0).addClass('active');
    }, []);       

  return (
    <div>
		<Navbar2/>
		<Slider2/>
        <main>
        <section className="layouts" id="layouts">
		<div className="container" id='plans'>
			<div className="row">
				<div className="col-md-12">
					<div className="about-us-item">
						<h1>Подберите идеальную планировку<br/>для Вас и Вашей семьи</h1>
						<p>Дом монолитный, заполняется газоблоком. Два 16-этажных одно подъездных дома.<br/>Детская и спортивная площадка, также имеется встроенный паркинг,<br/> безопасный двор на пандусе. Видеонаблюдение.</p>
						<div className="about-us-text">
							Выбор квартиры
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="plans-box">
						<div className="tabs-wrapper">
							<div className="tabs">
								<span className={`tab`}>Планировки 1 ком. квартир</span>
								<span className={`tab`}>Планировки 2 ком. квартир</span>
								<span className={`tab`}>Планировки 3 ком. квартир</span>
							</div>
							<div className="tabs-content">
								<div className="tab-item">
									<div className="flexbox">
									<div class="flexcol-6">
										<div style={{paddingTop: "75px"}}>

											<COntactForm prichina={"1 комнатная квартира"}/>
										</div>
										</div>
										<div className="flexcol-6 layouts-images">
											<a href="theme/assets/img/riverpark/1room/0001.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0001.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0002.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0002.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0003.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0003.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0004.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0004.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0005.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0005.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0006.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0006.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0007.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0007.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0008.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0008.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0009.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0009.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0010.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0010.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0011.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0011.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/1room/0012.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/1room/0012.jpg" className="img-responsive" alt="" /></a>
										</div>
									</div>
								</div>
								<div className="tab-item">
									<div className="flexbox">
									<div class="flexcol-6">
										<div style={{paddingTop: "75px"}}>

											<COntactForm prichina={"1 комнатная квартира"}/>
										</div>
										</div>
										<div className="flexcol-6 layouts-images">
										<a href="theme/assets/img/riverpark/2room/0001.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0001.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/2room/0002.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0002.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/2room/0003.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0003.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/2room/0004.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0004.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/2room/0005.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0005.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/2room/0006.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0006.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/2room/0007.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0007.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/2room/0008.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0008.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/2room/0009.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/2room/0009.jpg" className="img-responsive" alt="" /></a>
										</div>
									</div>
								</div>
								<div className="tab-item">
									<div className="flexbox">
									<div class="flexcol-6">
										<div style={{paddingTop: "75px"}}>

											<COntactForm prichina={"1 комнатная квартира"}/>
										</div>
										</div>
										<div className="flexcol-6 layouts-images">
										<a href="theme/assets/img/riverpark/3room/0001.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/3room/0001.jpg" className="img-responsive" alt="" /></a>
											<a href="theme/assets/img/riverpark/3room/0002.jpg" data-fancybox="images" data-caption=""><img src="theme/assets/img/riverpark/3room/0002.jpg" className="img-responsive" alt="" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	    </section>
        </main>
	    <div id="map">
	    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ac6d35290e1e475a4caba76593bcd43e7b11d81fa763f305965a29c01c8bbc1&amp;source=constructor"     width="100%" height="400" frameborder="0"></iframe>
	    </div>
		<div className="carousel-gallery" style={{display: "flex",justifyContent: "center",alignItems: "center", paddingTop: "100px", paddingBottom: "100px"}}>
			<div style={{width: "70%", borderRadius: "20px"}}>
			   <CarouselImg/>
			</div>
		</div>
	    <Footer/>
    </div>
  )
}

export default RiverPark