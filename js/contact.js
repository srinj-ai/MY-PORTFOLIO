function sendDevSignal() {
    const name = document.getElementById('username').value.trim();
    const message = document.getElementById('usermsg').value.trim();
    const successLog = document.getElementById('success-log');

    if (!name || !message) {
        successLog.innerText = "⚠ Fill it all out!";
        successLog.classList.remove('hidden');
        return;
    }

    successLog.innerText = "✓ Signal sent, " + name + "!";
    successLog.classList.remove('hidden');

    document.getElementById('username').value = "";
    document.getElementById('usermsg').value = "";
}
