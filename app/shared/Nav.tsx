import Image from "next/image";
import Link from "next/link";

type Routes = {
  name: string;
  path: string;
}[];

export default function Navbar() {
  const routes: Routes = [
    { name: "Server", path: "/server" },
    { name: "Client", path: "/client" },
    { name: "Staticprop", path: "/staticprops" },
  ];

  return (
    <header className="w-full h-24 bg-gray-500">
      <nav className="flex justify-between items-center">
        <div>
          <Image
            src={
              "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220831183000/Tailwind-CSS-Tutorial1.png"
            }
            width={230}
            height={130}
            alt="Home Image"
            className="object-center"
          />
        </div>
        <div>
          <div className="flex justify-center items-center gap-2 mx-2 text-slate-50">
            {routes.map((r) => (
              <button
                key={r.name}
                className="rounded-lg bg-blue-700 hover:bg-blue-400 px-2 py-2"
              >
                <Link href={r.path}>{r.name}</Link>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
