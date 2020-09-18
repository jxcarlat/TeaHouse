import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderTea({tea}) {
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
    );
}

function TeaInfo(props) {
    if (props.tea) {
        return (
            <div className="container">
                <div className="row">
                    <RenderTea tea={props.tea} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default TeaInfo;