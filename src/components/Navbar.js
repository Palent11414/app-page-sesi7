import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}