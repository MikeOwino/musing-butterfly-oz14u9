import "./styles.css";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="App">
      <video
        id="my_video_1"
        className="video-js vjs-default-skin"
        controls
        preload="none"
        width="1000px"
        height="560px"
        data-setup="{}"
        poster="http://video-js.zencoder.com/oceans-clip.jpg"
      >
        <source
          src="https://go.wootly.ch/dash?source=web&id=2ea530305724395861737fae57651efa2897348f&sig=F5cp5qDN8SaBYipw73z1Ag&expire=1649195906&ofs=11&usr=163262"
          type="video/mp4"
        />
        <source
          src="https://go.wootly.ch/dash?source=web&id=2ea530305724395861737fae57651efa2897348f&sig=F5cp5qDN8SaBYipw73z1Ag&expire=1649195906&ofs=11&usr=163262"
          type="video/webm"
        />
      </video>
      <Helmet>
        <script src="https://vjs.zencdn.net/4.0.4/video.js"></script>
      </Helmet>
    </div>
  );
}
