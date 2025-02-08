import { useSelector } from "react-redux";

const useBookmark = (jobId) => {
  const bookmarkedJobs = useSelector((state) => state.job.bookmarkedJobs);
  
  // Directly check if job is bookmarked without using useState/useEffect
  return bookmarkedJobs.some((job) => job.id === jobId);
};

export default useBookmark;
