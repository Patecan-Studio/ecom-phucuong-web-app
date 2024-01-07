"use client";

import styles from "./PostPreview.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";

const PostPreview = (props: any) => {
  const router = useRouter();

  return (
    <div
      style={{ textDecoration: "inherit", color: "inherit" }}
      onClick={(event) => {
        event.stopPropagation();
        router.push(`bai-dang/${props.slug}`);
      }}
      className={styles.PostPreviewContainer}
    >
      <div className={styles.ImageWrapper}>
        <Image
          className={styles.Image}
          src={`${process.env.NEXT_PUBLIC_ASSET_URL}${props.featured_image}?key=optimised`}
          alt=""
          fill
          sizes="100%"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.ArticleTextInfo}>
        <div className={styles.Topics}>
          {props.topics.map((topic: any) => (
            <div
              onClick={(event) => {
                event.stopPropagation();
                router.push(`bai-dang/${topic}`);
              }}
              // href={`/topic/${topic}`}
              style={{ textDecoration: "inherit" }}
              className={styles.Topic}
              key={topic}
            >
              {topic}
            </div>
          ))}
        </div>
        <div className={styles.Title}>{props.title}</div>
        <time className={styles.Date} dateTime={props.date}>
          {format(parseISO(props?.date_created), "LLLL d, yyyy")}
        </time>
      </div>
    </div>
  );
}

export default PostPreview;
