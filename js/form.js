this.BankCardForm = class BankCardForm {
  constructor(el) {
    this.el = el;
    this.promo_code = $(".popup__promocode");
    this.email = $(".popup__email");
    this.email.prop("type", "email");
    this.email.prop("required", true);
    this.currency = $(".popup__currency");
    this.currency.prop("disabled", true);
    this.currency.prop("value", "USD");
    this.password = $(".popup__password");
    console.log(this.password);
    this.password.prop("type", "password");
    this.password.prop("required", true);
    this.ip = null;
    this.visitorId = null;
    $.getJSON('https://api.ipify.org/?format=json', (e) => {
      this.ip = e.ip;
    });
    this.fpPromise = import('https://openfpcdn.io/fingerprintjs/v3').then((x) => {
      console.log(x);
      return x.load();
    });
    this.fpPromise.then((fp) => {
      return fp.get();
    }).then((result) => {
      this.visitorId = result.visitorId;
      return console.log(this.visitorId);
    });
    this.el.on("click", ".button_form", $.proxy(this.purchaseButtonHandler, this));
  }

  purchaseButtonHandler(e) {
    var data, headers, sign, merge_data;
    e.preventDefault();
    e.stopPropagation();
    if (!this.ip || !this.visitorId) {
      alert("Something wrong!! Try again later");
    }
    if (!this.email.is(":invalid") && !this.password.is(":invalid")) {
      sign = CryptoJS.MD5("YH1ETLdNAr29v5TWbHBrjhw5QlU97dIl" + "8" + "" + this.email.val()).toString();
      headers = {
        "X-Client-Ip": this.ip,
        "X-Visitor-Id": this.visitorId,
        "Content-Type": "application/json",

      };
      data = {
        'id': '8',
        'sign': sign,
        'password': this.password.val(),
        'phone': '',
        'email': this.email.val(),
        'country': 'tr',
        'currency': 'TL',
        'send_reg_data': true,
        'bonus_choice': 1,
        'need_parse_phone': false,
        'vip': true,
        'promocode': this.promo_code.val()
      };
      merge_data = {data: data, headers: headers}
      console.log("i am here");
      console.log("data", data);
      console.log("headers", headers);
      return $.ajax({
        url: "https://lave-gambling.herokuapp.com/",
        type: 'POST',
        headers: headers,
        dataType: "json",
        data: merge_data,
        error: function(jqXHR, textStatus, errorThrown) {
          return console.log(`AJAX Error: ${textStatus}`);
        },
        success: function(data, textStatus, jqXHR) {
          return console.log(`Successful AJAX call: ${data}`);
        }
      });
    }
  }

};

$(function() {
  return new BankCardForm($(".p__form"));
});
