import React, { Component } from 'react'
import '../styles/Newsitem.css'
import imgNotFound from '../styles/noImgAvailable.jpg'


export default class Newsitem extends Component {



    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card mx-3 my-3" >
                    <img src={imgUrl === null ? imgNotFound : imgUrl} className="card-img-top" alt="..." style={{ maxHeight: '30vh' }} />

                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description === null ? 'Description is not Available' : `${description}...`}</p>
                        <em className="my-2">by {this.props.author ? `${this.props.author} ` : 'anonymous '}
                            <span class="badge rounded-pill bg-danger"> {this.props.source}</span>
                        </em>
                        <div className="text-center my-3">
                            <a href={newsUrl} className="btn btn-dark btn-sm "> <strong>View in Details</strong> </a>
                        </div>
                        <div className="my-4 text-center">
                            <strong>{this.props.time}</strong>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
