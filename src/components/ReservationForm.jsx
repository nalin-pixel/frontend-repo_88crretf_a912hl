import { useState } from 'react';
import { CalendarClock, Send } from 'lucide-react';

export default function ReservationForm() {
  const [form, setForm] = useState({ name: '', email: '', date: '', psychologist: '' });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.psychologist) {
      setMessage({ type: 'error', text: 'Semua kolom wajib diisi.' });
      return;
    }
    setMessage({ type: 'success', text: 'Reservasi Anda tersimpan (demo UI). Integrasikan ke backend Anda untuk produksi.' });
    setForm({ name: '', email: '', date: '', psychologist: '' });
  };

  return (
    <section id="reservasi" className="bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Form Reservasi</h2>
        <p className="mt-2 text-gray-600">Isi data berikut untuk mengajukan jadwal konsultasi.</p>

        {message && (
          <div className={`mt-6 rounded-lg p-4 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
              placeholder="Nama Anda"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Tanggal</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Pilih Psikolog</label>
            <select
              name="psychologist"
              value={form.psychologist}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
            >
              <option value="">-- Pilih --</option>
              <option value="Maya Putri">Dr. Maya Putri</option>
              <option value="Hendri Pratama">Hendri Pratama</option>
              <option value="Cynthia Ayu">Cynthia Ayu</option>
              <option value="Rama Satria">Rama Satria</option>
            </select>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button type="reset" className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">Reset</button>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">
              <Send className="h-4 w-4" /> Kirim Reservasi
            </button>
          </div>
        </form>

        <div className="mt-8 rounded-xl border border-dashed border-gray-300 p-4 text-sm text-gray-600">
          Catatan: Demo ini berfokus pada tampilan. Untuk sistem lengkap PHP yang siap hosting dengan fitur login, admin, ekspor PDF/Excel, dan MySQL seperti yang Anda minta, saya dapat menyiapkan paket kode PHP Native yang rapi (folder config, assets, pages, admin, includes, database.sql) pada langkah berikutnya sesuai instruksi hosting Anda.
        </div>
      </div>
    </section>
  );
}
