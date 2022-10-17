function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date, format) {
    //dd/mm/yyyy format
    if (format === "dd/mm/yyyy") {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }
    else{
        //dd-mm-yyyy format
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('-');
    }
}

const formattedDate = (date, format) => {
    return formatDate(date, format)
}