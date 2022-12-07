import React from "react";
const TopArtistsResults = ({ artistArray }) => {
  return (
    <>
      <h1>Top Artists</h1>
      <div className="list-group">
        {artistArray.map((artist, index) => (
          <div className="list-group-item" key={index}>
            <h2>
              {index + 1}. {artist.name}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default TopArtistsResults;
