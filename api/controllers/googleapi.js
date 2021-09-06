const dotenv = require("dotenv");
dotenv.config();

/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */

// const propertyId = process.env.GOOGLE_API_PROPERTY_ID;

// Imports the Google Analytics Data API client library.
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();


// Runs a simple report.
module.exports.runReport = async (id) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${id}`,
    dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
    dimensions: [{ name: "date" }],
    metrics:    [{ name: "activeUsers" }],
    orderBys: [{ dimension: { orderType: "ALPHANUMERIC", dimensionName: "date" } } ]
  });

  return response;
};

// Runs a simple report.
module.exports.runReportCountries = async (id) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${id}`,
    dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
    dimensions: [{ name: "city" }],
    metrics:    [{ name: "activeUsers" }],
    limit: 10
  });

  return response;
};

module.exports.runReportSessions = async (id) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${id}`,
    dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
    dimensions: [{ name: "date" }],
    metrics:    [{ name: "engagementRate" }],
    orderBys: [{ dimension: { orderType: "ALPHANUMERIC", dimensionName: "date" } } ]
  });

  return response;
};

module.exports.runReportConversions = async (id) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${id}`,
    dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
    dimensions: [{ name: "date" }],
    metrics:    [{ name: "purchaseRevenue" }],
  });

  return response;
};