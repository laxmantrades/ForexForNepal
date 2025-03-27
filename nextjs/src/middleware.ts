import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    // Inspect headers for debugging
    const allowedPaths = [
      "/courses/67cdb7359d6376aa9395a8e0/lectures",
      "/courses/67d1e09afce33698ada54ae7/lectures",
    ];
    const pathname = req.nextUrl.pathname;

    const res = await fetch("http://localhost:5005/authcheck", {
      credentials: "include",
      method: "get",
      headers: { cookie: req.headers.get("cookie") || "" },
    });
    console.log("Headers in middleware:", req.headers);

    const data = await res.json();
    console.log(data, "This is data");
    //console.log("This is res",res);

    if (data.authenticated == false) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if(allowedPaths.includes(pathname)){
      const parts = pathname.split("/");
      const isPurchasedCourse=data?.coursePurhcased?.some((course:string)=>course===parts[2])
      if(!isPurchasedCourse){
        return NextResponse.redirect(new URL(`/courses/${parts[2]}`, req.url));
      }
      
      
    }
    

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.next(); // Ensure request continues
  }
}

export const config = {
  matcher: ["/courses", "/admin/:path*", "/courses/:courseId/:path*"], // Specify the routes where middleware should run
};
