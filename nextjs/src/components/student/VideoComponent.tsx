interface VideoUrl


const VideoComponent = ({videoUrl:string}) => {
  return (
    <div className="relative pb-[56.25%] w-full">
      <iframe
        className="absolute w-full h-full"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoComponent;
