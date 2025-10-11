import React, { useState } from "react";
import {
  FaUser,
  FaRegClock,
  FaReply,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

const CommentSection = ({ articleId }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      content:
        "This is exactly what I was looking for! The insights on AI in healthcare are spot on. Looking forward to more articles like this.",
      date: "2 hours ago",
      likes: 12,
      dislikes: 1,
      replies: [
        {
          id: 2,
          author: "Mike Chen",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
          content:
            "I agree! The healthcare sector is really embracing AI technology. Great read!",
          date: "1 hour ago",
          likes: 5,
          dislikes: 0,
        },
      ],
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      content:
        "Very informative article. I especially liked the section about future trends. Keep up the great work!",
      date: "5 hours ago",
      likes: 8,
      dislikes: 0,
      replies: [],
    },
    {
      id: 4,
      author: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      content:
        "The examples provided really helped me understand the concepts better. Would love to see more practical applications in future posts.",
      date: "1 day ago",
      likes: 15,
      dislikes: 2,
      replies: [],
    },
  ]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "You",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face",
        content: newComment,
        date: "Just now",
        likes: 0,
        dislikes: 0,
        replies: [],
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleLike = (commentId, type) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            [type]: comment[type] + 1,
          };
        }
        return comment;
      })
    );
  };

  const CommentItem = ({ comment, isReply = false }) => (
    <div
      className={`${
        isReply ? "ml-8 border-l-2 border-gray-200 pl-4" : ""
      } mb-6`}
    >
      <div className="flex gap-4">
        <img
          src={comment.avatar}
          alt={comment.author}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-semibold text-gray-800">
              {comment.author}
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm">
              <FaRegClock className="text-xs" />
              {comment.date}
            </span>
          </div>
          <p className="text-gray-700 mb-3">{comment.content}</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLike(comment.id, "likes")}
              className="flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors"
            >
              <FaThumbsUp className="text-sm" />
              <span className="text-sm">{comment.likes}</span>
            </button>
            <button
              onClick={() => handleLike(comment.id, "dislikes")}
              className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors"
            >
              <FaThumbsDown className="text-sm" />
              <span className="text-sm">{comment.dislikes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-orange-600 transition-colors">
              <FaReply className="text-sm" />
              <span className="text-sm">Reply</span>
            </button>
          </div>

          {/* Render replies */}
          {comment.replies &&
            comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply={true} />
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face"
            alt="Your avatar"
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              rows="3"
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
