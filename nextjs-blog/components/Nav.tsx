import Link from "next/link";
import routeList from "@/data/routeList";

const Nav = () => {
  return (
    <nav>
      {routeList.map((route) => (
        <Link href={route.path} key={route.title}>
          <span className={`mr-5`}>{route.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;