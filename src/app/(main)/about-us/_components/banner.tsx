import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useGSAP(() => {
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
    });

    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 3,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".btn-group button", {
      scrollTrigger: {
        trigger: ".btn-group",
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      duration: 3,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".map-container", {
      scrollTrigger: {
        trigger: ".map-container",
        start: "top 80%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 5,
      ease: "power3.out",
    });

    gsap.from(".stats-item", {
      scrollTrigger: {
        trigger: ".map-container",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 3,
      stagger: 0.3,
      ease: "power3.out",
    });

    return () => {
      gsap.killTweensOf(".about-title");
      gsap.killTweensOf(".about-text");
      gsap.killTweensOf(".btn-group button");
      gsap.killTweensOf(".map-container");
      gsap.killTweensOf(".stats-item");
    };
  }, []);

  return (
    <div className="bg-[url(/images/about/bg-about.png)] bg-no-repeat bg-top md:bg-cover h-[54rem] md:h-[88rem] relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)",
        }}
      />
      <div className="relative z-10 flex md:flex-row flex-col">
        <div className="pl-[1rem] md:pl-[5rem] pt-[8.7rem]">
          <div className="about-title">
            <Image
              src={"/images/about/title.png"}
              alt="title-about"
              width={840}
              height={355}
              className="w-[16.35rem] h-[6.5rem] md:w-[44rem] md:h-[15.875rem]"
            />
          </div>
          <p className="about-text w-[20.5rem] md:w-[50rem] text-white text-[0.875rem] md:text-[1rem] mt-[3rem]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam,
            beckons adventurers with its breathtaking scenery and vibrant
            cultural tapestry. From the towering peaks of the Dong Van Karst
            Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers
            an unforgettable journey through some of Vietnam&apos;s most
            awe-inspiring landscapes.
          </p>
          <div className="mt-[2rem] btn-group md:block hidden">
            <div className="flex uppercase gap-[0.5rem]">
              <button
                form="bookForm"
                type="submit"
                className="flex py-[1rem] px-[2rem] bg-[#E64827] text-white text-[0.875rem] font-bold rounded-[0.5rem] items-center justify-center gap-[0.5rem] group"
              >
                BOOK NOW{" "}
                <MoveRight className="group-hover:translate-x-1 transform duration-300" />
              </button>
              <button className="flex py-[1rem] px-[2rem] border border-white/60 text-white/60 text-[0.875rem] font-bold rounded-[0.5rem] items-center justify-center gap-[0.5rem] group">
                ALL TOUR
                <MoveRight className="group-hover:translate-x-1 transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        <div className="map-container relative right-[12rem] top-[18rem] md:block hidden">
          <Image
            src={"/images/about/map.png"}
            alt="map"
            width={1000}
            height={1000}
          />
          <div className="stats-item absolute top-[50%] left-[40.8%] transform -translate-y-1/2 flex gap-x-[5rem]">
            <Image
              src={"/images/about/pin.svg"}
              alt="pin"
              width={20}
              height={20}
              className="animate-scale"
            />
            <div>
              <h2 className="text-[7.5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white from-30% to-transparent leading-32">
                10.000
              </h2>
              <p className="text-white px-[0.75rem] py-[0.375rem] rounded-[1.5rem] bg-black/15 backdrop-blur-lg w-fit ml-auto">
                Visitors experience
              </p>
            </div>
          </div>
          <div className="stats-item absolute bottom-[14%] -left-[64%] transform -translate-y-1/2 flex gap-x-[2.175rem]">
            <div>
              <h2 className="text-[7.5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white from-30% to-transparent leading-32">
                13 YEAR
              </h2>
              <p className="text-white px-[0.75rem] py-[0.375rem] rounded-[1.5rem] bg-black/15 backdrop-blur-lg w-fit">
                Experience
              </p>
            </div>
            <Image
              src={"/images/about/pin.svg"}
              alt="pin"
              width={20}
              height={20}
              className="animate-scale"
            />
          </div>
        </div>
        <div className="map-container relative -top-[3rem] z-30 md:hidden block">
          <Image
            src={"/images/about/dashed.svg"}
            alt="map"
            width={700}
            height={700}
          />
          <div className="stats-item absolute top-1/4 right-[1.2rem] transform -translate-y-1/2 flex items-end gap-x-[0.8rem]">
            <div>
              <h2 className="text-[3.5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white from-30% to-transparent leading-16">
                10.000
              </h2>
              <p className="font-extrabold text-white px-[0.75rem] py-[0.375rem] rounded-[1.5rem] bg-black/15 backdrop-blur-lg w-fit ml-auto">
                Visitors experience
              </p>
            </div>
            <Image
              src={"/images/about/pin.svg"}
              alt="pin"
              width={20}
              height={20}
              className="animate-scale mb-[0.5rem]"
            />
          </div>
          <div className="stats-item absolute -bottom-[3rem] left-[1rem] transform -translate-y-1/2 flex flex-col items-start gap-y-[2.8rem]">
            <div>
              <h2 className="text-[3.5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white from-30% to-transparent leading-16">
                13 YEAR
              </h2>
              <p className="font-extrabold text-white px-[0.75rem] py-[0.375rem] rounded-[1.5rem] bg-black/15 backdrop-blur-lg w-fit">
                Experience
              </p>
            </div>
            <Image
              src={"/images/about/pin.svg"}
              alt="pin"
              width={20}
              height={20}
              className="animate-scale mb-[0.5rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
