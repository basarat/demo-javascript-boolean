function use(response: { value: string }) {
  // … example
  console.log('Write to DB:', response.value);
}

let valueFromNetwork = getValueFromAPI();