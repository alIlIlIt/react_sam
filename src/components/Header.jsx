import React from 'react'

const Header = () => {

    const header = () =>{
        const [show,setShow] = useState(false);
        const toggleMenu = () => {
            setShow((prevShow) => !prevShow);
        }
    }
  return (
    <header id='header' role='banner'>
        <div className="header_inner">
            <div className="header_logo">
                <a href="/">portfolio<em>react</em></a>
            </div>
            <div 
                className="header_nav" 
                role='navigation' 
                aria-label='메인메뉴'
            >
                <ul>
                    <li><a href="#intro">intro</a></li>
                    <li><a href="#skill">skill</a></li>
                    <li><a href="#site">site</a></li>
                    <li><a href="#port">port</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </div>
            <div 
                className="header_nav_moblie"
                id="headerToggle"
                aria-controls='primary_menu'
                aria-expanded="false"
                role='button'
                textIndex="0"></div>
        </div>
    </header>
  )
}

export default Header
