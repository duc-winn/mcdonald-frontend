import HomePageDisplaySection from "./HomePageDisplaySection/HomePageDisplaySection"
import McMeal from '../../public/mcMeals.jpg'
import Burgers from '../../public/burgers.jpg'
import Chickens from '../../public/chickens.jpg'
import HappyMeal from '../../public/happymeal.jpg'
import BreakfastDeal from '../../public/breakfastdeal.jpg'
import DrinkDeal from '../../public/drinkdeal.jpg'
import FriesDeal from '../../public/friesdeal.jpg'
import BlowDeal from '../../public/blowdeal.jpg'

function HomePage(){
    return(
        <>
            <HomePageDisplaySection header1 = "Menu" header2 = "Full Menu" ImgTitle1 = "Meals" ImgTitle2="Burgers" ImgTitle3="Chicken" ImgTitle4="Happy Meal" pic1 = {McMeal} pic2 = {Burgers} pic3 = {Chickens} pic4 = {HappyMeal}/>
            <HomePageDisplaySection header1 = "App Exclusive Deals" header2 = "More Deals" ImgTitle1="$1 Soft Drink" ImgTitle2="$1.50 Breakfast Sandwich" ImgTitle3="$2 Fries" ImgTitle4="Free Blowjob" pic1 = {DrinkDeal} pic2={BreakfastDeal} pic3={FriesDeal} pic4={BlowDeal}></HomePageDisplaySection>
        </>
    )
}
export default HomePage