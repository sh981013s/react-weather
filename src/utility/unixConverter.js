function unixConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + '/' + date;
  return time;
}

export default unixConverter;
