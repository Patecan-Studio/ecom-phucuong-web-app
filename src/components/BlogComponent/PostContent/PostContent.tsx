"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import styles from "./Article.module.css";
import MarkdownWrapper from "../markdown-wrapper/MarkdownWrapper";

const PostContent = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState<any>();

  const fetchPost = async (id: string | number) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const {post} = await res.json();

    post && setPost(post);
  }

  useEffect(() => {
    fetchPost(params.slug);
  }, [])

  return (
    <div className={styles.Article}>
      <div className={styles.ArticleTopics}>
        {post?.topics.map((category: string) => {
          return (
            <Link
              href={`bai-dang/${category}`}
              key={category}
              className={styles.ArticleTopic}
              style={{ textDecoration: "inherit" }}
            >
              {category}
            </Link>
          );
        })}
      </div>
      <h1 className={styles.ArticleTitle}>{post?.title}</h1>
      <div className={styles.ArticleSubtitle}>{post?.subtitle}</div>
      <div className={styles.Byline}>
        {post?.author}
        {/* <time dateTime={post?.date}>
          {format(parseISO(post?.date), "LLLL d, yyyy")}
        </time> */}
      </div>
      <div className={styles.ArticleBody}>
        <MarkdownWrapper>{post?.body?.html}</MarkdownWrapper>
      </div>
    </div>
  );
};

export default PostContent;
