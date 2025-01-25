export interface IUser {
  _id: string;
  name: string;
  email: string;
  bookmarkedPosts: string[];
  likedPosts: string[];
  avatar: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export type TPostType = 'free' | 'premium';

export type TPostCategory = Pick<ICategory, '_id' | 'title' | 'slug'>;

export type TPostAuthor = Pick<IUser, '_id' | 'name' | 'avatar' | 'avatarUrl'>;

export type TPostRelated = Pick<
  IPost,
  '_id' | 'title' | 'slug' | 'category' | 'coverImage' | 'coverImageUrl' | 'author' | 'readingTime'
>;

export type TPostComment = {
  _id: string;
  user: TCommentAuthor;
  content: {
    text: string;
  };
  status: 1 | 2;
  openToComment: boolean;
  answers: TPostComment[];
  createdAt: string;
};

export interface IPost {
  _id: string;
  title: string;
  slug: string;
  category: TPostCategory;
  type: TPostType;
  briefText: string;
  text: string;
  coverImage: string;
  readingTime: number;
  tags: string[];
  author: TPostAuthor;
  related: TPostRelated[];
  coverImageUrl: string;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: TPostComment[];
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
}

export type TCommentAuthor = Pick<IUser, '_id' | 'name' | 'avatarUrl'>;

export interface IComment {
  _id: string;
  user: TCommentAuthor;
  post: string;
  content: {
    text: string;
  };
  status: 0 | 1 | 2;
  openToComment: boolean;
  answers: IComment[];
  createdAt: string;
  updatedAt: string;
}

export interface INewComment {
  text: string;
  parentId?: string | null;
  postId: string;
}
