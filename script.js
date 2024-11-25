// Encrypted assignments from the Python script
const encryptedAssignments = {
'Ed': 'Ure',
'Anne': 'Vkrql',
'Rob': 'Hg',
'Shoni': 'Dqqh',
'Ol': 'Ulfn',
'Hannah': 'Olol',
'Rick': 'Kdqqdk',
'Lili': 'Ro',
'Matthew': 'Ldlq',
'Iain': 'Ruod',
'Orla': 'Pdwwkhz'
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
