import React from "react";
import "../styles/Reels.css";
import { FiHeart, FiBookmark, FiMessageCircle } from "react-icons/fi";
import { BottomNav } from "../components/BottomNav";

export default function ReelView() {
  return (
    <main className="reel-page">
      <div className="reel-video-area">
        <div className="reel-video-placeholder">video</div>
        <div className="reel-icons">
          <button className="reel-icon-btn" aria-label="Like">
            <FiHeart size={28} />
            <span className="reel-icon-label">like</span>
          </button>
          <button className="reel-icon-btn" aria-label="Save">
            <FiBookmark size={24} />
            <span className="reel-icon-label">save-0</span>
          </button>
          <button className="reel-icon-btn" aria-label="Comments">
            <FiMessageCircle size={24} />
            <span className="reel-icon-label">comments-0</span>
          </button>
        </div>
        <div className="reel-desc-row">
          <span className="reel-description">description</span>
          <button className="visit-store-btn">visit store</button>
        </div>
      </div>
      <BottomNav active="home" />
    </main>
  );
}
