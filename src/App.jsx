import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Psychologists from './components/Psychologists';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="tentang" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Tentang Layanan</h2>
              <p className="mt-3 text-gray-600">
                Kami membantu Anda terhubung dengan psikolog profesional untuk sesi konseling yang nyaman dan aman. Pilih jadwal fleksibel, konsultasi online atau tatap muka, dan nikmati proses yang ringkas tanpa ribet.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>• Psikolog berlisensi dan terverifikasi</li>
                <li>• Booking cepat, konfirmasi real-time</li>
                <li>• Privasi dan keamanan data terjamin</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Cara Kerja</h3>
              <ol className="list-decimal space-y-2 pl-5 text-gray-600">
                <li>Pilih psikolog dan tanggal yang tersedia</li>
                <li>Isi data diri dan kirim permohonan</li>
                <li>Tunggu persetujuan dan lakukan pembayaran</li>
                <li>Mulai sesi konsultasi sesuai jadwal</li>
              </ol>
            </div>
          </div>
        </section>
        <Psychologists />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
