// function calculate_gpa

function calculate_gpa(student_grades) {
    // set grade_total to 0
    let grade_total = 0;
    // for each grade in student_grades
    for(let i = 0; i < student_grades.length; i++) {
      // if grade is not a 1, 2, 3, or 4
      if(student_grades[i] < 1 && student_grades[i] > 4) {
        // print "invalid grade" and grade
        console.log("invalid grade");
        console.log(student_grades);
        // exit function with "can't complete calculation" message
        console.log("can't complete calculation");
        return;
      } 
    // else add grade to grade_total
      else {
        grade_total += student_grades[i];
      }
    }
    // setting gpa to grade_total / total number of grades
    let gpa = grade_total / student_grades.length;
    return gpa
  }
  
  // set reggie_grades to 4, 4, 3, 4
  const reggie = [4, 4, 3, 4];
  // print the results of calling calculate_gpa with reggie_grades
  console.log(calculate_gpa(reggie));
  
  // set dave_grades to 1, 2, 3, 2
  const dave = [1, 2, 3, 2];
  // print the results of calling calculate_gpa with dave_grades
  console.log(calculate_gpa(dave));
  
  
  
  
  
  