import React from 'react';
import ProductListing from './containers/product-listing';
//import ReactDOM from 'react-dom';

export default class App extends React.Component{
	render(){
		return(
            <React.Fragment>
				
                <ProductListing></ProductListing>
                </React.Fragment>
			)
	}
}