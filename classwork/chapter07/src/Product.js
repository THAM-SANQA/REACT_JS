import React, { Component } from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';

class Product extends Component {
    ////code commented out as it is a useless constructor
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.data.imageUrl} />
                    <Card.Body>
                        <h5>{this.props.data.productName}</h5>
                        {this.props.data.releasedDate}
                        <Rating
                            rating={this.props.data.rating}
                            //numOfReviews={this.props.data.numOfReviews}
                        />
                        <p>Reviews: {this.props.data.numOfReviews}</p>
                        <p>{this.props.data.description}</p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Product;