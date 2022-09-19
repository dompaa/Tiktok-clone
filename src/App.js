import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    //BEM naming convention
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            //all information pulling from db
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
        {/* deleted */}
        {/* <Video
          url="https://v77.tiktokcdn.com/3b29de37e5b6d743b3f8d2a07dccec8e/6021bda3/video/tos/alisg/tos-alisg-pve-0037c001/4b0a101e948140e1aba4387904b3b685/?a=1233&br=528&bt=264&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021020816385401018806121043144BD3&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=amc2NGw1ZzRoeTMzZzczM0ApZGZlZzc7NmQ3N2loZDdnO2cxYWtfb2sxZWJfLS0xMTRzc2M1Ml4uMTQxMy5fLS82Yy46Yw%3D%3D&vl=&vr="
          channel="dompa"
          description="nice job, works"
          song="ez react"
          likes={123}
          messages={456}
          shares={789}
        />

        <Video
          url="https://v77.tiktokcdn.com/b1deadf2ab9471bbd13516c08e212355/6021f859/video/tos/useast2a/tos-useast2a-ve-0068c004/599ad8d9b4334115ba7e963845a775f9/?a=1233&br=890&bt=445&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021020820490201019020804728147561&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=anh4PGVzbWZuMzMzNTczM0ApZjhmaTc0aGVnN2hoPGk0OGdpcHJncW1uc2RgLS0wMTZzc18yYTUxYjJhNi8uYzQ1NWE6Yw%3D%3D&vl=&vr="
          channel="o7"
          description="nice job, works"
          song="ez react"
          likes={453}
          messages={222}
          shares={888}
        /> */}
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
