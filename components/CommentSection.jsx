"use client";

import React, { useState } from "react";
import { sampleComments } from "../utils/dummyData";

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState(sampleComments);

  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Anonymous",
        content: newComment,
        date: "Just now",
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Comments ({comments.length})
      </h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
          rows="3"
        />
        <button
          type="submit"
          className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b border-gray-100 pb-4 last:border-b-0"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-800">
                {comment.author}
              </span>
              <span className="text-gray-500 text-sm">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
