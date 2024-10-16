const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeModalSelector, closeClickOverlay = true) {
    const modalTriggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closeModalButton = document.querySelector(closeModalSelector);
    const windows = document.querySelectorAll("[data-modal]");

    modalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", function (e) {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    closeModalButton.addEventListener("click", function (e) {
      windows.forEach((item) => {
        item.style.display = "none";
      });
      if (e.target) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  function showModal(selector, time) {
    setTimeout(() => {
      const modal = document.querySelector(`${selector}[data-modal]`);
      const closeModalButton = document.querySelector(`${selector} .popup_close`);

      modal.style.display = "block";
      document.body.style.overflow = "hidden";

      document.addEventListener("click", function (e) {
        if (e.target === modal || e.target === closeModalButton) {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        }
      });
    }, time);
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
  showModal(".popup", 1000);
};

export default modals;
