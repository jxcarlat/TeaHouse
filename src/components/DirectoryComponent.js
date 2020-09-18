import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {

    render() {
        const directory = this.props.teas.map(tea => {
        return (
            <div key={tea.id} className="col-md-5 m-1">
                <Card onClick={() => this.props.onClick(tea.id)}>
                    <CardImg width="100%" src={tea.image} alt={tea.name} />
                    <CardImgOverlay>
                        <CardTitle>{tea.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
  }
}

export default Directory;