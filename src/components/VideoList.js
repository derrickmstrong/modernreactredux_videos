import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectedVideo }) => {
  const renderList = (
    <VideoItem videos={videos} selectedVideo={selectedVideo} />
  );
  return <div>{renderList}</div>;
};
export default VideoList;
