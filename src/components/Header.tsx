import { ModeToggle } from "./ui/mode-toggle";
const Header = () => {
  return (
    <div className="border w-full h-16 fixed bg-slate-100 dark:bg-slate-900">
      <ul className="flex gap-7 justify-center cursor-pointer">
        <li className="pt-5">Home</li>

        <li className="pt-5">About</li>
        <li className="pt-5">Github</li>

        <div className="flex gap-7 justify-center pt-3 cursor-pointer">
         
          <ModeToggle />
        </div>
      </ul>
    </div>
  );
};

export default Header;
