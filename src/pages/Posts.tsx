import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Posts() {
  const posts = [
    {
      id: "ocean-trash",
      title: "想推薦之網頁",
      excerpt: "你知道什麼是海廢嗎?不知道的話，你可以點擊read more查看更多!!",
      path: "/posts/ocean-trash",
      category: "推薦",
      date: "2020-10-15",
      image: "https://yijunkuo.github.io/freshman-year-blog/images/post1.gif"
    },
    {
      id: "bootstrap-class",
      title: "Bootstrapd課程內容",
      excerpt: "期中考得太差，希望這次期末考回來，不要被當。",
      path: "/posts/bootstrap-class",
      category: "學習",
      date: "2020-11-20",
      image: "https://yijunkuo.github.io/freshman-year-blog/images/post2.gif"
    },
    {
      id: "club",
      title: "社團活動",
      excerpt: "上大學後，社團活動是少不了的!!",
      path: "/posts/club",
      category: "生活",
      date: "2020-12-05",
      image: "https://yijunkuo.github.io/freshman-year-blog/images/post3.gif"
    },
    {
      id: "nostalgia",
      title: "懷舊復古",
      excerpt: "童年啊童年啊!! 想當初我還是電視兒童。",
      path: "https://6100677.wixsite.com/my-site-3",
      category: "回憶",
      date: "2020-12-25",
      external: true,
      image: "https://yijunkuo.github.io/freshman-year-blog/images/post4.gif"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-10">所有貼文</h1>
        
        <div className="space-y-6">
          {posts.map((post, index) => (
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
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-400 font-mono">{post.date}</span>
                    </div>
                    {post.image && (
                      <div className="mb-4 rounded-xl overflow-hidden h-48 md:h-64 bg-slate-100">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    )}
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title} ↗
                    </h2>
                    <p className="text-slate-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-blue-600 transition-colors">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ) : (
                <Link 
                  to={post.path}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-400 font-mono">{post.date}</span>
                    </div>
                    {post.image && (
                      <div className="mb-4 rounded-xl overflow-hidden h-48 md:h-64 bg-slate-100">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    )}
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-blue-600 transition-colors">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
