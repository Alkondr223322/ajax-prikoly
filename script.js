const url = new URL('http://cors-test.appspot.com/test');
let xhrGET = new XMLHttpRequest();
let xhrPOST = new XMLHttpRequest();
let xhrWEIRD = new XMLHttpRequest();

let body = {
	status:"OK"
}

xhrGET.open('GET', url, true);
xhrGET.send();
xhrPOST.open('POST', url, true);
xhrPOST.send([body]);
xhrWEIRD.open('WEIRD', url, true);
xhrWEIRD.send();

xhrGET.onload = function() {
  if(xhrGET.status === 200 && xhrGET.readyState === 4){
    document.querySelector('.get').style.cssText = "color: green; fontStyle:bold"; 
    document.querySelector('.get').textContent = "OK";
}};

xhrGET.onerror = function() { 
    document.querySelector('.get').style.cssText = "color: red; fontStyle:bold"; 
    document.querySelector('.get').textContent = "Failed";
};

xhrPOST.onload = function() {
  if(xhrPOST.status === 200 && xhrPOST.readyState === 4){
      document.querySelector('.post').style.cssText = "color: green; fontStyle:bold"; 
	  document.querySelector('.post').textContent = "OK";
}};

xhrPOST.onerror = function() { 
    document.querySelector('.post').style.cssText = "color: red; fontStyle:bold"; 
    document.querySelector('.post').textContent = "Failed";
};

xhrWEIRD.onload = function() {
  if(xhrWEIRD.status === 200 && xhrWEIRD.readyState === 4){
    document.querySelector('.weird').style.cssText = "color: green; fontStyle:bold"; 
    document.querySelector('.weird').textContent = "OK";
}};

xhrWEIRD.onerror = function() {
    document.querySelector('.weird').style.cssText = "color: red; fontStyle:bold"; 
    document.querySelector('.weird').textContent = "Failed"; 
};