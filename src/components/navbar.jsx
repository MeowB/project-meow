import '../style/navbar.css'
import hamburgerSvg from '../assets/hamburger.svg'
import xSymbol from '../assets/x-symbol.svg'

function NavBar() {
	let nav = (
		<ul id="navBar">
			<li><button>projects</button></li>
			<li><button>about</button></li>
			<li><button>contact</button></li>

			<div className="hamburger">
				<img onClick={handleClick} id="hamburger" src={hamburgerSvg} alt="hamburger-menu" />
				<img onClick={handleClick} src={xSymbol} id="cross" className='cross-menu' alt="cross-menu" />
				
			</div>
		</ul>
	);

	// changes the visibility of the menu and the image between the hamburger and the X
	let menuIsOpen = false;
	function handleClick() {
		const menu = document.querySelectorAll("#navBar li");
		const hamburger = document.querySelector('#hamburger');
		const cross = document.querySelector('.cross-menu')
		menuIsOpen = menuIsOpen ? false : true;

		if (menuIsOpen) {
			menu.forEach( li => {
				if (li.style.display === "flex") {
					li.style.display = "none";
				} else {
					li.style.display = "flex";
				}
			})
			cross.style.display = "flex";
			hamburger.style.display = "none";
		} else {
			menu.forEach( li => {
				if (li.style.display === "none") {
					li.style.display = "flex";
				} else {
					li.style.display = "none";
				}
			})
			cross.style.display = "none";
			hamburger.style.display = "flex";
		}


	}
	
	return nav;
}

export default NavBar