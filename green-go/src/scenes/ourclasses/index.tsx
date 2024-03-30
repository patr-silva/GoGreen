import { SelectedPage, ClassType } from "@/shared/types";

import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";


const classes: Array<ClassType> = [
  {
    name: "Pottery Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image2,
  },
  {
    name: "Yoga Classes",
    image: image4,
  },
  {
    name: "Cooking Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image3,
  },
  {
    name: "Surf Lessons",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: image5,
  }
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className='w-full bg-white pt-28 pb-40' id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className='mx-auto w-5/6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='md:w-3/5'>
            <HText>OUR CLASSES</HText>
            <p className='pt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
          <ul className='whitespace-nowrap'>
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
