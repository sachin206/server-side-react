import React from 'react';


export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchString : ''
        }
        //this.getSearch = this.getSearch.bind(this);
    }
    /* fillValue = (evt) => {
        //  console.log(evt.target.value);
          this.setState(
              {
               searchString: evt.target.value
              }
          )
       } */
    fillValue(evt) {
     //  console.log(evt.target.value);
       this.setState(
           {
            searchString: evt.target.value
           }
       )
    }
    onSearch(evt){
        this.props.searchHandler(this.state.searchString);
    }
    
	render(){
		return(
            <div>
                <input type="search"
                    value={this.state.searchString}
                    placeholder="Enter Keybord"
                    onChange={(evt) => { this.fillValue(evt) }} />
                <input type="button" name="go" value="Search" onClick={ evt => this.onSearch(evt)} />
            </div>
			)
	}
}