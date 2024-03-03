import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="w-full h-[calc(100dvh-60px)] bg-gray-800 text-white flex flex-col gap-5 items-center justify-center">
      <h1 className="text-8xl ">Front-Forge</h1>
      <p className="font-thin tracking-widest text-gray-400">
        Front-Forge: Crafting the Web, One Line at a Time.
      </p>
      <Link to="/compiler">
        <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
        >
          <Button className="text-lg" variant="paint">
            Get Started
          </Button>
        </motion.div>
      </Link>
    </div>
  );
}

export default Home;
