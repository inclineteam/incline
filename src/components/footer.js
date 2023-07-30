import Image from 'next/image'
import Link from 'next/link'
import MobileNavLinks from './mobile-nav-links'
import { links } from '@/data/links'
import { CursorClick } from '@phosphor-icons/react'

const Footer = () => {
	return (
		<footer className='pt-10 pb-20 w-full border-t text-sm border-[#271F3C] mx-auto'>
			<div className="max-w-7xl lg:flex lg:items-start mx-auto px-10">
				<div className="flex items-center text-[#958AB2] space-x-4">
					<Image src='/logo.svg' width={40} height={40} />
					<p className='leading-relaxed'>© 2023 Incline Team. <br /> All rights reserved.</p>
				</div>

				<div className='ml-14 lg:ml-20 flex pt-14 lg:pt-0 space-x-10 lg:space-x-20 flex-wrap'>
					<div>
						<p className='text-white mb-4 font-medium'>Links</p>
						<div className="flex space-y-3 flex-col">
							{links.map((link, i) => (
								<Link key={i} href={link.to} className='text-[#958AB2] hover:text-white'>{link.name}</Link>
							))}
						</div>
					</div>

					<div>
						<p className='text-white mb-4 font-medium'>Socials</p>
						<div className="flex space-y-3 flex-col">
								<a href="https://www.facebook.com/inclineteam" target="_blank" className='text-[#958AB2] hover:text-white'>Facebook</a>
								<a href="https://github.com/inclineteam" target="_blank" className='text-[#958AB2] hover:text-white'>Github</a>
								<a href="https://twitter.com/inclineteam_" target="_blank" className='text-[#958AB2] hover:text-white'>Twitter</a>
								<a href="https://www.linkedin.com/company/96308721" target="_blank" className='text-[#958AB2] hover:text-white'>LinkedIn</a>
						</div>
					</div>

										<div>
						<p className='text-white mb-4 font-medium'>Resources</p>
						<div className="flex space-y-3 flex-col">
								<a href="https://github.com/inclineteam" target="_blank" className='text-[#958AB2] hover:text-white'>Open Source</a>
								<a href="https://github.com/inclineteam" target="_blank" className='text-[#958AB2] hover:text-white'>Contribute</a>
								<a href="/" className='text-[#958AB2] hover:text-white'>Newsletter</a>
						</div>
					</div>

										<div>
						<p className='text-white mb-4 font-medium'>Help</p>
						<div className="flex space-y-3 flex-col">
								<a href="/" className='text-[#958AB2] hover:text-white'>Customer Service</a>
								<a href="/" className='text-[#958AB2] hover:text-white'>Privacy Policy</a>
								<a href="/" className='text-[#958AB2] hover:text-white'>Terms of Service</a>
						</div>
					</div>
				</div>
			
			<button className="mt-10 ml-14 lg:mt-0 lg:ml-auto flex select-none bg-[#E2C16B] text-[#160e27] text-sm items-center space-x-2 px-4 py-1.5 rounded-full">
              <span className="font-semibold">Get in touch</span>
              <CursorClick weight="fill" />
            </button>
			</div>
		</footer>
	)
}

export default Footer