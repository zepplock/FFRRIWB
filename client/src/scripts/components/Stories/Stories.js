'use strict';

import React from '../../../../node_modules/react/addons';
import UIPageHeader from '../PageHeader';
import Story from './Story';

let StoriesPage = React.createClass({

  componentWillMount() {
    this.props.flux.getStore('stories').addListener('change', this.onStoryStoreChange);
    this.props.flux.getActions('stories').fetchStories();
  },

  componentWillUnmount() {
    this.props.flux.getStore('stories').removeListener('change', this.onStoryStoreChange);
  },

  onStoryStoreChange() {
    this.setState({stories: this.props.flux.getStore('stories').getStories()});
  },

  render() {
    return (
      <div>
        <UIPageHeader icon="star" text='Stories'/>
        <ul>
          {this.props.stories.map(function(story) {
              return <Story key={story.id} story={story}/>;
            }).toJS()}
        </ul>
      </div>
    );
  }

});

module.exports = StoriesPage;
