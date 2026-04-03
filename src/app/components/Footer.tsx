import { BookOpen, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-primary">大人の教養白書</div>
                <div className="text-xs text-muted-foreground">古典文学ガイド</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              日本の古典文学を「制覇」するための、<br />新しい読書体験を提供します。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  ホーム
                </a>
              </li>
              <li>
                <a href="/works" className="text-muted-foreground hover:text-primary transition-colors">
                  作品一覧
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  このサイトについて
                </a>
              </li>
              <li>
                <a href="/works/genji" className="text-muted-foreground hover:text-primary transition-colors">
                  源氏物語
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">お問い合わせ</h3>
            <div className="flex space-x-3">
              <a
                href="mailto:info@example.com"
                className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ご質問・ご要望がございましたら<br />お気軽にお問い合わせください。
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 大人の教養白書. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}