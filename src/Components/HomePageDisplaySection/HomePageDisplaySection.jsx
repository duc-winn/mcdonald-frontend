import './HomePageDisplaySection.css'


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
                        <img className='HomePageImg' src={prop.McMeal} />
                        <div className='HomePageMealName'>Meals</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={prop.Burgers} />
                        <div className='HomePageMealName'>Burgers</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={prop.Chicken} />
                        <div className='HomePageMealName'>Chicken</div>
                    </div>
                    <div className='HomePageCard'>
                        <img className='HomePageImg' src={prop.HappyMeal} />
                        <div className='HomePageMealName'>Happy Meal</div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomePageDisplaySection