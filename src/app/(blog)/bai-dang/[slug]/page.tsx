import { allPosts } from "../../../../../.contentlayer/generated";
import PostContent from "@/components/BlogComponent/PostContent/PostContent";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title };
};

const PostPage = ({ params }: { params: { slug: string } }) => {

  return (
    <PostContent params={params} />
  );
}

export default PostPage;
