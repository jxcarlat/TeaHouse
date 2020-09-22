import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';




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