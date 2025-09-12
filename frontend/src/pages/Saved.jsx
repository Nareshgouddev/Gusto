import React from "react";
import { BottomNav } from "../components/BottomNav";

export default function Saved() {
  return (
    <main className="saved-page">
      <div className="saved-content">
        <h1 className="saved-title">Saved Items</h1>
        <p className="saved-empty">No saved items yet.</p>
      </div>
      <BottomNav active="saved" />
    </main>
  );
}
