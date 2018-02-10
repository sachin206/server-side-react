import React from 'react';
import ProductCard from '../component/product-card';
import Search from '../component/search';
import Sorting from '../component/sorting';
import Filter from '../component/filter';

export default class ProductListing extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillMount(){
        fetch("products.json")
            .then((res) => {
                console.log(res);
            })
    }
	render(){
		return(
            <React.Fragment>
                    <div className="row">  
                        <div className="col-sm-10"><Search /></div>
                        <div className="col-sm-2"><Sorting /></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-2"><Filter /></div>
                        <div className="col-sm-10"><ProductCard /></div>
                    </div>
                </React.Fragment>
			)
	}
}