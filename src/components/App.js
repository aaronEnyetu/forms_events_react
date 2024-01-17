import React from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'

class App extends React.Component {


    onSearchSubmit = (entry) => {
        console.log(entry)
        axios.get(`https://pixabay.com/api/?key=41880057-9f1e489830dc508583511c0fd&q=${entry}&image_type=photo`)
    }
    render() {

        return (
          <div className='ui container' style={{marginTop:"50px"}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
          </div>
        )
      }


    }

export default App
