import Logo from './common/Logo.jsx';


function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-100 shadow-md">
      <Logo/>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className='text-gray-700 hover:text-gray-900'>Home</a> </li>
          <li><a href="/services" className='text-gray-700 hover:text-gray-900'>Services</a></li>
          <li><a href="/about" className='text-gray-700 hover:text-gray-900'>About Us</a></li>
          <li><a href="/contact" className='text-gray-700 hover:text-gray-900'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;