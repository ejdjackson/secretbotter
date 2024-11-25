// Encrypted assignments from the Python script
const encryptedAssignments = {
   'Ed': 'Ulfn',
'Anne': 'Olol',
'Rob': 'Ruod',
'Shoni': 'Kdqqdk',
'Ol': 'Pdwwkhz',
'Hannah': 'Vkrql',
'Rick': 'Hg',
'Lili': 'Ldlq',
'Matthew': 'Dqqh',
'Iain': 'Ure',
'Orla': 'Ro',
};

// Caesar cipher decryption
function caesarCipherDecrypt(text, shift) {
    let result = '';
    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) {
            let code = char.charCodeAt(0);
            let base = code >= 97 ? 97 : 65;
            result += String.fromCharCode(((code - base - shift + 26) % 26) + base);
        } else {
            result += char;
        }
    }
    return result;
}

const nameSelector = document.getElementById('nameSelector');
const revealButton = document.getElementById('revealButton');
const result = document.getElementById('result');

// Populate the name selector
Object.keys(encryptedAssignments).forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    nameSelector.appendChild(option);
});

revealButton.addEventListener('click', () => {
    const selectedName = nameSelector.value;
    if (!selectedName) {
        alert('Please select your name.');
        return;
    }
    const encryptedReceiver = encryptedAssignments[selectedName];
    const secretBotter = caesarCipherDecrypt(encryptedReceiver, 3);
    result.innerHTML = `Merry Botmas ${selectedName}!<br><br>Please buy a present for:<br><br> ${secretBotter} !`;
});
