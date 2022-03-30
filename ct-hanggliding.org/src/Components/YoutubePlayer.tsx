import React from 'react'
import YouTube, { Options } from 'react-youtube';
import './YoutubePlayer.scss';

type Props = {
    className?: string,
    videoId: string
}


export default function YoutubePlayer({ className = '', videoId }: Props) {
    const opts: Options = {
        // height: '390',
        // width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            loop: 1,
            start: 0,
            rel: 0,
            showinfo: 0
        },
    };

    function _onReady(event: any) { // todo: get proper type
        // access to player in all event handlers via event.target
        // https://developers.google.com/youtube/iframe_api_reference#Events
        event.target.mute();
        event.target.playVideo();
    }

    function _onEnd(event: any) {
        event.target.playVideo();
    }

    return (
        <div className="video-background">
            <div className="video-foreground">
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    className="video-iframe"
                    onReady={_onReady}
                    onEnd={_onEnd}
                />
            </div>
        </div>

    );

}