import {FiHome, FiGift, FiMoreHorizontal} from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';
import './Footer.css'
function Footer(){
    return (
        <>
            <div className='FooterContainer'>
                <div className='LinkContainer'>
                    <FiHome size={30}/>
                    <div>Home</div>
                </div>
                <div>
                    <FaUtensils size={30} />
                    <div>Order</div>
                </div>
                <div>
                    <FiGift size={30} />
                    <div>Rewards & Deals</div>
                </div>
                <div>
                    <FiMoreHorizontal  size={30}/>
                    <div>More</div>
                </div>
            </div>
        </>

    )

}

export default Footer