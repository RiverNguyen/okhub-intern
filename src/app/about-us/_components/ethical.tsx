import { londrinaSolid } from "@/configs/font-family";
import { Check } from "lucide-react";
import Image from "next/image";

const Ethical = () => {
  return (
    <div className="bg-[url(/images/about/mountain.svg)] w-full h-[52.175rem] bg-no-repeat bg-cover flex items-center">
      {" "}
      <div className="mt-[3.5rem] flex justify-between items-center px-[1rem] md:px-[5rem] w-full">
        <div>
          <p className="text-white/40 text-[1.125rem] font-bold">
            HONG HA TRAVEL
          </p>
          <h3
            className={`text-[2.5rem] md:text-[3.5rem] font-[900] ${londrinaSolid.className} text-white`}
          >
            ETHICAL COMMITMENTS
          </h3>
          <p className="mt-[2rem] w-[20.9375rem] md:mt-[3.5rem] md:w-[38.815rem] text-[#F1F1F1] text-[0.875rem] md:text-[1rem] font-normal leading-[1.5rem]">
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
          className="h-[26.375rem] rounded-[1.25rem] w-[41.9375rem]"
        />
      </div>
    </div>
  );
};

export default Ethical;
