import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teas: [
                {
                    id: 0,
                    name: 'Some Tea Image',
                    image: 'assets/images/black-tea.jpg',
                    elevation: 1233,
                    description: "Have some tea"
                }
            ],
        };
    }

    render() {
        const directory = this.state.teas.map(tea => {
        return (
            <div key={tea.id} className="col">
                <img src={tea.image} alt={tea.name} />
                <h2>{tea.name}</h2>
                <p>{tea.description}</p>
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