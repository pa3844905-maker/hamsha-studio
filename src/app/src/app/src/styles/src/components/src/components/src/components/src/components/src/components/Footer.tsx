import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-transparent py-12 mt-12">
      <div className="container-lg mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-lg font-semibold">Hamsha Studio</div>
          <div className="text-sm text-subtext mt-1">Crafting Digital Experiences That Inspire.</div>
        </div>

        <div className="flex gap-8 text-subtext">
          <Link href="/privacy" className="hover:text-text">Privacy</Link>
          <Link href="/terms" className="hover:text-text">Terms</Link>
          <Link href="/contact" className="hover:text-text">Contact</Link>
        </div>

        <div className="text-sm text-subtext">&copy; {new Date().getFullYear()} Hamsha Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}
