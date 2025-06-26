import VideoPlayer from "./VideoPlayer";

const App = () => {
  return (
    <section className="container mx-auto mt-10 h-[1000px]">
      <VideoPlayer
        src="https://demo-video.pages.dev/want-to-work.mp4"
        isSticky
      />
    </section>
  );
};

export default App;
