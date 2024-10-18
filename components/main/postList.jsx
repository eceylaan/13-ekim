"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import AddComment from "./addComment";

export default function PostList() {
  const supabase = createClient();
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
    async function getPosts() {
      const response = await supabase.from("posts").select("*");

      setPosts([...response.data]);
    }

    getPosts();
  }, []);
  if (posts.length <= 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="posts">
        {posts &&
          posts.map((post) => (
            <div
              className="postBox"
              onClick={() => {
                setSelectedPost(post);
              }}
            >
              {post.content}
            </div>
          ))}
      </div>
      {selectedPost && (
        <div>
          <dialog open={selectedPost ? true : false}>
            <button onClick={() => setSelectedPost(null)}>X</button>
            <AddComment postId={selectedPost.id} />
            <p>{selectedPost.title ? selectedPost.title : " No title"}</p>
            <p>{selectedPost.content ? selectedPost.content : " No Content"}</p>
          </dialog>
        </div>
      )}
    </div>
  );
}
