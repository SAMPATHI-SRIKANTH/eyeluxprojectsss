import { Component } from "react"

import Cards from '../Cards'

import './index.css'

class ProductCardsOne extends Component {
    state = {
      activeImage: this.props.formbyList[0],
        low:0,
        high:4,
    }
  
    updateActiveImage = id => {
      this.setState({activeImage: this.props.formbyList[id-1]})
    }

    onLeftArrow = () => {
        const {low} = this.state
        if (low > 0){
            this.setState(prevState => ({
                low:prevState.low-1,
                high:prevState.high-1
            }))
        }
    }

    onRightArrow = () => {
        const {high} = this.state
        const {formbyList} = this.props

        if (formbyList.length-1> high){
            this.setState(prevState => ({
                low:prevState.low+1 ,
                high:prevState.high+1
            }))
        }
    }
  
    render() {
      const {activeImage,low,high} = this.state
      const {formbyList,name} = this.props
      const formbyLists = formbyList.slice(low,high)
      const isArrowButtonActive = formbyList.length > 4 
      return (
        <div className="app-container">
          <img src={activeImage.imageUrl} alt={activeImage.imageAltText} className="large-image" />
          <h1>{name}</h1>
          <p>{formbyList.length} colors</p>
          <div className="cards-container">
            {isArrowButtonActive && <button type="button" onClick={this.onLeftArrow}>LEFT</button>}
          
          <ul className="list-items">
            {formbyLists.map(each => (
              <Cards
                key={each.id}
                imageDetails={each}
                updateActiveImage={this.updateActiveImage}
              />
            ))}
          </ul>
          {isArrowButtonActive && <button type="button" onClick={this.onRightArrow}>"RIGHT"</button>}
          </div>

        </div>
      )
    }
  }
  export default ProductCardsOne