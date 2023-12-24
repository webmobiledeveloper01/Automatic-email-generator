function emailGenerate() {
 
  var tx01 = document.getElementById("iTxt01").value;
  
  var lb021 = document.getElementById("ed-134360010").innerHTML;
  var lb022 = document.getElementById("ed-134350010").innerHTML;
  //var tx02 = document.getElementById("iTxt02").value;

  var imgs = document.getElementById("ed-134373149").innerHTML;
  var imgBefore = document.getElementById("ed-134350013").innerHTML;
  var imgAfter = document.getElementById("ed-134350016").innerHTML;

  var imgBeforeLabel = document.getElementById("ed-134373155").innerHTML;
  var imgAfterLabel = document.getElementById("ed-134373158").innerHTML;

  var lb03 = document.getElementById("ed-134373164").innerHTML;
  var tx03 = document.getElementById("iTxt03").value;

  var lb04 = document.getElementById("ed-134383173").innerHTML;
 // var tx04 = document.getElementById("iTxt04").value;

  //var lb05 = document.getElementById("ed-134373182").innerHTML;
  var tx05 = document.getElementById("iTxt05").value;

 // var lb06 = document.getElementById("ed-134401423").innerHTML;
  var tx06 = document.getElementById("iTxt06").innerHTML;
  tx06 = tx06.replaceAll("&lt;", "<");
  tx06 = tx06.replaceAll("&gt;", ">");
 // var lb07 = document.getElementById("ed-134401460").innerHTML;
  var tx07 = document.getElementById("iTxt07").innerHTML;
  tx07 = tx07.replaceAll("&lt;", "<");
  tx07 = tx07.replaceAll("&gt;", ">");

//  var lb08 = document.getElementById("ed-134402350").innerHTML;
  var tx08 = document.getElementById("iTxt08").innerHTML;
  tx08 = tx08.replaceAll("&lt;", "<");
  tx08 = tx08.replaceAll("&gt;", ">");

  var lb09 = document.getElementById("ed-134402368").innerHTML;
  var tx09 = document.getElementById("iTxt09").innerHTML;
  tx09 = tx09.replaceAll("&lt;", "<");
  tx09 = tx09.replaceAll("&gt;", ">");

  var tx10 = document.getElementById("iTxt10").innerHTML;
  tx10 = tx10.replaceAll("&lt;", "<");
  tx10 = tx10.replaceAll("&gt;", ">");

  var tx11 = document.getElementById("iTxt11").innerHTML;
  tx11 = tx11.replaceAll("&lt;", "<");
  tx11 = tx11.replaceAll("&gt;", ">");

  var tx12 = document.getElementById("iTxt12").innerHTML;
  tx12 = tx12.replaceAll("&lt;", "<");
  tx12 = tx12.replaceAll("&gt;", ">");

  var lb13 = document.getElementById("ed-134407037").innerHTML;
  //var tx13 = document.getElementById("iTxt13").value;

  var tx14 = document.getElementById("iTxt14").innerHTML;
  tx14 = tx14.replaceAll("&lt;", "<");
  tx14 = tx14.replaceAll("&gt;", ">");

  var lb15 = document.getElementById("ed-134407049").innerHTML;
  var tx15 = document.getElementById("iTxt15").value;
  tx15 = tx15.replaceAll("&lt;", "<");
  tx15 = tx15.replaceAll("&gt;", ">");

  var tx16 = document.getElementById("iTxt16").innerHTML;
  tx16 = tx16.replaceAll("&lt;", "<");
  tx16 = tx16.replaceAll("&gt;", ">");
  var tx17 = document.getElementById("iTxt17").innerHTML;
  tx17 = tx17.replaceAll("&lt;", "<");
  tx17 = tx17.replaceAll("&gt;", ">");
  var tx18 = document.getElementById("iTxt18").innerHTML;
  tx18 = tx18.replaceAll("&lt;", "<");
  tx18 = tx18.replaceAll("&gt;", ">");

  var lb19 = document.getElementById("ed-134408923").innerHTML;
  var tx19 = document.getElementById("iTxt19").innerHTML;
  tx19 = tx19.replaceAll("&lt;", "<");
  tx19 = tx19.replaceAll("&gt;", ">");

  var tx20 = document.getElementById("iTxt20").innerHTML;
  tx20 = tx20.replaceAll("&lt;", "<");
  tx20 = tx20.replaceAll("&gt;", ">");

  var lb21 = document.getElementById("ed-134409052").innerHTML;
  var tx21 = document.getElementById("iTxt21").innerHTML;
  tx21 = tx21.replaceAll("&lt;", "<");
  tx21 = tx21.replaceAll("&gt;", ">");

  //Example Lines: 

  var result = "<div class='inner' style='font-size:14px;'><b>Subject : </b>" + tx01 + "<br><br>" + lb021 + "<br>" + lb022 + "<br>";
  result += "<div class='ed-element ed-container' style = 'flex-basis: 100%;'><div class='inner'><div id='ed-134360013'>"+ imgBefore + "</div>";
  result += "<div id='ed-134360016'>" + imgAfter + "</div></div></div>";
  result += "<div class='ed-element ed-container' style = 'flex-basis: 100%;'><div class='inner'><div class='ed-element ed-headline custom-theme' id='ed-134383155'><span style='color: rgb(0, 0, 0); text-align: center;'>before</span></div>";
  result += "<div class='ed-element ed-headline custom-theme' id='ed-134383158'><span style='color: rgb(0, 0, 0); text-align: center;'>after</span></div></div></div>";
  result += tx03 + "<br><br>" + lb04 + "<br><b>" + tx05 + "</b><br><br>" + tx06 + "<br><br>" + tx07 + "<br><br>";
  result += tx08 + "<br><br>" + lb09 + "<br><br>" + tx09 + "<br><br>" + tx10 + "<br><br><b>" + tx11 + "</b><br><br>" + tx12 + "<br><br>" + lb13 + "<br>";
  result += tx14 + "<br><br><b>"+ lb15 + "</b><br>" + tx15 + "<br><br><b>" + tx16 + "</b><br><br>" +  tx17 + "<br><br>" + tx18 + "<br><br>" + lb19 + "<br>" + tx19 + "<br><br>" + tx20 + "<br><br>" + lb21 + "<br>" + tx21 + "<br></div>";
  document.getElementById("ed-134411759").innerHTML = result;
}

const uploadBeforeImage = document.getElementById("uploadBeforeImage");
const uploadAfterImage = document.getElementById("uploadAfterImage");
const fileInputBefore = document.getElementById("fileInputBefore");
const fileInputAfter = document.getElementById("fileInputAfter");

uploadBeforeImage.addEventListener("click", function() {
  fileInputBefore.click();
});
uploadAfterImage.addEventListener("click", function() {
  fileInputAfter.click();
});

fileInputBefore.addEventListener("change", function() {
  let file = fileInputBefore.files[0];
  let reader = new FileReader();

  reader.onload = function(e) {
    uploadBeforeImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

fileInputAfter.addEventListener("change", function() {
  let file = fileInputAfter.files[0];
  let reader = new FileReader();

  reader.onload = function(e) {
    uploadAfterImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});


var textarea06 = document.getElementById("iTxt06");
textarea06.addEventListener("input", function() {
  var value = textarea06.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea06.innerHTML = value;
});
var textarea07 = document.getElementById("iTxt07");
textarea07.addEventListener("input", function() {
  var value = textarea07.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea07.innerHTML = value;
});
var textarea08 = document.getElementById("iTxt08");
textarea08.addEventListener("input", function() {
  var value = textarea08.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea08.innerHTML = value;
});
var textarea09 = document.getElementById("iTxt09");
textarea09.addEventListener("input", function() {
  var value = textarea09.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea09.innerHTML = value;
});
var textarea10 = document.getElementById("iTxt10");
textarea10.addEventListener("input", function() {
  var value = textarea10.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea10.innerHTML = value;
});
var textarea11 = document.getElementById("iTxt11");
textarea11.addEventListener("input", function() {
  var value = textarea11.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea11.innerHTML = value;
});
var textarea12 = document.getElementById("iTxt12");
textarea12.addEventListener("input", function() {
  var value = textarea12.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea12.innerHTML = value;
});
var textarea14 = document.getElementById("iTxt14");
textarea14.addEventListener("input", function() {
  var value = textarea14.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea14.innerHTML = value;
});
var textarea15 = document.getElementById("iTxt15");
textarea15.addEventListener("input", function() {
  var value = textarea15.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea15.innerHTML = value;
});
var textarea16 = document.getElementById("iTxt16");
textarea16.addEventListener("input", function() {
  var value = textarea16.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea16.innerHTML = value;
});
var textarea17 = document.getElementById("iTxt17");
textarea17.addEventListener("input", function() {
  var value = textarea17.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea17.innerHTML = value;
});

var textarea18 = document.getElementById("iTxt18");
textarea18.addEventListener("input", function() {
  var value = textarea18.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea18.innerHTML = value;
});

var textarea19 = document.getElementById("iTxt19");
textarea19.addEventListener("input", function() {
  var value = textarea19.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea19.innerHTML = value;
});

var textarea20 = document.getElementById("iTxt20");
textarea20.addEventListener("input", function() {
  var value = textarea20.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea20.innerHTML = value;
});

var textarea21 = document.getElementById("iTxt21");
textarea21.addEventListener("input", function() {
  var value = textarea21.value;
  value = value.replaceAll(/\n/g, "<br>");
  textarea21.innerHTML = value;
});
