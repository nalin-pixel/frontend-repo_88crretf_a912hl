export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} SehatMental. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#tentang" className="hover:text-gray-900">Tentang</a>
            <a href="#psikolog" className="hover:text-gray-900">Psikolog</a>
            <a href="#reservasi" className="hover:text-gray-900">Reservasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
