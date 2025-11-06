import { UserCircle2, Star } from 'lucide-react';

const psychologists = [
  { id: 1, name: 'Dr. Maya Putri, M.Psi., Psikolog', specialty: 'Kecemasan & Depresi', rating: 4.9 },
  { id: 2, name: 'Hendri Pratama, M.Psi., Psikolog', specialty: 'Relasi & Pernikahan', rating: 4.8 },
  { id: 3, name: 'Cynthia Ayu, M.Psi., Psikolog', specialty: 'Karier & Pengembangan Diri', rating: 4.7 },
  { id: 4, name: 'Rama Satria, M.Psi., Psikolog', specialty: 'Remaja & Parenting', rating: 4.8 },
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
          <article key={p.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
                <UserCircle2 className="h-7 w-7 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.specialty}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? '' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-sm text-gray-600">{p.rating.toFixed(1)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
