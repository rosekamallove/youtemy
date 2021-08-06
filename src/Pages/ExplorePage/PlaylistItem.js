import React from 'react';
import './ExplorePage.css';
import {Link} from "react-router-dom";

const PlaylistItem = ({key, playlist}) => {
    return (
        <div>
            <Link
            to={{
                pathname: "/video-player",
                playlistID: key,
            }}>
                <img className='ui image' src={playlist.snippet.thumbnails.default.url} alt={playlist.snippet.description}/>
                <h4 className='header '>{playlist.snippet.title}</h4>
            </Link>
            <div className="channel-name">{playlist.snippet.channelTitle}</div>
            <br/><br/>
        </div>
    )
};
export default PlaylistItem;