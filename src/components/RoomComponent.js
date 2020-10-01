import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';



function RenderCard({item}) {
    return (
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'translateY(5%)'
        }} duration="300">
            <Card>
                <CardImg src={item.src} alt={item.header} />
                <CardBody>
                    <CardTitle>{item.header}</CardTitle>
                    <CardText>{item.caption}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function Room(props) {
    const rooms = props.rooms.map(currentRoom => {
    return (
                <div className="col-md m-1">
                    <RenderCard item={currentRoom} />
                </div>
    );
});
    return (
        <div className="container">
            <div className="row">
                {rooms}
            </div>
        </div>
    );
}

export default Room;