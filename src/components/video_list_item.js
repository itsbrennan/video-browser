import React from 'react';

const VideoListItem = ({video, onVideoSelect})=> {
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect; - this is the same as passing the properties like above
    
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick = {()=> onVideoSelect(video)} className = "list-group-item">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" alt = "thumbnail" src = {imageUrl}/>
                </div>
                <div className = "media-body">
                    <div className = "media-heading">{video.snippet.title}</div>
                </div>
            </div>
            
        </li>
    );
};

export default VideoListItem;
