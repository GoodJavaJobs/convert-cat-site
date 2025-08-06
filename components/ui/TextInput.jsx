function TextInput({ label, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        className="border border-gray-300 rounded-md p-2 bg-white text-black"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
