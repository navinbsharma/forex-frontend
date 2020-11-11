import { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { getAjaxCall } from '../services/AjaxCall';
import { apiUrls } from "../services/apiURLS";
import { BsArrowLeftRight } from "react-icons/bs";

function Converter() {
    const [amountState, setAmountState] = useState({
        amount: '',
        errorAmount: '',
        errorAmountMessage: '',
    });

    const [flag, setFlagState] = useState(false);

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [currencyCountryData, setCurrencyCountryDataState] = useState('');
    const [fromCurrencyState, setFromCurrencyState] = useState('AFN');
    const [toCurrencyState, setToCurrencyState] = useState('AFN');
    const [resultCurrency, setResultCurrencyState] = useState(0);
    const [resultFromCurrency, setResultFromCurrencyState] = useState('AFN');
    const [resultToCurrency, setResultToCurrencyState] = useState('AFN');


    const symbols = {
        "AED": "United Arab Emirates Dirham",
        "AFN": "Afghan Afghani",
        "ALL": "Albanian Lek",
        "AMD": "Armenian Dram",
        "ANG": "Netherlands Antillean Guilder",
        "AOA": "Angolan Kwanza",
        "ARS": "Argentine Peso",
        "AUD": "Australian Dollar",
        "AWG": "Aruban Florin",
        "AZN": "Azerbaijani Manat",
        "BAM": "Bosnia-Herzegovina Convertible Mark",
        "BBD": "Barbadian Dollar",
        "BDT": "Bangladeshi Taka",
        "BGN": "Bulgarian Lev",
        "BHD": "Bahraini Dinar",
        "BIF": "Burundian Franc",
        "BMD": "Bermudan Dollar",
        "BND": "Brunei Dollar",
        "BOB": "Bolivian Boliviano",
        "BRL": "Brazilian Real",
        "BSD": "Bahamian Dollar",
        "BTC": "Bitcoin",
        "BTN": "Bhutanese Ngultrum",
        "BWP": "Botswanan Pula",
        "BYN": "New Belarusian Ruble",
        "BYR": "Belarusian Ruble",
        "BZD": "Belize Dollar",
        "CAD": "Canadian Dollar",
        "CDF": "Congolese Franc",
        "CHF": "Swiss Franc",
        "CLF": "Chilean Unit of Account (UF)",
        "CLP": "Chilean Peso",
        "CNY": "Chinese Yuan",
        "COP": "Colombian Peso",
        "CRC": "Costa Rican Colón",
        "CUC": "Cuban Convertible Peso",
        "CUP": "Cuban Peso",
        "CVE": "Cape Verdean Escudo",
        "CZK": "Czech Republic Koruna",
        "DJF": "Djiboutian Franc",
        "DKK": "Danish Krone",
        "DOP": "Dominican Peso",
        "DZD": "Algerian Dinar",
        "EGP": "Egyptian Pound",
        "ERN": "Eritrean Nakfa",
        "ETB": "Ethiopian Birr",
        "EUR": "Euro",
        "FJD": "Fijian Dollar",
        "FKP": "Falkland Islands Pound",
        "GBP": "British Pound Sterling",
        "GEL": "Georgian Lari",
        "GGP": "Guernsey Pound",
        "GHS": "Ghanaian Cedi",
        "GIP": "Gibraltar Pound",
        "GMD": "Gambian Dalasi",
        "GNF": "Guinean Franc",
        "GTQ": "Guatemalan Quetzal",
        "GYD": "Guyanaese Dollar",
        "HKD": "Hong Kong Dollar",
        "HNL": "Honduran Lempira",
        "HRK": "Croatian Kuna",
        "HTG": "Haitian Gourde",
        "HUF": "Hungarian Forint",
        "IDR": "Indonesian Rupiah",
        "ILS": "Israeli New Sheqel",
        "IMP": "Manx pound",
        "INR": "Indian Rupee",
        "IQD": "Iraqi Dinar",
        "IRR": "Iranian Rial",
        "ISK": "Icelandic Króna",
        "JEP": "Jersey Pound",
        "JMD": "Jamaican Dollar",
        "JOD": "Jordanian Dinar",
        "JPY": "Japanese Yen",
        "KES": "Kenyan Shilling",
        "KGS": "Kyrgystani Som",
        "KHR": "Cambodian Riel",
        "KMF": "Comorian Franc",
        "KPW": "North Korean Won",
        "KRW": "South Korean Won",
        "KWD": "Kuwaiti Dinar",
        "KYD": "Cayman Islands Dollar",
        "KZT": "Kazakhstani Tenge",
        "LAK": "Laotian Kip",
        "LBP": "Lebanese Pound",
        "LKR": "Sri Lankan Rupee",
        "LRD": "Liberian Dollar",
        "LSL": "Lesotho Loti",
        "LTL": "Lithuanian Litas",
        "LVL": "Latvian Lats",
        "LYD": "Libyan Dinar",
        "MAD": "Moroccan Dirham",
        "MDL": "Moldovan Leu",
        "MGA": "Malagasy Ariary",
        "MKD": "Macedonian Denar",
        "MMK": "Myanma Kyat",
        "MNT": "Mongolian Tugrik",
        "MOP": "Macanese Pataca",
        "MRO": "Mauritanian Ouguiya",
        "MUR": "Mauritian Rupee",
        "MVR": "Maldivian Rufiyaa",
        "MWK": "Malawian Kwacha",
        "MXN": "Mexican Peso",
        "MYR": "Malaysian Ringgit",
        "MZN": "Mozambican Metical",
        "NAD": "Namibian Dollar",
        "NGN": "Nigerian Naira",
        "NIO": "Nicaraguan Córdoba",
        "NOK": "Norwegian Krone",
        "NPR": "Nepalese Rupee",
        "NZD": "New Zealand Dollar",
        "OMR": "Omani Rial",
        "PAB": "Panamanian Balboa",
        "PEN": "Peruvian Nuevo Sol",
        "PGK": "Papua New Guinean Kina",
        "PHP": "Philippine Peso",
        "PKR": "Pakistani Rupee",
        "PLN": "Polish Zloty",
        "PYG": "Paraguayan Guarani",
        "QAR": "Qatari Rial",
        "RON": "Romanian Leu",
        "RSD": "Serbian Dinar",
        "RUB": "Russian Ruble",
        "RWF": "Rwandan Franc",
        "SAR": "Saudi Riyal",
        "SBD": "Solomon Islands Dollar",
        "SCR": "Seychellois Rupee",
        "SDG": "Sudanese Pound",
        "SEK": "Swedish Krona",
        "SGD": "Singapore Dollar",
        "SHP": "Saint Helena Pound",
        "SLL": "Sierra Leonean Leone",
        "SOS": "Somali Shilling",
        "SRD": "Surinamese Dollar",
        "STD": "São Tomé and Príncipe Dobra",
        "SVC": "Salvadoran Colón",
        "SYP": "Syrian Pound",
        "SZL": "Swazi Lilangeni",
        "THB": "Thai Baht",
        "TJS": "Tajikistani Somoni",
        "TMT": "Turkmenistani Manat",
        "TND": "Tunisian Dinar",
        "TOP": "Tongan Paʻanga",
        "TRY": "Turkish Lira",
        "TTD": "Trinidad and Tobago Dollar",
        "TWD": "New Taiwan Dollar",
        "TZS": "Tanzanian Shilling",
        "UAH": "Ukrainian Hryvnia",
        "UGX": "Ugandan Shilling",
        "USD": "United States Dollar",
        "UYU": "Uruguayan Peso",
        "UZS": "Uzbekistan Som",
        "VEF": "Venezuelan Bolívar Fuerte",
        "VND": "Vietnamese Dong",
        "VUV": "Vanuatu Vatu",
        "WST": "Samoan Tala",
        "XAF": "CFA Franc BEAC",
        "XAG": "Silver (troy ounce)",
        "XAU": "Gold (troy ounce)",
        "XCD": "East Caribbean Dollar",
        "XDR": "Special Drawing Rights",
        "XOF": "CFA Franc BCEAO",
        "XPF": "CFP Franc",
        "YER": "Yemeni Rial",
        "ZAR": "South African Rand",
        "ZMK": "Zambian Kwacha (pre-2013)",
        "ZMW": "Zambian Kwacha",
        "ZWL": "Zimbabwean Dollar"
    }
    const MakeItem = function (X, Y) {
        return <option value={X}>{Y}</option>;
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'amount') {
            if (value.length <= 0) {
                setAmountState(() => ({ amount: value, errorAmountMessage: 'PLease give some amount', errorAmount: true, }))
            } else {
                setAmountState(defaultValue => ({ ...defaultValue, amount: value, errorAmount: false }));
            }
        }
        if (name === 'fromCurrency') {
            setFromCurrencyState(value);
        }
        if (name === 'toCurrency') {
            setToCurrencyState(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { amount, errorAmount, errorAmountMessage } = amountState;
        e.preventDefault();
        if (amount.length > 0) {
            let currencyFromTo = fromCurrencyState + '_' + toCurrencyState;
            let apiAuth = apiUrls.convertMoney;
            const reqBody = {
                amount,
                q: currencyFromTo,
            }
            getAjaxCall(apiAuth, reqBody, callback => {
                console.log(callback)
                if (Object.keys(callback.data).length !== 0) {
                    setFlagState(true);
                    setResultCurrencyState(callback.data[Object.keys(callback.data)]);
                    setResultFromCurrencyState(fromCurrencyState);
                } else {

                }
            });
        }
    }

    const OutputResult = () => {
        return (<div>
            <Card className="convert-result-box">
                <Card.Title>Result</Card.Title>
                <Card.Body>
                    1 {resultFromCurrency} = {resultCurrency} {toCurrencyState}<br />
                    {amountState.amount} {resultFromCurrency} = {resultCurrency * amountState.amount} {toCurrencyState}
                </Card.Body>
            </Card>
        </div >)
    }

    const handleReverse = (e) => {
        console.log(document.getElementsByName('toCurrency').value);
    }




    return (<div className="m-3 p-4">
        <Card className="currency-converter">
            <Card.Body>
                <Card.Title>FOREX AGGREGRATOR</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={12} md={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" placeholder="Amount" name="amount" value={amountState.amount} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>From</Form.Label>
                                <Form.Control name="fromCurrency" as="select" onChange={handleChange}>{Object.keys(symbols).map((code) => MakeItem(code, symbols[code]))}</Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={1} className="currency-converter">
                            <Button onClick={handleReverse}><BsArrowLeftRight /></Button>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>To</Form.Label>
                                <Form.Control name="toCurrency" as="select" onChange={handleChange}>{Object.keys(symbols).map((code) => MakeItem(code, symbols[code]))}</Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={2}>
                            <Button variant="primary" onClick={handleSubmit}>Go</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        { flag && <OutputResult />}



    </div>)

}

export default Converter;


