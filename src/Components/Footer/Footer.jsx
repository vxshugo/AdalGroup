import React from 'react'

function Footer() {
  return (
    <footer>
	<div className="container">
		<div className="row">
			<div className="col-md-3 col-sm-3 col-xs-6">
				<div className="footer-item">
					<h3 className="address">Адрес</h3>
					<img src="theme/assets/img/logo.png" className="img-responsive hidden-xs" alt="" />
					<p>Нур-Султан, район Есиль,<br />проспект Қабанбай батыр, 58Б</p>
				</div>
			</div>
			<div className="col-md-2 col-sm-2 col-xs-6">
				<div className="footer-item">
					<h3>Компания</h3>
					<ul>
						<li className=""><a href="#services">О компании</a></li>
						<li className=""><a href="#about-us">Услуги</a></li>
						<li className=""><a href="#map">Контакты</a></li>
					</ul>
				</div>
			</div>
			<div className="col-md-4 col-sm-4 col-xs-6">
				<div className="footer-item">
					<h3>Проекты</h3>
					<div style={{display: "flex"}} >
						<ul style={{marginRight: "8px"}}>
							<li className=""><p><a href="/river-park">ЖК «River park»</a></p></li>
							
						</ul>
					</div>
				</div>
			</div>
			<div className="col-md-3 col-sm-3 col-xs-6">
				<div className="footer-item">
					<h3>Контакты</h3>
					<ul>
						<li className=""><a href="tel:8 (7172) 919‒990">8 (7172) 999‒999</a></li>
						<li className=""><a href="tel:8 (700) 0 919-990">8 (700) 0 999-999</a></li>
						<li className=""><a href="#">Instagram</a> / <a href="#">Whatsapp</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12">
				<div className="copyright">
					<p>&copy; 2023 Adal Group <span className="kazweb"><a href="#">created by vxshugo</a></span></p>
					<p>Информация, опубликованная на Сайте, носит общий характер и служит для ознакомительных целей, не является публичной офертой.</p>
				</div>
			</div>
		</div>
	</div>
    </footer>
  )
}

export default Footer