import React, { Component } from 'react';
 //ontAwesome = require('react-fontawesome');
//  import FontAwesome from 'react-fontawesome'
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  import { faCoffee } from '@fortawesome/free-solid-svg-icons'




import axios from "axios";
import './QuoteBox.css';

class QuoteBox extends Component{
    constructor(props){
        super(props)
    this.colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    }
    state= {
        "quoteText": "Loading...",
        "author": "Loading...",
        "color": "",
        "colornum": 0
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
               for(var i=0;i< this.colorArray.length;i++){
                console.log(this.state.colornum, i)
                   if( i === this.state.colornum || this.state.colornum === this.colorArray.length){
                       if( this.state.colornum !== 50){
                       this.setState({
                           "color":  this.colorArray[i],
                           "colornum": ++i,
                            "quoteText": response.data.quoteText,
                           "author": response.data.quoteAuthor
                       })
                       break;
                   }else{
                        this.setState({
                            "colornum": 0
                        })
                       
                   }
               }
            }
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
            <div className="main-container" style={{"backgroundColor": this.state.color}}>
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
             </div>
      
        )
    }

}

export default QuoteBox;
