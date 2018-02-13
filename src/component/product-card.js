import React from 'react';


export default class ProductCard extends React.Component{
	render(){
        let card = this.props.data;
		return(
          
            <div className="card col-sm-3" >
              <img className="card-img-top" src={card.image} alt="Sample Image" />
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <h5 className="card-title">{card.price}</h5>
                <p className="card-text">{card.desc}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
			)
	}
}