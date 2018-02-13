import React from 'react';


export default class Filter extends React.Component{
	render(){
		return(
           <div>
			   <input type="radio" name="catfilter" value="shirts" /> Shirts <br />
			   <input type="radio" name="catfilter" value="tshirts" /> T Shirts <br />
			   <input type="radio" name="catfilter" value="jeans" /> Jeans <br />
			   <input type="radio" name="catfilter" value="kurta" /> Kurta <br />
		   </div>
			)
	}
}