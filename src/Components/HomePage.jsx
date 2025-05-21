import HomePageDisplaySection from "./HomePageDisplaySection/HomePageDisplaySection"
import McMeal from '../../public/mcMeals.jpg'
import Burgers from '../../public/burgers.jpg'
import Chickens from '../../public/chickens.jpg'
import HappyMeal from '../../public/happymeal.jpg'

function HomePage(){
    return(
        <>
            <HomePageDisplaySection header1 = "Menu" header2 = "Full Menu" McMeal = {McMeal} Burgers = {Burgers} Chicken = {Chickens} HappyMeal = {HappyMeal}/>
        </>
    )
}
export default HomePage