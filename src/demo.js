function use(response) {
  // … example
  console.log('Write to DB:', response.value);
}

let valueFromNetwork = getValueFromAPI();

!!valueFromNetwork && use(valueFromNetwork);
Boolean(valueFromNetwork) && use(valueFromNetwork);