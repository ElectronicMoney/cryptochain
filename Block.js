const sha256 = require('sha256');

class Block {
    constructor({ timestamp, data, hash, prevHash }) {
        this.timestamp = timestamp;
        this.data      = data;
        this.prevHash  = prevHash;
        this.hash      = hash
    }

    cryptoHash() {
        return sha256(this.timestamp + this.data + this.prevHash);
    }

}

module.exports = Block;


