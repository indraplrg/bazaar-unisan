const Navbar = () => {
  return (
    <div className="fixed z-10 flex w-full justify-between bg-custom-Primary px-4 py-6 text-white">
      <div className="text-xl">
        <a href="#">E Commerce</a>
      </div>
      <ul className="text-md flex gap-4">
        <li>
          <a href="#">Home</a>
        </li>
        <a href="#products">Products</a>
      </ul>
    </div>
  );
};

export default Navbar;
