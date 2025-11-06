import { Calendar, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-indigo-600" />
          <span className="text-lg font-semibold text-gray-900">SehatMental</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#tentang" className="text-sm text-gray-600 hover:text-gray-900">Tentang</a>
          <a href="#psikolog" className="text-sm text-gray-600 hover:text-gray-900">Psikolog</a>
          <a href="#reservasi" className="text-sm text-gray-600 hover:text-gray-900">Reservasi</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <LogIn className="h-4 w-4" /> Masuk
          </a>
          <a
            href="#reservasi"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <User className="h-4 w-4" /> Daftar Sesi
          </a>
        </div>
      </div>
    </header>
  );
}
