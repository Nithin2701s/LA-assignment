import { JOBS_API_URL } from '@/constants/urls';
import { useEffect, useState } from 'react';
export const useJobs = () => {
  const [joblist, setJoblist] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const getJobs = async (pageNum) => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await fetch(`${JOBS_API_URL}?page=${pageNum}`);
      const json = await response.json();
      const jobs = json?.results || [];
      if (jobs.length > 0) {
        const filteredJobs = jobs.filter(job => job.id && job.title)
        setJoblist((prevJobs) => {
          const uniqueJobs = [...new Map([...prevJobs, ...filteredJobs].map(job => [job.id, job])).values()];
          return uniqueJobs;
        });
        setPage(pageNum + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      // console.log('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs(1);
  }, []);

  return { joblist, loading, getJobs, page };
};
