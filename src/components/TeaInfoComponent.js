import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderTea({tea}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={tea.image} alt={tea.name} /> {/*here is the issue*/}
                <CardBody>
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
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.tea.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.tea.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderTea tea={props.tea} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default TeaInfo;