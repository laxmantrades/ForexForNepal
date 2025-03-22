import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  try {
   
     // Inspect headers for debugging

    const res = await fetch("http://localhost:5005/authcheck", {
      credentials: "include",
      method:"get"
    });
    // if (!res.ok) {
    //   console.log('Failed to fetch authcheck', res.status);
    //   return NextResponse.redirect(new URL("/login", req.url)); // If not ok, redirect
    // }
    const data=await res.json()
    console.log(await data,"This is data");
    console.log("This is res",res);
  
    

    if(data.authenticated==false){
      return NextResponse.redirect(new URL("/login",req.url))
    }
   
    return NextResponse.next();
  } catch (error) {
    console.log("Error during backend request");
    return NextResponse.next(); // Ensure request continues
  }
}

export const config = {
  matcher: [ "/courses","/admin/:path*",], // Specify the routes where middleware should run
};
