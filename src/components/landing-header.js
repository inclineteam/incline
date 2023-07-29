import { CursorClick } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LandingHeader = ({ openMobileNav, setOpenMobileNav }) => {

	return (
		<header
			className={`z-[60] sticky duration-300 top-10 overflow-hidden mx-auto px-3 -mx-4 py-2 rounded-full flex items-center backdrop-blur-lg justify-between ${
				openMobileNav ? "bg-white/10 top-28" : "top-6"
			}`}
		>
			<Link href="/" className="flex items-center space-x-3">
				<Image src="/logo.svg" alt="" height={30} width={30} />
				<h1 className="text-2xl tracking-tight font-medium text-white">
					Incline
				</h1>
			</Link>

			<nav className="hidden md:flex space-x-10 items-center absolute left-1/2 -translate-x-1/2">
				<Link
					href="/about"
					className="text-white text-sm font-medium hover:text-[#e2c16b]"
				>
					About
				</Link>
				<Link
					href="/"
					className="text-white text-sm font-medium hover:text-[#e2c16b]"
				>
					Services
				</Link>
				<Link
					href="/projects"
					className="text-white text-sm font-medium hover:text-[#e2c16b]"
				>
					Projects
				</Link>
				<Link
					href="/blogs"
					className="text-white text-sm font-medium hover:text-[#e2c16b]"
				>
					Blogs
				</Link>
			</nav>

			<button className="hidden md:flex select-none bg-[#E2C16B] text-[#160e27] text-sm items-center space-x-2 relative px-4 py-1.5 rounded-full">
				<span className="font-semibold relative">Get in touch</span>
				<CursorClick weight="fill" className="relative" />
			</button>

			<button
				onClick={() => setOpenMobileNav(!openMobileNav)}
				className={`md:hidden relative h-[30px] w-[30px] duration-300 items-center justify-center flex flex-col rounded-full ${
					openMobileNav ? "bg-white/10" : null
				}`}
			>
				<div>
					<div
						className={`right-2 h-0.5 w-5 duration-150 bg-white ${
							openMobileNav && "-rotate-45 translate-y-[3px]"
						}`}
					></div>
					<div
						className={`right-2 duration-150 h-0.5 w-5 mt-1 bg-white ${
							openMobileNav && "-translate-y-[3px] rotate-45"
						}`}
					></div>
				</div>
			</button>
		</header>
	);
};

export default LandingHeader;
