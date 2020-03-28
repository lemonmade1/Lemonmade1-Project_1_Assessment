let x = 0;
let _addOne = document.getElementById('addOne');
let span = document.querySelector('span');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');


$(increment).on('click', () => {

  let _addOne = document.getElementById('addOne');
  let spanText = span.textContent = x++;
  let _result = parseInt(_addOne.value) + parseInt(spanText)
  let _result2 = _result * spanText;

  $('span').html(_result)
  console.log(_result);

  if (parseInt(spanText) <= -1 || parseInt(_addOne.value) <= -1) {
    $('span').css({
      color: 'red',
    });
  };
});

$(decrement).on('click', () => {

  let _addOne = document.getElementById('addOne');
  let spanText = span.textContent = ++x;
  let _result = parseInt(spanText) - parseInt(_addOne.value);
  // let _result2 = _result * spanText;

  $('span').html(_result)
  console.log(_result);

  if (parseInt(spanText) < 0 || parseInt(_addOne.value) < 0) {
    $('span').css({
      color: 'red',
    })
    ;console.log(parseInt(spanText))
  }

});

