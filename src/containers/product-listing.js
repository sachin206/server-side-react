import React from 'react';
import { connect } from 'react-redux';

import ProductCard from '../component/product-card';
import Search from '../component/search';
import Sorting from '../component/sorting';
import Filter from '../component/filter';

import getDataAction from '../store/plp-action';
class ProductListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //  filterString: ''

        }
        //this.searchHandler = this.searchHandler.bind(this);
        //this.craeteCardList = this.craeteCardList.bind(this);
        // this.craeteCardList= this.craeteCardList.bind(this);
    }
    componentDidMount() {
        /*  fetch("products.json")
             .then((res) => {
                 return res.json();
             })
             .then((data) => {
                 console.log(data);
                 this.setState({
                     products: data.products
                 })
             }) */
        this.props.showProducts();
    }
    /*  searchHandler (searchKey){
         this.setState({
             searchString:searchKey
         })
     } */
    /*   searchHandler = (searchKey) => {
          this.setState({
              searchString:searchKey
          });
      } */
  /*   filterHandler = (filterKey) => {
        this.setState({
            filterString: filterKey
        })
    } */
    createCardList = () => {
        debugger;
        let searchString = this.props.searchString;
        let filterString = this.props.filterString;
        let filteredCards = this.props.products;

        if (searchString !== undefined && searchString !== "") {
            filteredCards = filteredCards.filter((item) => {
                return item.name == searchString;
            });
        }
        if (filterString !== undefined && filterString !== "") {
            filteredCards = filteredCards.filter((item) => {
                return item.category == filterString;
            });
        }
        console.log(filteredCards);
        let cards = filteredCards.map((item, index) => {
            return (
                <ProductCard key={index} data={item} ></ProductCard>
            )
        });
        return cards;

    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-10"><Search searchHandler={this.props.searchHandler} /></div>
                    <div className="col-sm-2"><Sorting /></div>
                </div>

                <div className="row">
                    <div className="col-sm-2"><Filter filterHandler={this.props.filterHandler} /></div>
                    <div className="col-sm-10">{this.createCardList()}</div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        searchString: state.searchString, 
        filterString: state.filterString
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showProducts: () => dispatch(getDataAction),
        searchHandler: (searchString) => dispatch({ type: 'SEARCH_STRING', value: searchString }),
        filterHandler: (filterString) => dispatch({ type: 'FILTER_STRING', value: filterString })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);

