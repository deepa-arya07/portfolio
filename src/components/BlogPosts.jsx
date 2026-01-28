import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPostsData";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title">Post not found</h2>
        </header>
        <p className="blog-text">
          The blog post you’re looking for doesn’t exist.{" "}
          <Link to="/blog">Go back</Link>.
        </p>
      </article>
    );
  }

  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">{post.title}</h2>
      </header>

      <div className="blog-meta" style={{ marginBottom: 16 }}>
        <p className="blog-category">{post.category}</p>
        <span className="dot"></span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </time>
      </div>

      <figure className="blog-banner-box" style={{ marginBottom: 16 }}>
        <img src={post.image} alt={post.title} loading="lazy" />
      </figure>

      {/* Simple content rendering (plain text). For markdown, use react-markdown later */}
      <div className="blog-text" style={{ whiteSpace: "pre-wrap" }}>
        {post.content}
      </div>

      <div style={{ marginTop: 24 }}>
        <Link
          to="/blog"
          className="form-btn"
          style={{ display: "inline-flex" }}
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
