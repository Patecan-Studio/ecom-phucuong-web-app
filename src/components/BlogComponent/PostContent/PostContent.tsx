"use client";
import Link from "next/link";
import React from "react";
import { format, parseISO } from "date-fns";
import styles from "./Article.module.css";
import MarkdownWrapper from "../markdown-wrapper/MarkdownWrapper";
import Image from "next/image";

const PostContent = (params: any) => {
  const post = params.params[0];

  return (
    <div className={styles.Article}>
      <div className={styles.ArticleTopics}>
        {post?.topics?.map((category: string) => {
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
      <div className={styles.ImageWrapper}>
        <Image
          className={styles.Image}
          src={`${process.env.NEXT_PUBLIC_ASSET_URL}${post.featured_image}?key=optimised`}
          alt=""
          fill
          sizes="100%"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.ArticleSubtitle}>{post?.subtitle}</div>
      <div className={styles.Byline}>
        {post?.author}{" | "}
        <time dateTime={post?.date}>
          {format(parseISO(post?.date_created), "LLLL d, yyyy")}
        </time>
      </div>
      <div className={styles.ArticleBody}>
        <MarkdownWrapper>{post?.body}</MarkdownWrapper>
      </div>
    </div>
  );
};

export default PostContent;
