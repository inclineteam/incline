import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import LucideMousePointer from '~icons/lucide/mouse-pointer'

const LandingHeader = component$(() => {

	return (
		<header
			class={`z-[60] max-w-7xl mx-auto w-full sticky duration-300 top-10 overflow-hidden mx-auto px-3 py-2 rounded-full flex items-center top-6 backdrop-blur-lg justify-between`}
		>
			<Link href="/" class="flex items-center space-x-3">
				<img src="/logo.svg" alt="Incline" height={30} width={30} />
				<h1 class="text-2xl tracking-tight font-medium text-white">
					Incline
				</h1>
			</Link>

			<nav class="hidden md:flex space-x-10 items-center absolute left-1/2 -translate-x-1/2">
				<Link
					href="/about"
					class="text-white text-sm font-medium hover:text-[#e2c16b]"
				>
					About
				</Link>
				<Link
					href="/services"
					class="text-white text-sm font-medium hover:text-[#e2c16b]"
				>
					Services
				</Link>
				<Link
					href="/projects"
					class="text-white text-sm font-medium hover:text-[#e2c16b]"
				>
					Projects
				</Link>
				<Link
					href="/socials"
					class="text-white text-sm font-medium hover:text-[#e2c16b]"
				>
					Socials
				</Link>
			</nav>

			<button class="hidden md:flex select-none bg-[#E2C16B] text-[#160e27] text-sm items-center space-x-2 relative px-4 py-1.5 rounded-full">
				<span class="font-semibold relative">Get in touch</span>
				<LucideMousePointer class="stroke-2 w-5 h-5 relative" />
			</button>

{/*			<button
				onClick={() => setOpenMobileNav(!openMobileNav)}
				class={`md:hidden relative h-[30px] w-[30px] duration-300 items-center justify-center flex flex-col rounded-full ${
					openMobileNav ? "bg-white/10" : null
				}`}
			>
				<div>
					<div
						class={`right-2 h-0.5 w-5 duration-150 bg-white ${
							openMobileNav && "-rotate-45 translate-y-[3px]"
						}`}
					></div>
					<div
						class={`right-2 duration-150 h-0.5 w-5 mt-1 bg-white ${
							openMobileNav && "-translate-y-[3px] rotate-45"
						}`}
					></div>
				</div>
			</button>*/}
		</header>
	);
});

export default LandingHeader;
