import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from '../video_item/VideoItem';
import styles from './videoList.module.css'

const VideoList = () => {
  const REACT_APP_API_KEY = 'AIzaSyC_ze-a9UX_YPmczk-isbhbnCDetuLr910';
  const [listOfVideos, setListofVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${REACT_APP_API_KEY}`)
      .then((response) => {
        const videos = response.data.items;
        setListofVideos(videos);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log('list', listOfVideos);

  const VideoCards = listOfVideos.map((item) => {
    return <VideoCard key={item.id} video={item} />;
  });

  return <div className={styles.main_container}>{VideoCards}</div>;
};
export default VideoList;
