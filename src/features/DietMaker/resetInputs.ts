export const resetInputs = () => {
  const gramInputs = document.getElementsByTagName("input");
  for (let i = 0; i < gramInputs.length; i++) {
    gramInputs[i].value = "";
  }
};
