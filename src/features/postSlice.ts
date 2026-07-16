import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../types/Post';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [] as Post[],
  reducers: {
    setPosts: (_posts, action: PayloadAction<Post[]>) => {
      return action.payload;
    },
    clearPosts: () => [],
  },
});

export default postsSlice.reducer;
export const { setPosts, clearPosts } = postsSlice.actions;
