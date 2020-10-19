import React, { Component } from "react";

class SidebarRow extends Component {
  render() {
    const { title, Icon, selected } = this.props;
    return (
      <div className={`sidebarRow ${selected && "selected"}`}>
        <Icon className="sidebarRow__icon" />
        <h2 className="sidebarRow__title">{title}</h2>
      </div>
    );
  }
}

export default SidebarRow;
