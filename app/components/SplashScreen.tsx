import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  return (
    <section className="flex w-full h-screen justify-center items-center">
      <div className="flex justify-start sm:justify-center items-center uppercase tracking-wider">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          onAnimationComplete={finishLoading}
        >
          <Image alt="message" src={"/icon.ico"} width={70} height={70} />{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default SplashScreen;
