'use client';

import Button from '@/components/ui/Button';
import { IPost, TPostComment } from '@/types';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import PostCommentItem from './PostCommentItem';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import PostCommentForm from './PostCommentForm';

export default function PostCommentsList({ comments, _id: postId }: IPost) {
  const [isWriteComment, setIsWriteComment] = useState(false);
  const [parentComment, setParentComment] = useState<TPostComment | null>(null);

  const { user } = useAuth();

  const router = useRouter();

  const handleAddComment = (parent: TPostComment | null) => {
    if (!user?._id) {
      router.push('/auth/sign-in');
      return;
    }

    setIsWriteComment(true);
    setParentComment(parent);
  };

  return (
    <div
      id="comments"
      className="rounded p-4 space-y-5"
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h4 className="font-semibold text-xl">نظرات</h4>
        <Button
          variant="primary"
          className="flex items-center gap-x-2"
          onClick={() => handleAddComment(null)}
        >
          <PlusCircleIcon
            width={20}
            height={20}
          />
          ثبت نظر جدید
        </Button>
      </div>

      {isWriteComment && (
        <PostCommentForm
          postId={postId}
          parentComment={parentComment || null}
          onCloseCommentWriting={() => setIsWriteComment(false)}
        />
      )}

      <div className="space-y-4">
        {comments?.length > 0 ? (
          comments.map((comment) => (
            //  Main comment
            <div
              key={comment._id}
              className="space-y-4"
            >
              <div className="rounded bg-secondary-0 border border-secondary-100">
                <PostCommentItem
                  comment={comment}
                  onReplyComment={() => handleAddComment(comment)}
                />
              </div>
              {/* Answers to main comment */}
              {comment.answers.map((answer) => (
                <div
                  key={answer._id}
                  className="post-comment-answer"
                >
                  <div className="rounded bg-secondary-100 border border-secondary-200 comment-answer-item">
                    <PostCommentItem comment={answer} />
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="w-full px-5 h-56 bg-background rounded flex flex-col items-center justify-center gap-y-4 text-center">
            <ChatBubbleBottomCenterTextIcon
              width={30}
              height={30}
            />
            <p>نظری برای این پست ثبت نشده</p>
          </div>
        )}
      </div>
    </div>
  );
}
