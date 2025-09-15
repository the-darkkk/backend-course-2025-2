const date = "20231001";
const time_period = "q";

const bankUrl = new URL('https://bank.gov.ua/');

bankUrl.pathname = "/NBUStatService/v1/statdirectory/basindbank";
bankUrl.searchParams.append("date", date);
bankUrl.searchParams.append("period", time_period);
bankUrl.searchParams.append("json", "");

console.log(bankUrl.href);
