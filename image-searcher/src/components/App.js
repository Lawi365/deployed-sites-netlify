import React from 'react'
import Searchinput from './Searchinput';
import axios from 'axios'
import ImageList from './ImageList';

class App extends React.Component {
    //init state
    state = { images:[] }

    onSearchSubmit = async (entry) =>{
        
        const response = await axios.get(`https://pixabay.com/api/?key=12973143-e1ea73fe98fc5af5156bb3056&q=${entry}&image_type=photo`)
        // console.log(this)
        this.setState({images:response.data.hits})

    }
    render(){
        return (
            <div className="" style={{margin:"20px 5vw 20px 6vw",alignContent:"center",justifyItems:"center"}}>
                < Searchinput onSearchSubmit={this.onSearchSubmit}/>
                {/* print no of images we have. */}
                <ImageList images={this.state.images} />
            </div>
  )
    }
  
}

export default App;