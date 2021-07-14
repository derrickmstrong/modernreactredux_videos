import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) return 'Loading...';
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe
          src={videoSrc}
          frameBorder='0'
          title="Video Player"
          width="500"
          height="300" />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
