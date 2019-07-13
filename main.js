var kilograms, pounds, grams;

kilograms = document.getElementById("kilograms");
pounds = document.getElementById("pounds");
grams = document.getElementById("grams");

kilograms.addEventListener("keyup", function(e) {
  var kilogramWeight, poundWeight, gramWeight;
  kilogramWeight = e.target.value;
  poundWeight = kilogramWeight * 2.205;
  gramWeight = kilogramWeight * 1000;

  pounds.textContent = poundWeight;
  grams.textContent = gramWeight;
});
