export default function Collections() {
  const items = [
    {
      title: 'Violet Glass',
      note: 'Iris • Musk • Powder',
      img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Aurora Mist',
      note: 'Pear • Freesia • Amber',
      img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Crystal Noir',
      note: 'Blackcurrant • Cedar • Vanilla',
      img: 'https://images.unsplash.com/photo-1592945403244-b3fb4ae8b4a3?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="collections" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Featured Collections</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
