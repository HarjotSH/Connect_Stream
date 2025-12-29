import { useEffect, useRef } from "react";
import type { FC } from "react";

const UserFeedPlayer : FC<{stream?: MediaStream}> = ({stream}) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if(videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    return (
        <video
            ref={videoRef}
            style={{ width: '300px', height: '200px'}}
            muted={true}
            autoPlay
        />
    )
}

export default UserFeedPlayer;