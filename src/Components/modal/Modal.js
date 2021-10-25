import { Component } from "react";
import PropTypes from "prop-types";
class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img
            src={this.props.largeImageURL}
            alt={this.props.tags}
            className="modal-img"
          />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  // children: PropTypes.node.isRequired,
};
export default Modal;
