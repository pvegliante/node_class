var itemTemplate = '<h3><%= name %></h3>' +
'<h3><%= catagory%></h3>' +
'<small>warrenty: <%= warrenty%></small>'+
'<small><%=manufacture %></small>' +
'<small><%=color %<>/small>';

var items = [];

var makeTemplate = function(data) {
  var li = document.createElement('li');
  var itemList = document.querySelector('.item-list');
  var compiled = _.template(itemTemplate);
  var listHtml = compiled(data);
  li.innerHTML = listHtml;
  itemList.insertBefore(li, itemList.firstChold);
}

var updateItemList = function() {
  var itemData = items[item.length-1];
  makeTemplate(itemData);
}

// name
// catagory
// warrenty
// manufacture
// color

var getValues = function() {
  var name = document.querySelector('input[name=item-name]').value;
  var catagory = document.querySelector('input[name=item-catagory]').value;
  var warrenty = document.querySelector('input[name=item-warrenty]').value;
  var manufacture = document.querySelector('input[name=item-manufacture]').value;
  var color = document.querySelector('input[name=item-color]').value;

  document.querySelector('input[name=item-name]').value = '';
  document.querySelector('input[name=item-catagory]').value = '';
  document.querySelector('input[name=item-warrenty]').value = '';
  document.querySelector('input[name=item-manufacture]').value = '';
  document.querySelector('input[name=item-color]').value = '';

  return {
    name: name,
    catagory: catagory,
    warrenty: warrenty,
    manufacture: manufacture,
    color: color
  };
};

var makeItemList = function() {
  items.forEach(function(item) {
    makeTemplate(item);
  });
};

var getAllLions = function() {
  fetch('/items')
  .then(function (resp) {
    return resp.json();
  })
  .then(function(data) {
    items = items.concat(data);
    makeItemList();
  });
};

(function() {
  getAllLions();
  var form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var values = getValues();
    fetch('/items', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body:JSON.stringify(values)
    })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(createdItem) {
      items.push(createdItem);
      updateItemList();
    })
    reutrn false;
  });
})();
