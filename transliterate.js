function hide() {
  document.getElementById("tooltip1").classList.remove("block");
  document.getElementById("tooltip2").classList.remove("block");
}
function show1() {
  document.getElementById("tooltip1").classList.add("block");
  var self = this;
  setTimeout(function () {
    self.hide();
  }, 3000);
}
function show2() {
  document.getElementById("tooltip2").classList.add("block");
  var self = this;
  setTimeout(function () {
    self.hide();
  }, 3000);
}

function swapTransliteration() {
  if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "latin2LatinFraktur") {
    localStorage.setItem("direction", "latinFraktur2latin");
    document.getElementById("textarea1").readOnly = true;
    document.getElementById('textarea2').removeAttribute('readonly');
    document.getElementById("textarea2").focus();
    document.getElementById("LatinFraktur").classList.add("currentTab");
    document.getElementById("Latin").classList.remove("currentTab");
  } else if (localStorage.getItem("direction") == "latinFraktur2latin") {
    localStorage.setItem("direction", "latin2LatinFraktur");
    document.getElementById('textarea1').removeAttribute('readonly');
    document.getElementById("textarea2").readOnly = true;
    if (localStorage.getItem("encoding") == "Latin")
      document.getElementById("textarea1").focus();
    document.getElementById("LatinFraktur").classList.remove("currentTab");
    document.getElementById("Latin").classList.add("currentTab");
  }
}

function clearFooter() {
  document.getElementsByClassName("footerOfPage")[0].style = "display:none";
}

function copyContent1() {
  navigator.clipboard.writeText(document.getElementById("textarea1").value);
}

function copyContent2() {
  navigator.clipboard.writeText(document.getElementById("textarea2").value);
}

function transliterate() {
  if (document.getElementById("textarea1").value.indexOf("script>") > -1 || document.getElementById("textarea2").value.indexOf("script>") > -1) {
    document.getElementById("textarea1").value = "";
    document.getElementById("textarea2").value = "";
    document.getElementById("textarea1").innerHTML = "";
    document.getElementById("textarea2").innerHTML = "";
  }

  if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "latin2LatinFraktur") {
    const latinToLatinFraktur = { " ": "  ", ".": ".", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "₹": "₹", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "a":"𝔞","A":"𝔄","b":"𝔟","B":"𝔅","c":"𝔠","C":"ℭ","d":"𝔡","D":"𝔇","e":"𝔢","E":"𝔈","f":"𝔣","F":"𝔉","g":"𝔤","G":"𝔊","h":"𝔥","H":"ℌ","i":"𝔦","I":"ℑ","j":"𝔧","J":"𝔍","k":"𝔨","K":"𝔎","l":"𝔩","L":"𝔏","m":"𝔪","M":"𝔐","n":"𝔫","N":"𝔑","o":"𝔬","O":"𝔒","p":"𝔭","P":"𝔓","q":"𝔮","Q":"𝔔","r":"𝔯","R":"ℜ","s":"𝔰","S":"𝔖","t":"𝔱","T":"𝔗","u":"𝔲","U":"𝔘","v":"𝔳","V":"𝔙","w":"𝔴","W":"𝔚","x":"𝔵","X":"𝔛","y":"𝔶","Y":"𝔜","z":"𝔷","Z":"ℨ" };

    let resultLaFrak = "";
    let textLa = document.getElementById("textarea1").value;

    for (let u = 0; u < textLa.length; u++) {
      if (textLa[u].indexOf("\n") > -1) { // New Lines
        resultLaFrak = resultLaFrak + "\n";
      } else if (latinToLatinFraktur[textLa[u]] != undefined && latinToLatinFraktur[textLa[u]] != null && textLa[u] != "") { // Default Single Character
        resultLaFrak = resultLaFrak + latinToLatinFraktur[textLa[u]];
      }
    }

    document.getElementById("textarea2").value = resultLaFrak;
    document.getElementById("textarea2").innerHTML = resultLaFrak;
  } else if (localStorage.getItem("direction") == "latinFraktur2latin") {
    const LatinFrakturToLatin = { " ": " ", "।": ".", "॥": ".", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "₹": "₹", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "˜": "˜", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "𝔞":"a","𝔄":"A","𝔟":"b","𝔅":"B","𝔠":"c","ℭ":"C","𝔡":"d","𝔇":"D","𝔢":"e","𝔈":"E","𝔣":"f","𝔉":"F","𝔤":"g","𝔊":"G","𝔥":"h","ℌ":"H","𝔦":"i","ℑ":"I","𝔧":"j","𝔍":"J","𝔨":"k","𝔎":"K","𝔩":"l","𝔏":"L","𝔪":"m","𝔐":"M","𝔫":"n","𝔑":"N","𝔬":"o","𝔒":"O","𝔭":"p","𝔓":"P","𝔮":"q","𝔔":"Q","𝔯":"r","ℜ":"R","𝔰":"s","𝔖":"S","𝔱":"t","𝔗":"T","𝔲":"u","𝔘":"U","𝔳":"v","𝔙":"V","𝔴":"w","𝔚":"W","𝔵":"x","𝔛":"X","𝔶":"y","𝔜":"Y","𝔷":"z","ℨ":"z" };

    let resultLa = "";
    let textLaTemp = document.getElementById("textarea2").value;
    for (let u = 0 ; u < textLaTemp.length ; ) {
      if (textLaTemp[u].indexOf("\n") > -1) {
        resultLa = resultLa + "\n";
        u = u + 1;
      } else {
        u = u + 1;
      }
    }
    document.getElementById("textarea1").value = resultLa;
    document.getElementById("textarea1").innerHTML = resultLa;
  }
}

function swap(json) {
  var ret = {};
  for (var key in json) {
    ret[json[key]] = key;
  }
  return ret;
}

function openTab(evt, localeName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(localeName).style.display = "block";
  evt.currentTarget.className += " active";
  localStorage.setItem("encoding", localeName);
  transliterate();
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("textarea1").focus();
if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "latinFraktur2latin") {
  localStorage.setItem("direction", "latin2LatinFraktur");
  localStorage.setItem("encoding", "Latin");
} else if (localStorage.getItem("direction") != "latinFraktur2latin" && localStorage.getItem("direction") != "latin2LatinFraktur") {
  localStorage.clear();
}

if (screen.width >= 300 && screen.width <= 500) {
  document.getElementById("LatinFraktur").classList.remove("LatinFrakturTabText");
  document.getElementById("LatinFraktur").classList.add("LatinFrakturTabSmallScreen");
  document.getElementById("Latin").classList.remove("tabcontent");
  document.getElementById("Latin").classList.add("tabcontentSmallScreen");
}
