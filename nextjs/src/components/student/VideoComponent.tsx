interface VideoUrl{
  videoUrl:string
}


const VideoComponent:React.FC<VideoUrl> = ({videoUrl}) => {
  return (
    <div className="relative pb-[56.25%] w-full">
      <iframe
        className="absolute w-full h-full"
        src={videoUrl||""}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoComponent;
