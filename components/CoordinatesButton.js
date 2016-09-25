const React = require('react');

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.clickCoordinatesEvent = this.clickCoordinatesEvent.bind(this);
  }

  clickCoordinatesEvent(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.clickCoordinatesEvent}>Click</button>
    );
  }
}

module.exports = CoordinatesButton;
