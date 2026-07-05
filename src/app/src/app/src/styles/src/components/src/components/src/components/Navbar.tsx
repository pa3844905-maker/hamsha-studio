import Link from 'next/link';
import Button from './Button';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-transparent py-6">
      <div className="container-lg mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">H</div>
          <div>
            <div className="text-lg font-semibold">Hamsha Studio</div>
            <div className="text-sm text-subtext -mt-0.5">Crafting Digital Experiences That Inspire.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-subtext">
          <Link href="/services" className="hover:text-text">Services</Link>
          <Link href="/portfolio" className="hover:text-text">Portfolio</Link>
          <Link href="/case-studies" className="hover:text-text">Case Studies</Link>
          <Link href="/about" className="hover:text-text">About</Link>
          <Link href="/blog" className="hover:text-text">Blog</Link>
          <Button>Book Free Consultation</Button>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md border border-border bg-white">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
