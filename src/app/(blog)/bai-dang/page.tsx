import PostPreview from "@/components/BlogComponent/PostPreview/PostPreview";
import DirectusConnection from "@/lib/directus";
import { readItems } from "@directus/sdk";
const Home = async () => {
  const getAllPosts = async () => {
    try {
      const post = await DirectusConnection.request(
        readItems("Blogs", {
          fields: [
            "*",
            "author.id",
          ],
        })
      );
      return post
    } catch (e) {
      console.log("Fetching Error" + e);
    }
  };
  const data = await getAllPosts();

  // generate previews of latest posts
  const postPreviews = data?.map((post: any, idx: any) => (
    <PostPreview key={idx} {...post} />
  ));
  return <main className="ListPosts">{postPreviews}</main>;
};

export default Home;
