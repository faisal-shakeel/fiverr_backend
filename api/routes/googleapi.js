var express = require('express');
const { runReport, runReportCountries, runReportSessions, runReportConversions } = require('../controllers/googleapi');
var router = express.Router();

/* GET users listing. */
router.get('/analytics-data/:id', async function(req, res, next) {
  try{
    const id = req.params.id.toString();
    const response = await runReport(id);
    res.status(200).send(response);
  }catch(error){
    res.status(500).send(error);
  }
});

router.get('/analytics-data-countries/:id', async function(req, res, next) {
  try{
    const id = req.params.id.toString();
    const response = await runReportCountries(id);
    res.status(200).send(response);
  }catch(error){
    res.status(500).send(error);
  }
});

router.get('/analytics-data-sessions/:id', async function(req, res, next) {
  try{
    const id = req.params.id.toString();
    const response = await runReportSessions(id);
    res.status(200).send(response);
  }catch(error){
    res.status(500).send(error);
  }
});

router.get('/analytics-data-conversions/:id', async function(req, res, next) {
  try{
    const id = req.params.id.toString();
    const response = await runReportConversions(id);
    res.status(200).send(response);
  }catch(error){
    res.status(500).send(error);
  }
});

module.exports = router;
