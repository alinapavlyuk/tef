import {science_school_participants} from "../data/science_schools_data.js";

function showTable() {
    let indexOfStudent = 0, scopusSum = 0;
    let tableContent = document.querySelector("tbody");
    science_school_participants.forEach((participant) => {
        indexOfStudent++;
        scopusSum += participant.scopus;
        tableContent.innerHTML += `
        <tr>
            <td>${indexOfStudent}</td>
            <td>${participant.name}</td>
            <td>${participant.birthday}</td>
            <td>${participant.degree}</td>
            <td>${participant.position}</td>
            <td><a href="#" class="green-link">${participant.link}</a></td>
            <td>${participant.scopus > 0 ? participant.scopus : ""}${participant.scholar ? "/" + participant.scholar : ""}</td>
        </tr>
    `;
    });
    tableContent.innerHTML += `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Сумарний h<sub>інд.</sub> Scopus</td>
            <td>${scopusSum}</td>
        </tr>
    `
    document.querySelector("#scopus-sum").innerHTML = `${scopusSum}`;
    let children = tableContent.children;
    for (let i = 0; i < children.length; i++) {
        let tableChild = children[i];
        if ((i + 1) % 2 === 0) {
            tableChild.classList.add("even-table-row");
        }
    }
}

showTable();