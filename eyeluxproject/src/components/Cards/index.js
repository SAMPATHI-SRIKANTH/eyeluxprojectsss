import './index.css'

const Cards = props => {
  const {imageDetails, updateActiveImage} = props

  const {id,imageUrl} = imageDetails

  const onClickImage = () => {
    updateActiveImage(id)
  }

  return (
    <>
    
      <li className="item">
        <button type="button" onClick={onClickImage}>
          <img src={imageUrl} alt="spects" className='card-image'/>
        </button>
      </li>
    </>
  )
}
export default Cards
