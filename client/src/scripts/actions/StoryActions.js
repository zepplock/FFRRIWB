'use strict';

import { Actions } from 'flummox';
import axios from 'axios';

let serverFetchStories = async function (apiendpoint) {
  let stories = await axios.get(apiendpoint + '/stories');
  return stories.data;
};

export class StoryActions extends Actions {

  constructor(apiendpoint) {
    super();
    this.apiendpoint = apiendpoint;
  }

  async fetchStories() {
    return await serverFetchStories(this.apiendpoint);
  }

}
