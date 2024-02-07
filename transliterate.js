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
    const latinFrakturToLatin = { " ": " ", "।": ".", "॥": ".", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "₹": "₹", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "˜": "˜", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "𝔞":"a","\ud835\udd1E":"a","𝔄":"A","\ud835\udd04":"A","𝔟":"b","\ud835\udd1F":"b","𝔅":"B","\ud835\udd05":"B","𝔠":"c","\ud835\udd20":"c","ℭ":"C","\ud835\udd06":"C","𝔡":"d","\ud835\udd21":"d","𝔇":"D","\ud835\udd07":"D","𝔢":"e","\ud835\udd22":"e","𝔈":"E","\ud835\udd08":"E","𝔣":"f","\ud835\udd23":"f","𝔉":"F","\ud835\udd09":"F","𝔤":"g","\ud835\udd24":"g","𝔊":"G","\ud835\udd0A":"G","𝔥":"h","\ud835\udd25":"h","ℌ":"H","\ud835\udd0B":"H","𝔦":"i","\ud835\udd26":"i","ℑ":"I","\ud835\udd0C":"I","𝔧":"j","\ud835\udd27":"j","𝔍":"J","\ud835\udd0D":"J","𝔨":"k","\ud835\udd28":"k","𝔎":"K","\ud835\udd0E":"K","𝔩":"l","\ud835\udd29":"l","𝔏":"L","\ud835\udd0F":"L","𝔪":"m","\ud835\udd2A":"m","𝔐":"M","\ud835\udd10":"M","𝔫":"n","\ud835\udd2B":"n","𝔑":"N","\ud835\udd11":"N","𝔬":"o","\ud835\udd2C":"o","𝔒":"O","\ud835\udd12":"O","𝔭":"p","\ud835\udd2D":"p","𝔓":"P","\ud835\udd13":"P","𝔮":"q","\ud835\udd2E":"q","𝔔":"Q","\ud835\udd14":"Q","𝔯":"r","\ud835\udd2F":"r","ℜ":"R","\ud835\udd15":"R","𝔰":"s","\ud835\udd30":"s","𝔖":"S","\ud835\udd16":"S","𝔱":"t","\ud835\udd31":"t","𝔗":"T","\ud835\udd17":"T","𝔲":"u","\ud835\udd32":"u","𝔘":"U","\ud835\udd18":"U","𝔳":"v","\ud835\udd33":"v","𝔙":"V","\ud835\udd19":"V","𝔴":"w","\ud835\udd34":"w","𝔚":"W","\ud835\udd1A":"W","𝔵":"x","\ud835\udd35":"x","𝔛":"X","\ud835\udd1B":"X","𝔶":"y","\ud835\udd36":"y","𝔜":"Y","\ud835\udd1C":"Y","𝔷":"z","\ud835\udd37":"z","ℨ":"Z","\ud835\udd1D":"Z" };

    let resultLa = "";
    let textLaFrak = document.getElementById("textarea2").value;
    for (let u = 0 ; u < textLaFrak.length ; u++ ) {
      if (textLaFrak[u].indexOf("\n") > -1) {
        resultLa = resultLa + "\n";
      } else if (latinFrakturToLatin[textLaFrak[u] + textLaFrak[u+1]] != undefined && latinFrakturToLatin[textLaFrak[u] + textLaFrak[u+1]] != null && textLaFrak[u] != "" &&  textLaFrak[u+1] != "") { // Multiple Unicode Points
        resultLa = resultLa + latinFrakturToLatin[textLaFrak[u] + textLaFrak[u+1]];
        u++;
      } else if (latinFrakturToLatin[textLaFrak[u]] != undefined && latinFrakturToLatin[textLaFrak[u]] != null && textLaFrak[u] != "") { // Default Single Character
        resultLa = resultLa + latinFrakturToLatin[textLaFrak[u]];
      }
      //console.log(" " + textLaFrak[u].charCodeAt(0) + " \n")
      //console.log(" " + textLaFrak[u].toString(16) + " \n")
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
