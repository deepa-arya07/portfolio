import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPostsData";

const Blog = () => {
  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post) => (
            <li className="blog-post-item" key={post.id}>
              <Link to={`/blog/${post.slug}`}>
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
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

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
