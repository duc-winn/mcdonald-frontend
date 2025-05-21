import './HomePageDisplaySection.css'
import McMeal from '../../../public/mcMeals.jpg'
import Burgers from '../../../public/burgers.jpg'
import Chickens from '../../../public/chickens.jpg'
import HappyMeal from '../../../public/happymeal.jpg'

function HomePageDisplaySection(prop){
    return(
        <>
            <div className="HomeDisplaySection1">
                <div className="HomeDisplaySection2">
                    <h1>{prop.header1}</h1>
                    <div className='HomeDisplaySectionLink'>
                        <a href='https://www.youtube.com/'>{prop.header2}</a>
                    </div>
                </div>
                <div className='HomePageMenuContainer'>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={McMeal} />
                        <div className='HomePageMealName'>Meals</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={Burgers} />
                        <div className='HomePageMealName'>Burgers</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={Chickens} />
                        <div className='HomePageMealName'>Chicken</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={HappyMeal} />
                        <div className='HomePageMealName'>Happy Meal</div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomePageDisplaySection