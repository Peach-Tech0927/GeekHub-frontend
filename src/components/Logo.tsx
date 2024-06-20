import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-PeachTech.png"
        width={70}
        height={70}
        alt="Picture of the author"
      />
    </Link>
  );
};

export default Logo;
