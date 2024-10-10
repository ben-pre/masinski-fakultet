"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Mašinski fakultet - jedan od najprestižnijih tehničkih fakulteta
                u BiH
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, at
                eos, quas autem nesciunt veritatis molestias natus dignissimos
                in fugit, nisi assumenda quae facilis aut perferendis eum maxime
                odio voluptatibus deserunt minus sit odit aperiam! Officia amet
                pariatur minus quis, reprehenderit dolorem impedit provident
                nihil exercitationem asperiores, saepe non ipsa?
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative aspect-[700/444] w-full">
                  <Image
                    className=" rounded-[8px] shadow-solid-l dark:block"
                    src="/images/fakultet.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
