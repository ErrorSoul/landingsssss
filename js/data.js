// // JavaScript Document
var url = "https://refpaiozdg.top/L?";
function set_cookie(name, value, exp_y, exp_m, exp_d, path, domain, secure) {
  var cookie_string = name + "=" + escape(value);

  if (exp_y) {
    var expires = new Date(exp_y, exp_m, exp_d);
    cookie_string += "; expires=" + expires.toGMTString();
  }

  if (path) cookie_string += "; path=" + escape(path);

  if (domain) cookie_string += "; domain=" + escape(domain);

  if (secure) cookie_string += "; secure";

  document.cookie = cookie_string;
}

function get_cookie(cookie_name) {
  var results = document.cookie.match(
    "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
  );

  if (results) return unescape(results[2]);
  else return null;
}

function getQuerys() {
  let queryDict = {};
  location.search
    .substring(1)
    .split("&")
    .forEach((item) => {
      let param = item.split("=");

      if (param[0] in queryDict) {
        queryDict[param[0]].push(decodeURIComponent(param[1]));
      } else {
        queryDict[param[0]] = [decodeURIComponent(param[1])];
      }
    });

  return queryDict;
}

function changeURL() {
  var gettArray = getQuerys();
  for (var i in gettArray) {
    url = url + i + "=" + gettArray[i] + "&";
  }
  url = url.substring(0, url.length - 1);
  set_cookie("url", url, 2050, 01, 15);
  urlCookie = get_cookie("url");
  $(".reg_button").attr("href", urlCookie);
}

var urlCookie = get_cookie("url");
if (urlCookie === null) {
  changeURL();
} else {
  var vars = window.location.search.match(
    new RegExp("([^&?]+)=([^&=]+)", "gm")
  );
  if (vars === null) {
    $(".reg_button").attr("href", urlCookie);
  } else {
    changeURL();
  }
}
