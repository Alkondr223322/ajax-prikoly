const url = new URL("http://cors-test.appspot.com/test");
const xhrGET = new XMLHttpRequest();
const xhrPOST = new XMLHttpRequest();
const xhrWEIRD = new XMLHttpRequest();

const body = {
  status: "OK",
};

xhrGET.open("GET", url, true);
xhrGET.send();
xhrPOST.open("POST", url, true);
xhrPOST.send([body]);
xhrWEIRD.open("WEIRD", url, true);
xhrWEIRD.send();

xhrGET.onload = function GETRequestLoaded() {
  if (xhrGET.status === 200 && xhrGET.readyState === 4) {
    document.querySelector(".get").style.cssText =
      "color: green; fontStyle:bold";
    document.querySelector(".get").textContent = "OK";
  }
};

xhrGET.onerror = function GETRequestReturnedError() {
  document.querySelector(".get").style.cssText = "color: red; fontStyle:bold";
  document.querySelector(".get").textContent = "Failed";
};

xhrPOST.onload = function POSTRequestLoaded() {
  if (xhrPOST.status === 200 && xhrPOST.readyState === 4) {
    document.querySelector(".post").style.cssText =
      "color: green; fontStyle:bold";
    document.querySelector(".post").textContent = "OK";
  }
};

xhrPOST.onerror = function POSTRequestReturnedError() {
  document.querySelector(".post").style.cssText = "color: red; fontStyle:bold";
  document.querySelector(".post").textContent = "Failed";
};

xhrWEIRD.onload = function WEIRDRequestLoaded() {
  if (xhrWEIRD.status === 200 && xhrWEIRD.readyState === 4) {
    document.querySelector(".weird").style.cssText =
      "color: green; fontStyle:bold";
    document.querySelector(".weird").textContent = "OK";
  }
};

xhrWEIRD.onerror = function WEIRDRequestReturnedError() {
  document.querySelector(".weird").style.cssText = "color: red; fontStyle:bold";
  document.querySelector(".weird").textContent = "Failed";
};
