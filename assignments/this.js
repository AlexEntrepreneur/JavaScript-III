/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding
* 2. Implicit Binding
* 3. NEW Object Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function defaultBindingFunction() {
  console.log(`Default Binding: \"this\" refers to => \"${this.__proto__.constructor.name}\" Object`);
}

defaultBindingFunction();

// Principle 2
// code example for Implicit Binding
function implicitBindingFunction() {
  console.log(`Implicit Binding: \"this\" refers to => \"${this.name}\" Object`);
}

const implicitObject = {
  "name": "implicitObject",
  "implicit_object_method": implicitBindingFunction
}

implicitObject.implicit_object_method();

// Principle 3
// code example for New Binding
function NewBindingConstructor(name) {
  this.name = name;
  console.log(`NEW Binding: \"this\" refers to => \"${this.name}\" Object`);
}

const imANewObject = new NewBindingConstructor("imANewObject");

// Principle 4
// code example for Explicit Binding
function explicitBindingFunction() {
  console.log(`Explicit Binding: \"this\" refers to => \"${this.name}\" Object`);
}

const specifiedObject = {
  "name": "specifiedObject"
}

const boundFunction = explicitBindingFunction.bind(specifiedObject); // Can use call or apply also
boundFunction();
