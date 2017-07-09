// //routes/jobRoute.js
//
import express from 'express';
import Job from '../model/jobModel';
import Employer from '../model/jobModel';
import Talent from '../model/talentModel';

const router = express.Router();

/*************************************
************ GET all Jobs /job
***************************************/

router.get('/', (req, res, next) => {
  console.log("got GET request");

  Job.find({}, (err, jobs) => {
    if (err) return res.status(404).send('Not found');
    res.json(jobs);
  });
});

/*************************************
************ Create Job  /job
***************************************/
router.post('/', (req, res, next) => {
  console.log("got POST request...");
  const job = new Job();

  job.title = req.body.title || "Unknown Job Title";
  job.employer = req.body.employer || "Unknown";
  job.maxSalary = req.body.maxSalary || "Unknown Max Salary";
  job.qualification = req.body.qualification || "Unknown Qualification";
  job.skillList = req.body.skillList || "Unknown Skilllist";
  job.closingDate = req.body.closingDate|| "2017-06-19";
  job.talentList = req.body.talentList || "595f3dfc5c20595f3dfc5c20";
  //console.log(job);
  job.save((err, job) => {
       console.log("Saving..",job);
       res.json(job);
  });
});


/*************************************
************ Read Job /job/<id>
***************************************/
router.get('/:id', (req, res, next) => {

  const id = req.params.id;
  Job.findById(id, (err, job) => {
    if (err) return res.status(404).send('Not found');
    res.json(job);
  });
});


/*************************************
************ Update Job /job/<id>
***************************************/
router.put('/:id', (req, res, next) => {
 console.log("Got PUT Request");

 const job = req.body.job;

 Job.findById(job._id, (err, foundJob) => {
    if (err) return res.status(400).send('Bad Request');

    if(!foundJob){
      return res.status(404).send('Not Found');
    }

    foundJob.title = job.title;
    foundJob.employer = job.employer;
    foundJob.maxSalary = job.maxSalary;
    foundJob.qualification = job.qualification;
    foundJob.skillList = job.skillList;
    foundJob.closingDate = job.closingDate;
    foundJob.talentList = job.talentListjob;

    foundJob.save((err, job)=> {
      if (err) return res.status(400).send('Bad Request');
      res.json(foundJob);
    });

  });
});


/*************************************
************ Update Job /job/<id>
***************************************/
router.delete('/:id', (req, res, next) => {

const id = req.params.id;
Job.findById(id, (err, job) => {
  if (err) return res.status(400).send('Bad Request');

  if(!job){
    return res.status(404).send('Not Found');
  }
  job.remove();
  res.json("ok");
  });
});


export default router;
