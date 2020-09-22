import React from 'react';
import { Media } from 'reactstrap';

const RenderEvent = ({event}) => {
    if (event) {
        return (
            <React.Fragment>
                <Media object src={event.src} alt={event.header} width={150} />
                <Media body className="ml-5 mb-4">
                    <Media heading>
                       {event.header}
                    </Media>
                    {event.caption}
                </Media>
            </React.Fragment>
        );
    }
    return <div />
}

function Event(props) {

    const events = props.events.map(currentEvent => {
        return (
            <Media tag={"li"} key={currentEvent.id}><RenderEvent event={currentEvent}/></Media>
        );
    });

    return(
    <div className="row row-content">
                <div className="col-12">
                    <h3>Events</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {events}
                    </Media>
                </div>
            </div>
    );
}

export default Event;