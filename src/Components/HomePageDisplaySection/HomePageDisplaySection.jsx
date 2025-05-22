import './HomePageDisplaySection.css'
import {FiArrowRight} from 'react-icons/fi'

function HomePageDisplaySection(prop){
    return(
        <>
            <div className="HomeDisplaySection1">
                <div className="HomeDisplaySection2">
                    <h1>{prop.header1}</h1>
                    <div className='HomeDisplaySectionLink'>
                        <a href='https://www.youtube.com/'>{prop.header2} <FiArrowRight className="icon-right" /></a>
                    </div>
                </div>
                <div className='HomePageMenuContainer'>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={prop.pic1} />
                        <div className='HomePageMealName'>{prop.ImgTitle1}</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={prop.pic2} />
                        <div className='HomePageMealName'>{prop.ImgTitle2}</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={prop.pic3} />
                        <div className='HomePageMealName'>{prop.ImgTitle3}</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={prop.pic4} />
                        <div className='HomePageMealName'>{prop.ImgTitle4}</div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomePageDisplaySection