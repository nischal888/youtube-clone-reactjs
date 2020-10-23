import React from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { hideModal } from "../../actions";

class ErrorHandle extends React.Component {
  closeModal = () => {
    this.props.hideModal();
  };
  render() {
    const { errorStatus, errorData } = this.props;
    return (
      <div>
        <Modal visible={errorStatus} onCancel={this.closeModal} footer={null}>
          <p>{errorData}</p>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = ({ ErrorHandleReducer }) => {
  return {
    errorStatus: ErrorHandleReducer.errorStatus,
    errorData: ErrorHandleReducer.errorData,
  };
};
const mapDispatchToProps = {
  hideModal,
};
export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandle);
