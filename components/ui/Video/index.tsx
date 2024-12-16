function VideoComponent({ video }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] p-4">
          <div className="flex justify-center w-full p-10 rounded-xl bg-[#1d7759]">
            <video
              width="100%"
              height="100%"
              className="aspect-video max-w-[371px] rounded-xl"
              controls
            >
              <source src={video} type="video/mp4" />
              <source src={video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoComponent;
