import { getAllCategory } from './category.service';
import { getAllComments } from './comment.service';
import { getAllPosts } from './post.service';

export async function getDashboardCardsData() {
  const [posts, categories, comments] = await Promise.all([
    getAllPosts(),
    getAllCategory(),
    getAllComments(),
  ]);

  const postsCount = posts.posts.length || 0;
  const categoriesCount = categories.categories.length || 0;
  const commentsCount = comments?.commentsCount || 0;

  return { postsCount, categoriesCount, commentsCount };
}
