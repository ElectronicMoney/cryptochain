let Block = require('../Block');

describe('Block', () => {
    const timestamp = Date.now();
    const hash = '289cddaed61d06f57a4f2a708ec6b21aacb8d92b687b186b76cff72600580c0';
    const prevHash = '58361bbf8cf4eb40ef5878d07fd23d3685efdd65a0970c92dd4fa630b4aa9c9c';
    const data = ['blockchain', 'data'];

    const block = new Block({timestamp, hash, prevHash, data});

    it('has timestamp, hash, prevHash and data properties', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.hash).toEqual(hash);
        expect(block.prevHash).toEqual(prevHash);
        expect(block.data).toEqual(data);
    })
});

