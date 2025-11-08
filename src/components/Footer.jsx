export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-purple-500 to-blue-500" />
              <span className="font-semibold tracking-wide text-gray-900">Pure Stones</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-sm">
              Modern fragrances inspired by art and architecture. Minimal by design. Memorable by nature.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#collections" className="hover:text-gray-900">Collections</a></li>
              <li><a href="#story" className="hover:text-gray-900">Our Story</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
            <p className="mt-4 text-sm text-gray-600">Be the first to know about launches and stories.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" required placeholder="Your email" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
              <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Pure Stones. All rights reserved.</div>
      </div>
    </footer>
  );
}
