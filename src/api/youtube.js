import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 7,
    // TODO: Remember to stop and restart React App so this .env variable will be recognized otherwise it will come back 'undefined'
    // TODO: Remember to add additional ip addresses and/or domains in console.developers.google.com otherwise this key will not work
    key: `${process.env.REACT_APP_YOUTUBE_API}`,
  },
});
