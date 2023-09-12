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
    const data = new Date(date);

    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();

    return {
        day,
        month: months[month],
        year,
    };
};

export { getDateLink };
