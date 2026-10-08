export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xl font-black text-slate-900">metamato</p>
          <p className="mt-1 text-sm text-slate-500 max-w-xs">The tasty way to order, discover, and enjoy good food.</p>
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-900">📘</a>
            <a href="#" className="text-slate-500 hover:text-slate-900">🐦</a>
            <a href="#" className="text-slate-500 hover:text-slate-900">📷</a>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-slate-900 mb-3">Company</h5>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-slate-900">About</a></li>
            <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            <li><a href="#" className="hover:text-slate-900">Blog</a></li>
            <li><a href="#" className="hover:text-slate-900">Press</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-slate-900 mb-3">For users</h5>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            <li><a href="#" className="hover:text-slate-900">Help center</a></li>
            <li><a href="#" className="hover:text-slate-900">FAQs</a></li>
            <li><a href="#" className="hover:text-slate-900">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-slate-900 mb-3">Legal</h5>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
            <li><a href="#" className="hover:text-slate-900">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-slate-900">Security</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row text-sm text-slate-600">
          <p>&copy; 2024 Metamato. All rights reserved.</p>
          <p>Built with ❤️ for food lovers</p>
        </div>
      </div>
    </footer>
  );
}
