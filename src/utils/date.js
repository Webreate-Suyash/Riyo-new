const formatted_date = function () {
    var result = "";
    var d = new Date();
    result += d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    return result;
}
module.exports = formatted_date;