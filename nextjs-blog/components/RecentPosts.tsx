import Link from "next/link";

const RecentPosts = () => {
  return (
    <section className={"mt-10"}>
      <h1 className={"text-3xl font-extrabold"}>최근 게시물</h1>
      <div className={"flex flex-col"}>
        <Link href="/" passHref>
          <div className="mt-5">
            <div className={"font-medium text-xl"}>
              게시물 제목
            </div>
            <div className={"font-light"}>게시물 설명</div>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="mt-5">
            <div className={"font-medium text-xl"}>Hello!</div>
            <div className={"font-light"}>안녕하세요.</div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;