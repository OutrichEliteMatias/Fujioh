// READY
jQuery(document).on( "ready", function() {
	adjustTopOffset();

  pagePreLoginHeight();
  pageForgotPasswordHeight();
});

// LOAD
jQuery(window).on( "load", function() {
	adjustTopOffset();
  passwordToggle();
  datepickerToggle();

  pagePreLoginHeight();
  pageForgotPasswordHeight();
});

// RESIZE
jQuery(window).on( "resize", function() {
	adjustTopOffset();

  pagePreLoginHeight();
  pageForgotPasswordHeight();
});



// FUNCTIONS

function adjustTopOffset() {  
  var topNav       = jQuery('.top-nav').outerHeight() || 0;
  var navbarCustom = jQuery('.navbar-custom').outerHeight() || 0;

  var query = Modernizr.mq('(max-width: 991px)');
  if (query) {
    jQuery('header').addClass('fixed');
    jQuery('main').addClass('top-offset');

    jQuery('header').removeClass('fixed-remove');
    jQuery('main').removeClass('top-offset-remove');
  } else {
    jQuery('header').removeClass('fixed');
    jQuery('main').removeClass('top-offset');

    jQuery('header').addClass('fixed-remove');
    jQuery('main').addClass('top-offset-remove');
  }

  jQuery('.fixed').css({
    'top': topNav,
  });
  
  jQuery('#navbarResponsive').css({
    'top': topNav + navbarCustom,
  });

  jQuery('.top-offset').css({
    'margin-top': topNav + navbarCustom,
  });
}

function passwordToggle() {
  jQuery('.toggle-password').on('mousedown mouseup', function() {
    var input = jQuery('#password');
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  jQuery('.toggle-new-password').on('mousedown mouseup', function() {
    var input = jQuery('#newPassword');
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  jQuery('.toggle-current-password').on('mousedown mouseup', function() {
    var input = jQuery('#currentPassword');
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
}

function datepickerToggle() {
  var dateToday = new Date();
  jQuery( ".datepicker" ).each(function() {
    jQuery(this).datepicker({
      altFormat: "d MM, yy",
      dateFormat: "yy-mm-dd",
      minDate: dateToday,
      beforeShowDay: function(date) {
        var day = date.getDay();
        return [day != 0,''];
      }
    });
  });


  jQuery( ".datepicker-alt" ).each(function() {
    jQuery(this).datepicker({
      altFormat: "d MM, yy",
      dateFormat: "yy-mm-dd",
      maxDate: dateToday,
    });
  });
}

function dropzoneInit() {
  Dropzone.autoDiscover = false;

  var dz;

  if ( $( "form#registerProduct" ).length ) {
    dz = new Dropzone("#registerProduct",{
      url: "/file/post",
      clickable:'#dropzoneTrigger',
      previewsContainer: "#dropzonePreview",
      uploadMultiple: true,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      thumbnailMethod: 'crop'
    });
  }

  if ( $( "form#contactUs" ).length ) {
    dz = new Dropzone("#contactUs",{
      url: "/file/post",
      clickable:'#dropzoneTrigger',
      previewsContainer: "#dropzonePreview",
      uploadMultiple: true,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      thumbnailMethod: 'crop'
    });
  }

  if ( $( "form#serviceRequest" ).length ) {
    dz = new Dropzone("#serviceRequest",{
      url: "/file/post",
      clickable:'#dropzoneTrigger',
      previewsContainer: "#dropzonePreview",
      uploadMultiple: true,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      thumbnailMethod: 'crop'
    });
  }
}

function pagePreLoginHeight() {
  var topNav       = jQuery('.top-nav').outerHeight() || 0;
  var navbarCustom = jQuery('.navbar-custom').outerHeight() || 0;
  var subFooter    = jQuery('.sub-footer').outerHeight() || 0;
  var footer       = jQuery('footer').outerHeight() || 0;

  var total = topNav + navbarCustom + subFooter + footer;

  
  var query = Modernizr.mq('(min-width: 576px)');
  if (query) {
    $('<style>.adjust-height { height: calc(100vh - '+ total +'px) !important; }</style>').appendTo('body');
    jQuery('.page-heading.prelogin-heading').addClass('adjust-height');
  } else {
    jQuery('.page-heading.prelogin-heading').removeClass('adjust-height');
  }
}

function pagePreLoginValidation() {
  $('#prelogin').each(function() {
    $(this).validate({
      rules: {
        mobileNumber: "required",
        password    : "required",
      },
      messages: {
          
      },
      submitHandler: function( form ) {
          
      }
    });
  });

  $( "#mobile-numb" ).rules( "add", {
    required: true,
    minlength: 8,
    maxlength: 8,
  });

  $( "#password" ).rules( "add", {
    required: true,
    maxlength: 15,
  });
}

function pageForgotPasswordHeight() {
  var topNav       = jQuery('.top-nav').outerHeight() || 0;
  var navbarCustom = jQuery('.navbar-custom').outerHeight() || 0;
  var subFooter    = jQuery('.sub-footer').outerHeight() || 0;
  var footer       = jQuery('footer').outerHeight() || 0;

  var total = topNav + navbarCustom + subFooter + footer;

  $('<style>.adjust-height { height: calc(100vh - '+ total +'px) !important; }</style>').appendTo('body');

  var query = Modernizr.mq('(min-width: 768px)');
  if (query) {
    jQuery('.page-heading.preforgotpass-heading').addClass('adjust-height');
  } else {
    jQuery('.page-heading.preforgotpass-heading').removeClass('adjust-height');
  }
}

function pageForgotPasswordValidation() {
  $('.forgot-p').each(function() {
    $(this).validate({
      rules: {

      },
      messages: {
          
      },
      submitHandler: function( form ) {
          
      }
    });
  });

  $( "#mobile-numb" ).rules( "add", {
    required: false,
    minlength: 8,
    maxlength: 8,
  });

  $( "#email" ).rules( "add", {
    required: false,
    email: true
  });
}

function pagePreRegistrationValidation() {
  $('.registration').each(function() {
    $(this).validate({
      rules: {
        password: "required",
        consent : "required",
      },
      messages: {
          
      },
      submitHandler: function( form ) {
          
      }
    });
  });

  $( "#fname" ).rules( "add", {
    required: true,
    maxlength: 20,
  });

  $( "#lname" ).rules( "add", {
    required: true,
    maxlength: 20,
  });

  $( "#mobileVerify" ).rules( "add", {
    required: true,
    minlength: 8,
    maxlength: 8,
  });

  $( "#password" ).rules( "add", {
    required: true,
    minlength: 8,
    maxlength: 15,
  });

  $( "#confirmpassword" ).rules( "add", {
    required : true,
    minlength: 8,
    maxlength: 15,
    equalTo  : "#password"
  });

  $( "#email" ).rules( "add", {
    required: true,
    email: true
  });

  jQuery.validator.addMethod("password", function( value, element ) {
		var result = this.optional(element) || value.length >= 8 && /\d/.test(value) && /[a-z]/.test(value) && /[A-Z]/.test(value);
		if (!result) {
			var validator = this;
			setTimeout(function() {
				validator.blockFocusCleanup = true;
				// element.focus();
				validator.blockFocusCleanup = false;
			}, 1);
		}
		return result;
	}, "Password does not meet the requirements.");
}

function pageUpdatePasswordValidation() {
  $('.update-password').each(function() {
    $(this).validate({
      rules: {

      },
      messages: {
          
      },
      submitHandler: function( form ) {
          
      }
    });
  });

  $( "#currentPassword" ).rules( "add", {
    required: true,
    minlength: 8
  });

  $( "#newPassword" ).rules( "add", {
    required : true,
    minlength: 8,
  });

  $( "#confirmPassword" ).rules( "add", {
    required : true,
    minlength: 8,
    maxlength: 15,
    equalTo  : "#newPassword"
  });

  jQuery.validator.addMethod("password", function( value, element ) {
		var result = this.optional(element) || value.length >= 8 && /\d/.test(value) && /[a-z]/.test(value) && /[A-Z]/.test(value);
		if (!result) {
			var validator = this;
			setTimeout(function() {
				validator.blockFocusCleanup = true;
				// element.focus();
        // jQuery('.svg.password-match').css({"display" : "block"});
				validator.blockFocusCleanup = false;
			}, 1);
		}
		return result;
	}, "Password does not meet the requirements.");
}

function pageUpdateProfileValidation() {
  $('.update-profile').each(function() {
    $(this).validate({
      rules: {
        consent : "required",
      },
      messages: {
          
      },
      submitHandler: function( form ) {
          
      }
    });

    $( "#fname" ).rules( "add", {
      required: true,
      maxlength: 20,
    });
  
    $( "#lname" ).rules( "add", {
      required: true,
      maxlength: 20,
    });

    $( "#email" ).rules( "add", {
      required: true,
      email: true
    });

    $( "#mobile" ).rules( "add", {
      required: true,
      minlength: 8,
      maxlength: 8,
    });
  });
}

function pageRegisterProductValidation() {
  $('.register-product').each(function() {
    $(this).validate({
      rules: {
        serial: {
          required: true,
          minlength: 30
        },
        datepurchase: {
          required: true,
          date: true,
        },
        datedelivery: {
          required: true,
          date: true,
          greaterThan: "#datepurchase"
        },
        postalcode: {
          required: false,
          minlength: 6
        }
      },
      messages: {
          
      },
      submitHandler: function( form ) {
          
      }
    });
  });

  jQuery.validator.addMethod("greaterThan", 
  function(value, element, params) {
    if (!/Invalid|NaN/.test(new Date(value))) {
      return new Date(value) > new Date($(params).val());
    }

    return isNaN(value) && isNaN($(params).val()) || (Number(value) > Number($(params).val())); 
  }, 'Cannot be earlier than purchase date.');
}

function pageContactUsValidation() {
  $('.contact-us').each(function() {
    $(this).validate({
      rules: {
        feedback: {
          required: true,
        },
      },
      messages: {
          
      },
      submitHandler: function( form ) {
          
      }
    });
  });
}

function pageServiceRequestValidation() {
  $('.service-request').each(function() {
    $(this).validate({
      rules: {
        preferredDate: {
          required: true,
          date: true,
        },
        address: {
          required: true,
        },
        postalcode: {
          required: false,
          minlength: 6
        },
        request: {
          maxlength: 100
        }
      },
      messages: {
          
      },
      submitHandler: function( form ) {
          
      }
    });
  });
}