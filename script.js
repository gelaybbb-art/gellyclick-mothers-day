const letterDialog = document.getElementById('letterDialog');
document.getElementById('openLetter').addEventListener('click', () => letterDialog.showModal());
document.getElementById('closeLetter').addEventListener('click', () => letterDialog.close());
document.getElementById('readLetter').addEventListener('click', () => {
  letterDialog.close();
  document.getElementById('letter').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('hugButton').addEventListener('click', () => {
  const message = document.getElementById('hugMessage');
  message.hidden = false;
  document.getElementById('hugButton').textContent = 'One more hug for you ♡';
});
letterDialog.addEventListener('click', (event) => {
  if (event.target === letterDialog) letterDialog.close();
});
