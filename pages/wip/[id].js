// https://samuelkraft.com/blog/building-a-notion-blog-with-public-api

import { getDatabase, getPostBySlug } from "lib/notion";
import { DATABASE_ID } from "lib/constants";
import RenderBlock from 'ui/notion/RenderBlock'
import { Text } from "ui/notion/Text";
import Layout from "ui/layout/Layout"
// import { NextSeo } from "next-seo";

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <Layout>
      {/* <NextSeo
        title={ page.properties.title.rich_text.map(item => item.plain_text).join(" ") }
        description={ page.properties.description.rich_text.map(item => item.plain_text).join(" ")  }
      /> */}

      <main id="main" className="prose my-4">
        <h1>
          <Text text={ page.properties.name.title } />
        </h1>
        { blocks.map((block) => <RenderBlock key={ block.id } block={ block } /> )}
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(DATABASE_ID);

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const { page, blocks } = await getPostBySlug(id, DATABASE_ID);

  if (!page && !blocks) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};
