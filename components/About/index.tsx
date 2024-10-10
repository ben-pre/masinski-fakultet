"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/fakultet.jpg"
                alt="About"
                fill
                objectFit="contain"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                O fakultetu
              </h2>
              <span className="font-medium uppercase text-black dark:text-white">
                Akademska izvrsnost u tehničkoj edukaciji.
              </span>
              <p>
                Mašinski fakultet Sarajevo je osnovan 1958 godine i preko 10
                godina bio je jedini Mašinski fakultet u Bosni i Hercegovini.
                Mašinski fakultet je organizaciona jedinica JU Univerzitet u
                Sarajevu i jedan je od njegovih najprestižnijih fakulteta.
                Fakultet je prepoznat po kvaliteti svog programa i nastave
                internacionalno i ima učešća u brojnim projektima u saradnji sa
                Univerzitetima iz regije i EU.
              </p>
              <p>
                Mašinski fakultet kroz dinamičan i interdisciplinaran nastavni
                program, te naučno-istraživačke i razvojne djelatnosti pruža
                svojim studentima kvalitetno obrazovanje, izazovne razvojne i
                istraživačke aktivnosti i saradnju sa domaćim i inozemnim
                univerzitetima i visokim školama, institutima i privrednim
                subjektima, te kontinuirano daje progresivan doprinos lokalnoj
                zajednici i okruženju.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
