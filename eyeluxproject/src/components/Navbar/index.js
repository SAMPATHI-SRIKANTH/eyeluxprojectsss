import {Component} from 'react'

import  './index.css'

class Navbar extends Component {
    state = {
        linkClicked:false
    }

    onClickGlasses = () => {
        this.setState(prevState => ({
            linkClicked:!prevState.linkClicked
        }))
    }

    render(){
        const {linkClicked}  = this.state
        return(
            <>
           
            <nav>
                <div>
                <img src="https://eyelux-project.web.app/static/media/eyelux-logo.93d7f8d5dee655349e1ec85c89cab11f.svg" alt="eyelux" className='logo'/>
                </div>
                <div>
                    <ul className='links'>
                       <li className='link' onClick={this.onClickGlasses}>Glasses</li>
                        <li className='link'>Sunglasses</li>
                        <li className='link'>Home try-on</li>
                        <li className='link'>Eye Health</li>
                    </ul>
                </div>
                <div>
                    <h1>ICONS</h1>
                </div>
            </nav>

            {linkClicked &&
            (<div className='glass-container'>
            <div>
                <h1>Mens Glasses</h1>
                <button type='button'>Shop Now</button>
            </div>
            <div>
                <h1>Womens Glasses</h1>
                <button type='button'>Shop Now</button>
            </div>
        </div>)}
            
            </>
        )
    }
}

export default Navbar