//routes/talentRoute.js

import express from 'express';
import Talent from '../model/Talent';
import User from '../model/User';

const router = express.Router();

/*************************************
********GET talent page. (/talent)
**************************************/
router.get('/', (req, res, next) => {
  console.log("There is a GET Request");
  Talent.find({}, (err, talents) => {
    if (err) return res.status(404).send('Not found');
    res.json(talents);
  });
});

/*************************************
********CREATE talent page. (/talent)
**************************************/
router.post('/', (req, res, next) => {
  console.log("There is a POST Request");
  const talent = new Talent();
  talent.email = req.body.email || "Unknown";
  talent.name = req.body.name || "Unknown";
  talent.contact = req.body.contact || "Unknown";
  talent.address = req.body.address || "Unknown";
  talent.qualification = req.body.qualification || "Unknown";
  talent.skillList = req.body.skillList || "[]";
  talent.salary = req.body.salary || "-1";
  talent.password = req.body.password || "Unknown";

  talent.save((err, talent) => {
       res.json(talent);
  });
});

/*************************************
********READ talent page. (/talent/<id>)
**************************************/
router.get('/:id', (req, res, next) => {
  console.log("There is a GET an Talent Id Request");
  const id = req.params.id;
  console.log(id)
  Talent.findById(id, (err, talent) => {
    if (err) return res.status(404).send('Not found');
    res.json(talent);
  });
});

/*************************************
********UPDATE an talent page. (/talent/<id>)
**************************************/
router.put('/:id', (req, res, next) => {
 console.log("There is a PUT Request");

 const talent = req.body;
 console.log(talent);
 Talent.findById(talent._id, (err,foundTalent ) => {
    console.log(err);
    if (err) return res.status(400).send('Bad Request');

    if(!foundTalent){
      return res.status(404).send('Not Found');
    }

    foundTalent.email = talent.email ;
    foundTalent.name = talent.name;
    foundTalent.contact = talent.contact;
    foundTalent.address = talent.address;
    foundTalent.qualification = talent.qualification;
    foundTalent.skillList = talent.skillList;
    foundTalent.salary = talent.salary;
    foundTalent.password = talent.password;

    foundTalent.save((err, talent)=> {
      if (err) return res.status(400).send('Bad Request');
      res.json(foundTalent);
    });
 });
});

/*************************************
********DELETE a talent page. (/talent/<id>)
**************************************/
router.delete('/:id', (req, res, next) => {

  const id = req.params.id;
  Talent.findById(id, (err, talent) => {
    if (err) return res.status(400).send('Bad Request');

    if(!talent){
      return res.status(404).send('Not Found');
    }

    talent.remove();
    res.json(id+" deleted successfully");
  });
});


export default router;
