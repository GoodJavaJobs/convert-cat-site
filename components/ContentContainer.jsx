function ContentContainer({ children, large, medium }) {
  const getWidth = () => {
    if (large) return "markdown-content-width--large";
    if (medium) return "markdown-content-width--medium";
    return "markdown-content-width";
  };

  return (
    <div
      className={`
        max-w-2xl
       mx-auto p-8  ${getWidth()} markdown-content`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
