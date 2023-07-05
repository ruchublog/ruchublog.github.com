function encryptData(data, key) {
    const encodedData = new TextEncoder().encode(data);
    return window.crypto.subtle.importKey(
      'raw',
      key,
      'AES-CBC',
      false,
      ['encrypt']
    )
    .then((aesKey) => {
      const iv = window.crypto.getRandomValues(new Uint8Array(16));
      return window.crypto.subtle.encrypt(
        { name: 'AES-CBC', iv: iv },
        aesKey,
        encodedData
      ).then((encryptedData) => {
        const encryptedBytes = new Uint8Array(encryptedData);
        const result = new Uint8Array(iv.length + encryptedBytes.length);
        result.set(iv);
        result.set(encryptedBytes, iv.length);
        return result;
      });
    });
  }
  
  // 解密
  function decryptData(encryptedData, key) {
    const iv = encryptedData.slice(0, 16);
    const encodedData = encryptedData.slice(16);
    
    return window.crypto.subtle.importKey(
      'raw',
      key,
      'AES-CBC',
      false,
      ['decrypt']
    )
    .then((aesKey) => {
      return window.crypto.subtle.decrypt(
        { name: 'AES-CBC', iv: iv },
        aesKey,
        encodedData
      );
    })
    .then((decryptedData) => {
      const decryptedBytes = new Uint8Array(decryptedData);
      const decoder = new TextDecoder();
      return decoder.decode(decryptedBytes);
    });
  }
  
  // 示例用法
 
  
  // const plaintext = 'alert(1);';

  // encryptData(plaintext, key)
  //   .then((encrypted) => {
  //     console.log('Encrypted:', encrypted);
      
      
  //     decryptData(encrypted, key)
  //       .then((decrypted) => {
  //           window.js_code=decrypted;
  //         console.log('Decrypted:', decrypted);
          
  //       });
  //   });
window.encrypted_js_code= new Uint8Array([
  231, 191, 169, 136, 229, 47, 122, 7, 112, 212, 90, 109, 166, 47, 41, 72, 215, 145, 82, 48, 31, 50, 194, 26, 42, 219, 200, 54, 36, 204, 130, 93

   
  ]);
// console.log(decryptData(d,key))




      
