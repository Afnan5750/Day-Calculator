function calculateDifference() {
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);

    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById("result").innerHTML = "Please enter any dates.";
    } else {
        var timeDiff = endDate - startDate;

        var yearsDiff = endDate.getFullYear() - startDate.getFullYear();
        var monthsDiff = endDate.getMonth() - startDate.getMonth();
        var daysDiff = endDate.getDate() - startDate.getDate();

        // Adjust for negative months
        if (daysDiff < 0) {
            monthsDiff--;
            daysDiff += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        }

        // Adjust for negative years
        if (monthsDiff < 0) {
            yearsDiff--;
            monthsDiff += 12;
        }

        var totalDaysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        document.getElementById("result").innerHTML =  
            yearsDiff + " years, " +
            monthsDiff + " months, and " +
            daysDiff + " days. (Total: " + totalDaysDiff + " days)";
    }
}