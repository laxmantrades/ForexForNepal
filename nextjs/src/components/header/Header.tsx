
import { Moon, Sun } from "lucide-react"

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Header = () => {
  return (
    <header className="absolute z-10 w-full">
      <div className="flex items-center justify-between border bg-black  ">
        <Link href="/">
          <Image
            className="dark:invert mx-10 p-1"
            src="/REX.png"
            alt="Next.js logo"
            width={100}
            height={1}
            priority
          />
        </Link>
        <div  className="mr-10">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        <Link href={"/login"} className=" mx-4 text-white"><Button className="text-xl cursor-pointer">Sign In</Button></Link>
        <Link href={"/login"} className=" mr-4 text-white"><Button className="text-xl cursor-pointer ">Sign Up</Button></Link>
      
        </div>
        
       
        
      </div>
    </header>
  );
};
export default Header;
