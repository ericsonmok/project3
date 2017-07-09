//routes/employerRoute.js

import express from 'express';
import Employer from '../model/employerModel';

const router = express.Router();

/*************************************
********GET employer page. (/employer)
**************************************/
router.get('/', (req, res, next) => {
  console.log("There is a GET Request");
  Employer.find({}, (err, employers) => {
    if (err) return res.status(404).send('Not found');
    res.json(employers);
  });
});

/*************************************
********CREATE employer page. (/employer)
**************************************/
router.post('/', (req, res, next) => {
  console.log("There is a POST Request");
  const employer = new Employer();
  employer.email = req.body.email || "Unknown";
  employer.name = req.body.name || "Unknown";
  employer.contact = req.body.contact || "-1";
  employer.address = req.body.address || "Unknown";
  employer.password = req.body.password || "Unknown";

  employer.save((err, employer) => {
       res.json(employer);
  });
});

/*************************************
********READ an employer page. (/employer/<id>)
**************************************/
router.get('/:id', (req, res, next) => {
  console.log("There is a GET an Employer Id Request");
  const id = req.params.id;
  console.log(id)
  Employer.findById(id, (err, employer) => {
    if (err) return res.status(404).send('Not found');
    res.json(employer);
  });
});

/*************************************
********UPDATE an employer page. (/employer/<id>)
**************************************/
router.put('/:id', (req, res, next) => {
 console.log("There is a PUT Request");

 const employer = req.body;
 console.log(employer);
 Employer.findById(employer._id, (err,foundEmployer ) => {
    console.log(err);
    if (err) return res.status(400).send('Bad Request');

    if(!foundEmployer){
      return res.status(404).send('Not Found');
    }

    foundEmployer.address = employer.address;
    foundEmployer.contact = employer.contact;
    foundEmployer.name = employer.name;
    foundEmployer.email = employer.email;
    foundEmployer.password = employer.password;

    foundEmployer.save((err, employer)=> {
      if (err) return res.status(400).send('Bad Request');
      res.json(foundEmployer);
    });
 });
});

/*************************************
********DELETE an employer page. (/employer/<id>)
**************************************/
router.delete('/:id', (req, res, next) => {

  const id = req.params.id;
  Employer.findById(id, (err, employer) => {
    if (err) return res.status(400).send('Bad Request');

    if(!employer){
      return res.status(404).send('Not Found');
    }

    employer.remove();
    res.json(id+" deleted successfully");
  });
});


export default router;
