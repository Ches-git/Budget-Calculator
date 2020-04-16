let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};



// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось. 
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки. 
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание!
for(let i = 0; i< 2; i ++){
	a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	b = prompt("Во сколько обойдется?", '');
	if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

			console.log ("done");
	
		appData.expenses[a] = b;
	} else {
		i -=1;
	}
}
appData.MoneyPerDay = appData.budget / 30;
alert("Ваш бюджет :" +  appData.MoneyPerDay);

if(appData.MoneyPerDay < 100){
	console.log("минимальный уровень достатка");
}else if (appData.MoneyPerDay >100 && appData.MoneyPerDay <2000){
	console.log(`средний уровень достка`);
} else if  (appData.MoneyPerDay >2000 ){
	console.log(`хороший уровень достатка`);
}else{
	console.log("произошла ошибка");
	}
