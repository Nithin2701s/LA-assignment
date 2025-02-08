import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  bookmarkedJobs: [],
};

// Load bookmarks from AsyncStorage
const loadBookmarks = async () => {
  try {
    const savedJobs = await AsyncStorage.getItem("bookmarkedJobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  } catch (error) {
    console.error("Failed to load bookmarks:", error);
    return [];
  }
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setBookmarks: (state, action) => {
      state.bookmarkedJobs = action.payload;
    },
    toggleBookmark: (state, action) => {
      const job = action.payload;
      const isBookmarked = state.bookmarkedJobs.some((j) => j.id === job.id);
      
      if (isBookmarked) {
        state.bookmarkedJobs = state.bookmarkedJobs.filter((j) => j.id !== job.id);
      } else {
        state.bookmarkedJobs.push(job);
      }

      // Save updated bookmarks to AsyncStorage
      AsyncStorage.setItem("bookmarkedJobs", JSON.stringify(state.bookmarkedJobs))
        .catch((error) => console.error("Failed to save bookmarks:", error));
    },
  },
});

export const { toggleBookmark, setBookmarks } = jobSlice.actions;

// Thunk to load bookmarks on app start
export const initializeBookmarks = () => async (dispatch) => {
  const savedBookmarks = await loadBookmarks();
  dispatch(setBookmarks(savedBookmarks));
};

export default jobSlice.reducer;
