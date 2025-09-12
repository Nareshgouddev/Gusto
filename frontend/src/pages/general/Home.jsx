import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Heart, BookmarkSimple, ChatCircle } from "@phosphor-icons/react";
import "../../styles/Reels.css";
import "../../styles/Home.css";

const Reel = ({ video }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {}); // prevent autoplay errors
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="reel-item">
      <video
        ref={videoRef}
        className="reel-video"
        src={video.videoUrl}
        loop
        muted
        playsInline
        controls={false}
      />
      <div className="overlay-gradient" />
      <div className="reel-actions">
        <div className="action-item">
          <Heart size={32} />
          <span>Like</span>
        </div>
        <div className="action-item">
          <BookmarkSimple size={32} />
          <span>Save</span>
        </div>
        <div className="action-item">
          <ChatCircle size={32} />
          <span>Comments</span>
        </div>
      </div>
      <div className="reel-content">
        <p className="reel-description">{video.description}</p>
        {/* ✅ Navigate to foodpartner/:id */}
        <Link
          to={`/foodpartner/${video.storeId}`}
          className="visit-store-button"
        >
          Visit Store
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/food", {
          withCredentials: true,
        });

        console.log("Backend response:", response.data);

        // ✅ set only the foodItems array
        setReels(response.data.foodItems || []);
      } catch (err) {
        setError("Failed to load reels");
        console.error(
          "❌ Error fetching reels:",
          err.response?.data || err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReels();
  }, []);

  if (loading) return <div className="reels-container">Loading...</div>;
  if (error) return <div className="reels-container">{error}</div>;

  return (
    <div className="reels-container">
      {Array.isArray(reels) && reels.length > 0 ? (
        reels.map((reel) => (
          <Reel
            key={reel._id}
            video={{
              videoUrl: reel.video, // backend `video`
              description: reel.name, // backend `name`
              storeId: reel.foodPartner, // backend `foodPartner`
            }}
          />
        ))
      ) : (
        <div>No reels available</div>
      )}
    </div>
  );
};

export default Home;
