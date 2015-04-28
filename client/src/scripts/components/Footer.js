'use strict';

import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <br/>
          <p className="text-muted">
            <a href="https://github.com/zepplock/FFRRIWB">Browse the code on <i className="fa fa-github"></i> GitHub</a>
          </p>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
