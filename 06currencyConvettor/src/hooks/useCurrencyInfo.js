import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
const [data, setData] = useState({});

useEffect(() => {
if (currency) {
const curCode = currency.toString().trim().toLowerCase();
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curCode}.json`)
.then((res) => res.json())
.then((res) => setData(res[curCode]));
}
}, [currency]);

return data;
}

export default useCurrencyInfo;