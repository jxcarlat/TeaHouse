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
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3 id="events">Events</h3>
                    <hr />
                </div>
                <div className="col mt-4">
                    <Media list>
                        {events}
                    </Media>
                </div>
            </div>
            < hr/>
            <div className="row-12">
                <h3 id="menu">Menu and Event Specials/Discounts</h3>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <img src="/assets/images/brunch-menu.jpg" alt="Brunch Menu" />
                </div>
                <div className="col-lg-4">
                    <h3>Surf's Up Crepes and Chai</h3>
                    <p>When you participate in the HM Surf event you can try our limited special HM Surf blueberry crepes ($15) and get a cup of chai tea on the house. Surf's up my dude!</p>
                    <br />
                    <h3>Ocha with some Mocha</h3>
                    <p>Come hang with us during the Ocha event and you can try the new Ocha Mocha Latte available for a limited time (or longer if you guys want, we won't be stingy about it).</p>
                    <br />
                    <h3>Jinsang Jamboree</h3>
                    <p>Everything half-off. Yes we are being completely serious here, we just want you guys to come in and experience this one in a lifetime event with Jinsang, you can thank us later.</p>
                </div>
            </div>
        </div>
    );
}

export default Event;