import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teas: [
                {
                    id: 0,
                    name: 'Black Tea',
                    image: 'assets/images/black-tea.jpg',
                    description: "Have some tea"
                },
                {
                    id: 1,
                    name: 'White Tea',
                    image: 'assets/images/white-tea.jpg',
                    description: "Have some more tea"
                },
                {
                    id: 2,
                    name: 'Ginseng Tea',
                    image: 'assets/images/ginseng-tea.jpg',
                    description: "Even more tea"
                },
                {
                    id: 3,
                    name: 'Green Tea',
                    image: 'assets/images/green-tea.jpg',
                    description: "Also more tea"
                },
                {
                    id: 4,
                    name: 'Oolong Tea',
                    image: 'assets/images/oolong-tea.jpg',
                    description: "More tea for you"
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