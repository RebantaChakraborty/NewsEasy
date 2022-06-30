import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { Component } from 'react'

export default class LoadingSpinner extends Component {
    render() {
        return (
            <Loader type="Bars" color="white" height={80} width={80} />
        )
    }
}
