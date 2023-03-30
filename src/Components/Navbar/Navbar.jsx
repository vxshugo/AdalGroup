import React, { useState } from 'react'

function Navbar() {
    const [active, setActive] = useState("")

    const toggleMenu = () => {
        setActive(active === "" ? "active" : "" )
    }


  return (
    <header>
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
				<div className="flexbox">
					<div className="logo">
						<a href="/" className="flexbox">
							<img src="theme/assets/img/logo.png" className="img-responsive" alt="" />
						</a>
					</div>
					<nav id="nav" className={`flexbox ${active}`}>
						<button type="button" onClick={toggleMenu} className={`menu-button ${active}`} data-active="#nav" data-src="#nav">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<div id="nav-list">
							<ul>
								<li className="current"><a href="/">На главную</a></li>
								<li className=""><a href="#complex">Наши проекты</a></li>
								<li className="hidden-ip"><a href="#about-us">Услуги</a></li>
								<li className="hidden-ip"><a href="#services">О компании</a></li>
								<li className=""><a href="#map">Контакты</a></li>
							</ul>
						</div>
						<div className="header-contacts flexbox">
							<div className="flexbox">
								<a href="tel:8 (7172) 919‒990">8 (7172) 999‒990</a>
								<a href="tel:8 (700) 0 919-990">8 (700) 9 999‒999</a>
							</div>
							<div className="flexbox">
								<a href="#"><img src="theme/assets/img/icons/instagram.svg" className="img-responsive" alt="" /></a>
								<a href="#"><img src="theme/assets/img/icons/whatsapp.svg" className="img-responsive" alt="" /></a>
							</div>
						</div>		
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>
  )
}

export default Navbar