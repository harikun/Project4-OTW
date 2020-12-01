import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Content extends Component {
    render() {
        const {contents} = this.props;
        const listContent = contents.map(content =>{
            return (
            <div className="row" key={content.id}>
                <div className="col-xl-6 col-md-12">
                    <img className="img-fluid" src={content.gambar} alt="driver otw" srcSet=""/>
                </div>
                <div className="col-xl-6 col-md-12">
                     <h2>{content.caption}</h2>
                     <p>{content.description}</p> 
                     <h5>Follow our instagram <a href="https://www.instagram.com/online_trans_walk/">
                     Online Trans Walk</a> </h5>
                </div>
            </div>      
            )
        })
        return (
            <div>
               {listContent} 
            </div>
        )
    }
}

export default Content
