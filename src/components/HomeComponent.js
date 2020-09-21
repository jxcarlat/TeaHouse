import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.src} alt={item.header} />
            <CardBody>
                <CardTitle>{item.header}</CardTitle>
                <CardText>{item.caption}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.tea} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.event} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.room} />
                </div>
            </div>
        </div>
    );
}

export default Home;