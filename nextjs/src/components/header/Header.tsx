"use client";
import { Moon, Sun } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { userLoggedin } from "@/redux/reducers/authReducer";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store: RootState) => store.auth);

  const AuthCheck = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/authcheck`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.data.authenticated) return;

      if (response.data.authenticated) {
        dispatch(userLoggedin(response?.data?.userName));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logoutHandler = () => {
    try {
      window.location.href = "http://localhost:5005/logout";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AuthCheck();
  }, [selector]);

  return (
    <header className="absolute z-10 w-full">
      <div className="flex items-center justify-between   ">
        <Link href="/">
          <Image
            className="dark:invert mx-10 p-1"
            src="/REX (1).png"
            alt="Next.js logo"
            width={100}
            height={1}
            priority
          />
        </Link>
        <div className="mr-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
              <DropdownMenuItem>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {!selector?.isAuthenticated && (
            <Link href={"/login"} className=" mx-4 text-white">
              <Button className="text-xl cursor-pointer">Sign In</Button>
            </Link>
          )}
          {selector?.isAuthenticated && (
            <Button onClick={logoutHandler} className="text-xl cursor-pointer">
              Logout
            </Button>
          )}
          {!selector?.isAuthenticated && (
            <Link href={"/signup"} className=" mr-4 text-white">
              <Button className="text-xl cursor-pointer ">Sign Up</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
