import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

const Logo = component$(() => (
	<Link href="/" class="flex w-max items-center space-x-3">
		<Image src="/logo.svg" alt="Incline" height={30} width={30} />
		<h1 class="text-lg tracking-tight font-medium text-white">Incline</h1>
	</Link>
));

export default Logo;
