import './index.css'
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  updateList = () => {
    const {moviesList} = this.props

    const updateActionList = moviesList.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )

    return updateActionList
  }

  updateComedyList = () => {
    const {moviesList} = this.props
    const updatedComedyList1 = moviesList.filter(
      each1 => each1.categoryId === 'COMEDY',
    )
    return updatedComedyList1
  }

  render() {
    const newListFunction = this.updateList()
    const updateComedyListFunction = this.updateComedyList()
    console.log(newListFunction)
    console.log(updateComedyListFunction)

    const {moviesList} = this.props
    console.log(moviesList)

    return (
      <div className="container12">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
          alt="prime video"
          className="img1"
        />

        <h1>Action Movies</h1>
        <MoviesSlider moviesList={newListFunction} />
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={updateComedyListFunction} />
      </div>
    )
  }
}
export default PrimeVideo
