import React from 'react';
import styles from './videoItem.module.css';

const VideoCard = ({ video }) => {
  const { snippet } = video;
  console.log(video);
  return (
      <div className={styles.card_container}>
        <img className={styles.img} src={snippet.thumbnails.default.url} alt="thumbnail" />
        <div className={styles.text_container}>
          <div className={styles.title}>{snippet.title}</div>
          <div className=''>{snippet.channelTitle}</div>
        </div>
      </div>
  );
};

export default VideoCard;
