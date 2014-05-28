var loc = location.href;
var baseurl = loc.substring(0,loc.lastIndexOf('/'));

function getManifest() {
    console.log(baseurl);
    console.log(baseurl+"/sidebar.htm");
  return {
    // currently required
    "name": "Goal Mozilla Sidebar Demo",
    "origin": baseurl,
    // icons from http://findicons.com/icon/158311/firefox?id=356182 by ipapun
    "iconURL": baseurl+"/firefox16.png",
    "icon32URL": baseurl+"/firefox32.png",
    "icon64URL": baseurl+"/firefox64.png",

    // at least one of these must be defined
    "sidebarURL": baseurl+"/sidebar.htm",

    // should be available for display purposes
    "description": "A simple example of a social sidebar",
    "author": "Shane Caraveo, Mozilla && Przemysław Szelenberger, Perform Media",
    // "homepageURL": "https://github.com/mixedpuppy/socialapi-sidebar/",

    // optional
    "version": 1
  };
}
