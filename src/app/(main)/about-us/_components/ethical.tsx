import BgMotor from "@/components/bg-motor";
import { londrinaSolid } from "@/configs/font-family";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Check } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(MotionPathPlugin);

const Ethical = () => {
  useGSAP(() => {
    gsap.from(".content-ethical", {
      scrollTrigger: {
        trigger: ".content-ethical",
        start: "top 80%",
      },
      y: 50,
      duration: 2,
      ease: "power3.out",
    });

    return () => {
      gsap.killTweensOf(".content-ethical");
    };
  }, []);

  return (
    <BgMotor>
      <div className="content-ethical mt-[3.5rem] flex md:flex-row gap-y-[3rem] flex-col justify-between items-center px-[1rem] md:px-[5rem] w-full relative z-30">
        <div>
          <p className="text-white/40 text-[1.125rem] font-bold">
            HONG HA TRAVEL
          </p>
          <h3
            className={`text-[2.5rem] md:text-[3.5rem] font-[900] ${londrinaSolid.className} text-white`}
          >
            ETHICAL COMMITMENTS
          </h3>
          <p className="mt-[2rem] md:h-auto h-[6.5625rem] w-[20.9375rem] md:mt-[3.5rem] md:w-[38.815rem] text-[#F1F1F1] text-[0.875rem] md:text-[1rem] font-normal leading-[1.5rem] overflow-y-auto">
            At our Ha Giang tourism company, we adhere to a set of ethical
            guidelines that guide our operations and define our commitment to
            responsible tourism. Our foremost principle is to respect and
            preserve the natural environment and cultural heritage of Ha Giang.
            We prioritize sustainable practices to minimize our ecological
            footprint and actively engage in conservation efforts. Furthermore,
            we deeply value the communities we operate in and strive to foster
            positive relationships with local residents. We prioritize their
            well-being and economic empowerment through fair employment
            practices and community development initiatives. Additionally, we
            prioritize the safety and satisfaction of our guests, ensuring that
            every experience with us is both enjoyable and enriching
          </p>
          <ul className="*:flex items-center mt-[1rem] *:mt-[0.5rem] *:text-white font-bold *:text-[0.875rem] *:md:text-[1rem]">
            <li>
              <Check className="mr-[0.56rem] text-green-500" />
              Tours accommodate a maximum of 10 guests
            </li>
            <li>
              <Check className="mr-[0.56rem] text-green-500" />
              Flexible cancellation policy
            </li>
            <li>
              <Check className="mr-[0.56rem] text-green-500" />
              Book now, pay later
            </li>
            <li>
              <Check className="mr-[0.56rem] text-green-500" />
              Fluent English-speaking guides
            </li>
            <li>
              <Check className="mr-[0.56rem] text-green-500" />
              Creating job opportunities for the Vietnamese community
            </li>
          </ul>
        </div>

        <Image
          src={"/images/about/ethical.png"}
          alt="ethical"
          width={671}
          height={422}
          className="md:h-[26.375rem] rounded-[1.25rem] md:w-[41.9375rem]"
        />
      </div>
    </BgMotor>
  );
};

export default Ethical;
