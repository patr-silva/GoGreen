import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Item = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      className='mt-5 rounded-full border-2 border-gray-200 px-5 py-16 text-center bg-dark-green'
      variants={childVariant}
    >
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-200 bg-dark-green p-4'>
          {icon}
        </div>
      </div>
      <h4 className='font-bold text-white'>{title}</h4>
      <p className='my-3 text-white'>{description}</p>
    </motion.div>
  );
};

export default Item;
