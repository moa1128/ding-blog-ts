import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/components/layout';
import Date from '@/components/date';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { PostType } from '@/types/post';
import utilStyles from '@/styles/utils.module.css';

export default function Post({ postData }: {
  postData: PostType;
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {
          postData?.contentHtml ? (
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          ) : ''
        }
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  // paths: [ { params: { id: 'pre-rendering'  } }, { params: { id: 'ssg-ssr' } } ]
  return {
    paths,
    fallback: false,
  };
}