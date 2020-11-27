import { useState } from 'react';
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import { getAjaxCall } from '../services/AjaxCall';
import { apiUrls } from "../services/apiURLS";
import { BsArrowLeftRight } from "react-icons/bs";
import Loading from './Loading';

function Converter(props) {
    const [amount, setAmountState] = useState('');
    const [amountError, setAmountError ] = useState('')
    const [flag, setFlagState] = useState(false);
    const [fromCurrencyState, setFromCurrencyState] = useState('AED');
    const [toCurrencyState, setToCurrencyState] = useState('AED');
    const [resultCurrency, setResultCurrencyState] = useState();
    const [resultFromCurrency, setResultFromCurrencyState] = useState('AED');
    const [resultToCurrency, setResultToCurrencyState] = useState('AED');
    const [isLoading, setIsLoading] = useState(false);

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
            setAmountState(value)
        }
        if (name === 'fromCurrency') {
            setFromCurrencyState(value);
        }
        if (name === 'toCurrency') {
            setToCurrencyState(value);
        }

    }

    const handleSubmit = () => {
        if (amount.length > 0) {
            setAmountError('')
            setIsLoading(true);
            let currencyFromTo = fromCurrencyState + '_' + toCurrencyState;
            let apiAuth = apiUrls.convertMoney;
            const reqBody = {
                q: currencyFromTo,
                compact: 'ultra',
                apiKey: '5285e5efc8f2b8f7127b'

            }
            getAjaxCall(apiAuth, reqBody, callback => {
                if (Object.keys(callback.data).length !== 0) {
                    setFlagState(true);
                    setResultCurrencyState(callback.data[Object.keys(callback.data)]);
                    setResultFromCurrencyState(fromCurrencyState);
                    setResultToCurrencyState(toCurrencyState);
                    props.getfromcurrency(fromCurrencyState);
                    props.gettocurrency(toCurrencyState);
                    props.getamount(amount);
                    setIsLoading(false);

                } else {
                    setIsLoading(false);
                }
            });
        }else{
            setAmountError("Please Enter Some Amount!!!")
        }
        
    }

    const OutputResult = () => {
        return (<div>
            <Card className="result-box">
                <Card.Title>Result</Card.Title>
                <Card.Body>
                    1 {resultFromCurrency} = {resultCurrency} {resultToCurrency}<br />
                    {amount} {resultFromCurrency} = {resultCurrency * amount} {resultToCurrency}
                </Card.Body>
            </Card>
        </div >)
    }

    const handleReverse = () => {
        const temp = toCurrencyState;
        document.getElementsByName('toCurrency')[0].value = fromCurrencyState;
        document.getElementsByName('fromCurrency')[0].value = temp;
        setToCurrencyState(fromCurrencyState);
        setFromCurrencyState(temp);
    }

    return (<div className={isLoading ? 'parentDisable' : ''}>
        <Loading isLoading={isLoading} />
        <Card className="currency-converter">
            <Card.Body>
                <Card.Title>FOREX AGGREGRATOR</Card.Title>
                <Container>


                    <Row>
                        <Col xs={12} sm={12} lg={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" placeholder="Amount" name="amount" value={amount} onChange={handleChange} required />
                                {amountError !== '' && <span style={{color:'#ff0000',font:'8px'}}>{amountError}</span>}
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={5} lg={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>From</Form.Label>
                                <Form.Control name="fromCurrency" as="select" onChange={handleChange}>{Object.keys(symbols).map((code) => MakeItem(code, symbols[code]))}</Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={2} lg={1} className="currency-converter">
                            <br />
                            <Button onClick={handleReverse}><BsArrowLeftRight /></Button>
                        </Col>
                        <Col xs={12} sm={5} lg={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>To</Form.Label>
                                <Form.Control name="toCurrency" as="select" onChange={handleChange} >{Object.keys(symbols).map((code) => MakeItem(code, symbols[code]))}</Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={12} lg={2}>
                            <br />
                            <Button variant="primary" onClick={handleSubmit}>Go</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        { flag && <OutputResult />}
    </div>)

}

export default Converter;