import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image';

export default class CoursesCart extends Component {
    state={
        courses: this.props.courses.edges
    }
    
    
    render() {

        console.log(this.state.courses);
        
        return (
            <div className="container">
                <Heading title="Courses" />
                    <div className="row">
                    {
                        this.state.courses.map(({node}) => (
                            <div key={node.id} className="col-11 col-md-6 my-3">
                                <div className="row">
                                    <div className="col-5">
                                        <Img className="image-custom-cart" fixed={node.image.fixed} />
                                    </div>
                                    <div className="col-7">
                                        <div className="content">
                                            <div className="header">
                                                <h3 className="display-5">{node.title}</h3>
                                                <h3 className="display-5 lead text-success">$ {node.price}</h3>
                                            </div>
                                            <div className="description">
                                                <p className="text-muted">{node.description.description}</p>
                                            </div>
                                            <button
                                                className="btn btn-warning snipcart-add-item"
                                                data-item-id={node.id}
                                                data-item-name={node.title}
                                                data-item-price={node.price}
                                                data-item-url=""
                                                data-item-image={node.image.fixed.src}
                                              >
                                                Join Now
                                            </button>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
