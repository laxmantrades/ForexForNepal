import { NextRequest, NextResponse } from "next/server";

let URI = "";
if (typeof window !== "undefined") {
  URI =
    window.location.hostname === "forexfornepal"
      ? "https://forexfornepal.com/authcheck"
      : "http://localhost:5005/authcheck";
}

export async function middleware(req: NextRequest) {
  try {
    // Inspect headers for debugging

    const allowedPaths = [
      "/courses/67cdb7359d6376aa9395a8e0/lectures",
      "/courses/67d1e09afce33698ada54ae7/lectures",
    ];

    //the current url the user visits
    const pathname = req.nextUrl.pathname;
    //fetching data
    const res = await fetch("http://localhost:5005/authcheck", {
      credentials: "include",
      method: "get",
      headers: { cookie: req.headers.get("cookie") || "" },
    });

    const data = await res.json();
    //if the user is not authenticated
    if (data.authenticated == false) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    //for lectureRoute
    if (allowedPaths.includes(pathname)) {
      const parts = pathname.split("/");

      const isPurchasedCourse = await data?.user?.coursePurhcased?.some(
        (course: string) => course === parts[2]
      );

      if (!isPurchasedCourse) {
        return NextResponse.redirect(new URL(`/courses/${parts[2]}`, req.url));
      }
    }

    //for admin route
    if (pathname.startsWith("/admin")) {
      //if user is not owner send him to /
      if (data.user.role !== "owner") {
        return NextResponse.redirect(new URL("/", req.url));
      }
      //else go go next
      return NextResponse.next();
    }

    //todo display outlook to the user that has purchased the premium course

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.next(); // Ensure request continues
  }
}

export const config = {
  matcher: [
    "/courses",
    "/admin/:path*",
    "/courses/:courseId/:path*",
    "/outlook",
  ], // Specify the routes where middleware should run
};
