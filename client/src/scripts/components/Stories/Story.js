'use strict';

import React from 'react';

require('./story.scss');

let Story = React.createClass({

  render() {
    return (
      <div>
        <h3 className='story__title'>{this.props.story.title}</h3>
        <p className='story__abstract'>{this.props.story.abstract}</p>
      </div>
    );
  }

});

module.exports = Story;
