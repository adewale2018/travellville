$(document).ready(function () {
  $(".button-collapse").sideNav();

  $(".slider").slider({
    indicators: false,
    transition: 500,
    interval: 6000,
    height: 500,
  });

  $(".autocomplete").autocomplete({
    data: {
      "Aruba": null,
      "Cancum, Mexico": null,
      "Florida": null,
      "California": null,
      "Europe": null,
      "Jamaica": null,
      "The Bahamas": null,
      "Hawaii": null,
    },
  });
});
