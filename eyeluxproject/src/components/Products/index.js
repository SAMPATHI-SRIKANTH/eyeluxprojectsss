import { Component } from 'react'

import ProductCard from '../ProductCard'
import ProductCardsOne from '../ProductCardsOne'
import ProductCardsTwo from '../ProductCardsTwo'

import './index.css'

const hiltonList = [{
    id:1,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-14.0412097376241a83bd6e.jpg'
},
{
    id:2,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-3.f93058d51a998899249a.jpg'
},
{
    id:3,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-4.9a2b4279c69036a98369.jpg'
},
{
    id:4,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-6.331fa57e71abb108c34a.jpg'
},
{
    id:5,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-2.3552f2039222611dc503.jpg'
},
{
    id:6,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-8.07c3633573563eec8c47.jpg'
}]

const formbyList = [{
    id:1,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-14.0412097376241a83bd6e.jpg'
},
{
    id:2,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-3.f93058d51a998899249a.jpg'
},
{
    id:3,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-4.9a2b4279c69036a98369.jpg'
},
{
    id:4,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-6.331fa57e71abb108c34a.jpg'
}]

const nelsonList = [{
    id:1,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-14.0412097376241a83bd6e.jpg'
},
{
    id:2,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-3.f93058d51a998899249a.jpg'
},
{
    id:3,
    imageUrl:'https://eyelux-project.web.app/static/media/Hilton-4.9a2b4279c69036a98369.jpg'
}]
class Products extends Component {

    render(){
        return(
            <div className='products-cards-container'>
                <ProductCard hiltonList={hiltonList} name = {"Hilton"}/>
                <ProductCardsOne formbyList={formbyList} name ={"Formby"}/>
                <ProductCardsTwo nelsonList={nelsonList} name ={"Nelson"}/>
            </div>
        )
    }
}

export default Products