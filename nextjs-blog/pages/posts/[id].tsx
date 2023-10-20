import Head from 'next/head';
import Layout from '@/components/layout';
import Date from '@/components/date';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { PostType } from '@/types/post';
import utilStyles from '@/styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  // paths: [ { params: { id: 'pre-rendering'  } }, { params: { id: 'ssg-ssr' } } ]
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: {
  params: PostType;
}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Server Side Rendering
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

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
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          ) : ''
        }
      </article>
    </Layout>
  );
}