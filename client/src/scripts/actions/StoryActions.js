'use strict';

import { Actions } from 'flummox';
import axios from 'axios';

let serverFetchStories = async function () {
  let stories = await axios.get('stories');
  return stories.data;
};

export class StoryActions extends Actions {

  constructor() {
    super();
  }

  async fetchStories() {
    return await serverFetchStories();
  }

}
