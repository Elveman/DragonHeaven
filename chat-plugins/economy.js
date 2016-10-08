'use strict';

let color = require('../config/color');
let fs = require('fs');
let path = require('path');

		const eUsers = Object.keys(Db('money').object());
		const eTotal = eUsers.reduce(function (acc, cur) {
			return acc + Db('money').get(cur);
		}, 0);
		let avg = Math.floor(eTotal / eUsers.length) || '0';
		let logcurve = 2/(1+Math.pow(2.71828, -1*avg/20)); //logistic curve - expolinearry raising prices from 1x to 2x

let shop = [
	['Смена аватара или иконки', 'Если есть кастомный аватар и/или иконка, этой командой можно их попросить сменить', Math.floor(5*logcurve)],
	['Кастомная иконка', 'Кастомная иконка рядом с ником (картинки больше 32x32 могут отображаться некорректно)', Math.floor(7.5*logcurve)],
	['Кастомный аватар', 'Кастомный аватар в информации о пользователе (картинки больше 80x80 могут отображаться некорректно)', Math.floor(10*logcurve)],
	['Комната для лиги', 'Покупка скрытой комнаты для собственной Лиги. Для покупки необходимы никнеймы минимум пяти членов Лиги.', Math.floor(25*logcurve)],
	['voice', 'Получить себе статус voice. Позволяет общаться в модерируемых чатах. Не покупайте, если не зарегистрированы или сами из админки', Math.floor(35*logcurve)],
	['Помощь админки', 'Человек из руководства сервера поможет обустроить приветствие комнаты, настроить бота и т.п. Ответ может быть не сразу', Math.floor(50*logcurve)],
	['Доступ Автора','Возможность делать посты в блоге на основном сайте', Math.floor(50*logcurve)],
	['Чат-комната', 'Покупка видимой на главной сервера чат-комнаты. (может быть отклонена, если на то есть причины)', Math.floor(100*logcurve)],
	['Свидание с админом', 'Не покупайте эту опцию. Ну или убедитесь, что живёте в Москве', Math.floor(200*logcurve)],
	['Добавление в Roomintro','Запрос на добавление в Roomintro какой-либо комнаты своего ника с припиской "За особые заслуги"', Math.floor(500*logcurve)]
];

let shopDisplay = getShopDisplay(shop);

/**
 * Gets an amount and returns the amount with the name of the currency.
 *
 * @examples
 * currencyName(0); // 0 bucks
 * currencyName(1); // 1 buck
 * currencyName(5); // 5 bucks
 *
 * @param {Number} amount
 * @returns {String}
 */
function currencyName(amount) {
	let name = " RPC buck";
	return amount === 1 ? name : name + "s";
}

/**
 * Checks if the money input is actually money.
 *
 * @param {String} money
 * @return {String|Number}
 */
function isMoney(money) {
	let numMoney = Number(money);
	if (isNaN(money)) return "Должно быть числом.";
	if (String(money).includes('.')) return "Должно быть целым.";
	if (numMoney < 1) return "Не может быть меньше 1.";
	return numMoney;
}

/**
 * Log money to logs/money.txt file.
 *
 * @param {String} message
 */
function logMoney(message) {
	if (!message) return;
	let file = path.join(__dirname, '../logs/money.txt');
	let date = "[" + new Date().toUTCString() + "] ";
	let msg = message + "\n";
	fs.appendFile(file, date + msg);
}

/**
 * Displays the shop
 *
 * @param {Array} shop
 * @return {String} display
 */
function getShopDisplay(shop) {
	let display = "<table border='1' cellspacing='0' cellpadding='5' width='100%'>" +
					"<tbody><tr><th>Название</th><th>Описание</th><th>Стоимость</th></tr>";
	let start = 0;
	while (start < shop.length) {
		display += "<tr>" +
						"<td align='center'><button name='send' value='/buy " + shop[start][0] + "'><b>" + shop[start][0] + "</b></button>" + "</td>" +
						"<td align='center'>" + shop[start][1] + "</td>" +
						"<td align='center'>" + shop[start][2] + "</td>" +
					"</tr>";
		start++;
	}
	display += "</tbody></table><center>Чтобы купить что-либо, используйте команду /buy<em></em>.</center>";
	return display;
}


/**
 * Find the item in the shop.
 *
 * @param {String} item
 * @param {Number} money
 * @return {Object}
 */
function findItem(item, money) {
	let len = shop.length;
	let price = 0;
	let amount = 0;
	while (len--) {
		if (item.toLowerCase() !== shop[len][0].toLowerCase()) continue;
		price = shop[len][2];
		if (price > money) {
			amount = price - money;
			this.errorReply("У Вас недостаточно денег. Нужно ещё " + amount + currencyName(amount) + " для покупки " + item + ".");
			return false;
		}
		return price;
	}
	this.errorReply(item + " не найдено в магазине.");
}

/**
 * Handling the bought item from the shop.
 *
 * @param {String} item
 * @param {Object} user
 * @param {Number} cost - for lottery
 */
function handleBoughtItem(item, user, cost) {
	if (item === 'symbol') {
		user.canCustomSymbol = true;
		this.sendReply("Покупка успешна. Можно использовать команду /customsymbol для получения.");
		this.sendReply("Символ будет держаться до следующего выхода дольше, чем на час.");
		this.sendReply("Если символ надоел, /resetsymbol вернёт всё на место.");
	} else if (item === 'icon') {
		this.sendReply('You purchased an icon, contact an administrator to obtain the article.');
	} else if (item === 'voice') {
	    let uname = user.name;
	    if (!user.registered) {
			this.errorReply("Пользователь '" + uname + "' не зарегистрирован и не может получить voice.");
	    } else if (user.isStaff) {
	        this.errorReply("Пользователь '" + uname + "' из руководства и не может получить voice.");
	    } else {
	        Users.setOfflineGroup(uname, '+');
	        user.updateIdentity();
	        let msg = '**' + user.name + " купил(а) " + item + ".**";
	        Rooms.get('staff').add('|c|~Shop Alert|' + msg);
	        Rooms.get('staff').update();
	    }
	    
	} else {
		let msg = '**' + user.name + " купил(а) " + item + ".**";
		Rooms.get('staff').add('|c|~Shop Alert|' + msg);
		Rooms.get('staff').update();
		Users.users.forEach(function (user) {
			if (user.group === '~' || user.group === '&') {
				user.send('|pm|~Shop Alert|' + user.getIdentity() + '|' + msg);
			}
		});
	}
}

exports.commands = {
	atm: 'wallet',
	purse: 'wallet',
	wallet: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) target = user.name;

		const amount = Db('money').get(toId(target), 0);
		let group = user.getIdentity().charAt(0);
		this.sendReply("|raw|<font color=#948A88>" + group +  "</font><font color=" + color(user.userid) + "><b>" + Chat.escapeHTML(target) + "</b></font> has " + amount + currencyName(amount) + ".");
	},
	wallethelp: ["/wallet [user] - Показывает количество денег пользователя."],

	givebuck: 'givemoney',
	givebucks: 'givemoney',
	givemoney: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		if (!target || target.indexOf(',') < 0) return this.parse('/help givemoney');

		let parts = target.split(',');
		let username = parts[0];
		let amount = isMoney(parts[1]);

		if (typeof amount === 'string') return this.errorReply(amount);

		let total = Db('money').set(toId(username), Db('money').get(toId(username), 0) + amount).get(toId(username));
		amount = amount + currencyName(amount);
		total = total + currencyName(total);
		this.sendReply(username + " дали " + amount + ". " + username + " теперь имеет " + total + ".");
		if (Users.get(username)) Users(username).popup(user.name + " дал Вам " + amount + ". Теперь у Вас " + total + ".");
		logMoney(username + " was given " + amount + " by " + user.name + ". " + username + " now has " + total);
	},
	givemoneyhelp: ["/givemoney [user], [amount] - Даёт пользователю указанное количество."],

	takebuck: 'takemoney',
	takebucks: 'takemoney',
	takemoney: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		if (!target || target.indexOf(',') < 0) return this.parse('/help takemoney');

		let parts = target.split(',');
		let username = parts[0];
		let amount = isMoney(parts[1]);

		if (typeof amount === 'string') return this.errorReply(amount);

		let total = Db('money').set(toId(username), Db('money').get(toId(username), 0) - amount).get(toId(username));
		amount = amount + currencyName(amount);
		total = total + currencyName(total);
		this.sendReply(username + " потерял " + amount + ". " + username + " теперь имеет " + total + ".");
		if (Users.get(username)) Users(username).popup(user.name + " забрал " + amount + " у Вас. Теперь у Вас " + total + ".");
		logMoney(username + " had " + amount + " taken away by " + user.name + ". " + username + " now has " + total);
	},
	takemoneyhelp: ["/takemoney [user], [amount] - Забрать деньги у пользователя."],

	resetbuck: 'resetmoney',
	resetbucks: 'resetmoney',
	resetmoney: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		Db('money').set(toId(target), 0);
		this.sendReply(target + " теперь имеет 0 bucks.");
		logMoney(user.name + " reset the money of " + target + ".");
	},
	resetmoneyhelp: ["/resetmoney [user] - Обанкротить пользователя."],

	transfer: 'transfermoney',
	transferbuck: 'transfermoney',
	transferbucks: 'transfermoney',
	transfermoney: function (target, room, user) {
		if (!target || target.indexOf(',') < 0) return this.parse('/help transfermoney');

		let parts = target.split(',');
		let username = parts[0];
		let uid = toId(username);
		let amount = isMoney(parts[1]);

		if (toId(username) === user.userid) return this.errorReply("Нельзя передавать себе.");
		if (username.length > 19) return this.errorReply("Имя не больше 19 символов.");
		if (typeof amount === 'string') return this.errorReply(amount);
		if (amount > Db('money').get(user.userid, 0)) return this.errorReply("Нельзя передавать больше денег, чем имеешь.");

		Db('money')
			.set(user.userid, Db('money').get(user.userid) - amount)
			.set(uid, Db('money').get(uid, 0) + amount);

		let userTotal = Db('money').get(user.userid) + currencyName(Db('money').get(user.userid));
		let targetTotal = Db('money').get(uid) + currencyName(Db('money').get(uid));
		amount = amount + currencyName(amount);

		this.sendReply("Вы передали " + amount + ". Теперь у Вас " + userTotal + ".");
		if (Users.get(username)) Users(username).popup(user.name + " передал(а) " + amount + ". Теперь у Вас " + targetTotal + ".");
		logMoney(user.name + " transferred " + amount + " to " + username + ". " + user.name + " now has " + userTotal + " and " + username + " now has " + targetTotal + ".");
	},
	transfermoneyhelp: ["/transfer [user], [amount] - Передать часть денег другому пользователю."],

	store: 'shop',
	shop: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply("|raw|" + shopDisplay);
	},
	shophelp: ["/shop - Показывает, что можно купить."],

	buy: function (target, room, user) {
		if (!target) return this.parse('/help buy');
		let amount = Db('money').get(user.userid, 0);
		let cost = findItem.call(this, target, amount);
		if (!cost) return;
		let total = Db('money').set(user.userid, amount - cost).get(user.userid);
		this.sendReply("Вы купили " + target + " за " + cost + currencyName(cost) + ". У вас осталось " + total + currencyName(total) + ".");
		room.addRaw(user.name + " купил <b>" + target + "</b> в магазине.");
		logMoney(user.name + " has bought " + target + " from the shop. This user now has " + total + currencyName(total) + ".");
		handleBoughtItem.call(this, target.toLowerCase(), user, cost);
	},
	buyhelp: ["/buy [command] - Купить вещь."],

	customsymbol: function (target, room, user) {
		if (!user.canCustomSymbol && user.id !== user.userid) return this.errorReply("Сначала нужно купить символ в магазине.");
		if (!target || target.length > 1) return this.parse('/help customsymbol');
		if (target.match(/[A-Za-z\d]+/g) || '|?!+$%@\u2605=&~#\u03c4\u00a3\u03dd\u03b2\u039e\u03a9\u0398\u03a3\u00a9'.indexOf(target) >= 0) {
			return this.errorReply("Этот символ нельзя использовать из соображений стабильности/безопасности.");
		}
		user.customSymbol = target;
		user.updateIdentity();
		user.canCustomSymbol = false;
		user.hasCustomSymbol = true;
	},
	customsymbolhelp: ["/customsymbol [symbol] - Получить кастомный символ."],

	resetcustomsymbol: 'resetsymbol',
	resetsymbol: function (target, room, user) {
		if (!user.hasCustomSymbol) return this.errorReply("У вас нет кастомного символа.");
		user.customSymbol = null;
		user.updateIdentity();
		user.hasCustomSymbol = false;
		this.sendReply("Символ сброшен.");
	},
	resetsymbolhelp: ["/resetsymbol - Убрать кастомный символ."],

	moneylog: function (target, room, user, connection) {
		if (!this.can('modlog')) return;
		target = toId(target);
		let numLines = 15;
		let matching = true;
		if (target.match(/\d/g) && !isNaN(target)) {
			numLines = Number(target);
			matching = false;
		}
		let topMsg = "Displaying the last " + numLines + " lines of transactions:\n";
		let file = path.join(__dirname, '../logs/money.txt');
		fs.exists(file, function (exists) {
			if (!exists) return connection.popup("No transactions.");
			fs.readFile(file, 'utf8', function (err, data) {
				data = data.split('\n');
				if (target && matching) {
					data = data.filter(function (line) {
						return line.toLowerCase().indexOf(target.toLowerCase()) >= 0;
					});
				}
				connection.popup('|wide|' + topMsg + data.slice(-(numLines + 1)).join('\n'));
			});
		});
	},

	moneyladder: 'richestuser',
	richladder: 'richestuser',
	richestusers: 'richestuser',
	richestuser: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let display = '<center><u><b>Самые богатые</b></u></center><br><table border="1" cellspacing="0" cellpadding="5" width="100%"><tbody><tr><th>Rank</th><th>Username</th><th>Money</th></tr>';
		let keys = Object.keys(Db('money').object()).map(function (name) {
			return {name: name, money: Db('money').get(name)};
		});
		if (!keys.length) return this.sendReplyBox("Данных нет.");
		keys.sort(function (a, b) {
			return b.money - a.money;
		});
		keys.slice(0, 10).forEach(function (user, index) {
			display += "<tr><td>" + (index + 1) + "</td><td>" + user.name + "</td><td>" + user.money + "</td></tr>";
		});
		display += "</tbody></table>";
		this.sendReply("|raw|" + display);
	},

	dicegame: 'startdice',
	dicestart: 'startdice',
	startdice: function (target, room, user) {
		if (!this.can('broadcast', null, room)) return false;
		if (!target) return this.parse('/help startdice');
		if (!this.canTalk()) return this.errorReply("Нельзя начинать игру под mute.");
		if (room.id !== 'gamecorner') return this.errorReply("Игру можно проводить только в Game Corner.");

		let amount = isMoney(target);

		if (typeof amount === 'string') return this.errorReply(amount);
		if (!room.dice) room.dice = {};
		if (room.dice.started) return this.errorReply("В этой комнате уже идёт игра.");

		room.dice.started = true;
		room.dice.bet = amount;
		// Prevent ending a dice game too early.
		room.dice.startTime = Date.now();

		room.addRaw("<div class='infobox'><h2><center><font color=#24678d>" + user.name + " Начал игру на </font><font color=red>" + amount + "</font><font color=#24678d>" + currencyName(amount) + ".</font><br><button name='send' value='/joindice'>Нажмите для присоединения.</button></center></h2></div>");
	},
	startdicehelp: ["/startdice [bet] - Начать игру в кости на деньги."],

	joindice: function (target, room, user) {
		if (!room.dice || (room.dice.p1 && room.dice.p2)) return this.errorReply("Регистрации на игру в кости в комнате нет.");
		if (!this.canTalk()) return this.errorReply("Нельзя играть под эффектом mute.");
		if (room.dice.p1 === user.userid) return this.errorReply("Вы уже присоединились.");
		if (Db('money').get(user.userid, 0) < room.dice.bet) return this.errorReply("У вас недостаточно средств.");
		Db('money').set(user.userid, Db('money').get(user.userid) - room.dice.bet);
		if (!room.dice.p1) {
			room.dice.p1 = user.userid;
			room.addRaw("<b>" + user.name + " Присоединился к игре.</b>");
			return;
		}
		room.dice.p2 = user.userid;
		room.addRaw("<b>" + user.name + " has joined the dice game.</b>");
		let p1Number = Math.floor(6 * Math.random()) + 1;
		let p2Number = Math.floor(6 * Math.random()) + 1;
		let output = "<div class='infobox'>В игре 2 игрока, начинаем..<br>Кидаем кости.<br>" + room.dice.p1 + " выкинул " + p1Number + ".<br>" + room.dice.p2 + " выкинул " + p2Number + ".<br>";
		while (p1Number === p2Number) {
			output += "Ничья... ещё бросок.<br>";
			p1Number = Math.floor(6 * Math.random()) + 1;
			p2Number = Math.floor(6 * Math.random()) + 1;
			output += room.dice.p1 + " выкинул " + p1Number + ".<br>" + room.dice.p2 + " выкинул " + p2Number + ".<br>";
		}
		let winner = room.dice[p1Number > p2Number ? 'p1' : 'p2'];
		output += "<font color=#24678d><b>" + winner + "</b></font> выиграл <font color=#24678d><b>" + room.dice.bet + "</b></font>" + currencyName(room.dice.bet) + ".<br>До следующего раза, " + room.dice[p1Number < p2Number ? 'p1' : 'p2'] + "!</div>";
		room.addRaw(output);
		Db('money').set(winner, Db('money').get(winner, 0) + room.dice.bet * 2);
		delete room.dice;
	},

	enddice: function (target, room, user) {
		if (!user.can('broadcast', null, room)) return false;
		if (!room.dice) return this.errorReply("В этой комнате не идёт игра в кости.");
		if ((Date.now() - room.dice.startTime) < 15000 && !user.can('broadcast', null, room)) return this.errorReply("Обычные пользователи не могут завершить игру, пока не пройдёт минута.");
		if (room.dice.p2) return this.errorReply("Игра уже началась.");
		if (room.dice.p1) Db('money').set(room.dice.p1, Db('money').get(room.dice.p1, 0) + room.dice.bet);
		room.addRaw("<b>" + user.name + " завершил игру в кости.</b>");
		delete room.dice;
	},

	bucks: 'economystats',
	economystats: function (target, room, user) {
		if (!this.runBroadcast()) return;
		const users = Object.keys(Db('money').object());
		const total = users.reduce(function (acc, cur) {
			return acc + Db('money').get(cur);
		}, 0);
		let average = Math.floor(total / users.length) || '0';
		let output = "There " + (total > 1 ? "are " : "is ") + total + currencyName(total) + " циркулирует в системе. ";
		output += "У каждого пользователя в среднем " + average + currencyName(average) + ".";
		this.sendReplyBox(output);
	},

};
