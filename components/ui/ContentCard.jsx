// components/ui/Card.js
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ContentCard({ image, title, description, href }) {
  return (
    <Link href={href} className="block">
      <div className="border-2 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer">
        {image && (
          <img src={image} alt={title} className="w-full h-40 object-cover" />
        )}
        <div className="p-4 border-t-2">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="flex items-center gap-2 mt-4 text-[#0F2EED] font-bold">
            Get Code{" "}
            <div className="mt-[2px]">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
