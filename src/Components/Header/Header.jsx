import Logo from '../../../public/logo.png'
import './Header.css'

function Header(prop){
    let points = 0
    let isLoggedIn = true
    return(<>
        <div className='Header'>
            <div className='logo-container'>
                <img className='logo' src={Logo} ></img>
            </div>
            { isLoggedIn? (
                <h3 className='PointsDisplay'>
                    {points} pts
                </h3>) : (<></>)
            }

        </div>
    </>)
}

export default Header