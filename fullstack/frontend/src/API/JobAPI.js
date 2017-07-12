
/*
 *  Search Jobs
 */
export const searchJobs = (searchTerm, Jobs) => {

  if(searchTerm !== ""){
    Jobs = Jobs.filter((job) => {
        return job.text.includes(searchTerm);
    });
  }

  return Jobs;
}
