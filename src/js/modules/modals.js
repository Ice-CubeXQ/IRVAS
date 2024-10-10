const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeModalSelector) {
    const modalTriggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closeModalButton = document.querySelector(closeModalSelector);

    modalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", function (e) {
        if (e.target) {
          modal.style.display = "block";
          document.body.classList.add("modal-open");
        }
      });
    });
    closeModalButton.addEventListener("click", function (e) {
      if (e.target) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });
    document.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });
  }

  function showModal(selector, time) {
    setTimeout(() => {
      const modal = document.querySelector(selector);
      const closeModalButton = document.querySelector(`${selector} .popup_close`);

      modal.style.display = "block";
      document.body.classList.remove("modal-open");

      document.addEventListener("click", function (e) {
        if (e.target === modal || e.target === closeModalButton) {
          modal.style.display = "none";
          document.body.classList.remove("modal-open");
        }
      });
    }, time);
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  // showModal(".popup", 60000);
};

export default modals;
