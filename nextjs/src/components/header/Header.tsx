"use client";
import {
  BookOpenText,
  LockKeyhole,
  LogOut,
  Menu,
  Moon,
  MoonIcon,
  Sun,
  UserPen,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import { Separator } from "../ui/separator";
import { User } from "@/types/userTypes";
import { useFetchUserQuery } from "@/redux/api/authenticationApi";
import { Skeleton } from "../ui/skeleton";
//todo sheetclose

const Header = () => {
  const user = useSelector((store: RootState) => store.auth);
  const { isLoading } = useFetchUserQuery(null);

  const logoutHandler = () => {
    try {
      //todo make localhost logout also
      window.location.href = "https://api.forexfornepal.com/logout";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="absolute z-10 w-full bg-white">
      <div className="flex items-center justify-between    ">
        <Link href="/">
          <Image
            className="dark:invert mx-10 p-1 object-cover h-18"
            src="https://res.cloudinary.com/dqrza04p1/image/upload/v1744305052/logo_vztg4g.webp"
            alt="Next.js logo"
            width={100}
            height={1}
            priority
          />
        </Link>

        <div className="mr-10 flex items-center justify-center space-x-4 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <Button variant="outline" size="icon" className="hidden sm:flex">
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

          {isLoading ? (
            <Skeleton className="w-10 h-5" />
          ) : (
            !user?.isAuthenticated && (
              <Link href={"/login"} className=" mx-4 text-white">
                <h1 className="text-xl font-extrabold cursor-pointer  hover:bg-gray-400 hover:rounded hover:px-2 text-black">
                  Sign In
                </h1>
              </Link>
            )
          )}

          {isLoading ? (
            <Skeleton className="w-10 h-5" />
          ) : (
            <Link href={"/courses"} className=" mr-4 text-black">
              <h1 className="text-xl font-extrabold cursor-pointer   hover:bg-gray-400 hover:rounded px-2 hidden sm:block">
                Courses
              </h1>
            </Link>
          )}

          {isLoading ? (
            <Skeleton className="w-10 h-5" />
          ) : (
            user?.isAuthenticated && (
              <Link href={"/outlook"}>
                {" "}
                <h1 className="text-xl font-extrabold cursor-pointer hidden sm:flex  hover:bg-gray-400 hover:rounded px-2">
                  OutLook
                </h1>
              </Link>
            )
          )}

          {isLoading ? (
            <Skeleton className="w-10 h-5" />
          ) : (
            !user?.isAuthenticated && (
              <Link
                href={"/signup"}
                className=" mr-4 text-bloack hidden sm:flex"
              >
                <h1 className="text-xl font-extrabold cursor-pointer  hover:bg-gray-400 hover:rounded px-2">
                  Sign Up
                </h1>
              </Link>
            )
          )}
          {isLoading ? (
            <Skeleton className="w-10 h-5" />
          ) : (
            user.user?.role === "owner" && (
              <Link
                href={"/admin/dashboard"}
                className=" mr-4 text-black hidden sm:block font-extrabold cursor-pointer  hover:bg-gray-400 hover:rounded px-2"
              >
                <h1 className="text-xl cursor-pointer ">Admin</h1>
              </Link>
            )
          )}
          {isLoading ? (
            <Skeleton className="w-10 h-5" />
          ) : (
            user.isAuthenticated && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image
                    src={user?.user?.photoUrl || ""}
                    alt="image"
                    height={9}
                    width={33}
                    className="rounded-full  w-auto h-auto hidden sm:block"
                  />
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
            )
          )}
          <MobileNavBar
            user={user?.user}
            isAuthenticated={user.isAuthenticated}
          />
        </div>
      </div>
      <Separator orientation="horizontal" />
    </header>
  );
};
export default Header;

interface UserPhoto {
  user: User | null;
  isAuthenticated: boolean | null;
}
const MobileNavBar: React.FC<UserPhoto> = ({ user, isAuthenticated }) => {
  return (
    <div className="block sm:hidden">
      <Sheet>
        <SheetTrigger >
         
            {" "}
            {isAuthenticated ? (
              <Image
                src={user?.photoUrl || "laxman.png"}
                alt="image"
                height={10}
                width={40}
                className="rounded-full h-auto w-auto"
              />
            ) : (
              <Menu />
            )}
          
        </SheetTrigger>
       
        <SheetContent>
          <SheetHeader>
            <SheetTitle className=" text-center">
              {isAuthenticated ? (
                <div className="flex text-center">
                  {" "}
                  <Image
                    src={user?.photoUrl || ""}
                    alt="image"
                    height={10}
                    width={40}
                    className="rounded-full h-10 w-auto"
                  />
                  <h1 className="text-center ml-4 mt-2">
                    Welcome {user?.fullName}
                  </h1>
                </div>
              ) : (
                <h1>Menu</h1>
              )}
              <Separator className="mt-2 border-1 bg-black " />
            </SheetTitle>
          
              <SheetDescription className="mt-5 space-y-4">
                {isAuthenticated && (
                  <span className="text-black font-bold text-base flex space-x-3.5">
                    <LogOut className="mr-4" />
                    Blog
                  </span>
                )}{" "}
                 <SheetClose asChild><span className="text-black font-bold text-base flex space-x-3.5 ">
                  <Link href={"/courses"} className="cursor-pointer flex">
                    <BookOpenText className="mr-4" />
                    Courses
                  </Link>
                </span>
                </SheetClose>
                <span className="text-black font-bold text-base flex space-x-3.5 ">
                  <Link href={"/outlook"} className="cursor-pointer flex">
                    <BookOpenText className="mr-4" />
                    OutLook
                  </Link>
                </span>
                {user?.role == "owner" && (
                  <Link href={"/admin/dashboard"} className=" mr-4 text-white ">
                    <span className="text-black font-bold text-base flex space-x-3.5">
                      <LockKeyhole className="mr-4" />
                      Admin
                    </span>
                  </Link>
                )}
                <span className="text-black font-bold text-base flex space-x-3.5">
                  <MoonIcon className="mr-4" />
                  DarkMode
                </span>
                {isAuthenticated && (
                  <span className="text-black font-bold text-base flex space-x-3.5">
                    <Link
                      href={"http://localhost:5005/logout"}
                      className="flex"
                    >
                      {" "}
                      <LogOut className="mr-4 " />
                      LogOut
                    </Link>
                  </span>
                )}
              </SheetDescription>
            
          </SheetHeader>
        </SheetContent>
     
      </Sheet>
    </div>
  );
};
