import React from 'react';

class PropsWithClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello PropsWithClassComponent  </h3>
                <h2>{this.props.name} - {this.props.last}</h2>
            </div>
        );
    }
}

export default PropsWithClassComponent;