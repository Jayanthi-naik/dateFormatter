
const { formattedDate } = require("./getFormattedDate/getFormattedDate");
exports.convertDate = function (date, format) {
    return formattedDate(date, format)
}