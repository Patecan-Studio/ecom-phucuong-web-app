import DirectusConnection from "@/lib/directus";
import { allPosts } from "../../../../../.contentlayer/generated";
import PostContent from "@/components/BlogComponent/PostContent/PostContent";
import { readItems } from "@directus/sdk";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title };
};

const PostPage = async ({ params }: { params: { slug: string } }) => {

  const getPostData = async () => {
    try {
      const post = await DirectusConnection.request(
        readItems("Blogs", {
          filter: {
            slug: {
              _eq: params.slug,
            }
          },
          fields: [
            "*",
            "author.id",
          ],
        })
      );
      return post
    } catch (error) {
      console.log(error);
    }
  }

  const postData = await getPostData();

  return (
    <PostContent params={postData} />
  );
}

export default PostPage;
