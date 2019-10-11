setInterval(function () {
  var obj = document.querySelector('#main > header > div._3V5x5 > div._3Q3ui.i1XSV > span')
  if (obj != null) {
    var today = new Date()
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    var dateTime = date + ' ' + time
    console.log(dateTime + ' : ' + obj.innerText)
  }
}, 1000)
