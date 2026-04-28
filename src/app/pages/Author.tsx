import { Star, Sparkles, Mail, Github, Linkedin, Twitter, Code, Briefcase, GraduationCap, Award } from 'lucide-react';
const profileImage = '/profile.png';

export function Author() {
  const skills = [
    { name: 'React / TypeScript', level: 90, color: '#FFC2D1' },
    { name: 'UI/UX Design', level: 85, color: '#C3B7F5' },
    { name: 'Web Development', level: 88, color: '#B8F3D8' },
    { name: 'Content Creation', level: 92, color: '#FFE5A0' },
  ];

  const projects = [
    {
      title: '大人の教養白書',
      description: '古典文学から西洋絵画まで、大人の教養を楽しく学べる総合Webサイト',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      color: '#FFC2D1',
    },
    {
      title: 'プロジェクト2',
      description: 'あなたの素晴らしいプロジェクトの説明をここに記載',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      color: '#C3B7F5',
    },
    {
      title: 'プロジェクト3',
      description: 'もう1つのプロジェクトについての簡単な説明',
      tech: ['Vue.js', 'Firebase', 'Figma'],
      color: '#B8F3D8',
    },
  ];

  const experience = [
    {
      title: 'シニアWeb開発者',
      company: '会社名',
      period: '2022年 - 現在',
      description: 'フロントエンド開発をリードし、UI/UXの改善に貢献',
    },
    {
      title: 'Web開発者',
      company: '前職の会社名',
      period: '2019年 - 2022年',
      description: 'React/TypeScriptを使用した多数のWebアプリケーション開発に従事',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pb-16">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 text-white/20 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-80 left-10 text-white/20 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-96 right-1/3 text-white/20 animate-pulse delay-200">
        <Sparkles className="w-7 h-7" />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFC2D1] to-[#C3B7F5] border-4 border-white shadow-2xl flex items-center justify-center">
              <img src={profileImage} alt="Ayarin" className="w-28 h-28 rounded-full" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            Ayarin
          </h1>
          <p className="text-2xl text-white/80 mb-8">
            Web Developer / Designer / Content Creator
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            文化芸術が大好きな大学3年生。
            古典文学からモダンなWeb技術まで、幅広い分野に興味を持ち、日々探求を続けています。
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="apukarashi@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFC2D1] to-[#FFE5A0] text-[#1B2B44] rounded-2xl hover:shadow-lg transition-all font-bold border-2 border-white"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://github.com/shiomiayari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C3B7F5] to-[#B3E5FC] text-[#1B2B44] rounded-2xl hover:shadow-lg transition-all font-bold border-2 border-white"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/%E6%96%87%E6%A2%A8-%E5%A1%A9%E8%A6%8B-889977371/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B8F3D8] to-[#B3E5FC] text-[#1B2B44] rounded-2xl hover:shadow-lg transition-all font-bold border-2 border-white"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <Code className="w-10 h-10 text-[#FFE5A0]" />
            スキル
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-white">{skill.name}</span>
                  <span className="text-lg font-bold" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-[#1B2B44] rounded-full h-4 overflow-hidden border-2 border-white/10">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <Briefcase className="w-10 h-10 text-[#B8F3D8]" />
            プロジェクト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20 hover:border-white/40 transition-all hover:scale-105"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border-2 border-white"
                  style={{ backgroundColor: project.color }}
                >
                  <Sparkles className="w-6 h-6 text-[#1B2B44]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium border-2 border-white"
                      style={{ backgroundColor: project.color, color: '#1B2B44' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-[#C3B7F5]" />
            経歴
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-lg text-[#FFE5A0] font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-[#1B2B44] text-white rounded-full text-sm font-medium border-2 border-white/20">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Site Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <Award className="w-10 h-10 text-[#FFC2D1]" />
            このサイトについて
          </h2>
          <div className="bg-gradient-to-br from-[#FFC2D1] to-[#C3B7F5] p-8 rounded-3xl border-4 border-white">
            <p className="text-lg text-[#1B2B44]/90 leading-relaxed mb-4">
              「大人の教養白書」は、古典文学、西洋絵画、政治・経済、クラシック音楽、世界史など、
              大人が楽しく学べる教養コンテンツを提供する総合Webサイトです。
            </p>
            <p className="text-lg text-[#1B2B44]/90 leading-relaxed mb-4">
              堅苦しい解説ではなく、現代的な視点とポップなデザインで、
              「学び直し」のハードルを下げることを目指しています。
            </p>
            <p className="text-lg text-[#1B2B44]/90 leading-relaxed">
              React、TypeScript、Tailwind CSSを使用し、レトロポップなステッカー風デザインで、
              視覚的にも楽しめるサイトを心がけています。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">お問い合わせ</h2>
          <p className="text-xl text-white/80 mb-8">
            プロジェクトのご相談や、コラボレーションのお誘いなど、お気軽にご連絡ください。
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFE5A0] to-[#B8F3D8] text-[#1B2B44] rounded-2xl hover:shadow-2xl transition-all font-bold border-4 border-white text-xl"
          >
            <Mail className="w-6 h-6" />
            メールを送る
          </a>
        </div>
      </section>
    </div>
  );
}