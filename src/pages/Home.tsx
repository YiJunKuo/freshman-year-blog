import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";

export default function Home() {
  const featuredPosts = [
    {
      id: "ocean-trash",
      title: "想推薦之網頁",
      excerpt: "你知道什麼是海廢嗎?不知道的話，你可以點擊read more查看更多!!",
      path: "/posts/ocean-trash",
      category: "推薦",
      date: "2020-10-15",
      image: `/images/post1.gif`
    },
    {
      id: "bootstrap-class",
      title: "Bootstrapd課程內容",
      excerpt: "期中考得太差，希望這次期末考回來，不要被當。",
      path: "/posts/bootstrap-class",
      category: "學習",
      date: "2020-11-20",
      image: `/images/post2.gif`
    },
    {
      id: "club",
      title: "社團活動",
      excerpt: "上大學後，社團活動是少不了的!!",
      path: "/posts/club",
      category: "生活",
      date: "2020-12-05",
      image: `/images/post3.gif`
    },
    {
      id: "nostalgia",
      title: "懷舊復古",
      excerpt: "童年啊童年啊!! 想當初我還是電視兒童。",
      path: "https://6100677.wixsite.com/my-site-3",
      category: "回憶",
      date: "2020-12-25",
      external: true,
      image: `/images/post4.gif`
    }
  ];

  const quotes = [
    {
      text: "Life is like a movie, it’s only as exciting as how you see and what you feel about it.",
      source: "Lessons from Movies"
    },
    {
      text: "Every heart needs love, needs to be gentle, generous, needs to understand.",
      source: "Les Choristes"
    },
    {
      text: "Hope is a good things, maybe the best of things, and no good things ever dies.",
      source: "The Shawshank Redemption"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-10 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            歡迎來到<br />
            <span className="text-slate-500 font-serif">我的網站！</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            這是我大一時期建立的部落格，記錄了我的學習歷程、社團活動以及生活點滴。
            在這裡，你可以看到我推薦的網頁、Bootstrap 課程筆記，以及我在 MV 舞蹈社的精彩回憶。
          </p>
          <div className="flex gap-4">
            <Link 
              to="/posts" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
            >
              閱讀貼文
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-slate-200 transition-colors"
            >
              關於我
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">我的關注</h2>
          <Link to="/posts" className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors">
            查看全部 <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {post.external ? (
                <a 
                  href={post.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-400 font-mono">{post.date}</span>
                    </div>
                    {post.image && (
                      <div className="mb-4 rounded-xl overflow-hidden h-48 bg-slate-100">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title} ↗
                    </h3>
                    <p className="text-slate-600 mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-medium text-slate-900 flex items-center gap-1">
                      Read more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>
              ) : (
                <Link 
                  to={post.path}
                  className="group block h-full p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-400 font-mono">{post.date}</span>
                    </div>
                    {post.image && (
                      <div className="mb-4 rounded-xl overflow-hidden h-48 bg-slate-100">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-medium text-slate-900 flex items-center gap-1">
                      Read more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-10 text-center">語錄分享</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-slate-50 relative"
            >
              <Quote className="absolute top-6 left-6 text-slate-200 w-10 h-10 -z-0" />
              <div className="relative z-10">
                <p className="text-lg font-serif italic text-slate-700 mb-6 leading-relaxed">
                  "{quote.text}"
                </p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  — {quote.source}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
