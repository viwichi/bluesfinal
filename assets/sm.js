$(document).ready(function () {
  initIcons()
  centerIcons();
});

function initIcons() {
  $.each(icons, function (key, value) {
    var element = $("#" + value.id);
    // url
    element.attr("href", value.url);
    // icon images
    $("#" + value.id + " .social-icon-hover").attr("src", value.hover);
    $("#" + value.id + " .social-icon-default").attr("src", value.default);
    //hide/show images
    element.mouseenter(function () {
      $(this).find("img").toggleClass("hide");
    })
    element.mouseleave(function () {
      $(this).find("img").toggleClass("hide");
    });
    //place the title
    element.find("img").attr("title", value.title);
  });

  // Wood grain spacing (to look like one piece)
  $(".social-media-container").each(function (index) {
    $(this).css("background-position", "-320px " + "-" + (50 + index * 72) + "px");
  });
}

var centerIcons = function () {
  $(".social-item img").one("load", function () {
    var img = $(this);
    var widthLessHeight = img.width() - img.height();
    if (widthLessHeight > 0) {
      img.css("margin-top", widthLessHeight / 2);
    }
  }).each(function () {
    if (this.complete) $(this).load();
  });
};

// Icon data goes here
var icons = {
  instagram: {
    id: "instagram-icon",
    title: "Instagram",
    default: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Instagram-black.png",
    hover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Instagram.png",
    url: "https://www.instagram.com/ianhalelegacy/"
  },
  soundcloud: {
    id: "soundcloud-icon",
    title: "Soundcloud",
    default: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Soundcloud-black.png",
    hover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Soundcloud.png",
    url: "https://soundcloud.com/ian-hale-and-the-legacy"
  },
  twitter: {
    id: "twitter-icon",
    title: "Twitter",
    default: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Twitter-black.png",
    hover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Twitter.png",
    url: "https://twitter.com/ianhalelegacy"
  },
  facebook: {
    id: "facebook-icon",
    title: "Facebook",
    default: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Facebook-black.png",
    hover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Facebook.png",
    url: "https://www.facebook.com/ianhaleandthelegacy/"
  },
  youtube: {
    id: "youtube-icon",
    title: "Youtube",
    default: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Youtube-black.png",
    hover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Youtube.png",
    url: "https://www.youtube.com/channel/UC23dSSOLfJ-UDFvjv670R1g"
  },
  // vimeo: {
  //   id: "vimeo-icon",
  //   title: "Vimeo",
  //   default: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Vimeo-black.png",
  //   hover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436641/Vimeo.png",
  //   url: "vimeo.some.url"
  // }
};

jQuery(function ($) {
  $('#golink').click(function () {
    return false;
  }).dblclick(function () {
    window.location = this.href;
    return false;
  }).keydown(function (event) {
    switch (event.which) {
      case 13: // Enter
      case 32: // Space
        window.location = this.href;
        return false;
    }
  });
});

jQuery(function ($) {
  $('#golink1').click(function () {
    return false;
  }).dblclick(function () {
    window.location = this.href;
    return false;
  }).keydown(function (event) {
    switch (event.which) {
      case 13: // Enter
      case 32: // Space
        window.location = this.href;
        return false;
    }
  });
});

jQuery(function ($) {
  $('#golink2').click(function () {
    return false;
  }).dblclick(function () {
    window.location = this.href;
    return false;
  }).keydown(function (event) {
    switch (event.which) {
      case 13: // Enter
      case 32: // Space
        window.location = this.href;
        return false;
    }
  });
});

jQuery(function ($) {
  $('#golink3').click(function () {
    return false;
  }).dblclick(function () {
    window.location = this.href;
    return false;
  }).keydown(function (event) {
    switch (event.which) {
      case 13: // Enter
      case 32: // Space
        window.location = this.href;
        return false;
    }
  });
});