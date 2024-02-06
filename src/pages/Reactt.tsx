import CreateReactApp from "../components/reactComponents/CreateReactApp";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeProvider from "../components/reactComponents/ThemeProvider";
import { HashLink } from "react-router-hash-link";
import NavbarReact from "../components/reactComponents/NavbarReact";

const Reactt = () => {
  const routeLinks = [
    {
      tag: "create react app",
      id:'createreactapp'
    },
    {
      tag: "ThemeProvider",
      id:'themeprovider'
    },
    {
      tag: "Navbar",
      id:'navbar'
    },
  ];
  return (
    <div className="pt-6">
      <div className="drawer lg:drawer-open p-2">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden cursor-pointer pl-[80vw]"
          >
            <GiHamburgerMenu />
          </label>

          <CreateReactApp />
          <ThemeProvider />
          <NavbarReact/>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-2 w-56 min-h-full bg-slate-100 dark:bg-slate-900 pt-24 sticky">
            {/* Sidebar content here */}
            {routeLinks.map((l,index) => (
              <li key={index}>
                <HashLink
                  className="hover:underline font-bold"
                  smooth
                  to={`/react/#${l.id}`}
                >{l.tag}</HashLink>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reactt;
