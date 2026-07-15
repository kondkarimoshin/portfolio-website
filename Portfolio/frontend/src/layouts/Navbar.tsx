const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <h1 className="text-2xl font-bold text-blue-500">
          MK
        </h1>

        <nav>
          <ul className="flex gap-8 text-slate-300">
            <li className="cursor-pointer hover:text-blue-400">Home</li>
            <li className="cursor-pointer hover:text-blue-400">About</li>
            <li className="cursor-pointer hover:text-blue-400">Experience</li>
            <li className="cursor-pointer hover:text-blue-400">Projects</li>
            <li className="cursor-pointer hover:text-blue-400">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;