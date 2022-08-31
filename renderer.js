const information = document.querySelector("#info");

const init = () => {
  if (information) {
    information.innerText = `node: ${versions.node()}, chrome: ${versions.chrome()}, electron: ${versions.electron()}`;
  }
};

init();

const ping = async () => {
  const response = await window.versions.ping();
  console.log(response);
};

ping();
