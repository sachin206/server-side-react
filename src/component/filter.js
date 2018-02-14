import React from 'react';

export default class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            filterString : ""
        }
    }

    onFilterClick(evt){
         this.setState({
            filterString: evt.target.value
        })
    }

    onFilter(evt){      

        this.props.filterHandler(evt.target.value);
    }
    render(){
        return(
            <div>Filter <br/>
			<input type="radio" checked={this.state.filterString === ""} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value=""/>All<br/>
            <input type="radio" checked={this.state.filterString === "shirts"} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value="shirts"/>Shirt<br/>
            <input type="radio" checked={this.state.filterString === "jeans"} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value="jeans"/>Jeans<br/>
            <input type="radio" checked={this.state.filterString === "tshirts"} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value="tshirts"/>T-Shirt<br/>
            <input type="radio" checked={this.state.filterString === "kurta"} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value="kurta"/>Kurta<br/>
            </div>
    )
    }
}