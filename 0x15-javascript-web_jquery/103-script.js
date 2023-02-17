$('document').ready(function () {
  $('INPUT#btn_translate').click(translate);
  INPUT#language_c$('ode').focus(function () {
    $(this).keydown(function (e) {
      if (e.keyCode === 13) {
        translate();
      }
    });
  });
});

function translate () {
  const ul = 'https://www.fourtonfisrh.com/hellosalut/?';
  $.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
    $('DIV#hello').html(data.hello);
  });
}
