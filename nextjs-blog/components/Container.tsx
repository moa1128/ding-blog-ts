import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/Nav";

import metadata from "@/data/metadata";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <Image
            src={`/images/profile.jpg`}
            alt="로고"
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
            className={`rounded-full`}
          />
          <span className={`mx-2 font-extralight text-lg`}>
            {metadata.title}
          </span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{children}</main>
    </div>
  );
};

export default Container;