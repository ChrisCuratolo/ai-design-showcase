document.getElementById('runPrompt').addEventListener('click', () => {
  const prompt = document.getElementById('prompt').value.trim();
  const friendly = document.getElementById('styleFriendly').checked;
  const out = document.getElementById('aiOutput');

  if (!prompt) {
    out.textContent = 'Please type a prompt to try the mock AI.';
    return;
  }

  const tone = friendly ? 'Friendly' : 'Professional';
  const lines = [
    `Tone: ${tone}`,
    '----',
    `Prompt preview: ${prompt}`,
    '',
    'Mock AI Response:',
    friendly
      ? `Here are three concise guidelines: 1) Ask for the user's goal first; 2) Limit examples to 2; 3) Provide expected outcome format. Example: "I want X because Y; provide steps and acceptance criteria."`
      : `Guidelines: 1) Elicit the goal; 2) Limit examples; 3) Define expected format. Example: "State goal, provide steps, and define acceptance criteria."`
  ];

  lines.push('', 'Design note: test prompts with varied user language and include a short system instruction to set scope.');
  out.textContent = lines.join('\n');
});
