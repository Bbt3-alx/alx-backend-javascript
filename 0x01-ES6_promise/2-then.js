function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error(''));
    }
  });
}
handleResponseFromAPI(true)
  .then()
  .catch((error) => { console.log(error); })
  .finally(() => { console.log('Got a response from the API'); });

export default handleResponseFromAPI;
