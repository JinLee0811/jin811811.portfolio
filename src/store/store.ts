import { configureStore } from '@reduxjs/toolkit';
// 여기에 slice들을 import

export const store = configureStore({
  reducer: {
    // 여기에 각 slice reducer들을 추가
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
