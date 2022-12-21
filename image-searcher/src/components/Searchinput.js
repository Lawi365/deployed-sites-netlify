import React from "react";

class SearchInput extends React.Component {
  // onInputChange(event){
  //     console.log(event.target.value)
  // }
//   constructor(){
//     super()
//     this.onFormSubmit = this.onFormSubmit.bind(this)
//   }
  state = { entry: "" }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSearchSubmit(this.state.entry)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}
          style={{
color:"gray",margin:"2% 30% ", justifyContent:"space-around", alignItems:"center"
          }}
        >
          <span style={{fontSize:"3vw", margin:"2vw",alignItems:"center"}}>Favorite Search Images</span>
          <input
            style={{
              padding: "16px",
              display: "block",
              width: "32vw",
              borderRadius:"20px ",
                border:"solid orange",
            //   color: "orange",
            }}
            type="text"
            placeholder="Search..."
            onChange={(event) => this.setState({ entry: event.target.value })}
            value={this.state.entry}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchInput;
