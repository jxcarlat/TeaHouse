import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({tea, onClick}) {
    return (
        <Card onClick={() => onClick(tea.id)}>
            <CardImg width="100%" src={tea.image} alt={tea.name} />
            <CardImgOverlay>
                <CardTitle>{tea.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.teas.map(tea => {
    return (
        <div key={tea.id} className="col-md-5 m-1">
            <RenderDirectoryItem tea={tea} onClick={props.onClick} />
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

export default Directory;