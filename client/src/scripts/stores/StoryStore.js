'use strict';

import { Store } from 'flummox';
import Immutable from 'immutable';

export class StoryStore extends Store {

  constructor(flux) {
    super();

    this.state = {stories: Immutable.Map()};

    class StoryRecord extends Immutable.Record({id: null, title: null, body: null, abstract: null})
    {
      label()
      {
        return this.get('title');
      }
    }

    /*
     Registering action handlers
     */

    const actionIds = flux.getActionIds('stories');

    this.register(actionIds.fetchStories, (stories) => {

      let storiesMap = Immutable.Map();
      for (let story of stories) {
        storiesMap = storiesMap.set(story.id, new StoryRecord(story));
      }
      this.setState({stories: this.state.stories.merge(storiesMap)});
    });

  }

  getStories() {
    return this.state.stories;
  }
}
