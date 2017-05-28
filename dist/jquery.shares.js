(function($) {
  'use strict';
  var share__constructor = function($anchor) {
    share__createUrl($anchor);
  }
  var share__createUrl = function($anchor) {
    var _type = share__defineType($anchor);
    var url = _type.url;
    // CREATE URL
    if (_type.type !== "email") {
      var data_href = encodeURIComponent($anchor.attr("href"));
      if (data_href !== "undefined") {
        url = url.replace("[data_href]", data_href);
      } else {
        share__debug("warn", "jQuery-Shares: attr [href] not found, please add href to anchor in " + _type.type);
      }
    }
    // CREATE TEXT
    if (_type.type !== "email" && _type.type !== "facebook" && _type.type !== "googleplus") {
      var data_text = encodeURIComponent($anchor.attr("data-text"));
      if (data_text !== "undefined") {
        url = url.replace("[data_text]", data_text);
      } else {
        share__debug("warn", "jQuery-Shares: attr [data-text] not found, please add data-text to anchor in " + _type.type);
      }
    }
    // CREATE IMAGE
    if (_type.type === "pinterest") {
      var data_image = encodeURIComponent($anchor.attr("data-image"));
      if (data_image !== "undefined") {
        url = url.replace("[data_image]", data_image);
      } else {
        share__debug("warn", "jQuery-Shares: attr [data-image] not found, please add data-image to anchor in " + _type.type);
      }
    }
    if (_type.type === "email") {
      // CREATE TO
      var data_to = encodeURIComponent($anchor.attr("data-to"));
      if (data_to !== "undefined") {
        url = url.replace("[data_to]", data_to);
      } else {
        url = url.replace("[data_to]", "");
        share__debug("warn", "jQuery-Shares: attr [data-to] not found, please add data-to to anchor in " + _type.type);
      }
      // CREATE CC
      var data_cc = encodeURIComponent($anchor.attr("data-cc"));
      if (data_cc !== "undefined") {
        url = url.replace("[data_cc]", data_cc);
      } else {
        url = url.replace("&cc=[data_cc]", "");
      }
      // CREATE BCC
      var data_bcc = encodeURIComponent($anchor.attr("data-bcc"));
      if (data_bcc !== "undefined") {
        url = url.replace("[data_bcc]", data_bcc);
      } else {
        url = url.replace("&bcc=[data_bcc]", "");
      }
      // CREATE SUBJECT
      var data_subject = encodeURIComponent($anchor.attr("data-subject"));
      if (data_subject !== "undefined") {
        url = url.replace("[data_subject]", data_subject);
      } else {
        url = url.replace("&subject=[data_subject]", "");
        share__debug("warn", "jQuery-Shares: attr [data-subject] not found, please add data-subject to anchor in " + _type.type);
      }
      // CREATE BODY
      var data_body = encodeURIComponent($anchor.attr("data-body"));
      if (data_body !== "undefined") {
        url = url.replace("[data_body]", data_body);
      } else {
        url = url.replace("&body=[data_body]", "");
        share__debug("warn", "jQuery-Shares: attr [data-body] not found, please add data-body to anchor in " + _type.type);
      }
    }
    $anchor.attr("href", url);
    if (_type.type !== "email") {
      $anchor.bind("click", share__click);
    }
  }
  var share__debug = function(type, text) {
    if (window.console) {
      if (type === "warn") {
        console.warn(text);
      } else if (type === "log") {
        console.log(text);
      }
    }
  }
  var share__defineType = function($anchor) {
    if ($anchor.hasClass('facebook')) {
      return {
        type: "facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=[data_href]"
      };
    } else if ($anchor.hasClass('twitter')) {
      return {
        type: "twitter",
        url: "https://twitter.com/intent/tweet?source=webclient&text=[data_text]&url=[data_href]"
      };
    } else if ($anchor.hasClass('linkedin')) {
      return {
        type: "linkedin",
        url: "https://www.linkedin.com/shareArticle?mini=true&url=[data_href]&title=[data_text]"
      };
    } else if ($anchor.hasClass('google-plus') || $anchor.hasClass('googleplus')) {
      return {
        type: "googleplus",
        url: "https://plus.google.com/share?url=[data_href]"
      };
    } else if ($anchor.hasClass('pinterest')) {
      return {
        type: "pinterest",
        url: "https://pinterest.com/pin/create/button/?url=[data_href]&media=[data_image]&description=[data_text]"
      };
    } else if ($anchor.hasClass('email')) {
      return {
        type: "email",
        url: "mailto:[data_to]?&cc=[data_cc]&bcc=[data_bcc]&subject=[data_subject]&body=[data_body]"
      };
    } else {
      return false;
    }
  }
  var share__click = function(e) {
    e.preventDefault();
    share__popupWindow($(this).attr('href'), 500, 310);
  }
  var share__popupWindow = function(url, w, h) {
    var left, top;
    left = ($(window).width() / 2) - (w / 2);
    top = ($(window).height() / 2) - (h / 2);
    return window.open(url, "Compartir", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  }
  // Custom shares
  $.fn.shares = function() {
    return this.each(function() {
      if (!$(this).hasClass('share-load')) {
        $(this).addClass('share-load');
        share__constructor($(this));
      } else {
        return false;
      }
    });
  };
  // Automatic Shares
  $.shares = function() {
    $('body').find('a.share').each(function(i, e) {
      $(e).addClass('share-auto');
      $(e).shares();
    });
  }
})(jQuery);