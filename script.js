(() => {

  /* ==============================
     PAGE FADE IN
  ============================== */

  const page = document.body;

  requestAnimationFrame(() => {
    page.classList.add("is-loaded");
  });



  /* ==============================
     PASSWORD
  ============================== */

  const form = document.getElementById("passwordForm");

  if (form) {

    const input = document.getElementById("passwordInput");

    const message =
      document.getElementById("passwordMessage");


    form.addEventListener("submit", (event) => {

      event.preventDefault();


      /* PASSWORD */

      if (input.value === "550255") {

        message.textContent =
          "ACCESS GRANTED ✦";

        message.classList.remove("error");


        setTimeout(() => {

          window.location.href =
            "page2.html";

        }, 650);


      } else {

        message.textContent =
          "not quite... try again ♡";

        message.classList.add("error");


        input.value = "";

        input.focus();


        const card =
          document.querySelector(".password-card");


        if (card) {

          card.classList.remove("shake");

          void card.offsetWidth;

          card.classList.add("shake");

        }

      }

    });

  }



  /* ==============================
     PHOTO HOVER EFFECT
  ============================== */

  document
    .querySelectorAll(".photo-frame, .letter-photo")
    .forEach((frame) => {


      frame.addEventListener("mousemove", (event) => {

        const rect =
          frame.getBoundingClientRect();


        const x =
          (event.clientX - rect.left) /
          rect.width - 0.5;


        const y =
          (event.clientY - rect.top) /
          rect.height - 0.5;


        const baseRotate =
          parseFloat(
            frame.dataset.rotate || "0"
          );


        frame.style.transform =
          `translateY(-5px)
           rotate(${baseRotate + x * 3}deg)`;

      });


      frame.addEventListener("mouseleave", () => {

        const baseRotate =
          parseFloat(
            frame.dataset.rotate || "0"
          );


        frame.style.transform =
          `rotate(${baseRotate}deg)`;

      });

    });


})();