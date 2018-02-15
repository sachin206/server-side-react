import React from 'react';
import ProductListing from './containers/product-listing';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import  PLPReducer from './store/plp-reducer';

const store = createStore(PLPReducer);
//console.log(store.getState());

export default class App extends React.Component{
	render(){
		return(
				<Provider store={store}>
					<ProductListing></ProductListing>
				</Provider>
			)
	}
}