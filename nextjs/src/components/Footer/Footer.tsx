import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white bottom-0 flex  justify-center mt-10 h-40">
      <div className="text-center mt-5">
        <h1>Follow Us On</h1>
        <div className="flex space-x-4 text-center justify-center mt-2">
          <Link href="https://www.instagram.com/laxmantrades/" target="_blank">
            {" "}
            <Instagram className="w-10 h-8" />
          </Link>

          <a
            href={"https://t.me/+SNQ8nJ6uvzYzYzhl"}
            target="_blank"
            className="border rounded-full p-1"
          >
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
          <a
            href={"https://www.tiktok.com/@laxmantrades"}
            target="_blank"
            className="border rounded-full p-1"
          >
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
          <a  href={"https://www.facebook.com/profile.php?id=61559492901273"}
            target="_blank"
            className="border rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
             
            >
              <g
                fill="#1561e2"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                className="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>

        <h1 className="mt-5">@2025 ALL Right Reserverd ForexForNepal.com</h1>
      </div>
    </div>
  );
};
export default Footer;
