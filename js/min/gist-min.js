$(function(){"use strict";var e=window.ontouchstart||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoint>0;if(e)try{for(var t in document.styleSheets){var s=document.styleSheets[t];if(styleSheet.rules)for(var r=styleSheet.rules.length-1;r>=0;r--)styleSheet.rules[r].selectorText&&styleSheet.rules[r].selectorText.match(":hover")&&styleSheet.deleteRule(r)}}catch(o){}});