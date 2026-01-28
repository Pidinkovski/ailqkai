import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-white font-bold text-xl">
                ailqk<span className="text-[#8B5CF6]">ai</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              Професионална настройка на AI асистенти за хора и бизнеси в България. 
              Спестете време, автоматизирайте работата си и бъдете по-продуктивни с 
              персонален AI асистент.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Начало</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Услуги</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">За нас</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Въпроси</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Контакт</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакти</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ailqkai.com" className="hover:text-white transition-colors">info@ailqkai.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <span>Discord общност</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} ailqkai. Всички права запазени.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Поверителност</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Условия</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
