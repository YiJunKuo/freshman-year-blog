import { motion } from "motion/react";

export default function About() {
  const sections = [
    {
      title: "首頁",
      content: "首頁包含了歡迎區塊、精選貼文（我的關注）以及語錄分享。設計上採用了乾淨的排版與流暢的動畫效果，讓訪客能快速了解網站的核心內容與我的生活點滴。"
    },
    {
      title: "貼文",
      content: "貼文區塊收錄了四篇主要文章：推薦的海廢圖鑑網站、Bootstrap 課程筆記、MV 舞蹈社的活動紀錄，以及懷舊復古的網頁。每篇文章都經過重新排版，並加入了圖片與影片來豐富閱讀體驗。"
    },
    {
      title: "關於",
      content: "關於頁面記錄了這個網站的架構與設計理念，透過條列式的卡片設計，讓訪客能清楚了解各個頁面的特色與內容。"
    },
    {
      title: "聯絡",
      content: "聯絡頁面提供了一個簡潔現代的表單介面，如果您有任何建議或想法，都歡迎透過這個表單與我聯繫。"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">關於我的網站</h1>
        <p className="text-xl text-slate-600 mb-8 font-serif italic">
          我想要做個自己的部落格，放上自己喜歡的事物。
        </p>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <img src="https://raw.githubusercontent.com/YiJunKuo/freshman-year-blog/main/images/post5.jpg" alt="關於我的網站" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm font-mono text-slate-500">
                  0{index + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
