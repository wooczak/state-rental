export default function Navigation() {
  const hamburgerClassName = "h-[1px] bg-black w-full";

  return (
    <nav className="w-full flex justify-between items-center h-5 py-4 relative">
      <p>State Rental</p>
      <div className="flex flex-col items-stretch h-3 justify-between w-5">
        <span className={hamburgerClassName}></span>
        <span className={hamburgerClassName}></span>
        <span className={hamburgerClassName}></span>
      </div>
    </nav>
  );
}
