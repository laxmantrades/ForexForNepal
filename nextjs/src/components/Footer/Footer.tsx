import { Instagram } from "lucide-react";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="bg-black text-white bottom-0 flex  justify-center mt-10 h-40">
      <div className="text-center mt-5">
        <h1>Follow Us On</h1>
        <div className="flex space-x-4 text-center justify-center mt-2">
          <Link href="https://www.instagram.com/laxmantrades/" target="_blank"> <Instagram className="w-10 h-8"/></Link>
         
          <a href={"https://t.me/+SNQ8nJ6uvzYzYzhl"} target="_blank" className="border rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className=""
            >
              <path
                fill="white"
                d="M21.5 3.5L2.5 10.5c-.5.2-.5 1 0 1l5.5 1.5 2 6.5c.1.5.8.7 1.2.3l3-2.9 4.4 3.2c.5.4 1.1.1 1.3-.4L22 4.5c.1-.7-.6-1.2-1.3-1zm-3.8 2.6l-8.7 8.2 1 3.1 2.5-2.4 3.4 2.5z"
              />
            </svg>
          </a>
          <a href={"https://www.tiktok.com/@laxmantrades"} target="_blank" className="border rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2h3.5c.4 2.3 2.2 4 4.5 4V9c-1.7 0-3.4-.6-4.8-1.7v6.2a5.5 5.5 0 1 1-5-5.5V12a2.5 2.5 0 1 0 2.5 2.5V2z"
              />
            </svg>
          </a>
        </div>

        <h1 className="mt-5">@2025 ALL Right Reserverd ForexForNepal.com</h1>
      </div>
      
    </div>
  );
};
export default Footer;
