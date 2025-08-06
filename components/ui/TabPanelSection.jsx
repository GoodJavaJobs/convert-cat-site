function TabPanelSection({ children, title, disableBorder }) {
  return (
    <div
      className={`mb-8 ${disableBorder ? "" : "border-b border-black pb-10"}`}
    >
      <div className="font-bold underline mb-4 ">{title}</div>
      <div className="tool-input-container">{children}</div>
    </div>
  );
}

export default TabPanelSection;
