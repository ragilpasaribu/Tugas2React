const Header = () => {
  const nama = 'Hai Ragil😍';
  const aturNama = nama ? nama : 'tanpa nama';

  return (
    <header className="bg-purple-700 flex justify-between items-center px-48 py-5 cursor-pointer hover:bg-slate-900">
      <h1 className="text-white italic font-extrabold hover:text-purple-400">
        Daftar Lagu
      </h1>
      <h1 className="text-white italic font-extrabold hover:text-purple-400">
        {aturNama}
      </h1>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
