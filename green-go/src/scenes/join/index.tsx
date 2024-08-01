import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";
import HText from "@/shared/HText";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Join = ({ setSelectedPage }: Props) => {
  return (
    <section id='join' className='mx-auto min-h-full w-5/6 pt-28'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Join)}>
        <div className='mb-16 mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          <img
            className='mx-auto'
            alt='benefits-page-graphic'
            src={BenefitsPageGraphic}
            width={700}
          />
          <div>
            <div className='relative'>
              <div className='before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves'>
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
                  <HText>
                    HUNDREDS OF HAPPY MEMBERS GOING GREEN
                  </HText>
                </motion.div>
              </div>
            </div>

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
            ></motion.div>

            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <AnchorLink
                  className='rounded-md  px-10 py-2 bg-primary-500 text-white'
                  href={`#${SelectedPage.ContactUs}`}
                >
                  Join now
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Join;
