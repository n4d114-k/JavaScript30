const CHECKBOXES = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(ev) {

  let inBetween = false;
  if (ev.shiftKey && this.checked) {

    CHECKBOXES.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;

}

CHECKBOXES.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
