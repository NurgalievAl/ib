const alf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя 0123456789";
let k, x, z;
let crypt;

function GammaCoding() {
  let source = document.getElementById('message').value;
  let key = document.getElementById('gamma').value;
  let res = '';
If  (source ==''|| source == undefiend || key == '' || key == undefind) return;                
  while (key.length < source.length) {
    key += key;
    if (key.length > source.length) {
      key = key.substr(0, source.length);
    }
  }

  for (let i = 0; i < source.length; i++) {
    for (let id = 0; id < alf.length; id++) {
      if (key[i] == alf[id]) {
        k = id
      };

      if (source[i] == alf[id]) {
        x = id
      };

      z = (x + k) % alf.length;
    }
    res += alf[z];
  }
  document.getElementById('result').value = res;
}

function Decryption() {
  let source = document.getElementById('message').value;
  let key = document.getElementById('gamma').value;            
  res='';
If  (source ==''|| source == undefiend || key == '' || key == undefind) return;           
  while (key.length < source.length) {
    key += key;
    if (key.length > source.length) {
      key = key.substr(0, source.length)
    };
  }

  for (let i = 0; i < source.length; i++) {
    for (let id = 0; id < alf.length; id++) {
      if (key[i] == alf[id]) {
        k = id
      };

      if (source[i] == alf[id]) {
        x = id
      };

      z = ((x - k) + alf.length) % alf.length;
    }
    res += alf[z];
  }
  document.getElementById('result').value = res;
}
