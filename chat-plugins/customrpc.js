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
			"Эмотиконы: /emoticons, /blockemoticons, /unblockemoticons<br>" +
			"И многие другие"
		);
	},
}; 
