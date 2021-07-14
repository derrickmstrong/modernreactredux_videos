import React, { Component } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  fetchData = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    // console.log(response.data.items)
    this.setState({
      // Set videos on fetch
      videos: response.data.items,
      // Set default selected video on new search term entry
      selectedVideo: response.data.items[0],
    });
  };

  selectedVideo = (video) => {
    console.log('From the app', video);
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    // Set default search term on app load
    this.fetchData('Andre 3000');
  }
  
  render() {
    console.log(this.state.videos);
    console.log(this.state.selectedVideo);
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.fetchData} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                selectedVideo={this.selectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
