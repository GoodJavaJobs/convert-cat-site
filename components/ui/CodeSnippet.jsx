import { useState } from "react";

export default function CodeSnippet({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative max-h-[200px] overflow-y-auto mt-4 bg-black text-white rounded-xl p-4 font-mono text-sm shadow-lg overflow-x-auto">
      <pre className="whitespace-pre-wrap text-white code">
        <code>{String.raw`${code}`}</code>
      </pre>

      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-md text-xs hover:bg-gray-700 transition"
      >
        {copied ? "Copied ✅" : "Copy"}
      </button>
    </div>
  );
}
