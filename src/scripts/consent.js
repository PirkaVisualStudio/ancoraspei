// HIDE THE BANNER FUNCTION

function hideBanner() {
  document.getElementById("cookie-consent-banner").style.display = "none";
}

// FUNCTION FOR CONSENT STATES
if (localStorage.getItem("consentMode") === null) {
  document
    .getElementById("btn-accept-all")
    .addEventListener("click", function () {
      setConsent({
        necessary: true,
        analytics: true,
        personalization: true,
        marketing: true,
      });

      //HIDE BANNER AFTER CLICK
      hideBanner();
      // PUSH THE DATA TO DATA LAYER FOR GOOGLE TAG
      dataLayer.push({
        funcionality_storage: "true",
        ad_storage: "true",
        ad_user_data: "true",
        ad_personalization: "true",
        analytics_storage: "true",

        event: "consentEvent",
      });
    });

  document
    .getElementById("btn-accept-some")
    .addEventListener("click", function () {
      setConsent({
        necessary: true,
        analytics: document.getElementById("consent-analytics").checked,
        personalization: document.getElementById("consent-personalization")
          .checked,
        marketing: document.getElementById("consent-marketing").checked,
      });
      //HIDE BANNER AFTER CLICK
      hideBanner();
      // PUSH THE DATA TO DATA LAYER FOR GOOGLE TAG
      dataLayer.push({
        funcionality_storage: "true",
        ad_storage: document.getElementById("consent-marketing").checked,
        ad_user_data: document.getElementById("consent-marketing").checked,
        ad_personalization: document.getElementById("consent-personalization")
          .checked,
        analytics_storage: document.getElementById("consent-analytics").checked,

        event: "consentEvent",
      });
    });

  document
    .getElementById("btn-reject-all")
    .addEventListener("click", function () {
      setConsent({
        necessary: true,
        analytics: false,
        personalization: false,
        marketing: false,
      });
      //HIDE BANNER AFTER CLICK
      hideBanner();
      // PUSH THE DATA TO DATA LAYER FOR GOOGLE TAG
      dataLayer.push({
        funcionality_storage: "true",
        ad_storage: "false",
        ad_user_data: "false",
        ad_personalization: "false",
        analytics_storage: "false",

        event: "consentEvent",
      });
    });

  document.getElementById("cookie-consent-banner").style.display = "block";
}

function setConsent(consent) {
  const consentMode = {
    funcionality_storage: consent.necessary ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.personalization ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
  };
  gtag("consent", "update", consent);

  localStorage.setItem("consentMode", JSON.stringify(consentMode));
}

const consentData = JSON.parse(localStorage.getItem("consentMode"));

// LOAD THE DATA LAYER STATES ON INITIALIZATION
if (consentData) {
  const fields = [
    "funcionality_storage",
    "ad_storage",
    "ad_user_data",
    "ad_personalization",
    "analytics_storage",
  ];

  fields.forEach((key) => {
    dataLayer.push({
      [key]: consentData[key] === "granted" ? "true" : "false",
      event: "consentEvent",
    });
  });
}
