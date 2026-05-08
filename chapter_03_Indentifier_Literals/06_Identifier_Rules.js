// ===== IDENTIFIER RULES IN JAVASCRIPT =====

// RULE 1: Can start with a letter, underscore (_), or dollar sign ($)
var $ = 20;
var _a = 10;
var abc123 = 123;

// RULE 2: Cannot start with a number
//var 123 = 123;   // ❌ Invalid

// RULE 3: Case sensitive - these are two different identifiers
var name = "Shivani";
var Name = "Anand";

// RULE 4: No spaces allowed
//var Shivani Anand = "hello";   // ❌ Invalid

// RULE 5: Can contain letters, digits, _ or $
var shivani_anand = "Hello";
var shivani$anand = "Hello";
var shivani123 = "Hello";

// RULE 6: Cannot use reserved keywords
//var var = "test";    // ❌ Invalid
//var let = "test";    // ❌ Invalid

// ===== NAMING CONVENTIONS (best practices) =====
let firstName = "Shivani";       // camelCase   - variables, functions
let LastName = "Anand";          // PascalCase  - classes
let MAX_SIZE = 100;              // UPPER_CASE  - constants
let _privateVar = "hidden";      // _underscore - private/internal