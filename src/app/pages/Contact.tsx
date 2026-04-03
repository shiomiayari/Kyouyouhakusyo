import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォーム送信処理を実装
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: '電話',
      content: '03-1234-5678',
      link: 'tel:03-1234-5678',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'メール',
      content: 'info@example.com',
      link: 'mailto:info@example.com',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '所在地',
      content: '東京都渋谷区渋谷1-1-1',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">お問い合わせ</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            お気軽にお問い合わせください。担当者より迅速にご連絡いたします。
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-gradient-to-br from-white to-secondary p-8 rounded-3xl hover:shadow-xl transition-all border border-border text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <h3 className="mb-3">{info.title}</h3>
                <p className="text-muted-foreground">{info.content}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white to-secondary p-8 md:p-12 rounded-3xl border border-border">
              <h2 className="text-3xl mb-8 text-center">お問い合わせフォーム</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      お名前 <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      メールアドレス <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="株式会社〇〇"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2">
                    件名 <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="お問い合わせ内容"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    メッセージ <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="お問い合わせ内容を詳しくご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-accent transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">アクセス</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border h-[400px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
              <p className="text-xl">東京都渋谷区渋谷1-1-1</p>
              <p className="text-sm mt-2">（地図はデモ用プレースホルダーです）</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">営業時間</h2>
          <div className="bg-gradient-to-br from-white to-secondary p-8 rounded-3xl border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-4">平日</h3>
                <p className="text-muted-foreground">9:00 - 18:00</p>
              </div>
              <div>
                <h3 className="mb-4">土日祝</h3>
                <p className="text-muted-foreground">定休日</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                ※ お問い合わせフォームからのご連絡は24時間受け付けております。
                営業時間外のお問い合わせについては、翌営業日以降に順次ご対応させていただきます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
