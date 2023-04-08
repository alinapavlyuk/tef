import {postgraduate} from "../data/postgraduate_data.js";

function showTable() {
    let indexOfStudent = 0;
    let tableContent = document.querySelector("tbody");
    Object.entries(postgraduate).forEach(([year, students]) => {
        tableContent.innerHTML += `
            <tr>
                <td colspan="7" class="text-start">${year} рік навчання</td>
            </tr>
        `;
        students.forEach((student) => {
            indexOfStudent++;
            tableContent.innerHTML += `
            <tr>
                <td>${indexOfStudent}</td>
                <td>${student.nameStudent}</td>
                <td>${student.nameTeacher}</td>
                <td>${student.class}</td>
                <td>${student.year}</td>
                <td>${student.formStudy}</td>
                <td>${student.topic}</td>
            </tr>
        `;
        })
    });
    let children = tableContent.children;
    for (let i = 0; i < children.length; i++) {
        let tableChild = children[i];
        if ((i + 1) % 2 === 0) {
            tableChild.classList.add("even-table-row");
        }
    }
}

showTable();