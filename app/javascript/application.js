// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import "./jquery";

$(document).ready(onReady);

function onReady() {
  // create event listeners
  $(document).on("click", ".empty-time-box", popup);
  $(document).on("click", "#close-popup-btn", hidePopup);

  createBlankSpaces();

  console.log($(".work-order").first().data("start-minutes"));
}

// generate popup
function popup() {
  const name = $(this).parent().data("technician");
  const minutesTotal = $(this).data("minutes");
  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;
  let timeString;
  if (hours === 0) {
    timeString = `${minutes} minutes`;
  } else if (minutes === 0) {
    timeString = `${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    timeString = `${hours} hour${hours > 1 ? "s" : ""}
    and ${minutes} minutes`;
  }

  console.log();
  $("body").append(`<div id="popup-bg">
                    </div>
                    <div id="popup">
                      <div>${name} is free for <b>${timeString}</b> here.</div>
                      <button id="close-popup-btn">OK</button>
                    </div>
  `);
}

// remove popup
function hidePopup() {
  $("#popup-bg").remove();
  $("#popup").remove();
}
