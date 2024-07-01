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
if (consentData.funcionality_storage === "granted") {
  dataLayer.push({
    funcionality_storage: "true",

    event: "consentEvent",
  });
}

if (consentData.ad_storage === "granted") {
  dataLayer.push({
    ad_storage: "true",

    event: "consentEvent",
  });
}

if (consentData.ad_user_data === "granted") {
  dataLayer.push({
    ad_user_data: "true",

    event: "consentEvent",
  });
}

if (consentData.ad_personalization === "granted") {
  dataLayer.push({
    ad_personalization: "true",

    event: "consentEvent",
  });
}

if (consentData.analytics_storage === "granted") {
  dataLayer.push({
    analytics_storage: "true",

    event: "consentEvent",
  });
}
