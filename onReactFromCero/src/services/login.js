const entryPointLogin = 'https://pure-peak-47666.herokuapp.com/api/';
const service = `${entryPointLogin}users/?correo=`;

const confingService = {
  // method: 'GET',
  // mode: 'no-cors',
  // headers: { 'Content-Type': 'application/json' },
};

const callToLogin = (mail) => {
  return new Promise((resolve, reject) => {
    fetch(`${service}${mail}`, confingService)
      .then((data) => {
        resolve(data.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default callToLogin;
