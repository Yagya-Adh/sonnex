interface VideoEmbedProps {
  src: string;
  title: string;
}

const VideoComponent = ({ src, title }: VideoEmbedProps) => {
  return (
    <iframe
      src={src}
      frameBorder="0"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
      }}
      allow="autoplay; encrypted-media"
      allowFullScreen
      title={title}
    ></iframe>
  );
};

export default VideoComponent;
