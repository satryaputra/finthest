import { motion } from "framer-motion";
import imgarticle from "../../assets/imgarticle.png";
import { BackArrowIcon } from "@/components/atoms";

export default function SeeMoreArticle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <BackArrowIcon classname="absolute left-5 top-5" />
        <img src={imgarticle} alt="imgarticle" className="w-full" />
        <div className="px-10 grid place-items-center">
          <div className=" my-5 w-3/4 text-center">
            <h1 className="font-extrabold text-2xl">
              Financial Planner yang baik dapat mewujudkan peluang dalam
              mengembangkan uang
            </h1>
          </div>
          <div className="h-[22rem] overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            harum odit quidem nisi. Explicabo recusandae, et minus sit neque eos
            nihil in ea eveniet dolore perferendis repellat repellendus dolores
            optio quod mollitia esse perspiciatis odio! Aut a sapiente in eius
            iure, voluptas debitis qui accusantium iste, quibusdam, distinctio
            ratione. Quasi, deleniti officiis quibusdam, accusamus eligendi
            veniam laboriosam temporibus animi corporis officia eius dolore.
            Provident esse quod corrupti adipisci possimus soluta optio placeat
            molestiae excepturi. Quo recusandae cupiditate voluptatem earum,
            deleniti dolorum sed labore cum assumenda optio ab iste atque esse
            adipisci incidunt ea ipsum! Minima ratione non ea eum.
          </div>
        </div>
        <div className=" absolute bottom-0 w-full text-slate-400 py-4 backdrop-filter backdrop-blur bg-opacity-50"></div>
      </div>
    </motion.div>
  );
}
