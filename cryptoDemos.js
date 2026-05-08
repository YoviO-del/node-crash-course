// can create hashes, encryption etc. 
import crypto from 'crypto'

const hash = crypto.createHash('sha256')
hash.update('password1234')
console.log(hash.digest('hex'));

crypto.randomBytes(16, (err, buf) => {
    if(err) throw err;
    console.log(buf.toString('hex'));
    //gives random string like userIds
})

// createCipheriv & createDecipheriv
// creates ciphers with diff hashes
// and deciphers it

