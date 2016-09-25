const React = require('react');

class DelayedButton extends React.Component {
  constructor() {
    super();

    this.delayClick = this.delayClick.bind(this);
  }

  delayClick(event) {
    event.persist();
    this.props.onDelayedClick(event)
  }

  render() {
    return (
      <button onClick={this.delayClick}>Click</button>
    );
  }
}

module.exports = DelayedButton;
