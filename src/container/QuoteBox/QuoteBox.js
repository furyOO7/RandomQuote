import React, { Component } from 'react';
 //ontAwesome = require('react-fontawesome');
//  import FontAwesome from 'react-fontawesome'
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  import { faCoffee } from '@fortawesome/free-solid-svg-icons'




import axios from "axios";
import './QuoteBox.css';

class QuoteBox extends Component{
    // constructor(props){
    //     super(props)
    // }
    state= {
        "quoteText": "Loading...",
        "author": "Loading..."
    }
    componentDidMount(){
       this.getQuoteHandler();
    }
    getQuoteHandler = () => {
        const param = {
            "method": "getQuote",
            "format": "json",
            "jsonp": "parseQuote",
            "lang": "en"

        };

        axios.get('http://api.forismatic.com/api/1.0/', {params: param}).then((response) => {
            //console.log(response)
            if(response.status === 200 && (typeof response.data == 'object')){
                this.setState({
                    "quoteText": response.data.quoteText,
                    "author": response.data.quoteAuthor
                })
            }
            else{
                this.setState({
                    "quoteText": "We are tired!!. Please hit the button again to get Quote.",
                    "author": "Adarsh"
                })
            }
        })
        .catch(function(error){
            console.log("error", error)
        })
    }
    newQuoteHandler = ()=> {
        this.getQuoteHandler();
    }

    postSocialMedia = () => {
       alert("posting is under work")
    }

    render(){
        return (
            <div id="quote-box">

            <div id="text">
                <h2>{this.state.quoteText}</h2>
                </div>
                 <p id="author"><strong><i>-- {this.state.author}</i></strong></p>
        <div id="tweet-quote">
            <button className="new-quote1" onClick={this.postSocialMedia}><i className="fa fa-twitter"></i></button>
            </div>
            <div id="new-quote1">
            <button className="new-quote1" onClick={this.postSocialMedia}><i className="fa fa-facebook"></i></button>
            </div>
            <div id="new-quote" onClick={this.newQuoteHandler}><button className="new-quote1 addclass">New Quote</button></div>
             </div>
      
        )
    }

}

export default QuoteBox;
