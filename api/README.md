# CaBeam API

This is a Node/Express REST API for getting quotes from different cab-hailing companies.

## Getting Started

```bash
  npm install
  npm run server # Runs on http://localhost:5000
```

# API Usage & Endpoints

## Get quotes for journey

####[GET api/quotes/:startLatitude-:startLongitude-:endLatitude-:endLongitude]

- Request: Get quotes from different cab companies for the journey provided

- Response: 200 (application/json)

  - Body

          [
            {
              "company": "",
              "cost": "",
              "tripDuractionEstimate": "",
              "pickUpEstimate": ""
            },
            {
              "company": "",
              "cost": "",
              "tripDuractionEstimate": "",
              "pickUpEstimate": ""
            }
          ]
