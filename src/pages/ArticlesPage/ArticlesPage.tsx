import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GET_STARTED } from "@/middlewares/GetStartedMiddleware";
import bgarticleabout from "../../assets/bgarticleabout.png";
import imgcirclegrey from "../../assets/imgcirclegrey.png";
import imgfpicon from "../../assets/imgfpicon.png";
import imgFp from "../../assets/imgFp.png";
import imgcirclegreen from "../../assets/imgcirclegreen.png";
import { DataArticle } from "@/lib/data";

export default function ArticlesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img src={bgarticleabout} alt="articleabout" className="w-full h-20" />
      <div className="px-10 relative ">
        <div className="w-72">
          <h1 className="font-bold text-4xl z-10">
            Kenapa harus pakai Finthest?
          </h1>
        </div>
        <img
          src={imgcirclegrey}
          alt="circlegrey"
          className="absolute top-10 right-0"
        />
        <img
          src={imgcirclegreen}
          alt="circlegrey"
          className="absolute -bottom-16 left-0"
        />
        <div className="h-[25rem] mt-10 overflow-y-auto">
          {DataArticle.map((item, index) => (
            <div
              className="p-4 my-10 border-[#e0e0e052] border-2 rounded-xl backdrop-filter backdrop-blur bg-opacity-50"
              key={index}
            >
              <div className="flex items-start">
                <div>
                  <div className="flex gap-2">
                    <img src={imgfpicon} alt="iconfp" />
                    <p className="font-normal">{item.name}</p>
                  </div>
                  <h1 className="text-xl font-extrabold mt-4">{item.title}</h1>
                  <div className="py-6 text-blue-500">
                    <Link to={"/article/read"}>Lihat Selengkapnya</Link>
                  </div>
                </div>
                <img src={imgFp} alt="new" className="w-32 h-28" />
              </div>
              <div>
                <p className="text-[#2F315A]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="px-10 text-slate-400 py-10 backdrop-filter backdrop-blur bg-opacity-50">
        <Link to="/" onClick={() => localStorage.setItem(GET_STARTED, "1")}>
          Lewati...
        </Link>
      </div>
    </motion.div>
  );
}
