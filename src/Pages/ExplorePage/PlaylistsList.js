import React from 'react';
import PlaylistItem from './PlaylistItem';

const PlaylistsList = ({playlists}) => {
    const renderedPlaylists =  playlists.map((playlist) => {
        console.log(playlist.id.playlistId);
        return <PlaylistItem key={JSON.stringify(playlist.id.playlistId)} playlist={playlist}/>
    });
    return <div className='list'>{renderedPlaylists}</div>;
};

export default PlaylistsList;