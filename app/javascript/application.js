// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import "./jquery";

$(document).ready(onReady);

function onReady() {
  // create event listeners
  $(document).on("click", ".schedule-box", popup);
  $(document).on("click", "#close-popup-btn", hidePopup);
}

// generate popup
function popup() {
  const name = $(this).data("technician");
  const minutes = 60;
  console.log();
  $("body").append(`<div id="popup-bg">
                    </div>
                    <div id="popup">
                      <div>${name} is free for ${minutes} minutes here.</div>
                      <button id="close-popup-btn">OK</button>
                    </div>
  `);
}

// remove popup
function hidePopup() {
  $("#popup-bg").remove();
  $("#popup").remove();
}
