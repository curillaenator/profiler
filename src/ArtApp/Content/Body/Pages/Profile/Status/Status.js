import React from "react";
import styles from "./status.module.scss";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  editModeON = () => {
    this.setState({ editMode: true });
  };

  editModeOFF = () => {
    this.setState({ editMode: false });
    this.props.updateMyStatus(this.state.status); //Обновление статуса через PUT
  };

  onStatusChange = (e) => this.setState({ status: e.target.value });

  componentDidUpdate(prevP, prevS) {
    if (prevP.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div className={styles.status}>
        {this.state.editMode ? (
          <input
            className={styles.input}
            value={this.state.status}
            autoFocus={true}
            onInput={this.onStatusChange}
            onBlur={this.editModeOFF}
          />
        ) : (
          <div className={styles.string} onDoubleClick={this.editModeON}>
            {this.props.status || "напиши что нибудь"}
          </div>
        )}
      </div>
    );
  }
}
export default Status;
