import { Component } from "react"

import Cards from '../Cards'

import './index.css'

class ProductCard extends Component {
    state = {
      activeImage: this.props.hiltonList[0],
        low:0,
        high:4,
    }
  
    updateActiveImage = id => {
      this.setState({activeImage: this.props.hiltonList[id]})
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
        const {hiltonList} = this.props

        if (hiltonList.length-1> high){
            this.setState(prevState => ({
                low:prevState.low+1 ,
                high:prevState.high+1
            }))
        }
    }
  
    render() {
      const {activeImage,low,high} = this.state
      const {hiltonList,name} = this.props
      const hiltonLists = hiltonList.slice(low,high)
      const isArrowButtonActive = hiltonList.length >= 4 
      return (
        <div className="app-container">
          <img src={activeImage.imageUrl} alt={activeImage.imageAltText} className="large-image" />
          <h1>{name}</h1>
          <p>{hiltonList.length} colors</p>
          <div className="cards-container">
            {isArrowButtonActive && <button type="button" onClick={this.onLeftArrow}>LEFT</button>}
          
          <ul className="list-items">
            {hiltonLists.map(each => (
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
  
  export default ProductCard