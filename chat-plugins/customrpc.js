 'use strict';

const path = require('path');

exports.commands = {
		customhelp: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox(
			"На сервере есть кастомные команды.<br>" +
			"Экономика: /wallet, /shop. /richestuser, /economystats, /buy, /transfermoney<br>" +
			"Азарт: /startdice, /joindice, /enddice<br>" +
			"Профиль: /profile<br>" +
			"Выйти с сервера с фанфарами: /poof [сообщение]<br>" +
			"Статус: /away, /back, /away [сообщение]<br>" +
			"Поиск аниме и манги: /anime, /manga<br>" +
			"Карточки TCG: /cardshelp, <br>" +
			"Магазины в комнатах: /roomshophelp<br>" +
			"UNO: /unohelp<br>" +
			"И многие другие"
		);
	},
}; 
