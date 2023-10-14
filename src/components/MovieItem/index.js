import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachListItem} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = eachListItem

  return (
    <>
      <div className="container">
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              <img src={thumbnailUrl} alt="thumbnail" />
            </button>
          }
        >
          {close => (
            <>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
              <div className="con12">
                <ReactPlayer url={videoUrl} />
              </div>
            </>
          )}
        </Popup>
      </div>
    </>
  )
}

export default MovieItem
