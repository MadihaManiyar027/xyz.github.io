const data = [
    {symptoms: ["fever","cough"], disease:"Flu", specialist:"General Physician"},
    {symptoms: ["chest pain"], disease:"Heart Disease", specialist:"Cardiologist"},
    {symptoms: ["headache"], disease:"Migraine", specialist:"Neurologist"}
];

const hospitals = [
    {name:"Apollo Hospital", specialist:"Cardiologist", phone:"123456"},
    {name:"City Clinic", specialist:"General Physician", phone:"987654"},
    {name:"Neuro Center", specialist:"Neurologist", phone:"456789"}
];

function predict() {
    let input = document.getElementById("symptoms").value.toLowerCase();

    let found = data.find(d => d.symptoms.some(s => input.includes(s)));

    if(found){
        let hos = hospitals.filter(h => h.specialist === found.specialist);

        document.getElementById("result").innerHTML = `
        <h2>Disease: ${found.disease}</h2>
        <h3>Specialist: ${found.specialist}</h3>
        <h3>Hospitals:</h3>
        ${hos.map(h => `<p>${h.name} - ${h.phone}</p>`).join("")}
        `;
    } else {
        document.getElementById("result").innerHTML = "No match found";
    }
}
