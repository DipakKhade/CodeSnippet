import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
	const navItems = [
		{ label: "Home", href: "/" },
		{
			label: "About",
			href: "https://protfolio-with-next-js.vercel.app/contact",
		},
		{ label: "Github", href: "https://github.com/DipakKhade" },
	];

	return (
		<div className="border w-full h-16  bg-slate-100 dark:bg-slate-900 ">
			<ul className="flex gap-7 justify-center cursor-pointer">
				{navItems.map((item, index) => (
					<li key={index} className="pt-5">
						<a href={item.href} target="_blanck">
							{item.label}
						</a>
					</li>
				))}
				<div className="flex gap-7 justify-center pt-3 cursor-pointer">
					<ModeToggle />
				</div>
			</ul>
		</div>
	);
};

export default Header;
