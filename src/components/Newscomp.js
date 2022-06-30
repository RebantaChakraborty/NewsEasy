import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import LoadingSpinner from './LoadingSpinner';
import '../styles/Newscomponent.css'
import PropTypes from 'prop-types';


export default class Newscomp extends Component {


    constructor() {
        super();
        console.log('newsComponent 1')
        this.state = {
            myNews: [],
            loading: false,
            page: 1,
            totalrticles: 0
        }
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ff4d73d3eafc4177baaec8303ec9ee20&page=${this.state.page}&pageSize=6`;
        this.setState({ loading: true });
        // window.scrollTo(0, 0);

        let fetchedData = await fetch(url);
        let jsonData = await (fetchedData.json());
        this.setState({ loading: false });
        console.log(jsonData);
        this.setState({ myNews: jsonData.articles, totalrticles: jsonData.totalResults });


    }
    nextBtnHandler = async () => {
        // this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ff4d73d3eafc4177baaec8303ec9ee20&page=${this.state.page + 1}&pageSize=6`;
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true });
        // window.scrollTo(0, 0);
        this.setState({ myNews: [] })
        let fetchedData = await fetch(url);
        let jsonData = await (fetchedData.json());

        this.setState({ loading: false });
        console.log("next");
        this.setState({ myNews: jsonData.articles, totalrticles: jsonData.totalResults });
    }
    prevBtnHandler = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff4d73d3eafc4177baaec8303ec9ee20&page=${this.state.page - 1}&pageSize=6`;
        this.setState({ page: this.state.page - 1 });
        this.setState({ loading: true });
        // window.scrollTo(0, 0);
        this.setState({ myNews: [] })
        let fetchedData = await fetch(url);

        let jsonData = await (fetchedData.json());
        this.setState({ loading: false });
        this.setState({ myNews: jsonData.articles, totalrticles: jsonData.totalResults });

    }



    render() {

        return (
            <>
                <div className="container my-3">
                    <h2 className='text-center'>Top Headlines-{this.props.category[0].toUpperCase() + this.props.category.slice(1, this.props.category.length)}</h2>
                    <div className="row">
                        {this.state.loading && <div className="container text-center">
                            <LoadingSpinner />
                        </div>}

                        {this.state.totalrticles === 0 ? 'No News! Come back later :) ' : this.state.myNews.map((element) => {
                            return (

                                <div className="col-md-4 my-3" key={element.url}>
                                    <Newsitem title={element.title} description={element.description && element.description.slice(0, 90)} imgUrl={element.urlToImage} newsUrl={element.url}
                                        author={element.author} source={element.source.name} time={new Date(element.publishedAt).toUTCString()} />
                                </div>
                            )
                        })}






                    </div>

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1 ? true : false} id='prevBtn' className="btn btn-dark my-4" onClick={this.prevBtnHandler}>{`<<previous`}</button>
                    <h5 className="text-center my-4 pageNo">Page {this.state.page}</h5>
                    <button type="button" disabled={(this.state.page * 6) >= this.state.totalrticles ? true : false} id='nextBtn' className="btn btn-dark my-4" onClick={this.nextBtnHandler}>{'next>>'}</button>



                </div>
            </>
        )
    }
}
Newscomp.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
};
