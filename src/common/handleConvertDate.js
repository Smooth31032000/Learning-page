const handleDateChange = (dateObject) => {
  if (dateObject instanceof Date && !isNaN(dateObject)) {
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  } else {
    console.error("Invalid date object");
    return null;
  }
};

export default handleDateChange