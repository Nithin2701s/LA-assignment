import JobList from '@/components/JobList'
import { JOBS_API_URL } from '@/constants/urls'
import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

const index = () => {
  const [joblist,setJoblist] = useState(null);
  const getJobs = async()=>{
     const response = await fetch(JOBS_API_URL + '?page=1')
     const json  = await response.json();
     const jobs = json?.results;
     const filteredJobs = jobs.filter(job=>job.id)
     setJoblist(filteredJobs)
  }
  useEffect(()=>{
   getJobs() 
  },[])
  if(joblist === null) return;
  return (
    <ScrollView style ={{marginTop:10}}>
      <Text style={{fontSize:20,fontWeight:'700',padding:5}}>
        Jobs
      </Text>
      <JobList joblist={joblist} />
    </ScrollView>
  )
}

export default index
