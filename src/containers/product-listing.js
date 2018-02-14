import React from 'react';
import ProductCard from '../component/product-card';
import Search from '../component/search';
import Sorting from '../component/sorting';
import Filter from '../component/filter';

export default class ProductListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchString:'',
            filterString:''

        }
        //this.searchHandler = this.searchHandler.bind(this);
        //this.craeteCardList = this.craeteCardList.bind(this);
        // this.craeteCardList= this.craeteCardList.bind(this);
    }
    componentDidMount() {
        fetch("products.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    products: data.products
                })
            })
    }
   /*  searchHandler (searchKey){
        this.setState({
            searchString:searchKey
        })
    } */
    searchHandler = (searchKey) => {
        this.setState({
            searchString:searchKey
        });
    }
    filterHandler= (filterKey) => {
        this.setState({
            filterString:filterKey
        })
    }
    createCardList = () => {
        let searchString = this.state.searchString;
        let filterString = this.state.filterString;
        let filteredCards = this.state.products;
        console.log(searchString);

        if(searchString !== ""){
            filteredCards = this.state.products.filter((item) => {
                return item.name == searchString;
            });
        }
        if(filterString!==undefined && filterString !== ""){
            filteredCards = this.state.products.filter((item) => {
                return item.category == filterString;
            });
        }

        let cards = filteredCards.map((item, index) => {
                return (
                    <ProductCard key={index} data = {item} ></ProductCard>
                )
        });
        return cards;

    }
    render() {

       /*  const craeteCardList =
            this.state.products.map((item, index) => {
                return <ProductCard key={index} data={item} ></ProductCard>
            }); */
            
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-10"><Search searchHandler = {this.searchHandler} /></div>
                    <div className="col-sm-2"><Sorting /></div>
                </div>

                <div className="row">
                    <div className="col-sm-2"><Filter filterHandler = {this.filterHandler} /></div>
                    <div className="col-sm-10">{this.createCardList()}</div>
                </div>
            </React.Fragment>
        )
    }
}