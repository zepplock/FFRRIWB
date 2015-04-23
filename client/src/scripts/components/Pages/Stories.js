'use strict';

import React from 'react/addons';
import UIPageHeader from '../PageHeader';

require('./stories.scss');

let StoriesPage = React.createClass({

    componentWillMount() {
        this.props.flux.getStore('stories').addListener('change', this.onStoryStoreChange);
        this.props.flux.getActions('stories').fetchStories();
    },

    componentWillUnmount() { this.props.flux.getStore('stories').removeListener('change', this.onStoryStoreChange); },

    onStoryStoreChange() { this.setState({ stories: this.props.flux.getStore('stories').getStories() }); },

    render() {
        return (
            <div>
                <UIPageHeader icon="star" text='Stories' />
                {this.props.stories && this.props.stories.map((story) =>
                  <div>
                    <h3 className='story__title'>{story.title}</h3>
                    <p className='story__abstract'>{story.abstract}</p>
                  </div>
                ).toJS()}
            </div>
        );
    }

});

module.exports = StoriesPage;
