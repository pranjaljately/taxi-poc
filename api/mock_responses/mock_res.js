module.exports.mockUberRes = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const jsonRes = {
        fare: {
          value: 5.73,
          fare_id: 'd30e732b8bba22c9cdc10513ee86380087cb4a6f89e37ad21ba2a39f3a1ba960',
          expires_at: 1476953293,
          display: '$5.73',
          currency_code: 'USD',
          breakdown: [
            {
              type: 'promotion',
              value: -2.0,
              name: 'Promotion',
            },
            {
              type: 'base_fare',
              notice: 'Fares are slightly higher due to increased demand',
              value: 7.73,
              name: 'Base Fare',
            },
          ],
        },
        trip: {
          distance_unit: 'mile',
          duration_estimate: 540,
          distance_estimate: 2.39,
        },
        pickup_estimate: 2,
      };
      resolve(jsonRes);
    }, 1000);
  });
