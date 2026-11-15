import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-900 font-black text-2xl">
          404
        </div>
        <h1 className="text-2xl font-black text-slate-900 mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
          <br />
          यह पृष्ठ उपलब्ध नहीं है।
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-sm shadow transition-all"
          >
            ← Back to Home / मुख्य पृष्ठ
          </Link>
          <a
            href="tel:+918294407171"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all"
          >
            Call: 8294407171
          </a>
        </div>
      </div>
    </div>
  );
}
