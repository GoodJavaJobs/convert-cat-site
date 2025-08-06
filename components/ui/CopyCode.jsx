import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

function CopyCode({ label, code }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code Copied");
  };

  return (
    <div className="bg-black text-white text-[12px]  rounded-md">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="font-bold  text-lime-300">{label}</div>
        <div className="text-gray-300 cursor-pointer">
          <FaCopy size={14} onClick={copyToClipboard} />
        </div>
      </div>

      <div className="px-4 pb-2 max-h-[50px] overflow-y-auto">{code}</div>
    </div>
  );
}

export default CopyCode;
