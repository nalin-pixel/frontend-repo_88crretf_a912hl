import { motion } from 'framer-motion';
import { Calendar, Shield, User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Reservasi Konsultasi Psikologi Mudah & Cepat
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg leading-relaxed text-gray-600"
            >
              Dapatkan dukungan profesional dari psikolog berlisensi. Pilih jadwal, tentukan psikolog, dan mulai perjalanan kesehatan mental Anda hari ini.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#reservasi"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700"
              >
                <Calendar className="h-5 w-5" />
                Buat Reservasi
              </a>
              <a
                href="#psikolog"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-700 shadow-sm transition hover:bg-gray-50"
              >
                <User className="h-5 w-5" />
                Lihat Psikolog
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Feature icon={<Shield className="h-5 w-5 text-indigo-600" />} title="Privasi Aman" subtitle="Data terenkripsi" />
              <Feature icon={<Calendar className="h-5 w-5 text-indigo-600" />} title="Jadwal Fleksibel" subtitle="Pilih waktu Anda" />
              <Feature icon={<User className="h-5 w-5 text-indigo-600" />} title="Psikolog Profesional" subtitle="Terverifikasi" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1529336953121-ad9553ffa1f7?q=80&w=800&auto=format&fit=crop"
                  alt="Konsultasi"
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">Layanan unggulan</p>
                  <p className="font-semibold text-gray-900">Konseling Individu</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <p>• Sesi 60 menit via online/offline</p>
                <p>• Ringkasan rekomendasi pascasesi</p>
                <p>• Tindak lanjut personal</p>
              </div>
              <div className="mt-5 rounded-lg bg-indigo-50 p-4 text-indigo-900">
                Diskon 15% untuk sesi pertama bulan ini.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
