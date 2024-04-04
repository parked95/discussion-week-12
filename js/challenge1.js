document.getElementById('subscribe').addEventListener(click, function() {
 if(this.checked) {
  document.getElementById("emailDiv").style.display = 'block';
 } else {
  document.getElementById("emailDiv").style.display = 'none';
 }
});

document.addEventListener("click", function() {
    let currentTime = new Date();
    alert(currentTime);}