// import React from "react";
// import { Link } from "react-router-dom";
// import { getAristsTopAlbums } from "../../lastFm/lastFm-service";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

// const ArtistTopAlbumsResults = ({ artistAlbumsArray, artist }) => {
//   const [searchTerm, setSearchTerm] = useState();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAristsTopAlbums(searchTerm));
//   }, [dispatch, searchTerm]);
//   return (
//     <>
//       <h1>Top Hip Albums</h1>
//       <div className="list-group">
//         {artistAlbumsArray.map((album, index) => (
//           <div className="list-group-item" key={index}>
//             <h2>{album.name}</h2>
//             <Link to="">
//               <img src={album.image[2]["#text"]} alt="" />
//             </Link>
//             <h2>By: {album.artist.name}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default ArtistTopAlbumsResults;
