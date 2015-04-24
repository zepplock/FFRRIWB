'use strict';

import React from '../../../node_modules/react/addons';

let PageHeader = React.createClass({
  render() {
    return (
      <div>
        <h2 className="pageheader"><i className={'fa fa-' + this.props.icon }></i> {this.props.text}</h2>
        <hr />
      </div>
    );
  }
});

module.exports = PageHeader;
