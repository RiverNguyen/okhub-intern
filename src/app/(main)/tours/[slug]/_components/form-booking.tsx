"use client";

import { londrinaSolid } from "@/configs/font-family";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import { useRef } from "react";
import FormTourDetail from "./form";
import TourBooking from "./tour-booking";
import MyForm from "@/app/(main)/_components/form";
import TourBookingHome from "@/app/(main)/_components/tour-booking";

gsap.registerPlugin(MotionPathPlugin);

const FormBooking = () => {
  const motorRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(motorRef.current, {
      scrollTrigger: {
        trigger: ".pattern-section",
        start: "top 80%",
      },
      duration: 5,
      ease: "none",
      motionPath: {
        offsetY: -56,
        path: "#path",
        align: "#path",
        autoRotate: true,
        start: 0,
        end: 0.11,
      },
    });

    gsap.from(".content-ethical", {
      scrollTrigger: {
        trigger: ".content-ethical",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });

    return () => {
      gsap.killTweensOf(motorRef.current);
      gsap.killTweensOf(".content-ethical");
    };
  }, []);

  return (
    <>
      <div className="relative md:bg-white w-full h-[80.175rem] hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1600"
          height="772"
          viewBox="0 0 1600 772"
          fill="none"
          className="absolute inset-0 w-full h-full z-10 -top-[23rem] md:top-0 md:block hidden"
        >
          <path
            d="M0.443928 6.32847C0.386971 6.32647 0.330105 6.32444 0.273331 6.3224C0.459991 6.3224 0.639158 6.32232 0.810995 6.32218C4.62587 6.25929 5.74626 6.31815 0.810995 6.32218C0.691259 6.32416 0.568869 6.32625 0.443928 6.32847C15.8048 6.86902 37.8048 5.95188 52.6013 7.68951C62.7895 8.88596 73.7971 9.65078 84.3718 10.1608C103.046 11.0615 122.861 14.3912 140.749 16.3128C179.71 20.4982 245.58 27.2 283.249 20.0461C309.864 14.9915 329.482 7.81607 361.897 7.26886C379.188 6.97696 395.481 5.6608 412.356 5.37594C419.649 5.25282 443.091 0.237699 443.815 0.433311C461.295 5.15461 480.665 11.2898 503.462 13.0002C539.842 15.7297 576.617 14.0821 612.79 18.1532C615.791 18.4908 659.859 40.3255 663 39C669.84 36.1134 679.588 34.4603 689.631 32.9532C701.006 31.2463 707.445 41.4187 720.82 41.4187C728.498 41.4187 729.669 40.6985 736.082 39.7361C740.932 39.0083 747.049 40.1687 751.5 39C759.296 36.9529 757.812 53.1826 768.373 53.1826C773.563 53.1826 776.549 54.1291 780.987 54.1291C787.48 54.1291 792.038 52.3636 799.209 52.2362C815.323 51.9498 815.408 50.9758 823.815 56.9685C827.916 59.8909 833.614 60.961 840.635 62.8575C848.923 65.0962 856.344 66.9972 867.111 68.1156C884.454 69.9173 908.673 68.9306 923.176 72.8479C931.537 75.1062 948.088 75.1691 956.816 77.5802C970.254 81.2922 993.532 82.6052 1009.46 85.1518C1017.01 86.3598 1067.54 94.2134 1073.93 91.5141C1086.05 86.3976 1111.04 81.5574 1128.6 78.2638C1141.23 75.8943 1151.85 75.8956 1166.44 75.8975L1167.69 75.8976C1174.67 75.8976 1174.89 77.6297 1181.08 77.7905C1189.13 77.9997 1195.75 78.737 1204.28 78.737C1237.12 78.737 1268.7 78.3503 1300.69 81.0505C1313.87 82.1636 1329.32 84.4157 1343.05 84.4157H1385.1C1389.2 84.4157 1399.3 85.0468 1401.92 83.9425C1405.18 82.564 1414.89 85.1911 1418.74 85.5725C1432.27 86.9169 1446.48 91.7033 1460.78 91.9874C1466.37 92.0983 1469.76 92.9143 1474.8 93.6699C1483.57 94.986 1495.05 92.9676 1504.08 94.3535C1516.54 96.2657 1539.77 94.2199 1550.33 97.1929C1555.34 98.6025 1588.27 98.093 1594.33 98.6775C1614.48 100.622 1615.51 107.899 1615.51 113.611C1633.37 139.196 1622.11 914.92 1621.14 1004.43C1622.15 1005.58 1623.94 1006.37 1626.99 1006.44C1629.7 1006.51 1626.54 1006.49 1621.11 1006.45C1621.08 1009.26 1621.07 1011.17 1621.07 1012.12V1006.45C1611.82 1006.38 1596.02 1006.23 1591.4 1006.23H1589.9C1579.02 1006.23 1566.87 1006.23 1555.42 1006.44C1518.08 1007.13 1481.99 1006.98 1445.01 1006.18C1387.67 1004.93 1328.74 1000.55 1271.67 1000.55C1214.39 1000.55 1158.37 999.606 1101.45 999.606H994.767C960.152 999.606 926.353 1001.24 891.824 1001.45C813.482 1001.9 735.013 1001.5 656.66 1001.5H153.938H51.7739C40.2989 1001.5 26.4251 1002.2 15.1755 1001.5C-24.9459 1001.5 -29.6756 972.625 -21.8887 972.625C-29.8183 958.436 -27.7595 85.6463 -27.7595 71.2075V22.4122V10.1082C-27.7595 7.18925 -7.92971 6.47722 0.443928 6.32847Z"
            fill="#13341C"
            id="path"
          ></path>
        </svg>
        <Image
          ref={motorRef}
          src={"/motor.svg"}
          alt="motor"
          height={53}
          width={65}
          className="w-[4.0625rem] h-[3.3125rem] absolute z-50 "
        />

        <div className="content-ethical md:pt-[15.5rem] relative z-30 top-[40%] md:top-1/2 -translate-y-1/2 px-[1rem] md:px-[5rem]">
          <div className="mb-[3.25rem] md:block hidden">
            <p className="text-white/40 text-[1.125rem] font-bold">
              EASY WITH HONG HA TRAVEL
            </p>
            <h3
              className={`text-[2.5rem] md:text-[3.5rem] font-[900] ${londrinaSolid.className} text-white`}
            >
              ONLINE BOOKING
            </h3>
          </div>
          <div className="flex gap-x-[1rem]">
            <FormTourDetail />
            <TourBooking />
          </div>
        </div>
      </div>
      <div className="md:hidden grid grid-cols-1 px-[1rem] gap-y-[1.5rem] mt-[1.5rem]">
        <div className="">
          <p className="text-[0.875rem] font-extrabold text-[#2E2E2E]">
            Customer information:
          </p>
          <MyForm />
        </div>
        <div className="">
          <p className="text-[0.875rem] font-extrabold text-[#2E2E2E] mb-[1.5rem]">
            Confirmed tour booking
          </p>
          <TourBookingHome />
        </div>
      </div>
    </>
  );
};

export default FormBooking;
