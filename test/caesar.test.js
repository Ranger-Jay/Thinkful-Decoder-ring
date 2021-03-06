// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

// ====================================================

// Write your tests here!

describe("caesar", () => {
    it("Encode - should retun coded values: thinkful,3", () => {
        const expected = "wklqnixo";
        const actual = caesarModule("thinkful", 3);
        expect(actual).to.eql(expected); 
    });
    it("Encode - should retun coded value for thinkful, -3", () => {
        const expected = "qefkhcri";
        const actual = caesarModule("thinkful", -3);
        expect(actual).to.eql(expected); 
    });
    
    it("Encode - should return coded sentence", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesarModule("This is a secret message!", 8);
        expect(actual).to.eql(expected); 
    });
    it("Decode - keep spaces and special charracters", () => {
        const expected = "this is a secret message!";
        const actual = caesarModule("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected); 
    });
    it("Decode -  retun decoded value for wklqnixo, 3", () => {
        const expected = "thinkful";
        const actual = caesarModule("wklqnixo", 3, false);
        expect(actual).to.eql(expected); 
    });
  
  /*   it("Should return false if there is no shift", () => {
       const expected = false;
       const actual = caesarModule("thinkful");
        expect(actual).to.eql(expected);  */
  
   it("Should return false if there is no shift", () => {
       const expected = false;
       const actual = caesarModule("thinkful", 0);
        expect(actual).to.eql(expected); 
    });
  
     it("Should return false if there is no shift", () => {
       const expected = false;
       const actual = caesarModule("thinkful", null);
        expect(actual).to.eql(expected); 
    });
  
       it("Should return false if there is no shift", () => {
       const expected = false;
       const actual = caesarModule("thinkful", false);
        expect(actual).to.eql(expected); 
    });
  
         it("Should return false if there is no shift", () => {
       const expected = false;
       const actual = caesarModule("thinkful","" );
        expect(actual).to.eql(expected); 
    });
  
    it("Should return false if shift is >  25", () => {
        const expected = false;
        const actual = caesarModule("thinkful", 99);
        expect(actual).to.eql(expected); 
    });
    it("should retun return false if shift is < -25", () => {
        const expected = false;
        const actual = caesarModule("thinkful", -26);
        expect(actual).to.eql(expected); 
    });
//});

//caesar() encoding a message should allow for a negative shift that will shift to the left

  it(" should allow for a negative shift that will shift to the left", () => {
        const expected = false;
        const actual = caesarModule("thinkful", -52);
        expect(actual).to.eql(expected); 
    });

});
