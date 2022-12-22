import { Component } from 'react'

import './index.css'

class Shop extends Component {
    state = {
        changeFirstBanner:true
    }

    changeWidth = () => {
        this.setState(prevState => ({
            changeFirstBanner:!prevState.changeFirstBanner
        }))
    }

    render(){
        const {changeFirstBanner} = this.state
        const firstBanner = changeFirstBanner? "first-banner large":'first-banner small'
        const secondBanner =changeFirstBanner ? "second-banner small":'second-banner large'
        return(
            <div className='banner-container'>
                <div className={firstBanner}>
                {changeFirstBanner && (
                    <div>
                        <h1>First slide Try 4 frames at home for free</h1>
                        <p>Pick 4 frames of your choice to try out for 5 days. it’s simple & we offer free shipment and returns.</p>
                        <button type='button'>Show Now</button>
                    </div>
                )}
                <div>

                    <img  src="https://eyelux-project.web.app/static/media/home-page-banner1.eeb5e5acb3a5ed165714.png" alt="banner-1" onClick={this.changeWidth} className="banner-image"/>
                </div>
            </div>
            <div className={secondBanner}>
                 { !changeFirstBanner &&  (<div>
                        <h1>Second slideGlasses From $99 Including prescription lenses, coatings and thin lenses</h1>
                        <button type='button'>Shop Now</button>
                    </div>)}
                    <div>
                        <img src="https://eyelux-project.web.app/static/media/home-page-banner2.c1fa830ee80b46302522.png" alt="banner-2" onClick={this.changeWidth} className="banner-image"/>
                    </div>
                </div>
                </div>
        )
    }
}

export default Shop
