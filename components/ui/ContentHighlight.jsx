function ContentHighlight({ children, heading, description }) {
  return (
    <div>
      <div className="my-10">
        <h2 className="font-bold underline ">{heading}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>

      <div className="bg-[#f2f2f2] px-8 py-2 ">
        <div style={{ marginTop: "40px" }}>{children}</div>
      </div>
    </div>
  );
}

export default ContentHighlight;
