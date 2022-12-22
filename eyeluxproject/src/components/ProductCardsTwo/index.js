import { Component } from "react"

import Cards from '../Cards'

import './index.css'

class ProductCardsTwo extends Component {
    state = {
      activeImage: this.props.nelsonList[0],
        low:0,
        high:4,
    }
  
    updateActiveImage = id => {
      this.setState({activeImage: this.props.nelsonList[id-1]})
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
        const {nelsonList} = this.props

        if (nelsonList.length-1> high){
            this.setState(prevState => ({
                low:prevState.low+1 ,
                high:prevState.high+1
            }))
        }
    }
  
    render() {
      const {activeImage,low,high} = this.state
      const {nelsonList,name} = this.props
      const nelsonLists = nelsonList.slice(low,high)
      const isArrowButtonActive = nelsonList.length >= 4 
      return (
        <div className="app-container">
          <img src={activeImage.imageUrl} alt={activeImage.imageAltText} className="large-image" />
          <h1>{name}</h1>
          <p>{nelsonList.length} colors</p>
          <div className="cards-container">
            {isArrowButtonActive && <button type="button" onClick={this.onLeftArrow}>LEFT</button>}
          
          <ul className="list-items">
            {nelsonLists.map(each => (
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
  export default ProductCardsTwo