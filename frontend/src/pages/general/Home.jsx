import React, { useState, useEffect, useRef } from "react";
import "../../styles/Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VideoItem = ({ video, onVisitStore }) => {
  return (
    <div className="video-item">
      <video src={video.videoUrl} loop muted playsInline autoPlay />
      <div className="video-overlay">
        <p className="video-description">{video.description}</p>
        <button
          className="visit-store-btn"
          onClick={() => onVisitStore(video.storeId)}
        >
          Visit Store
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const [videos, setVideos] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/food");
  });
  // Example data - replace with actual API call
  useEffect(() => {
    // Simulate fetching videos
    setVideos([
      {
        id: 1,
        videoUrl:
          "https://ik.imagekit.io/ihetkdnj4/16e1f2af-7765-42eb-be6f-d65e094111ed_uz3t1C2mz",
        description:
          "Delicious burgers and fries made fresh daily. Try our special sauce that everyone's talking about!",
        storeId: "store1",
      },
      {
        id: 2,
        videoUrl:
          "https://ik.imagekit.io/ihetkdnj4/16e1f2af-7765-42eb-be6f-d65e094111ed_uz3t1C2mz",
        description:
          "Authentic Italian pizza made in wood-fired oven. Fresh ingredients imported from Italy.",
        storeId: "store2",
      },
      // Add more videos as needed
    ]);
  }, []);

  const handleVisitStore = (storeId) => {
    // Navigate to store page
    console.log(`Visiting store: ${storeId}`);
    // Add your navigation logic here
  };

  return (
    <div className="video-container" ref={containerRef}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVisitStore={handleVisitStore}
        />
      ))}
    </div>
  );
};

export default Home;
