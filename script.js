let money = Number(localStorage.getItem("money")) || 0;
let income = Number(localStorage.getItem("income")) || 1;
let year = Number(localStorage.getItem("year")) || 1998;

const moneyEl = document.getElementById("money");
const incomeEl = document.getElementById("income");
const yearEl = document.getElementById("year");

function updateUI(){
    moneyEl.textContent = money;
    incomeEl.textContent = income;
    yearEl.textContent = year;

    localStorage.setItem("money", money);
    localStorage.setItem("income", income);
    localStorage.setItem("year", year);
}

document.getElementById("workBtn").onclick = () => {
    money += income;

    if(money > 100 && year === 1998) year = 2002;
    if(money > 500 && year === 2002) year = 2005;
    if(money > 2000 && year === 2005) year = 2010;
    if(money > 10000 && year === 2010) year = 2020;

    updateUI();
};

function buyUpgrade(cost, boost){
    if(money >= cost){
        money -= cost;
        income += boost;
        updateUI();
    }
}

updateUI();
