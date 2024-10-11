const forms = () => {
  const allForms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  console.log("ajajja");

  phoneInputs.forEach((item) => {
    item.addEventListener("input", function (e) {
      item.value = item.value.replace(/\D/, "");
    });
  });

  const message = {
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  allForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.appendChild(statusMessage);

      const formData = new FormData(form);
      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};
export default forms;
