

(function () {
    emailjs.init("TvX_lUvr2va60ro9w");
    })();

emailjs.sendForm("service_97cjwnp", "template_qayrlxd", "#myForm")
document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "service_97cjwnp";
      const templateID = "template_qayrlxd";

      // send the email here
      emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
            /*
          console.log("SUCCESS!", response.status, response.text);
          alert("SUCCESS!");*/
          swal("The form has been submitted successfully.!", "Stay Connected With Us", "success");
        },
        (error) => {
            /*
          console.log("FAILED...", error);
          alert("FAILED...", error);*/
          swal("Error!", "Keep Try Again Later !", "error");
        }
      );
    });