import React from 'react'
import Slider from '../../Components/Slider/Slider'
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
function Home() {
  return (
    <div>
		<Navbar/>
        <Slider/>
        <main>
        <section class="about-us" id="about-us">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="flexbox">
						<div class="flexcol-7">
							<div class="about-us_text">
							    <h4>Adal Group</h4>
                                <p>Наша команда профессионалов занимается реализацией жилых комплексов от застройщиков — наша миссия заключается в создании домов, инфраструктуры и сервисов, которые экономят людям время, чтобы они потратили его на то, что действительно важно.</p>
                                <p>Следите за нашими постами в инстаграм! В них мы будем рассказывать о наших ЖК, о способах покупки квартиры/офиса и о многом другом!</p>
							</div>
						</div>
						<div class="flexcol-5">
							<div class="about-us_img">
								<img src="theme/assets/img/Logotype.jpg" class="img-responsive" alt="" />
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	    </section>
        <section class="services" id="services">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="services-title">
					Преимущества наших комплексов
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="services-item">
					<img src="theme/assets/img/icons/services-1.svg" class="img-responsive" alt="" />
					<p>Качественные материалы</p>
					<p>Мы не экономим на качестве материалов от монолита до последней ручки.</p>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="services-item">
					<img src="theme/assets/img/icons/services-2.svg" class="img-responsive" alt="" />
					<p>Продуманные планировки</p>
					<p>Мы работали над каждым квадратным метром, чтобы сделать площади функциональными.</p>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="services-item">
					<img src="theme/assets/img/icons/services-3.svg" class="img-responsive" alt="" />
					<p>Дизайнерские холлы</p>
					<p>Невозможно не оглянуться вокруг. Искусство начинается с холла.</p>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="services-item">
					<img src="theme/assets/img/icons/services-4.svg" class="img-responsive" alt="" />
					<p>Круглосуточная охрана</p>
					<p>Камеры установлены по периметру комплекса, в холлах, лифтах и на детских площадках.</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="services-item">
					<img src="theme/assets/img/icons/services-5.svg" class="img-responsive" alt="" />
					<p>Электронный замок</p>
					<p>Видеодомофон с Face ID и электронный замок — cтавим в каждую квартиру, даже в черновой.</p>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="services-item">
					<img src="theme/assets/img/icons/services-6.svg" class="img-responsive" alt="" />
					<p>Тихий район</p>
					<p>В центре жизни — вдали от шума и выхлопных газов.</p>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="services-item">
					<img src="theme/assets/img/icons/services-7.svg" class="img-responsive" alt="" />
					<p>Благоустроенный двор</p>
					<p>Приятный и удобный двор для всех возрастных категорий.</p>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="services-item">
					<img src="theme/assets/img/icons/services-8.svg" class="img-responsive" alt="" />
					<p>Собственный паркинг</p>
					<p>Собственный паркинг под домом с лифтом до Вашего этажа.</p>
				</div>
			</div>
		</div>
	    </div>
        </section>
        <div id="map"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A58f71cb05a4a6b467f7e99a026f07b594abb60d9d508fbf5865a4cb9d6baf677&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe></div>
        </main>
		<Footer/>
    </div>
  )
}

export default Home