import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videos, selectedVideo }) => {
  return (
    <div>
      {videos.map((video) => {
        return (
          <div
            onClick={() => selectedVideo(video)}
            key={video.id.videoId}
            className='ui list celled'>
            <div className='video-item item'>
              <img
                className='ui image'
                src={video.snippet.thumbnails.default.url}
                alt=''
              />
              <div className='content'>
                <div className='header'>{video.snippet.title}</div>
                <div className='description'>{`${video.snippet.description.slice(
                  0,
                  50
                )}...`}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoItem;
