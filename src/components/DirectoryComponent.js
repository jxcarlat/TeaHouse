import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTea: null
        };
    }

    onTeaSelect(tea) {
        this.setState({selectedTea: tea});
    }

    renderSelectedTea(tea) {
        if(tea) {
            return (
                <Card>
                    <CardImg top src={tea.image} alt={tea.name} />
                    <CardBody>
                        <CardTitle>{tea.name}</CardTitle>
                        <CardText>{tea.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />
    }

    render() {
        const directory = this.props.teas.map(tea => {
        return (
            <div key={tea.id} className="col-md-5 m-1">
                <Card onClick={() => this.onTeaSelect(tea)}>
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
            <div className="row">
                <div className="col-md-5 m-1">
                    {this.renderSelectedTea(this.state.selectedTea)}
                </div>
            </div>
        </div>
    );
  }
}

export default Directory;