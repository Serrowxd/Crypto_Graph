import React from 'react';
import img from '../assets/yoink.jpg';

function FeedEntry() {
  return (
    <div className="feed-item">
      <img src={img} />
      <p>Small Quip</p>
    </div>
  );
}

export default FeedEntry;
