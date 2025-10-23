function sendMessage() {
  const name = document.getElementById('name').value;
  if (name.trim() === "") {
    alert("Mohammad Rizky Wira");
  } else {
    alert(`Terima kasih, ${name}! Pesan kamu sudah terkirim.`);
  }
}
