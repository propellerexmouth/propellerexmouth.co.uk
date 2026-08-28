/**
 * While we are between premises the site shows a single holding page: the
 * header, footer and every other page are hidden and all routes redirect to
 * the holding page.
 *
 * To bring the full site back once we are open again, set `holdingPage` to
 * false and deploy. Nothing else needs changing.
 */
const holdingPage = true;

/** Routes that redirect to the holding page while `holdingPage` is true. */
const holdingRedirects = ["/about", "/community", "/contact", "/events", "/spaces"];

module.exports = { holdingPage, holdingRedirects };
