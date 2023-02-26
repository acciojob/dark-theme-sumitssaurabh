//your code here
function swapTheme() {
  if (appDiv.classList.contains('day')) {
    // switch to night theme
    appDiv.classList.remove('day');
    appDiv.classList.add('night');
    swapButton.textContent = 'Switch to Day Theme';
    swapButton.classList.remove('button_day');
    swapButton.classList.add('button_night');
  } else {
    // switch to day theme
    appDiv.classList.remove('night');
    appDiv.classList.add('day');
    swapButton.textContent = 'Switch to Night Theme';
    swapButton.classList.remove('button_night');
    swapButton.classList.add('button_day');
  }
}

// add a click event listener to the swap button
swapButton.addEventListener('click', swapTheme);
Make sure you include this code inside a <script> tag at the end of your HTML file, after the elements you want to modify. Also, ensure the CSS classes 'day', 'night', 'button_day', and 'button_night' are defined properly in your CSS file, to ensure the styles get applied correctly.

Let me know if you need any further assistance!




Regenerate response
