import Image from "next/image";
import React from "react";

const Mountain = () => {
  return (
    <div className="relative hidden md:block">
      <Image
        src={"/images/mountain.png"}
        alt="banner"
        width={800}
        height={700}
        quality={100}
      />

      <Image
        src="/cloud-1.svg"
        alt="cloud"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "20rem", height: "20rem" }}
        className="absolute top-0 -left-[3rem]"
      />
      <Image
        src="/cloud-2.svg"
        alt="cloud"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "30rem", height: "20rem" }}
        className="absolute animate-float top-0 -left-[4rem]"
      />
      <Image
        src="/cloud-2.svg"
        alt="cloud"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "40rem", height: "20rem" }}
        className="absolute top-[6rem] -left-[6rem]"
      />
      <Image
        src="/cloud-3.svg"
        alt="cloud"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "20rem", height: "20rem" }}
        className="absolute animate-float bottom-[10rem] right-0"
      />
      <Image
        src="/cloud-4.svg"
        alt="cloud"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "30rem", height: "20rem" }}
        className="absolute  bottom-[14rem] right-[10rem]"
      />
      <Image
        src="/cloud-4.svg"
        alt="cloud"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "30rem", height: "20rem" }}
        className="absolute animate-float bottom-[14rem] right-[10rem]"
      />
    </div>
  );
};

export default Mountain;
