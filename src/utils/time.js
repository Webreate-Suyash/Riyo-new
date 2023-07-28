const formatted_time = function () {
    var d = new Date();
    var ampm = (d.getHours() >= 12) ? "PM" : "AM";
    var hours = (d.getHours() >= 12) ? d.getHours() - 12 : d.getHours();
    return hours + ':' + d.getMinutes() + ':' + d.getSeconds() + ' ' + ampm;
}
module.exports = formatted_time;