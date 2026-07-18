import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BootstrapClass() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/posts" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft size={16} /> 返回貼文列表
        </Link>
        
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
              學習
            </span>
            <span className="text-sm text-slate-400 font-mono">2020-11-20</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bootstrap 課程內容</h1>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-600 mb-10 font-serif italic">
            期中考得太差，希望這次期末考回來，不要被當。以下是 Bootstrap 課程的學習筆記。
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 pb-2">基礎概念</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Hello, World! 基礎架構</li>
                <li>網頁主體設定</li>
                <li>常用的 CSS 屬性</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 pb-2">網格系統 (Grid System)</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Bootstrap 網格系統原理</li>
                <li>設定容器類別 (Container)</li>
                <li>設定電腦、平板與手機的網頁版面 (Responsive Breakpoints)</li>
                <li>調整 column 的位移 (Offset)</li>
                <li>調整 column 的順序 (Order)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 pb-2">排版與樣式</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Bootstrap CSS 樣式</li>
                <li>邊界、留白、框線屬性 (Margin, Padding, Border)</li>
                <li>對齊類別 (Alignment)</li>
                <li>垂直對齊屬性 (Vertical Alignment)</li>
                <li>特定意義色彩類別 (Semantic Colors)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 pb-2">元件與進階</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>轉換類別 (Transforms)</li>
                <li>響應式圖片 (Responsive Images)</li>
                <li>圖片形狀 (Image Shapes)</li>
                <li>響應式表格 (Responsive Tables)</li>
                <li>基本表單 (Forms)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 pb-2">實作練習</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">紅豆</h3>
                  <p className="text-sm text-slate-600 mb-4">排版練習與樣式應用</p>
                  <img src={`${import.meta.env.BASE_URL}images/BS2.jpg`} alt="紅豆" className="rounded-lg w-full h-auto" referrerPolicy="no-referrer" />
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">白水先生作品</h3>
                  <p className="text-sm text-slate-600 mb-4">綜合版面配置練習</p>
                  <img src={`${import.meta.env.BASE_URL}images/BS4.jpg`} alt="白水先生作品" className="rounded-lg w-full h-auto" referrerPolicy="no-referrer" />
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">送別</h3>
                  <p className="text-sm text-slate-600 mb-4">文字排版與色彩運用</p>
                  <img src={`${import.meta.env.BASE_URL}images/BS5.jpg`} alt="送別" className="rounded-lg w-full h-auto" referrerPolicy="no-referrer" />
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">迪士尼</h3>
                  <p className="text-sm text-slate-600 mb-4">網格系統與圖片應用</p>
                  <img src={`${import.meta.env.BASE_URL}images/disney.jpg`} alt="迪士尼" className="rounded-lg w-full h-auto" referrerPolicy="no-referrer" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
