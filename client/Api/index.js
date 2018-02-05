export const changeValue = type =>
  fetch(`http://localhost:3000/count/${type}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        throw new Error('Bad request');
      }

      return response.json();
    })
    .catch(error => console.log('error', error.message));

export const initialValue = () =>
  fetch(`http://localhost:3000/count`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        throw new Error('Bad request');
      }

      return response.json();
    })
    .catch(error => console.log('error', error.message));
