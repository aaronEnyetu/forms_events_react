import React from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import ImageList from './ImageList'

class App extends React.Component {


    state = {images: []}


  onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=41880057-9f1e489830dc508583511c0fd&q=${entry}&image_type=photo`)
        // console.log(response.data.hits)
        this.setState({images:response.data.hits})
    }
    render() {

        return (
          <div className='ui container' style={{marginTop:"50px"}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                We have {this.state.images.length} images
                <ImageList images={ this.state.images } />
          </div>
        )
      }


    }

export default App
