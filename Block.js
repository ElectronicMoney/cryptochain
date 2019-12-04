const sha256 = require('sha256');
const { GENESIS_BLOCK } = require('./config');

class Block {
    constructor({ timestamp, data, hash, prevHash }) {
        this.timestamp = timestamp;
        this.data      = data;
        this.prevHash  = prevHash;
        this.hash      = hash
    }

    static genesis() {
        return new Block(GENESIS_BLOCK);
    }

    cryptoHash() {
        return sha256(this.timestamp + this.data + this.prevHash);
    }

}

module.exports = Block;


