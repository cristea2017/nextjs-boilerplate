// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { ExtraErrorData } from "@sentry/integrations";

Sentry.init({
  dsn: "https://aaf85ac580239a9478ee40e08e14de81@o1379059.ingest.sentry.io/4506348552519680",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.1,
  release: "test@" + require("./package.json").version,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  replaysSessionSampleRate: 0.1,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 0.5,
  integrations: [
    new ExtraErrorData({ depth: 6 }),
    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  normalizeDepth: 5,
  maxBreadcrumbs: 80,
});
