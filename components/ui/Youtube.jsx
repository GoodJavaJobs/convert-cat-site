import EmailCaptureForm from "./EmailCaptureForm";

function Youtube({ videoID }) {
  return (
    <>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <EmailCaptureForm />
    </>
  );
}

export default Youtube;
