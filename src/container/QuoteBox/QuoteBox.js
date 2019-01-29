import React, { Component } from 'react';
import './QuoteBox.css';

class QuoteBox extends Component{
    render(){
        return (
            <div id="quote-box">
            <div id="text">
                <h2>Lorem Ipsum Lorem IpsumLorem IpsumLorem </h2>
                </div>
                 <p id="author">hasdsahdjuashduihasidi</p>
        <div id="tweet-quote">
            <button className="new-quote1">New</button>
            </div>
            <div id="new-quote1">
            <button className="new-quote1">Old</button>
            </div>
            <div id="new-quote"><button className="new-quote1">Old</button></div>
             </div>
      
        )
    }

}

export default QuoteBox;