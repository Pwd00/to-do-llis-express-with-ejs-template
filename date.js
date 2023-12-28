function getDate() {
    const today = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
    const formattedDate = today.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  
  module.exports = getDate;
  
