import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/" className="text-white hover:text-blue-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-blue-300">About</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-blue-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}