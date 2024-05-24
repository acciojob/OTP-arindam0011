//your JS code here. If required.
	inputs.forEach((input, index) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.value.length === 0) {
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});