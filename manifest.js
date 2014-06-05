var loc = location.href;
var baseurl = loc.substring(0,loc.lastIndexOf('/'));

function getManifest() {
  return {
    // currently required
    "name": "Goal.com",
    "origin": baseurl,
    // icons from http://findicons.com/icon/158311/firefox?id=356182 by ipapun
    "iconURL": baseurl+"/firefox16.png",
    "icon32URL": baseurl+"/firefox32.png",
    "icon64URL": baseurl+"/firefox64.png",

    // at least one of these must be defined
    "sidebarURL": "http://mozilla.qa.goal.com/mozilla-sidebar",

    // should be available for display purposes
    "description": "Goal.com social sidebar",
    "author": "PERFORM Group",
    // "homepageURL": "https://github.com/mixedpuppy/socialapi-sidebar/",

    // optional
    "version": 1
  };
}
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Social_API/Manifest