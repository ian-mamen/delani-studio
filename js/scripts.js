$('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});


$("button").click(function (event) {
  var user = document.getElementById('nameInfo').value;
  alert(' Dear ' + ' esteemed ' + user + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
  event.preventDefault();
});
