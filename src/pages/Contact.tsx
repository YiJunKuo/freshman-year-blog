import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">聯絡我</h1>
        <p className="text-lg text-slate-600 mb-10">
          如果有任何問題，請填好以下資訊，我會盡快聯繫您。
        </p>

        <form className="space-y-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">姓名</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
              placeholder="您的姓名"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">電子郵件</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">訊息內容</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
              placeholder="請輸入您的訊息..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
          >
            <Send size={18} />
            發送訊息
          </button>
        </form>
      </motion.div>
    </div>
  );
}
