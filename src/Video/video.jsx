import React from "react";
import { Player, ControlBar } from "video-react";

const Video = ({ files, current, playVideo }) => {
  return (
    <div className="video">
      <div className="links">
        {files &&
          files.map((x, i) => {
            return (
              <div key={x.name}>
                <a
                  key={x.name}
                  onClick={() => playVideo(x.url, x.name)}
                  href="#/#"
                >
                  {x.name}
                </a>
              </div>
            );
          })}
      </div>
      <div className="player">
        <Player src={current} autoPlay>
          <ControlBar autoHide={false} />
        </Player>
      </div>
    </div>
  );
};

export default Video;
