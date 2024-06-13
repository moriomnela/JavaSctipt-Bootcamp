const getGrade = (mark) => {
    let grade;
    if (mark >= 0 && mark < 33) {
        grade = "F";
    }
    else if (mark >= 33 && mark < 40) {
        grade = "D";
    }
    else if (mark >= 40 && mark < 50) {
        grade = "C";
    }
    else if (mark >= 50 && mark < 60) {
        grade = "B";
    }
    else if (mark >= 60 && mark < 70) {
        grade = "A-";
    }
    else if (mark >= 70 && mark < 80) {
        grade = "A";
    }
    else if (mark >= 80 && mark < 100) {
        grade = "A+";
    }
    else {
        grade = "jamela ase";
    }
    return grade;
};

const getGpa = (mark) => {
    let gpa;
    if (mark >= 0 && mark < 33) {
        gpa = 0;
    }

    else if (mark >= 33 && mark < 40) {
        gpa = 1;
    }
    else if (mark >= 40 && mark < 50) {
        gpa = 2;
    }
    else if (mark >= 50 && mark < 60) {
        gpa = 3;
    }
    else if (mark >= 60 && mark < 70) {
        gpa = 3.5;
    }
    else if (mark >= 70 && mark < 80) {
        gpa = 4;
    }
    else if (mark >= 80 && mark < 100) {
        gpa = 5;
    }
    else {
        gpa = "jamela ase";
    }
    return gpa;
};

/**
 * 
 * @param {*} s1 
 * @param {*} s2 
 * @param {*} s3 
 * @param {*} s4 
 * @param {*} s5 

 */

const isPassed = (s1, s2, s3, s4, s5) => {
    if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33) {
        return true;
    }
    else {
        return false;
    }
};

let getFinalGpa = (s1, s2, s3, s4, s5) => {
    if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33) {
        let totalGpa =
            getGpa(s1) +
            getGpa(s2) +
            getGpa(s3) +
            getGpa(s4) +
            getGpa(s5) 
            

        return totalGpa / 5;

    } else {
        return 0;
    }
};

let getFinalGrade = (s1, s2, s3, s4, s5) => {
    let finalGpa = getFinalGpa(s1, s2, s3, s4, s5);

    if (finalGpa >= 0 && finalGpa < 1) {
        return "F";
    }
    else if (finalGpa >= 1 && finalGpa < 2) {
        return "D";
    }
    else if (finalGpa >= 2 && finalGpa < 3) {
        return "C";
    }
    else if (finalGpa >= 3 && finalGpa < 3.5) {
        return "B";
    }
    else if (finalGpa >= 3.5 && finalGpa < 4) {
        return "A-";
    }
    else if (finalGpa >= 4 && finalGpa < 5) {
        return "A";
    }
    else if (finalGpa >= 5) {
        return "A+";
    }
};