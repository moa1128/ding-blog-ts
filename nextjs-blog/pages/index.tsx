import Image from "next/image";
import Container from "@/components/Container";
import RecentPosts from "@/components/RecentPosts";
import metadata from "@/data/metadata";

const Home = () => {
  return (
    <Container>
      <div className={"my-5 w-full"}>
        <div className={"relative"}>
          <Image
            src={"/images/moon.jpg"}
            alt="홈 이미지"
            layout="responsive"
            width={100}
            height={45}
            style={{ objectFit: "cover" }}
            className={"rounded-3xl"}
          />
          <span
            className={"absolute bottom-10 font-extrabold italic text-white text-4xl md:text-7xl text flex justify-end px-8 w-full drop-shadow-lg"}
          >
            {metadata.title}
          </span>
        </div>
        <RecentPosts />
      </div>
    </Container>
  );
};

export default Home;