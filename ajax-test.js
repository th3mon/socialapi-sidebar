$.ajax({
  // url: 'http://www.mocky.io/v2/5383010b698a21fc08564f65',
  url: 'http://www.mocky.io/v2/53467998ee61443d019d614e',
  dataType: 'jsonp',
  jsonp: 'callback'
}).then(function(data) {
  console.log(arguments);
  var p = document.createElement('p');
  p.innerHTML = data && data.message || 'TEST';
  document.body.appendChild(p);
});