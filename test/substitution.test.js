// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");


describe("substitution", () => {
    it("should encode message by with the substitution alphabet", () => {
        const expected = "jrufscpw";
        const actual = substitutionModule("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should keep space characters", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitutionModule("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected); 
    });
    it("should work with any key and special characters", () => {
        const expected = "thinkful";
        const actual = substitutionModule("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected); 
    });
    it("should encode with the coded alphabet", () => {
        const expected = "y&ii$r&";
        const actual = substitutionModule("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected); 
    });
    it("should work with any key and unique characters", () => {
        const expected = "message";
        const actual = substitutionModule("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected); 
    });
    it("should return false if the coded alphabet is missing", () => {
        const expected = false;
        const actual = substitutionModule("thinkful", "short");
        expect(actual).to.equal(expected); 
    });
    it("should return false if coded alphabet does not have special characters", () => {
        const expected = false;
        const actual = substitutionModule("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected); 
    });
});
