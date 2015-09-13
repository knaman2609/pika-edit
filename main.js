// picker options
var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  maxDate: new Date()
});
picker.hide = function() {};
picker.show();

var selectedSelector = '.pika-single';
var selectorCss = {
  '.pika-single': '',
  '.pika-lendar': '',
  '.pika-title': '',
  '.pika-label': '',
  '.pika-table thead': '',
  '.pika-table th': '',
  '.pika-table tbody': '',
  '.pika-button': '',
  '.is-today .pika-button': '',
  '.is-selected .pika-button': '',
  '.is-disabed .pika-button': '',
  '.pika-button:hover': '',
  '.pika-single tbody td': '',
};

// append the css in the <style></style> tag
var appendCss = function(css) {
  selectorCss[selectedSelector] = $('textarea.edit').val();

  $('style').html('');

  var keys = Object.keys(selectorCss);
  var text = '';
  for (var i = 0; i < keys.length; i++) {
    if(selectorCss[keys[i]])
    text += keys[i] + ' {\n  ' + selectorCss[keys[i]] + '\n}\n';
  }

  $('style').html(text);
};

// apply the css on click on run href
$('.run').on('click', function(e) {
  e.preventDefault();

  var css = $(this).parent().find('textarea.edit').val();
  appendCss(css);
});

function highlightSelector(selector) {
  $(selector).addClass('border');
  setTimeout(function() {
    $(selector).removeClass('border');
  }, 1000);
}

// toggle selector labels
// and show relative snippet
$('.selector').click(function() {
  $('.selector').removeClass('is-selected');
  $(this).addClass('is-selected');

  $('textarea.copy-code').css('display', 'none');
  $('textarea.edit').css('display', 'block');

  selectorCss[selectedSelector] = $('textarea.edit').val();
  selectedSelector = $(this).text();
  highlightSelector(selectedSelector);
  $('textarea.edit').val(selectorCss[selectedSelector]);
});

//concatenate all the css and paste in the textarea
$('.export').click(function(e) {
  e.preventDefault();
  var css = $('style').html();

  $('textarea.edit').css('display', 'none');
  $('textarea.copy-code').val(css)
    .css('display', 'block');
});









