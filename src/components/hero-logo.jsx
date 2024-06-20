import logoPath from '../assets/power.svg'
import '../style/hero-logo.css'

function HeroLogo() {
	const logo = (	
		<div id="hero-logo">
			<button href="#" target="_blank">
			<img src={logoPath} className="logo MeowB" alt="MeowB logo" />
			</button>
			<h1>MeowB</h1>
		</div>
	)
	return logo
}

export default HeroLogo