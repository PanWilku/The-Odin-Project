import { caesarCipher } from "./caesar-cipher";


test('is return value a string', () => {
    expect(typeof caesarCipher("Kowalski", 3)).toBe("string");
});


test('returns proper results considering factor', () => {
    expect(caesarCipher("Kowalski", 2)).toBe("MQYCNUMK");
    expect(caesarCipher("Kowalski", 3)).toBe("NRZDOVNL");
    expect(caesarCipher("Kowalski", 10)).toBe("UYGKVCUS");
    expect(caesarCipher("Kowalski", 13)).toBe("XBJNYFXV");
});