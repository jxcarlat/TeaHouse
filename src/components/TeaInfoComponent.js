import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class TeaInfo extends Component {

    renderTea(tea) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={tea.image} alt={tea.name} />
                    <CardBody>
                        <CardTitle>{tea.name}</CardTitle>
                        <CardText>{tea.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render() {
        if (this.props.tea) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderTea(this.props.tea)}
                    </div>
                </div>
            );
        }
        return <div />;
    }
}

export default TeaInfo;