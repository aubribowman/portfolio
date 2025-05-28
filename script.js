const timeContainer = document.getElementById("time-container");
const START_DATE = "09-02-2001";
const START_DATE_OBJ = new Date(START_DATE);
const intlNumberFormatter = new Intl.NumberFormat('en-US');

setInterval(() => {
    const now = new Date();
    const msPerDay = 1000 * 60 * 60 * 24;
    const difference = Math.floor(
        (now - START_DATE_OBJ) / msPerDay
    );

    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);