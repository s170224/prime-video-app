import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem key={eachItem.id} eachListItem={eachItem} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
