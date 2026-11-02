import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo.png" alt="GGDC Mehrabpur" className="w-11 h-11 rounded-xl object-contain bg-white/10" />
              <span className="text-white font-bold text-lg">GGDC Mehrabpur</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Government Girls Degree College Mehrabpur — Empowering young women with quality education, character building, and academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-400 transition">Admissions</Link></li>
              <li><Link to="/academics" className="hover:text-blue-400 transition">Academic Programs</Link></li>
              <li><Link to="/fees" className="hover:text-blue-400 transition">Fee Structure</Link></li>
              <li><Link to="/notices" className="hover:text-blue-400 transition">Notices</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">More</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/staff" className="hover:text-blue-400 transition">Staff Directory</Link></li>
              <li><Link to="/facilities" className="hover:text-blue-400 transition">Facilities</Link></li>
              <li><Link to="/events" className="hover:text-blue-400 transition">Events</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-400">📍</span>
                <span>Mehrabpur, Sindh, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">📧</span>
                <span>info@ggdcmehrabpur.edu.pk</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">📞</span>
                <span>0301-2304220</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Government Girls Degree College Mehrabpur. All rights reserved.</p>
          <p className="text-blue-400/80 font-medium">Enter to Learn — Go to Serve</p>
        </div>
      </div>
    </footer>
  )
}
