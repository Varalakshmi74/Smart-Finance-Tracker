let income = 0;
let expense = 0;


function addTransaction(){

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let type = document.getElementById("type").value;


    if(name === "" || amount === 0 || date === ""){

        alert("Please fill all details");
        return;

    }


    if(type === "income"){

        income = income + amount;

    }
    else{

        expense = expense + amount;

    }



    let balance = income - expense;



    document.getElementById("balance").innerHTML = "₹" + balance;

    document.getElementById("income").innerHTML = "₹" + income;

    document.getElementById("expense").innerHTML = "₹" + expense;

    document.getElementById("saving").innerHTML = "₹" + balance;



    let history = document.getElementById("history");


    history.innerHTML += `

    <div class="item">

        <h3>${name}</h3>

        <p>Category : ${category}</p>

        <p>Amount : ₹${amount}</p>

        <p>Date : ${date}</p>

        <p>Type : ${type}</p>

    </div>

    `;



    // Clear input

    document.getElementById("name").value="";
    document.getElementById("amount").value="";

}