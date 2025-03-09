const VideoComponent = () => {
  return (
    <div className="relative pb-[56.25%] w-full">
      <iframe
        className="absolute w-full h-full"
        src="https://www.youtube.com/embed/19g66ezsKAg "
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoComponent;
