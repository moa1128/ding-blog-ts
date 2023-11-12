import Link from "next/link";

const BlogPost = () => {
  return (
    <Link href="/blog" passHref>
      <div className="w-full my-7 hover:-translate-x-1.5">
        <div className="font-medium text-xs text-gray-400">날짜</div>
        <div className={"font-extrabold text-2xl mt-2"}>
          제목
        </div>
        <div className={"font-medium text-gray-600 text-xl mt-1"}>
          설명
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;