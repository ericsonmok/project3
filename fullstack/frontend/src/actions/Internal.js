import axios from 'axios';

export const searchTerm = (text) => {
  return {
    type: 'UPDATE_SEARCH_TERM',
    text
  }
}