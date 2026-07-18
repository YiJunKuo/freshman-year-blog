import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function OceanTrash() {
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
              推薦
            </span>
            <span className="text-sm text-slate-400 font-mono">2020-10-15</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">海廢圖鑑</h1>
          <a 
            href="http://oceantrash.rethinktw.org/zh-TW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            前往海廢圖鑑網站 <ExternalLink size={18} />
          </a>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-600 mb-10 font-serif italic">
            你知道什麼是海廢嗎？不知道的話，讓我來為你介紹這個非常有意義的網站。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">為何成為我想推薦之網站</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-slate-900">為何選擇這個網站</h3>
              <p className="text-slate-600">
                這個網站以非常生動且具互動性的方式，向大眾展示了海洋廢棄物的嚴重性。它不僅僅是文字說明，更是透過圖鑑的方式，讓每一個海廢都有了「身份」，讓人印象深刻。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-slate-900">架構及內容說明</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-6">
                <li>
                  <strong>首頁：</strong> 吸引人的視覺設計，帶領使用者進入海廢的世界。
                  <img src="/images/oceantrash/home.jpg" alt="首頁" className="mt-2 rounded-lg w-full h-auto border border-slate-200" referrerPolicy="no-referrer" />
                </li>
                <li>
                  <strong>關於：</strong> 介紹計畫的初衷與團隊。
                  <img src="/images/oceantrash/about.png" alt="關於" className="mt-2 rounded-lg w-full h-auto border border-slate-200" referrerPolicy="no-referrer" />
                </li>
                <li>
                  <strong>海廢從哪來：</strong> 追溯海洋廢棄物的源頭。
                  <img src="/images/oceantrash/where.jpg" alt="海廢從哪來" className="mt-2 rounded-lg w-full h-auto border border-slate-200" referrerPolicy="no-referrer" />
                </li>
                <li>
                  <strong>海廢大挑戰：</strong> 透過互動遊戲讓使用者更了解海廢知識。
                  <img src="/images/oceantrash/challenge.jpg" alt="海廢大挑戰" className="mt-2 rounded-lg w-full h-auto border border-slate-200" referrerPolicy="no-referrer" />
                </li>
                <li>
                  <strong>地圖：</strong> 標示出各地海廢的分佈情況。
                  <img src="/images/oceantrash/map.png" alt="地圖" className="mt-2 rounded-lg w-full h-auto border border-slate-200" referrerPolicy="no-referrer" />
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-slate-900">黃色小鴨影片</h3>
              <div className="rounded-xl overflow-hidden bg-slate-100">
                <video controls className="w-full">
                  <source src="/images/oceantrash/rubberduck.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
              <h3 className="text-xl font-bold mb-3 text-green-900">優點</h3>
              <p className="text-green-800">
                設計精美，互動性強，能夠有效吸引年輕族群的注意力，並傳達環保的理念。圖鑑的設計讓人有收集的慾望，進而了解更多海廢背後的故事。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
              <h3 className="text-xl font-bold mb-3 text-red-900">缺點</h3>
              <p className="text-red-800">
                部分動畫在較舊的設備上可能會有些許卡頓，且資訊量龐大，初次訪問可能會覺得有些眼花撩亂。
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
