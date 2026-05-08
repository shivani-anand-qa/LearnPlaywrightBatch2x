// ===== NAMING CASES IN JAVASCRIPT =====

// 1. camelCase - first word lowercase, rest capitalized
//    Used for: variables, functions
var firstName = "Pramod";
var lastName = "Anand";
var myFirstName = "Shivani";

// 2. PascalCase (UpperCamelCase) - every word capitalized
//    Used for: classes, constructors
var FirstName = "Pramod";
var LastName = "Anand";
var MyClassName = "Student";

// 3. snake_case - words separated by underscores, all lowercase
//    Used for: file names, database columns (less common in JS)
var first_name = "Pramod";
var last_name = "Anand";
var my_variable_name = "Hello";

// 4. UPPER_SNAKE_CASE (SCREAMING_SNAKE_CASE) - all caps with underscores
//    Used for: constants
var MAX_SIZE = 100;
var PI_VALUE = 3.14;
var BASE_URL = "https://example.com";

// 5. kebab-case - words separated by hyphens
//    NOT valid in JS variables, used in CSS class names / file names
// var my-name = "test";   // ❌ Invalid in JS
// my-component.js         // ✅ Used in file names only

// 6. Hungarian Notation - prefix indicates the type
//    Rarely used in modern JS
var strName = "Shivani";   // str = string
var numAge = 25;           // num = number
var bIsActive = true;      // b = boolean