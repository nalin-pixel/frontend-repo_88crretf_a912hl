import { Star } from 'lucide-react';

const psychologists = [
  {
    id: 1,
    name: 'Dr. Maya Putri, M.Psi., Psikolog',
    specialty: 'Kecemasan & Depresi',
    rating: 4.9,
    avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Hendri Pratama, M.Psi., Psikolog',
    specialty: 'Relasi & Pernikahan',
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Cynthia Ayu, M.Psi., Psikolog',
    specialty: 'Karier & Pengembangan Diri',
    rating: 4.7,
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Rama Satria, M.Psi., Psikolog',
    specialty: 'Remaja & Parenting',
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop'
  },
];

export default function Psychologists() {
  return (
    <section id="psikolog" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Daftar Psikolog</h2>
          <p className="mt-2 text-gray-600">Semua profesional telah terverifikasi dan berlisensi.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {psychologists.map((p) => (
          <article key={p.id} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <img
                src={p.avatar}
                alt={p.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-100"
              />
              <div>
                <h3 className="font-semibold text-gray-900 leading-snug">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.specialty}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? '' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-sm text-gray-600">{p.rating.toFixed(1)}</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">Terverifikasi</span>
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">Pengalaman 5+ th</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
