let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  // 1. Print developers using map()
  function PrintDeveloperbyMap() {
    arr
      .filter((emp) => emp.profession === "developer")
      .map((dev) => console.log(dev));
  }

  // 2. Print developers using forEach()
  function PrintDeveloperbyForEach() {
    arr.forEach((emp) => {
      if (emp.profession === "developer") {
        console.log(emp);
      }
    });
  }

  // 3. Add a new employee
  function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log("Updated Employee List:", arr);
  }

  // 4. Remove employees with profession "admin"
  function removeAdmin() {
    arr = arr.filter((emp) => emp.profession !== "admin");
    console.log("Employees after removing Admin:", arr);
  }

  // 5. Concatenate a new array with 3 different objects
  function concatenateArray() {
    let newEmployees = [
      { id: 5, name: "Alice", age: "22", profession: "designer" },
      { id: 6, name: "Bob", age: "25", profession: "manager" },
      { id: 7, name: "Charlie", age: "23", profession: "developer" },
    ];
    let mergedArray = arr.concat(newEmployees);
    console.log("Merged Employee List:", mergedArray);
  }