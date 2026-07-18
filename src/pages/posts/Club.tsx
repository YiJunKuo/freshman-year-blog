import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Music, Star, Users } from "lucide-react";

export default function Club() {
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
              生活
            </span>
            <span className="text-sm text-slate-400 font-mono">2020-12-05</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">MV 舞蹈社</h1>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-600 mb-10 font-serif italic">
            離放假還有幾天，在大學的快樂時光，莫過於社團活動了！
          </p>

          <div className="space-y-12">
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              
              {/* Event 1 */}
              <div className="relative md:w-1/2 md:pr-12 md:ml-0 mb-12">
                <div className="absolute left-0 md:left-auto md:right-[-24px] top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-white shadow-sm -translate-x-[27px] md:translate-x-0 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 text-blue-600 mb-3">
                    <Users size={20} />
                    <h2 className="text-xl font-bold m-0">BOSS 第一次驗收</h2>
                  </div>
                  <p className="text-slate-600 mb-4">
                    為了社內聖誕趴，準備了帥氣爆表的男舞。
                  </p>
                  <div className="rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <video controls className="w-full">
                      <source src={`${import.meta.env.BASE_URL}images/1208.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img src={`${import.meta.env.BASE_URL}images/boss1.jpg`} alt="BOSS 第一次驗收" className="rounded-lg w-full h-32 object-cover" referrerPolicy="no-referrer" />
                    <img src={`${import.meta.env.BASE_URL}images/boss2.jpg`} alt="BOSS 第一次驗收" className="rounded-lg w-full h-32 object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="relative md:w-1/2 md:pl-12 md:ml-auto mb-12">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-white shadow-sm -translate-x-[27px] md:-translate-x-[12px] z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 text-blue-600 mb-3">
                    <Users size={20} />
                    <h2 className="text-xl font-bold m-0">BOSS 第二次驗收</h2>
                  </div>
                  <p className="text-slate-600 mb-4">
                    離表演越來越近，既緊張又期待 &gt;&lt;
                  </p>
                  <div className="rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <video controls className="w-full">
                      <source src={`${import.meta.env.BASE_URL}images/1216.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img src={`${import.meta.env.BASE_URL}images/boss3.jpg`} alt="BOSS 第二次驗收" className="rounded-lg w-full h-32 object-cover" referrerPolicy="no-referrer" />
                    <img src={`${import.meta.env.BASE_URL}images/boss4.jpg`} alt="BOSS 第二次驗收" className="rounded-lg w-full h-32 object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="relative md:w-1/2 md:pr-12 md:ml-0 mb-12">
                <div className="absolute left-0 md:left-auto md:right-[-24px] top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-white shadow-sm -translate-x-[27px] md:translate-x-0 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 text-pink-500 mb-3">
                    <Music size={20} />
                    <h2 className="text-xl font-bold m-0">HOW YOU LIKE THAT 第二次驗收</h2>
                  </div>
                  <p className="text-slate-600 mb-4">
                    除了 NCT，還有第一次麵包節的 BLACKPINK!!
                  </p>
                  <div className="rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <video controls className="w-full">
                      <source src={`${import.meta.env.BASE_URL}images/1216_.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img src={`${import.meta.env.BASE_URL}images/sogo.jpg`} alt="HOW YOU LIKE THAT" className="rounded-lg w-full h-32 object-cover" referrerPolicy="no-referrer" />
                    <img src={`${import.meta.env.BASE_URL}images/group.jpg`} alt="HOW YOU LIKE THAT" className="rounded-lg w-full h-32 object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Event 4 */}
              <div className="relative md:w-1/2 md:pl-12 md:ml-auto">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-white shadow-sm -translate-x-[27px] md:-translate-x-[12px] z-10 flex items-center justify-center">
                  <Star size={12} className="text-white" fill="currentColor" />
                </div>
                <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-md">
                  <div className="flex items-center gap-2 text-yellow-400 mb-3">
                    <Star size={20} fill="currentColor" />
                    <h2 className="text-xl font-bold m-0 text-white">《元聲物種》聖誕演唱會</h2>
                  </div>
                  <p className="text-slate-300 mb-4">
                    就算舞台超小，也要超常發揮!! (表演曲目：BOSS)
                  </p>
                  <div className="rounded-xl overflow-hidden bg-slate-800 mb-4">
                    <video controls className="w-full">
                      <source src={`${import.meta.env.BASE_URL}images/1223.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <img src={`${import.meta.env.BASE_URL}images/boss5.jpg`} alt="聖誕演唱會" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
