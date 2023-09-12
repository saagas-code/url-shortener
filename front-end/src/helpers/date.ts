interface getDateLinkProp {
    day: number;
    month: string;
    year: number;
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const getDateLink = (date: string): getDateLinkProp => {
    const [datee] = date.split(" ");
    const [year, month, day] = datee.split("-").map(Number);

    return {
        day,
        month: months[month],
        year,
    };
};

export { getDateLink };
