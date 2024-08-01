import { SelectedPage, BenefitType } from "@/shared/types";
import {
  HomeIcon,
  SunIcon,
  AcademicCapIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import HText from "@/shared/HText";
import Item from "./Item";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeIcon className='h-6 w-6 text-white' />,
    title: "Home & Garden",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.",
  },
  {
    icon: <SunIcon className='h-6 w-6 text-white' />,
    title: "Life & Style",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.",
  },
  {
    icon: <PaintBrushIcon className='h-6 w-6 text-white' />,
    title: "Arts & Crafts",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.",
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6 text-white' />,
    title: "Classes",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='aboutus' className='mx-auto min-h-full w-5/6 pt-28'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        <motion.div
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A COMMUNITY</HText>
    
        </motion.div>

        <motion.div
          className='mt-5 items-center justify-between gap-8 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((elem: BenefitType) => (
            <Item
              key={elem.title}
              icon={elem.icon}
              title={elem.title}
              description={elem.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
