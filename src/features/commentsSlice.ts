import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../types/Comment';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [] as Comment[],
  reducers: {
    setComments: (_comments, action: PayloadAction<Comment[]>) => {
      return action.payload;
    },
    addComment: (comments, action: PayloadAction<Comment>) => {
      comments.push(action.payload);
    },
    deleteComment: (comments, action: PayloadAction<number>) => {
      return comments.filter(comment => comment.id !== action.payload);
    },
    clearComments: () => {
      return [];
    },
  },
});

export default commentsSlice.reducer;
export const { setComments, addComment, deleteComment, clearComments } =
  commentsSlice.actions;
