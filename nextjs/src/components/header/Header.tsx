"use client";
import { LogOut, Moon, Sun, UserPen } from "lucide-react";

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
import { changeLoading, userLoggedin } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.auth);

  const AuthCheck = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/authcheck`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.authenticated) {
        dispatch(userLoggedin(response?.data?.user));
        console.log(response);
      }
      const timeout = setTimeout(() => {
        dispatch(changeLoading(false));
      }, 100);
      return () => {
        clearTimeout(timeout);
      };
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        dispatch(changeLoading(false));
      }, 2000);
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
  }, []);

  return (
    <header className="absolute z-10 w-full">
      <div className="flex items-center justify-between    ">
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

        <div className="mr-10 flex items-center justify-center space-x-4">
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

          {!user?.isAuthenticated && (
            <Link href={"/login"} className=" mx-4 text-white">
              <Button className="text-xl cursor-pointer">Sign In</Button>
            </Link>
          )}
          {user?.isAuthenticated && (
            <Link href={"/courses"} className=" mr-4 text-white">
              <Button className="text-xl cursor-pointer ">Courses</Button>
            </Link>
          )}

          {user?.isAuthenticated && (
            <Button className="text-xl cursor-pointer ">Blog</Button>
          )}

          {!user?.isAuthenticated && (
            <Link href={"/signup"} className=" mr-4 text-white">
              <Button className="text-xl cursor-pointer ">Sign Up</Button>
            </Link>
          )}
          {user.isAuthenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  src={user?.user?.photoUrl}
                  className="rounded-full h-10"
                ></img>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Button className=" cursor-pointer " variant={"ghost"}>
                    <UserPen className=" text-black opacity-100" />
                    Profile
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Button
                    onClick={logoutHandler}
                    className=" cursor-pointer  "
                    variant={"ghost"}
                  >
                    <LogOut className="text-black" />
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
