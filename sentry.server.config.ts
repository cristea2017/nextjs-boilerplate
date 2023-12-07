// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://aaf85ac580239a9478ee40e08e14de81@o1379059.ingest.sentry.io/4506348552519680",

  // Adjust this value in production, or use tracesSampler for greater control
  release: "test@0.2.1",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
