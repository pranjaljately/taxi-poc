const express = require('express');
const mockRes = require('../mock_responses/mock_res');

const router = express.Router();

/**
 * @route GET api/quotes/:startLatitude-:startLongitude-:endLatitude-:endLongitude
 * @description Get quotes from different companies
 * @access Public
 */
router.get('/:startLatitude-:startLongitude-:endLatitude-:endLongitude', async (req, res) => {
  const { startLatitude, startLongitude, endLatitude, endLongitude } = req.params;
  const quotesList = [];

  const jsonRes = {
    Pick_up_location: { startLatitude, startLongitude },
    Destination: { endLatitude, endLongitude },
  };

  const uberData = await handleUberRes(startLatitude, startLongitude, endLatitude, endLongitude);
  quotesList.push(uberData);

  const lyftData = await handleLyftRes(startLatitude, startLongitude, endLatitude, endLongitude);
  quotesList.push(lyftData);

  res.json(quotesList);
});

const handleUberRes = async (startLatitude, startLongitude, endLatitude, endLongitude) => {
  try {
    // const res = await fetch('uber api endpoint');
    // First get data from uber api
    const res = await mockRes;
    const uberData = await res.mockUberRes();
    // Manipulate data into our own format
    const data = {
      company: 'Uber',
      cost: uberData.fare.display,
      tripDuractionEstimate: uberData.trip.distance_estimate,
      pickUpEstimate: uberData.pickup_estimate,
    };
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const handleLyftRes = async (startLatitude, startLongitude, endLatitude, endLongitude) => {
  try {
    // const res = await fetch('uber api endpoint');
    // First get data from uber api
    const res = await mockRes;
    const uberData = await res.mockUberRes();
    // Manipulate data into our own format
    const data = {
      company: 'Lyft',
      cost: uberData.fare.display,
      tripDuractionEstimate: uberData.trip.distance_estimate,
      pickUpEstimate: uberData.pickup_estimate,
    };
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = router;
