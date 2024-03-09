function toggleQuestions(category) {
  // Hide all question lists
  document.querySelectorAll('.question-list').forEach(function (list) {
    list.classList.remove('active');
  });

  // Show the selected question list
  const selectedList = document.getElementById(category + '-questions');
  if (selectedList) {
    selectedList.classList.add('active');
  }
}

function toggleAnswer(questionContainer) {
  // Toggle the visibility of the answer related to the clicked question
  const answer = questionContainer.nextElementSibling;
  answer.classList.toggle('active');
}

function submitForm() {
  // Simulate form submission logic (you can replace this with your actual submission code)
  // For demonstration purposes, we'll just show the success message and disable the textarea
  document.getElementById('message').disabled = true;
  document.getElementById('submitButton').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
}
