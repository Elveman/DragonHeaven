'use strict';

exports.BattleScripts = {
	randomTeam: function (side) {
		let team = [];
		let mmevs = {
		hp: 85,
		atk: 85,
		def: 85,
		spa: 85,
		spd: 85,
		spe: 85,
		};
		let mmivs = {
		hp: 31,
		atk: 31,
		def: 31,
		spa: 31,
		spd: 31,
		spe: 31,
		};
		let mmshiny = !this.random(512);
		for (let t = 0; t < 6; t++) {
			team.push({
					name: "Smeargle",
					species: 'Smeargle',
					item: 'leppaberry',
					ability: 'moody',
					moves: ['metronome'],
					evs: mmevs,
					ivs: mmivs,
					nature: 'docile',
					level: 100,
					happiness: 255,
					shiny: mmshiny,
				});
		}
		return team;
	}, 
}; 
