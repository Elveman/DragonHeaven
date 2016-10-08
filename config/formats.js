
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////
	{
		name: "OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3546114/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ou/\">OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3571990/\">OU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Shadow Tag', 'Soul Dew'],
	},
	{
		name: "Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3522911/\">Ubers Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535106/\">Ubers Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: [],
	},
	{
		name: "UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3582473/\">np: UU Stage 7.3</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/uu/\">UU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555277/\">UU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought'],
	},
	{
		name: "RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3583022/\">np: RU Stage 19</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ru/\">RU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558546/\">RU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['UU'],
		banlist: ['UU', 'BL2'],
	},
	{
		name: "NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3576747/\">np: NU Stage 15</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/nu/\">NU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555650/\">NU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['RU', 'Baton Pass Speed Clause'],
		banlist: ['RU', 'BL3'],
	},
	{
		name: "PU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3575837/\">np: PU Stage 8</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528743/\">PU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['RU'],
		banlist: ['RU', 'BL3', 'NU', 'BL4', 'Chatter'],
	},
	{
		name: "LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505710/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3490462/\">LC Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547566/\">LC Viability Ranking</a>",
		],
		section: "ORAS Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger'],
	},
	{
		name: "CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3537407/\">CAP Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/formats/cap/\">CAP Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545628/\">CAP Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['OU'],
		banlist: ['Allow CAP'],
	},
	{
		name: "Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3527960/\">Battle Spot Singles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554616/\">Battle Spot Singles Viability Ranking</a>",
		],
		section: "ORAS Singles",

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Custom Game",
		section: "ORAS Singles",


		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Doubles Battle",
		section: "ORAS Doubles",

		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3580680/\">np: Doubles OU Stage 5</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3498688/\">Doubles OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535930/\">Doubles OU Viability Ranking</a>",
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia',
			'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Salamencite', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder', 'Gravity ++ Spore',
		],
	},
	{
		name: "Doubles Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542746/\">Doubles Ubers</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void'],
	},
	{
		name: "Doubles UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542755/\">Doubles UU</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Doubles OU'],
		banlist: ['Aegislash', 'Amoonguss', 'Azumarill', 'Bisharp', 'Breloom', 'Charizard-Mega-Y', 'Charizardite Y', 'Conkeldurr',
			'Cresselia', 'Diancie-Mega', 'Diancite', 'Dragonite', 'Ferrothorn', 'Garchomp', 'Gardevoir-Mega', 'Gardevoirite',
			'Gengar', 'Greninja', 'Gyarados', 'Heatran', 'Hoopa-Unbound', 'Hydreigon', 'Jirachi', 'Kangaskhan-Mega', 'Kangaskhanite',
			'Keldeo', 'Kyurem-Black', 'Landorus', 'Landorus-Therian', 'Latios', 'Ludicolo', 'Mawile-Mega', 'Mawilite',
			'Milotic', 'Politoed', 'Rotom-Wash', 'Scizor', 'Scrafty', 'Shaymin-Sky', 'Suicune', 'Sylveon', 'Talonflame',
			'Terrakion', 'Thundurus', 'Togekiss', 'Tyranitar', 'Venusaur', 'Volcanion', 'Weavile', 'Whimsicott', 'Zapdos',
		],
	},
	{
		name: "VGC 2016",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558332/\">VGC 2016 Rules</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3580592/\">VGC 2016 Viability Ranking</a>",
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased', 'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Phione', 'Manaphy',
			'Darkrai', 'Shaymin', 'Shaymin-Sky', 'Arceus', 'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Hoopa-Unbound', 'Volcanion', 'Soul Dew',
		],
		requirePentagon: true,
		onValidateTeam: function (team) {
			const legends = {'Mewtwo':1, 'Lugia':1, 'Ho-Oh':1, 'Kyogre':1, 'Groudon':1, 'Rayquaza':1, 'Dialga':1, 'Palkia':1, 'Giratina':1, 'Reshiram':1, 'Zekrom':1, 'Kyurem':1, 'Xerneas':1, 'Yveltal':1, 'Zygarde':1};
			let n = 0;
			for (let i = 0; i < team.length; i++) {
				let template = this.getTemplate(team[i].species).baseSpecies;
				if (template in legends) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "Battle Spot Doubles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3560820/\">Battle Spot Doubles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3560824/\">Battle Spot Doubles Viability Ranking</a>",
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Doubles Custom Game",
		section: "ORAS Doubles",

		gameType: 'doubles',

		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// XY Triples
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Triples Battle",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Smogon Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3511522/\">Smogon Triples</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3540390/\">Triples Viability Ranking</a>",
		],
		section: "ORAS Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Perish Song',
		],
	},
	{
		name: "Battle Spot Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533914/\">Battle Spot Triples Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549201/\">Battle Spot Triples Viability Ranking</a>",
		],
		section: "ORAS Triples",

		gameType: 'triples',
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Triples Custom Game",
		section: "ORAS Triples",

		gameType: 'triples',

		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////


	// Randomized Metas
	///////////////////////////////////////////////////////////////////
	{
		name: "Gifts of the Gods",
		desc: [
			"Each Pok&eacute;mon receives one base stat, depending on its position, from the Uber.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3579610/\">Gifts of the Gods</a>",
		],
		section: "OM of the Month",
		column: 2,

		ruleset: ['Ubers', 'Baton Pass Clause'],
		banlist: ['Uber > 1', 'AG ++ Uber', 'Blissey', 'Chansey', 'Eviolite', 'Mawilite', 'Medichamite', 'Soul Dew', 'Huge Power', 'Pure Power'],
		onBegin: function () {
			let stats = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
			for (let j = 0; j < this.sides.length; j++) {
				// onBegin happens before Mega Rayquaza clause
				let uber = this.sides[j].pokemon.find(pokemon => ['AG', 'Uber'].includes(this.getTemplate(pokemon.canMegaEvo || pokemon.baseTemplate).tier)) || this.sides[j].pokemon[0];
				for (let i = 0, len = this.sides[j].pokemon.length; i < len; i++) {
					let pokemon = this.sides[j].pokemon[i];
					["baseTemplate", "canMegaEvo"].forEach(key => {
						if (pokemon[key]) {
							let template = Object.assign({}, this.getTemplate(pokemon[key]));
							template.baseStats = Object.assign({}, template.baseStats);
							template.baseStats[stats[i]] = uber.baseTemplate.baseStats[stats[i]];
							pokemon[key] = template;
						}
					});
					pokemon.formeChange(pokemon.baseTemplate);
					if (i === 0 && !pokemon.template.maxHP) {
						pokemon.hp = pokemon.maxhp = Math.floor(Math.floor(2 * pokemon.template.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100) * pokemon.level / 100 + 10);
					}
				}
			}
		},
	},
	{
		name: "Return'd",
		desc: [
			"The base power of the move in the first slot is determined the same way as Return.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3566102/\">Return'd</a>",
		],
		section: "OM of the Month",

		ruleset: ['OU'],
		banlist: ['Pinsirite'],
		onModifyMovePriority: 2,
		onModifyMove: function (move, pokemon) {
			if (move.basePower > 0 && !move.multihit && pokemon.moves.indexOf(move.id) === 0) {
				move.basePower = Math.floor((pokemon.happiness * 10) / 25) || 1;
			}
		},
	},
	{
		name: "Anything Goes",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3523229/\">Anything Goes</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548945/\">AG Resources</a>",
		],
		section: "Other Metagames",
		column: 2,

		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "Balanced Hackmons",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3489849/\">Balanced Hackmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3566051/\">BH Suspects and Bans</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3571384/\">BH Resources</a>",
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Ability Clause', '-ate Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Groudon-Primal', 'Kyogre-Primal', 'Arena Trap', 'Huge Power', 'Moody', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Assist', 'Chatter'],
	},
	{
		name: "1v1",
		desc: [
			"Bring three Pok&eacute;mon to Team Preview and choose one to battle.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3496773/\">1v1</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536109/\">1v1 Resources</a>",
		],
		section: 'Other Metagames',

		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Pokemon', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Focus Sash', 'Kangaskhanite', 'Salamencite', 'Soul Dew', 'Perish Song', 'Chansey + Charm + Seismic Toss',
		],
	},
	{
		name: "Monotype",
		desc: [
			"All Pok&eacute;mon on a team must share a type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3544507/\">Monotype</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3575778/\">Monotype Viability Ranking</a>",
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: ['Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon',
			'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Altarianite', 'Charizardite X', 'Damp Rock', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Metagrossite', 'Sablenite', 'Salamencite', 'Slowbronite', 'Smooth Rock', 'Soul Dew',
		],
	},
	{
		name: "Almost Any Ability",
		desc: [
			"Pok&eacute;mon can use any ability, barring the few that are banned.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528058/\">Almost Any Ability</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3578707/\">AAA Resources</a>",
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Ability Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Ignore Illegal Abilities',
			'Arceus', 'Archeops', 'Bisharp', 'Chatot', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Hoopa-Unbound', 'Keldeo', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mamoswine', 'Mewtwo', 'Palkia', 'Rayquaza', 'Regigigas',
			'Reshiram', 'Shaymin-Sky', 'Shedinja', 'Slaking', 'Smeargle', 'Snorlax', 'Suicune', 'Terrakion', 'Weavile', 'Xerneas', 'Yveltal', 'Zekrom',
			'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew', 'Shadow Tag', 'Dynamic Punch', 'Zap Cannon',
		],
		onValidateSet: function (set) {
			let bannedAbilities = {'Aerilate': 1, 'Arena Trap': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Illusion': 1, 'Imposter': 1, 'Parental Bond': 1, 'Protean': 1, 'Pure Power': 1, 'Simple':1, 'Speed Boost': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		},
	},
	{
		name: "STABmons",
		desc: [
			"Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547279/\">STABmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558034/\">STABmons Viability Ranking</a>",
		],
		section: "Other Metagames",

		ruleset: ['OU'],
		banlist: ['Ignore STAB Moves', 'Diggersby', 'Kyurem-Black', 'Porygon-Z', 'Thundurus', 'Aerodactylite', 'Altarianite', "King's Rock", 'Metagrossite', 'Razor Fang'],
	},
	{
		name: "Tier Shift",
		desc: [
			"Pok&eacute;mon below OU/BL get all their stats boosted. UU/BL2 get +5, RU/BL3 get +10, NU/BL4 get +15, and PU or lower get +20.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554765/\">Tier Shift</a>",
		],
		section: "Other Metagames",

		mod: 'tiershift',
		ruleset: ['OU'],
		banlist: ['Damp Rock'],
	},
	{
		name: "Inverse Battle",
		desc: [
			"Battle with an inverted type chart.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3518146/\">Inverse Battle</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526371/\">Inverse Battle Viability Ranking</a>",
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Diggersby', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Serperior',
			'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Gengarite', 'Kangaskhanite', 'Salamencite', 'Soul Dew', 'Shadow Tag',
		],
		onNegateImmunity: false,
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	{
		name: "LC UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3562639/\">LC UU</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3562640/\">LC UU Viability Ranking</a>",
		],
		section: "Other Metagames",

		maxLevel: 5,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Anorith', 'Archen', 'Bunnelby', 'Carvanha', 'Chinchou', 'Cottonee', 'Croagunk', 'Diglett',
			'Drifloon', 'Drilbur', 'Dwebble', 'Elekid', 'Ferroseed', 'Fletchling', 'Foongus', 'Gastly', 'Gothita', 'Honedge',
			'Larvesta', 'Magnemite', 'Mienfoo', 'Munchlax', 'Omanyte', 'Onix', 'Pawniard', 'Ponyta', 'Porygon', 'Scraggy',
			'Shellder', 'Snivy', 'Snubbull', 'Spritzee', 'Staryu', 'Stunky', 'Surskit', 'Timburr', 'Tirtouga', 'Vullaby',
			'Corphish', 'Houndour', 'Pancham', 'Skrelp', 'Vulpix', 'Zigzagoon', 'Shell Smash', 'Sticky Web',
		],
	},
	{
		name: "2v2 Doubles",
		desc: [
			"Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547040/\">2v2 Doubles</a>",
		],
		section: "Other Metagames",

		gameType: 'doubles',

		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Doubles OU'],
		banlist: ['Kangaskhanite', 'Perish Song'],
	},
	{
			name:"Partners in Crime",
		        section: "Other Metagames",
		        desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/partners-in-crime.3559988/\">Partners in Crime</a>"],
		        ruleset: ["Doubles OU"],
		        mod: "pic",
		        gameType:"doubles",
		        banlist: ["Huge Power","Kangaskhanite", "Mawilite","Medichamite","Pure Power","Wonder Guard"],
				onBegin: function()
				{
					for(let i=1;i<=2;i++)
					{
						for(let j=0;j<this["p"+i].pokemon.length;j++)
						{
							this["p"+i].pokemon[j].om = this["p"+i].pokemon[j].moveset;
							this["p"+i].pokemon[j].obm = this["p"+i].pokemon[j].baseMoveset;
						}
					}
				},
		        onSwitchIn: function(pokemon)
		        {
		        	let side = pokemon.side.id, partner = (pokemon.position==0)?1:0;
		        	if(pokemon.isActive && this[side].pokemon[partner].isActive)
		        	{
		        		let partl = this[side].pokemon[partner].obm.length, pokl = pokemon.obm.length;
		        		this[side].pokemon[partner].moveset = this[side].pokemon[partner].om.concat(pokemon.om);
		        		this[side].pokemon[partner].baseMoveset = this[side].pokemon[partner].obm.concat(pokemon.obm);
		        		pokemon.moveset = pokemon.om.concat(this[side].pokemon[partner].om);
		        		pokemon.baseMoveset = pokemon.obm.concat(this[side].pokemon[partner].obm);
		        		if(Object.keys(this[side].pokemon[partner].volatiles).indexOf(toId(pokemon.ability))<0 && this[side].pokemon[partner].ability != pokemon.ability)
		        		{
		        			if(this[side].pokemon[partner].innate) this[side].pokemon[partner].removeVolatile(this[side].pokemon[partner].innate);
		        			this[side].pokemon[partner].innate = toId(pokemon.ability);
		        			this[side].pokemon[partner].addVolatile(this[side].pokemon[partner].innate);
		        		}
		        		if(Object.keys(pokemon.volatiles).indexOf(toId(this[side].pokemon[partner].ability))<0 && this[side].pokemon[partner].ability != pokemon.ability)
		        		{
		        			if(pokemon.innate) pokemon.removeVolatile(pokemon.innate);
		        			pokemon.innate = toId(this[side].pokemon[partner].ability);
		        			pokemon.addVolatile(pokemon.innate);
		        		}
		        	}
		        },
		        onAfterMega: function(pokemon)
		        {
		        	let side = pokemon.side.id, partner = (pokemon.position==0)?1:0;
		        	if(Object.keys(this[side].pokemon[partner].volatiles).indexOf(toId(pokemon.ability))<0 && this[side].pokemon[partner].ability != pokemon.ability)
		        	{
		        			if(this[side].pokemon[partner].innate) this[side].pokemon[partner].removeVolatile(this[side].pokemon[partner].innate);
		        			this[side].pokemon[partner].innate = toId(pokemon.ability);
		        			this[side].pokemon[partner].addVolatile(this[side].pokemon[partner].innate);
		        	}
		        },
		        onFaint: function(pokemon)
		        {
		        	let side = pokemon.side.id, partner = (pokemon.position==0)?1:0;
		        	if(this[side].pokemon[partner].isActive)
		        	{
		        		this[side].pokemon[partner].removeVolatile(this[side].pokemon[partner].innate)
		        		delete this[side].pokemon[partner].innate;
		        	}
		        	this[side].pokemon[partner].moveset = this[side].pokemon[partner].om;
		        	this[side].pokemon[partner].baseMoveset = this[side].pokemon[partner].obm;
		        },
		},
	{
		name: "Averagemons",
		desc: [
			"Every Pok&eacute;mon has a stat spread of 100/100/100/100/100/100.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526481/\">Averagemons</a>",
		],
		section: "Other Metagames",


		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Smeargle', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Sableye + Prankster',
			'DeepSeaScale', 'DeepSeaTooth', 'Eviolite', 'Light Ball', 'Soul Dew', 'Thick Club', 'Arena Trap', 'Huge Power', 'Pure Power', 'Shadow Tag', 'Chatter',
		],
	},
	{
		name: "Hidden Type",
		desc: [
			"Pok&eacute;mon have an added type determined by their IVs. Same as the Hidden Power type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3516349/\">Hidden Type</a>",
		],
		section: "Other Metagames",


		mod: 'hiddentype',
		ruleset: ['OU'],
	},
	{
		name: "Mix and Mega",
		desc: [
			"Mega Stones and Primal Orbs can be used on almost any fully evolved Pok&eacute;mon with no Mega Evolution limit.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3540979/\">Mix and Mega</a>",
		],
		section: "Other Metagames",

		searchShow: false,
		mod: 'mixandmega',
		ruleset: ['Ubers', 'Baton Pass Clause'],
		banlist: ['Dynamic Punch', 'Electrify', 'Zap Cannon'],
		onValidateTeam: function (team) {
			let itemTable = {};
			for (let i = 0; i < team.length; i++) {
				let item = this.getItem(team[i].item);
				if (!item) continue;
				if (itemTable[item] && item.megaStone) return ["You are limited to one of each Mega Stone.", "(You have more than one " + this.getItem(item).name + ")"];
				if (itemTable[item] && (item.id === 'blueorb' || item.id === 'redorb')) return ["You are limited to one of each Primal Orb.", "(You have more than one " + this.getItem(item).name + ")"];
				itemTable[item] = true;
			}
		},
		onValidateSet: function (set) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			if (!item.megaEvolves && item.id !== 'blueorb' && item.id !== 'redorb') return;
			if (template.baseSpecies === item.megaEvolves || (template.baseSpecies === 'Groudon' && item.id === 'redorb') || (template.baseSpecies === 'Kyogre' && item.id === 'blueorb')) return;
			if (template.evos.length) return ["" + template.species + " is not allowed to hold " + item.name + " because it's not fully evolved."];
			let uberStones = ['beedrillite', 'gengarite', 'kangaskhanite', 'mawilite', 'medichamite'];
			if (template.tier === 'Uber' || uberStones.indexOf(item.id) >= 0) return ["" + template.species + " is not allowed to hold " + item.name + "."];
		},
		onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchIn: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
				let oTemplate = this.getTemplate(pokemon.originalSpecies);
				if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "OU Theorymon",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3559611/\">OU Theorymon</a>"],
		section: "Other Metagames",

		mod: 'theorymon',

		ruleset: ['OU'],
	},
	{
		name: "Enchanted Items",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3570431/\">Enchanted Items</a>"],
		section: "Old OMotMs",
		column: 3,

		mod: 'enchanteditems',
		ruleset: ['OU'],
		banlist: ['Kyurem-Black', 'Manaphy', 'Porygon-Z', 'Shedinja', 'Togekiss', 'Chatter',
			'Bug Gem', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fire Gem',
			'Ice Gem', 'Poison Gem', 'Poke Ball', 'Psychic Gem', 'Steel Gem', 'Wave Incense',
		],
		onValidateSet: function (set) {
			let ability = this.getAbility(set.ability);
			let item = this.getItem(set.item);
			if (ability.item && ability.item === item.id) {
				return ["You are not allowed to have " + ability.name + " and " + item.name + " on the same Pokémon."];
			}
		},
		onValidateTeam: function (team) {
			let abilityTable = {};
			for (let i = 0; i < team.length; i++) {
				let ability = this.getAbility(team[i].ability);
				if (!abilityTable[ability.id]) abilityTable[ability.id] = 0;
				if (++abilityTable[ability.id] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + ability.name + " or " + this.getItem(ability.item).name + ")"];
				}
				let item = toId(team[i].item);
				if (!item) continue;
				item = this.getItem(item);
				ability = item.ability;
				if (!ability) continue;
				if (!abilityTable[ability]) abilityTable[ability] = 0;
				if (++abilityTable[ability] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + this.getAbility(ability).name + " or " + item.name + ")"];
				}
			}
		},
		onFaint: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
		onSwitchOut: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
	},
	{
		name: "Follow The Leader",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3565685/\">Follow The Leader</a>"],
		section: "Old OMotMs",
		column: 2,

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Regigigas', 'Shedinja', 'Slaking', 'Smeargle', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew',
			'Arena Trap', 'Gale Wings', 'Huge Power', 'Imposter', 'Pure Power', 'Shadow Tag', 'Chatter',
		],
		validateSet: function (set, teamHas) {
			let species = toId(set.species);
			let template = this.tools.getTemplate(species);
			if (!template.exists || template.isNonstandard) return ["" + set.species + " is not a real Pok\u00E9mon."];
			if (template.battleOnly) template = this.tools.getTemplate(template.baseSpecies);
			if (this.tools.getBanlistTable(this.format)[template.id] || template.tier in {'Uber': 1, 'Unreleased': 1} && template.species !== 'Aegislash') {
				return ["" + template.species + " is banned by Follow The Leader."];
			}

			if (!teamHas.donorTemplate) teamHas.donorTemplate = template;
			let name = set.name;
			if (name === set.species) delete set.name;
			set.species = teamHas.donorTemplate.species;
			let problems = this.validateSet(set, teamHas, teamHas.donorTemplate);

			set.species = template.species;
			set.name = (name === set.species ? "" : name);

			return problems;
		},
	},
	{
		name: "Battle Factory",
		section: "Randomized Metas",
		column: 2,

		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
	name:"Imprisoned",
	section:"New Other Metagames",
	ruleset:['OU'],
	desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/imprisoned.3580920/\">Imprisoned</a>"],
	onBegin: function()
	{
		this.p1.impris = [];
		this.p2.impris = [];
		this.isImpris=function(side,move)
		{
			let b=false;
			for(let i=0;i<this[side].impris.length;i++)
				if(this[side].impris[i]==move)
					b=true;
			return b;
		}
	},
	onDisableMove: function(pokemon)
	{
		let side=pokemon.side.id;
			for(let j=0;j<pokemon.moves.length;j++)
			{
				let curmove=pokemon.moves[j];
				if(this.isImpris(side,curmove))
					pokemon.disableMove(curmove);
			}
	},
	onTryMove: function(source, target, move)
	{
		let side=target.side.id,opside=source.side.id;
		if(!this.isImpris(side,move.id))
			this[side].impris.push(move.id);
		for(let i=0;i<this[opside].pokemon.length;i++)
		{
			for(let j=0;j<this[opside].pokemon[i].moves.length;j++)
			{
				let curmove=this[opside].pokemon[i].moves[j];
				if(this.isImpris(opside,curmove))
					this[opside].pokemon[i].disableMove(curmove);
			}
		}
	},
},
    {
		name: "The All-Stars Metagame",
		section: "New Other Metagames",
		ruleset: ['OU'],
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/the-all-stars-metagame-v2-enter-the-pu-a-pokemon-from-each-tier.3510864//\">The All-Stars Metagame</a>"],
		banlist: [],

		onValidateTeam: function(team){
			let ouMons = 0, uuMons = 0, ruMons = 0, nuMons = 0, puMons = 0, problems = [], check = true, template;
			for(let i = 0; i < team.length; i++){
           		let item = this.getItem(team[i].item);
           		if(item.megaStone) template = this.getTemplate(team[i].item.megaStone);
           		else template = this.getTemplate(team[i].species);
           		let ability = this.getAbility(template.ability);
           		let tier = template.tier;
	            for(var j in team[i].moves){
            		var move = this.getMove(team[i].moves[j]);
            		if(move.id == "chatter") tier = "NU";}
            		//Bans Drought + Drizzle users to OU
            	if(ability.id == "drizzle" || ability.id == "drought") tier = "OU";
            		//Bans Chatter to NU
            	if(tier == "OU" || tier == "BL") ouMons++;
				if(tier == "UU" || tier == "BL2") uuMons++;
				if(tier == "RU" || tier == "BL3") ruMons++;
				if(tier == "NU" || tier == "BL4") nuMons++;
				if(tier == "PU") puMons++;}
			while(check){
				if(1 < ouMons) problems.push("You are able to only bring a maximum of 1 OU / BL Pokemon.");
				if(2 < uuMons) problems.push("You are able to only bring a maximum of 2 UU / BL2 Pokemon.");
				if(1 < ruMons) problems.push("You are able to only bring a maximum of 1 RU / BL3 Pokemon.");
				if(1 < nuMons) problems.push("You are able to only bring a maximum of 1 NU / BL4 Pokemon.");
				if(1 < puMons) problems.push("You are able to only bring a maximum of 1 PU Pokemon.");
				else check = false;}
		return problems;
	},
},
    {
	     name: "Lockdown",
	     desc: [
	     		"&bullet; <a href=\"http://www.smogon.com/forums/threads/lockdown-now-playable.3565472/\">Lockdown</a>",
	     ],
	     section: "New Other Metagames",
	     mod: 'lockdown',

	     ruleset: ['OU'],
	     banlist: ['Damp Rock', 'Heat Rock', 'Smooth Rock', 'Icy Rock'],

	     onTryHitSide: function (target, source, move) {
	       console.log("trying hitting side");
	       let lockdownMoves = ['stealthrock', 'spikes', 'toxicspikes', 'stickyweb'];
	       if (lockdownMoves.indexOf(move.id) > -1 && this.turn > 6) return false;
	     },
	     onTryHitField: function (target, source, move) {
	       console.log("trying hitting field");
	       let lockdownMoves = ['sunnyday', 'raindance', 'hail', 'sandstorm', 'magicroom', 'wonderroom', 'trickroom', 'gravity', 'electricterrain', 'mistyterrain', 'grassyterrain', 'mudsport', 'watersport'];
	       if (lockdownMoves.indexOf(move.id) > -1 && this.turn > 6) return false;
	   }
   	},
	{
	name:"Mirror Move",
	section: "New Other Metagames",
	ruleset:['OU'],
	desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/mirror-move.3572990/\">Mirror Move</a>"],
	onBegin: function() {
		let i=0;
		while(this.p1.pokemon[i] != undefined)
		{
			for(let j=2;j<4;j++)
			{
				if(this.p1.pokemon[i].baseMoveset[j]==undefined)
				{
					this.p1.pokemon[i].moveset[j] = {
					move: "Mirror Move",
					id: "mirrormove",
					pp: 32,
					maxpp: 32,
					target: "normal",
					disabled: false,
						  disabledSource: '',
						  used: false
				}
				this.p1.pokemon[i].baseMoveset[j] = {
					move: "Mirror Move",
					id: "mirrormove",
					pp: 32,
					maxpp: 32,
					target: "normal",
					disabled: false,
						  disabledSource: '',
						  used: false
				}
				}
			}
			i=i+1;
		}
		i=0;
		while(this.p2.pokemon[i] != undefined)
		{
			for(let j=2;j<4;j++)
			{
				if(this.p2.pokemon[i].baseMoveset[j]==undefined)
					this.p2.pokemon[i].moveset[j] = {
					move: "Mirror Move",
					id: "mirrormove",
					pp: 32,
					maxpp: 32,
					target: "normal",
					disabled: false,
				    disabledSource: '',
				    used: false
				}
				this.p2.pokemon[i].baseMoveset[j] = {
					move: "Mirror Move",
					id: "mirrormove",
					pp: 32,
					maxpp: 32,
					target: "normal",
					disabled: false,
				    disabledSource: '',
					used: false
				}
				}
			}
			i=i+1;
		},
	onSwitchIn: function () {
			for(let kek=2,ke=0;kek<4;kek++,ke++)
			{
				this.p1.pokemon[0].moveset[kek].move=this.p2.pokemon[0].moveset[ke].move;
				this.p2.pokemon[0].moveset[kek].move=this.p1.pokemon[0].moveset[ke].move;
				this.p1.pokemon[0].baseMoveset[kek].move=this.p2.pokemon[0].baseMoveset[ke].move;
				this.p2.pokemon[0].baseMoveset[kek].move=this.p1.pokemon[0].baseMoveset[ke].move;
				this.p1.pokemon[0].moveset[kek].id=this.p2.pokemon[0].moveset[ke].id;
				this.p2.pokemon[0].moveset[kek].id=this.p1.pokemon[0].moveset[ke].id;
				this.p1.pokemon[0].baseMoveset[kek].id=this.p2.pokemon[0].baseMoveset[ke].id;
				this.p2.pokemon[0].baseMoveset[kek].id=this.p1.pokemon[0].baseMoveset[ke].id;
				this.p1.pokemon[0].moveset[kek].maxpp=this.p2.pokemon[0].moveset[ke].maxpp;
				this.p2.pokemon[0].moveset[kek].maxpp=this.p1.pokemon[0].moveset[ke].maxpp;
				this.p1.pokemon[0].baseMoveset[kek].maxpp=this.p2.pokemon[0].baseMoveset[ke].maxpp;
				this.p2.pokemon[0].baseMoveset[kek].maxpp=this.p1.pokemon[0].baseMoveset[ke].maxpp;
			}
		},
	},
   	{
        name: "Offensification",
        desc: [
        	"All attacks are caclulated from the user's highest attacking stat.",
		"&bullet; <a href=\"http://www.smogon.com/forums/threads/offensification-hoopa-u-banned.3524512/\">Offensification</a>",
        ],
        section: "New Other Metagames",

        ruleset: ['Pokemon', 'Standard', 'Team Preview'],
        banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Flatter', 'Kyurem-Black'],
        onModifyMove: function (move, pokemon) {
            if (pokemon.stats.atk > pokemon.stats.spa) {
                move.category = (move.category === "Status") ? "Status" : "Physical";
            } else if (pokemon.stats.spa > pokemon.stats.atk) {
                move.category = (move.category === "Status") ? "Status" : "Special";
            }

            if (move.id === 'bellydrum') {
                move.onHit = function (target) {
                    if (target.hp <= target.maxhp / 2 || target.boosts.atk >= 6 || target.maxhp === 1) { // Shedinja clause
                        return false;
                    }
                    this.directDamage(target.maxhp / 2);
                    if (target.stats.atk >= target.stats.spa) {
                        target.setBoost({atk: 6});
                        this.add('-setboost', target, 'atk', '6', '[from] move: Belly Drum');
                    } else {
                        target.setBoost({spa: 6});
                        this.add('-setboost', target, 'spa', '6', '[from] move: Belly Drum');
                    }
                }
            }
        },
        onBoost: function (boost, target, source, effect) {
            var boostee = target;
            if (source && target === source) boostee = source;
            var phys = false;
            if (boostee.stats.atk > boostee.stats.spa) phys = true;
            var spec = false;
            if (boostee.stats.atk < boostee.stats.spa) spec = true;
            if (phys || spec) {
                for (var i in boost) {
                    if (phys && i === 'spa') {
                        if (boost['atk']) boost['atk'] += boost[i];
                        else boost['atk'] = boost[i];
                        boost[i] = 0;
                    } else if (phys && i === 'spd') {
                        if (boost['def']) boost['def'] += boost[i];
                        else boost['def'] = boost[i];
                        boost[i] = 0;
                    } else if (spec && i === 'atk') {
                        if (boost['spa']) boost['spa'] += boost[i];
                        else boost['spa'] = boost[i];
                        boost[i] = 0;
                    } else if (spec && i === 'def') {
                        if (boost['spd']) boost['spd'] += boost[i];
                        else boost['spd'] = boost[i];
                        boost[i] = 0;
                    }
                }
            }
        }
    },

	{
		name: "No Haxmons",
		section: "New Other Metagames",

		ruleset: ['OU', 'Freeze Clause'],
		banlist: [],
		onModifyMovePriority: -100,
		onModifyMove: function (move) {
			if (move.accuracy !== true && move.accuracy < 100) move.accuracy = 100;
			move.willCrit = false;
			if (move.secondaries) {
				for (var i = 0; i < move.secondaries.length; i++) {
					move.secondaries[i].chance = 0;
				}
			}
		}
	},
	{
     name: "Palette Pals",
     section: "New Other Metagames",
     desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/palette-pals-formerly-tradeoff.3578405/\">Palette Pals</a>"],
     ruleset: ['OU'],
     banlist: ['Huge Power', 'Pure Power', 'Medichamite', 'Kyurem-Black', 'Slaking', 'Regigigas', 'Light Ball', 'Eviolite', 'Deep Sea Tooth', 'Deep Sea Scale', 'Thick Club'],
     onBegin: function () {
       for (let j = 0; j < this.sides.length; j++) {
         let allPokemon = this.sides[j].pokemon;
         let colorArray = [];
         for (let i = 0, len = allPokemon.length; i < len; i++) {
           let pokemon = allPokemon[i];
           let color = pokemon.template.color;
           if (colorArray.indexOf(color) > -1) {
             let copyIndex = colorArray.indexOf(color);
             let copycat = allPokemon[copyIndex];

             //Thanks to Nature Swap code for premise!!
             ["baseTemplate", "canMegaEvo"].forEach(key => {
               if (pokemon[key]) {

                 let template = Object.assign({}, this.getTemplate(pokemon[key]));
                 template.baseStats = Object.assign({}, template.baseStats);
                 let template2 = Object.assign({}, this.getTemplate(copycat.baseTemplate));
                 template2.baseStats = Object.assign({}, template2.baseStats);
                 template.baseStats = template2.baseStats;
                 pokemon[key] = template;
               }
             });
             pokemon.formeChange(pokemon.baseTemplate);

             //adjust for hp
             	if (pokemon.species !== "Shedinja") {
        		let hp = pokemon.baseTemplate.baseStats['hp'];
             		hp = Math.floor(Math.floor(2 * hp + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100) * pokemon.level / 100 + 10);
             		pokemon.maxhp = hp;
             		pokemon.hp = hp;
             	}
           }
           colorArray.push(color);
         }
       }
     }
   },
{
	name:"Recyclables",
	section:"New Other Metagames",
desc:["&bullet;<a href=\"http://www.smogon.com/forums/threads/recyclables.3581818/\">Recyclables</a>: <br />If the item on a Pokemon was not knocked off, it will be recycled at the end of every turn."],
	ruleset:['OU'],
		onResidualOrder: 999, //This will always occur as the last possible occurence of the turn's residual phase.
        onResidual: function () {
            if ((this.p1.pokemon[0].item || !this.p1.pokemon[0].lastItem)&&!(this.p2.pokemon[0].item || !this.p2.pokemon[0].lastItem))
            {
            	this.p2.pokemon[0].setItem(this.p2.pokemon[0].lastItem);
			this.add('-item', this.p2.pokemon[0], this.p2.pokemon[0].getItem(), '[from] move: Recycle');
			//return false;
            }
            else if (!(this.p1.pokemon[0].item || !this.p1.pokemon[0].lastItem)&&(this.p2.pokemon[0].item || !this.p2.pokemon[0].lastItem))
            {
            	this.p1.pokemon[0].setItem(this.p1.pokemon[0].lastItem);
			this.add('-item', this.p1.pokemon[0], this.p1.pokemon[0].getItem(), '[from] move: Recycle');
			//return false;
            }
            else if (!(this.p1.pokemon[0].item || !this.p1.pokemon[0].lastItem)&&!(this.p2.pokemon[0].item || !this.p2.pokemon[0].lastItem))
            {
            	this.p1.pokemon[0].setItem(this.p1.pokemon[0].lastItem);
			this.add('-item', this.p1.pokemon[0], this.p1.pokemon[0].getItem(), '[from] move: Recycle');
            	this.p2.pokemon[0].setItem(this.p2.pokemon[0].lastItem);
			this.add('-item', this.p2.pokemon[0], this.p2.pokemon[0].getItem(), '[from] move: Recycle');
            }
            else return false;
        }
},
	{
        name: "The Negative Metagame",
        desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/the-negative-metagame-playable-on-aqua.3529936/\">The Negative Metagame</a>"],
        section: "New Other Metagames",

        mod: 'thenegativemetagame',
        ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Swagger Clause', 'Team Preview', 'Evasion Moves Clause'],
        banlist: ['DeepSeaTooth', 'DeepSeaScale', 'Eviolite', 'Huge Power', 'Light Ball', 'Pure Power', 'Smeargle', 'Thick Club', 'Illegal', 'Unreleased']
    	},
         {
		name: "Therianmons",
	    section: "New Other Metagames",
	    desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/therianmons.3566303/\">Therianmons</a>"],
	    ruleset: ['OU'],

	    onBegin: function() {
	    	for (let j = 0; j < this.sides.length; j++) {
	            let allPokemon = this.sides[j].pokemon;
	            for (let i = 0, len = allPokemon.length; i < len; i++) {
	                let pokemon = allPokemon[i];
	                //Thanks to Nature Swap code for premise!!
	                ["baseTemplate", "canMegaEvo"].forEach(key => {
	                    if (pokemon[key]) {

	                        let template = Object.assign({}, this.getTemplate(pokemon[key]));
	                        template.baseStats = Object.assign({}, template.baseStats);
	                        if(pokemon.set.ivs.spa==30 && pokemon.set.ivs.spd==30 && pokemon.set.ivs.atk==30 && pokemon.set.ivs.def==30 && pokemon.set.ivs.hp==30)
	                        {
	                        	template.baseStats.atk-=15;
	                        	template.baseStats.def+=10;
	                        	template.baseStats.spa-=15;
	                        	template.baseStats.spd+=10;
	                        	template.baseStats.spe+=10;
	                        }
	                        else if(pokemon.set.ivs.spa==30 && pokemon.set.ivs.spd==30)
	                        {
	                        	template.baseStats.atk+=20;
	                        	template.baseStats.spa-=10;
	                        	template.baseStats.spe-=10;
	                        }
	                        else if(pokemon.set.ivs.spa==30)
	                        {
	                        	template.baseStats.spa+=20;
	                        	template.baseStats.atk-=10;
	                        	template.baseStats.spe-=10;
	                        }
	                        pokemon[key] = template;
	                    }
	                });
	                pokemon.formeChange(pokemon.baseTemplate);
	            }
	           }
	    },
	},
	{
	name:"The Great Pledge",
	section:"New Other Metagames",
	ruleset:['OU'],
	desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/the-great-pledge.3581858/\">The Great Pledge</a>"],
	onBegin: function()
	{
		this.p1.pledge= {
			terrain:"",
			duration:0
			}
		this.p2.pledge=
			{
			terrain:"",
			duration:0
			}
	},
	onResidual: function()
	{
		if(this.p2.pledge.duration>4 && this.p2.pledge.terrain!="")
		{
			this.add('-sideend', this.p2, this.p2.pledge.terrain);
			this.p2.pledge.duration=0;
			this.p2.pledge.terrain="";
		}
		else if(this.p2.pledge.terrain!="")
			this.p2.pledge.duration++;
		if(this.p1.pledge.duration>4 && this.p1.pledge.terrain!="")
		{
			this.add('-sideend', this.p1, this.p1.pledge.terrain);
			this.p1.pledge.duration=0;
			this.p1.pledge.terrain="";
		}
		else if(this.p1.pledge.terrain!="")
			this.p1.pledge.duration++;
		if(this.p1.terrain=="Fire Pledge")
		{
			if (this.p1.pokemon[0] && !this.p1.pokemon[0].hasType('Fire')) {
				this.damage(this.p1.pokemon[0].maxhp / 8, this.p1.pokemon[0]);
			}
		}
		if(this.p2.terrain=="Fire Pledge")
		{
			if (this.p2.pokemon[0] && !this.p2.pokemon[0].hasType('Fire')) {
				this.damage(this.p2.pokemon[0].maxhp / 8, this.p2.pokemon[0]);
			}
		}
	},
	onModifySpe: function (spe, pokemon)
	{
		if(this[pokemon.side.id].pledge.terrain=="Grass Pledge")
		return this.chainModify(0.25);
	},
	onModifyMove: function (move, source)
	{
		if(this[source.side.id].pledge.terrain=="Water Pledge")
		{
			if (move.secondaries && move.id !== 'secretpower') {
					this.debug('doubling secondary chance');
					for (let i = 0; i < move.secondaries.length; i++) {
						move.secondaries[i].chance *= 2;
					}
				}
		}
	},
	onSwitchIn: function(pokemon)
	{
		var tSide;
		if(pokemon.side.id=='p1')
			tSide='p2';
		if(pokemon.side.id=='p2')
			tSide='p1';
		var pledgetype = function()
		{
			if(pokemon.types[0]=='Water') return 'water';
			if(pokemon.types[0]=='Grass') return 'grass';
			if(pokemon.types[0]=='Fire') return 'fire';
			if(pokemon.types[1]=='Water') return 'water';
			if(pokemon.types[1]=='Grass') return 'grass';
			if(pokemon.types[1]=='Fire') return 'fire';
		}
		if(pledgetype()=='fire')
		{
			if(pokemon.baseHpType=="Grass")
			{
				this.add('-sidestart', this[tSide], 'Fire Pledge');
				//this[tSide].addSideCondition('firepledge');
				this[tSide].pledge.terrain="Fire Pledge";
				this[tSide].pledge.duration=0;
			}
			if(pokemon.baseHpType=="Water")
			{
				this.add('-sidestart', this[tSide], 'Water Pledge');
				//this[tSide].addSideCondition('waterpledge');
				this[tSide].pledge.terrain="Water Pledge";
				this[tSide].pledge.duration=0;
			}
		}
		if(pledgetype()=='grass')
		{
			if(pokemon.baseHpType=="Fire")
			{
				this.add('-sidestart', this[tSide], 'Fire Pledge');
				//this[tSide].addSideCondition('firepledge');
				this[tSide].pledge.terrain="Fire Pledge";
				this[tSide].pledge.duration=0;
			}
			if(pokemon.baseHpType=="Water")
			{
				this.add('-sidestart', this[tSide], 'Grass Pledge');
				//this[tSide].addSideCondition('grasspledge');
				this[tSide].pledge.terrain="Grass Pledge";
				this[tSide].pledge.duration=0;
			}
		}
		if(pledgetype()=='water')
		{
			if(pokemon.baseHpType=="Grass")
			{
				this.add('-sidestart', this[tSide], 'Grass Pledge');
				//this[tSide].addSideCondition('grasspledge');
				this[tSide].pledge.terrain="Grass Pledge";
				this[tSide].pledge.duration=0;
			}
			if(pokemon.baseHpType=="Fire")
			{
				this.add('-sidestart', this[tSide], 'Water Pledge');
				//this[tSide].addSideCondition('waterpledge');
				this[tSide].pledge.terrain="Water Pledge";
				this[tSide].pledge.duration=0;
			}
		}
	},
},
	{
		name: "Trademarked",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/trademarked.3572949/\">Trademarked</a>"],
		section: "New Other Metagames",
		column: 1,

		mod: 'trademarked',
		ruleset: ['OU','trademarkclause'],
		banlist: ['Slaking','Regigigas'],
		validateSet: function (set, teamHas) {
			if (!this.validateSet(set, teamHas).length) return [];
			let ability = this.tools.getAbility(set.ability);
			let template = this.tools.getTemplate(set.species);
			if (!set.moves.includes(ability.id) && !set.moves.includes(ability.name) && !this.checkLearnset(ability.id, template, {set: set})) {
				template = Object.assign({}, template);
				template.abilities = {0: ability.name};
			}
			return this.validateSet(set, teamHas, template);
		},
	},

	 {
        name: "Type Omelette",
        section: "New Other Metagames",


        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
        banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Landorus', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite'],
        mod: 'mileseggsworth', //This is a pun, and was the most popular in name submissions.
        //Since this metagame uses custom types, let's make the types known to the players.
        onSwitchIn: function (pokemon) {
            var typeStr = pokemon.types[0];
            if (pokemon.types[1]) typeStr += '/' + pokemon.types[1]
            this.add('-start', pokemon, 'typechange', typeStr);
        }
    	},
	{
		name: "Universal Ubers",
		section: "New Other Metagames",
		mod: 'primordialpokemon',

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: []
	},
	{
        	name: "VoltTurn Mayhem",
        	desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/voltturn-mayhem-lcotm.3527847/\">VoltTurn Mayhem</a>"],
	        section: "New Other Metagames",

        	ruleset: ['Pokemon', 'Standard', 'Team Preview'],
        	banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite'],
        	onModifyMove: function (move) {
	     if (move.target && !move.nonGhostTarget && (move.target === "normal" || move.target === "any" || move.target === "randomNormal" || move.target === "allAdjacent" || move.target === "allAdjacentFoes")) {
        	        move.selfSwitch = true;
        	    }
        	}
    	},
	{
		name: "Passive Aggressive",
		desc: [
			"Type effectiveness applies to passive damage.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3576924/\">Passive Aggressive</a>",
		],
		section: "New Other Metagames",
		ruleset: ['OU'],
		onDamage: function (damage, target, source, effect) {
			let type;
			switch (effect.id) {
			default:
				return;
			case 'blacksludge':
				type = 'Poison';
				damage = target.maxhp / 8;
				break;
			case 'curse':
			case 'nightmare':
				type = 'Ghost';
				damage = target.maxhp / 4;
				break;
			case 'leechseed':
			case 'spikyshield':
				type = 'Grass';
				damage = target.maxhp / 8;
				break;
			case 'spikes':
				type = 'Ground';
				damage = target.maxhp / 2 / (5 - target.side.sideConditions.spikes.layers);
				break;
			case 'brn':
				type = 'Fire';
				damage = target.maxhp / 8;
				break;
			case 'psn':
				type = 'Poison';
				damage = target.maxhp / 8;
				break;
			case 'tox':
				return this.clampIntRange(target.maxhp >> 4 - this.getEffectiveness('Poison', target), 1) * target.statusData.stage;
			case 'partiallytrapped':
				let effectData = target.volatiles.partiallytrapped;
				damage = target.maxhp / (effectData.source.hasItem('bindingband') ? 6 : 8);
				type = effectData.sourceEffect;
				break;
			case 'sandstorm':
				type = 'Rock';
				damage = target.maxhp / 16;
				break;
			case 'hail':
				type = 'Ice';
				damage = target.maxhp / 16;
				break;
			case 'recoil':
				type = this.activeMove;
				break;
			}
			return damage * Math.pow(2, this.getEffectiveness(type, target));
		},
	},
	{
		name: "Enchanted Items Balanced Hackmons",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3570431/\">Enchanted Items</a>"],
		section: "Experimental Metas",
		column: 3,

		mod: 'enchanteditems',
		ruleset: ['Balanced Hackmons'],
		banlist: ['Bug Gem', 'Electric Gem', 'Fire Gem',
			'Ice Gem', 'Persim Berry', 'Poison Gem', 'Poke Ball', 'Steel Gem', 'Wave Incense','Aguav Berry',
		],
		onValidateSet: function (set) {

			let bannedAbilities = {'Arena Trap': 1, 'Huge Power': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
			/*let ability = this.getAbility(set.ability);
			let item = this.getItem(set.item);
			if (ability.item && ability.item === item.id) {
				return ["You are not allowed to have " + ability.name + " and " + item.name + " on the same Pokémon."];
			}*/
		},
		onValidateTeam: function (team) {
			let abilityTable = {};
			for (let i = 0; i < team.length; i++) {
				let ability = this.getAbility(team[i].ability);
				if (!abilityTable[ability.id]) abilityTable[ability.id] = 0;
				if (++abilityTable[ability.id] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + ability.name + " or " + this.getItem(ability.item).name + ")"];
				}
				let item = toId(team[i].item);
				if (!item) continue;
				item = this.getItem(item);
				ability = item.ability;
				if (!ability) continue;
				if (!abilityTable[ability]) abilityTable[ability] = 0;
				if (++abilityTable[ability] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + this.getAbility(ability).name + " or " + item.name + ")"];
				}
			}
		},
		onFaint: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
		onSwitchOut: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
	},
	{
		name: "Enchanted Items Hackmons",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3570431/\">Enchanted Items</a>"],
		section: "Experimental Metas",
		column: 4,

		mod: 'enchanteditems',
		ruleset: ['HP Percentage Mod'],
		banlist: ['Ignore Illegal Abilities','Ignore Illegal Moves'],
		/*onValidateSet: function (set) {

		let bannedAbilities = {'Arena Trap': 1, 'Huge Power': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
			/*let ability = this.getAbility(set.ability);
			let item = this.getItem(set.item);
			if (ability.item && ability.item === item.id) {
				return ["You are not allowed to have " + ability.name + " and " + item.name + " on the same Pokémon."];
			}*/
		//},
		/*onValidateTeam: function (team) {
			let abilityTable = {};
			for (let i = 0; i < team.length; i++) {
				let ability = this.getAbility(team[i].ability);
				if (!abilityTable[ability.id]) abilityTable[ability.id] = 0;
				if (++abilityTable[ability.id] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + ability.name + " or " + this.getItem(ability.item).name + ")"];
				}
				let item = toId(team[i].item);
				if (!item) continue;
				item = this.getItem(item);
				ability = item.ability;
				if (!ability) continue;
				if (!abilityTable[ability]) abilityTable[ability] = 0;
				if (++abilityTable[ability] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + this.getAbility(ability).name + " or " + item.name + ")"];
				}
			}
		},*/
		onFaint: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
		onSwitchOut: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
	},
	{
		name: "Enchanted Items Plus",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/enchanted-items-enchanted-items-plus-announced.3570431/page-20#post-6939744\">Enchanted Items Plus</a>"],
		section: "Experimental Metas",
		column: 2,

		mod: 'enchanteditems',
		ruleset: ['Ubers'],
		banlist: ['Ignore Illegal Abilities', 'Shedinja','Imposter',
			'Bug Gem', 'Electric Gem', 'Fire Gem',
			'Ice Gem', 'Poison Gem', 'Poke Ball', 'Steel Gem', 'Dark Gem','Psychic Gem',
		],
		onValidateSet: function (set) {

			let bannedAbilities = {'Arena Trap': 1, 'Huge Power': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Wonder Guard': 1,'Contrary': 1,'Simple': 1, 'Imposter':1, 'Simple':1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
			let ability = this.getAbility(set.ability);
			let item = this.getItem(set.item);
			if (ability.item && ability.item === item.id) {
				return ["You are not allowed to have " + ability.name + " and " + item.name + " on the same Pokémon."];
			}
		},
		onValidateTeam: function (team) {
			let abilityTable = {};
			for (let i = 0; i < team.length; i++) {
				let ability = this.getAbility(team[i].ability);
				if (!abilityTable[ability.id]) abilityTable[ability.id] = 0;
				if (++abilityTable[ability.id] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + ability.name + " or " + this.getItem(ability.item).name + ")"];
				}
				let item = toId(team[i].item);
				if (!item) continue;
				item = this.getItem(item);
				ability = item.ability;
				if (!ability) continue;
				if (!abilityTable[ability]) abilityTable[ability] = 0;
				if (++abilityTable[ability] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + this.getAbility(ability).name + " or " + item.name + ")"];
				}
			}
		},
		onFaint: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
		onSwitchOut: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
	},
	{
		name: "Frantic Fusions",
		desc: [
	     		"&bullet; A non pet mod version of Fusion Evolution. <BR /> &bullet; The resultant Pokemon has the primary types of the parents, and the averaged stats.<br />&bullet;You can choose any ability from the original Pokemon, and you also get the primary ability of the second Pokemon (The one you put in the nickname). <br />&bullet; Use !fuse if needed.",
	     ],
		section: "Experimental Metas",
		mod: 'francticfusions',
		ruleset: ['Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ["Uber",'Unreleased', 'Shadow Tag', 'Soul Dew',"Assist"],
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
		        let types = pokemon.types;
		        pokemon.fusetype = types;
			if (pokemon.fusion) {
				this.add('-start', pokemon, 'typechange', types.join('/'), '[silent]');
			}
			pokemon.addVolatile(pokemon.abilitwo, pokemon);//Second Ability! YAYAYAY
			// pokemon.volatiles[pokemon.abilitwo].noCopy = true; //Prevent it from being Baton Passed | Disabled because was causing a crash.
		},
		onAfterMega: function(pokemon)
		{
		        pokemon.types = pokemon.fusetype;
		        this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onValidateSet: function(set) {
		        if (!set.name || set.name === set.species) return;
		        let template = this.getTemplate(set.species);
		        let crossTemplate = this.getTemplate(set.name);
			let problems = [];
			if (!crossTemplate.exists) return;
			let canHaveAbility = false;
			if(crossTemplate.isMega) problems.push("You cannot fuse with a Mega Pokemon. ("+set.species+" has nickname "+set.name+")");
			if(crossTemplate.tier == "Uber") problems.push("You cannot fuse with an Uber. ("+template.species+" has nickname "+crossTemplate.species+")");
			for (let a in template.abilities) {
				if (template.abilities[a] === set.ability) {
					canHaveAbility = true;
				}
			}
			if (!canHaveAbility) return ["" + set.species + " cannot have " + set.ability + "."];
			let added = {};
			let movepool = [];
			let prevo = template.isMega?this.getTemplate(template.species.substring(0,template.species.length-5)).prevo:template.prevo;

			if(!this.data.Learnsets[toId(crossTemplate.species)])
			{
			        crossTemplate.learnset = this.data.Learnsets[toId(crossTemplate.species.split("-")[0])].learnset;
			}
			else
			        crossTemplate.learnset = this.data.Learnsets[toId(crossTemplate.species)].learnset;
			if(!template.learnset)
			{
			        template.learnset = this.data.Learnsets[toId(template.species.split("-")[0])].learnset;
			}
			else
			        template.learnset = this.data.Learnsets[toId(template.species)].learnset;
			do {
				added[template.species] = true;
				movepool = movepool.concat(Object.keys(template.learnset));
				movepool = movepool.concat(Object.keys(crossTemplate.learnset))
			} while (template && template.species && !added[template.species]);
			while(prevo)
			{
			        movepool = movepool.concat(Object.keys(this.data.Learnsets[prevo].learnset));
			        prevo = this.getTemplate(prevo).prevo;
			}
			prevo = crossTemplate.isMega?this.getTemplate(crossTemplate.species.substring(0,crossTemplate.species.length-5)).prevo:crossTemplate.prevo;
			while(prevo)
			{
			        movepool = movepool.concat(Object.keys(this.data.Learnsets[prevo].learnset));
			        prevo = this.getTemplate(prevo).prevo;
			}
			let moves = {};
			for(let kek =0;kek<movepool.length;kek++) moves[movepool[kek]]=true;
			for (let i in set.moves) {
				let move = toId(set.moves[i]);
				if (move.substr(0, 11) === 'hiddenpower') move = 'hiddenpower'; // Really big hack :(
				if (!moves[move]) {
					problems.push(set.species + " cannot learn " + set.moves[i] + ".");
				}
			}
			if (problems) return problems;
		},
		onValidateTeam: function (team) {
			let nameTable = {};
			for (let i = 0; i < team.length; i++) {
				let name = team[i].name;
				if (name) {
					if (name === team[i].species) continue;
					if (nameTable[name]) {
						return ["Your Pok&eacute;mon must have different nicknames.", "(You have more than one " + name + ")"];
					}
					nameTable[name] = true;
				}
			}
		},
	},
	{
		name: "Trademarked Enchantment",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3570431/\">Enchanted Items</a> + <a href=\"http://www.smogon.com/forums/threads/trademarked.3572949/\">Trademarked</a>."],
		section: "Experimental Metas",
		column: 2,

		mod: 'tme',
		ruleset: ['OU'],
		banlist: ['Kyurem-Black', 'Manaphy', 'Porygon-Z', 'Shedinja', 'Togekiss', 'Chatter',
			'Bug Gem', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fire Gem',
			'Ice Gem', 'Poison Gem', 'Poke Ball', 'Psychic Gem', 'Steel Gem', 'Wave Incense',
		],
		validateSet: function (set, teamHas) {
			if (!this.validateSet(set, teamHas).length) return [];
			let ability = this.tools.getAbility(set.ability);
			let template = this.tools.getTemplate(set.species);
			if (!set.moves.includes(ability.id) && !set.moves.includes(ability.name) && !this.checkLearnset(ability.id, template, {set: set})) {
				template = Object.assign({}, template);
				template.abilities = {0: ability.name};
			}
			return this.validateSet(set, teamHas, template);
		},
		onValidateSet: function (set) {
			let ability = this.getAbility(set.ability);
			let item = this.getItem(set.item);
			if (ability.item && ability.item === item.id) {
				return ["You are not allowed to have " + ability.name + " and " + item.name + " on the same Pokémon."];
			}
		},
		onValidateTeam: function (team) {
			let abilityTable = {};
			for (let i = 0; i < team.length; i++) {
				let ability = this.getAbility(team[i].ability);
				if (!abilityTable[ability.id]) abilityTable[ability.id] = 0;
				if (++abilityTable[ability.id] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + ability.name + " or " + this.getItem(ability.item).name + ")"];
				}
				let item = toId(team[i].item);
				if (!item) continue;
				item = this.getItem(item);
				ability = item.ability;
				if (!ability) continue;
				if (!abilityTable[ability]) abilityTable[ability] = 0;
				if (++abilityTable[ability] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + this.getAbility(ability).name + " or " + item.name + ")"];
				}
			}
		},
		onFaint: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
		onSwitchOut: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
	},
{ 		name: "Nature Swap Megamons", 		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3566648/\">Megamons</a> + <a href=\"https://www.smogon.com/forums/threads/3577739/\">Nature Swap</a>"], 		section: "Experimental Metas", 		searchShow: false, 		mod: 'nsmm', 		ruleset: ['Ubers'],
onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				let nature = pokemon.battle.getNature(pokemon.set.nature);
				if (nature.plus !== nature.minus) {
					["baseTemplate", "canMegaEvo"].forEach(key => {
						if (pokemon[key]) {
							let template = Object.assign({}, this.getTemplate(pokemon[key]));
							template.baseStats = Object.assign({}, template.baseStats);
							let plus = template.baseStats[nature.plus];
							let minus = template.baseStats[nature.minus];
							template.baseStats[nature.plus] = minus;
							template.baseStats[nature.minus] = plus;
							pokemon[key] = template;
						}
					});
					pokemon.formeChange(pokemon.baseTemplate);
				}
			}
		},
	},
	{
		name: "Mix and Mega Balanced Hackmons",
		desc: [
			"Mega Stones and Primal Orbs can be used on almost any fully evolved Pok&eacute;mon with no Mega Evolution limit.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3540979/\">Mix and Mega</a>",
		],
		section: "Experimental Metas",
		column: 2,

		mod: 'mnmbh',
		ruleset: ['Balanced Hackmons'],
		//banlist: ['Dynamic Punch', 'Electrify', 'Zap Cannon'],
		/*onValidateTeam: function (team) {
			let itemTable = {};
			for (let i = 0; i < team.length; i++) {
				let item = this.getItem(team[i].item);
				if (!item) continue;
				if (itemTable[item] && item.megaStone) return ["You are limited to one of each Mega Stone.", "(You have more than one " + this.getItem(item).name + ")"];
				if (itemTable[item] && (item.id === 'blueorb' || item.id === 'redorb')) return ["You are limited to one of each Primal Orb.", "(You have more than one " + this.getItem(item).name + ")"];
				itemTable[item] = true;
			}
		},*/
		onValidateSet: function (set) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			if (!item.megaEvolves && item.id !== 'blueorb' && item.id !== 'redorb') return;
			if (template.baseSpecies === item.megaEvolves || (template.baseSpecies === 'Groudon' && item.id === 'redorb') || (template.baseSpecies === 'Kyogre' && item.id === 'blueorb')) return;
			if (template.evos.length) return ["" + template.species + " is not allowed to hold " + item.name + " because it's not fully evolved."];
			/*let uberStones = ['beedrillite', 'blazikenite', 'gengarite', 'kangaskhanite', 'mawilite', 'medichamite'];
			if (template.tier === 'Uber' || uberStones.indexOf(item.id) >= 0) return ["" + template.species + " is not allowed to hold " + item.name + "."];*/
		},
		onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchIn: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
				let oTemplate = this.getTemplate(pokemon.originalSpecies);
				if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "Choonmons δ",
		desc: ["Choonmons is a pet mod created by Choon. Yup.<br>&bullet; <a href=\"http://www.smogon.com/forums/threads/3546063/\">Choonmons Thread</a>"],
		section: "Experimental Metas",
		mod: 'choonmons',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew', 'Lucarionite', 'Mawilite', 'Salamencite'],

		onSwitchIn: function (pokemon) {
			let changed = {'Venusaur-Mega-X':true, 'Blastoise':true, 'Butterfree':true, 'Pikachu':true, 'Raichu':true, 'Golduck':true, 'Happiny':true, 'Blissey':true, 'Gyarados':true, 'Aerodactyl':true, 'Feraligatr-Mega':true, 'Sceptile':true};
			let bt = pokemon.baseTemplate;
			if (bt.baseSpecies in changed || (bt.actualSpecies && bt.actualSpecies in changed)) {
				let types = bt.types;
				let bTypes = (types.length === 1 || types[1] === 'caw') ? types[0] : types.join('/');
				this.add('-start', pokemon, 'typechange', bTypes, '[silent]');
			}
			if (bt.actualSpecies) this.add('-start', pokemon, bt.actualSpecies, '[silent]'); //Show the pokemon's actual species
		},
		onSwitchOut: function (pokemon) {
			if (pokemon.baseTemplate.actualSpecies) this.add('-end', pokemon, pokemon.baseTemplate.actualSpecies, '[silent]');
		},
	},
	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3583742/\">DPP NU</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3512254/\">DPP NU Viability Ranking</a>",
		],
		section: "RoA Spotlight",
		column: 4,

		mod: 'gen4',
		ruleset: ['[Gen 4] UU'],
		banlist: ['UU', 'BL2'],
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",
		column: 4,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
	},
	{
		name: "[Gen 5] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550881/\">BW2 Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446463/\">BW2 Ubers Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: [],
	},
	{
		name: "[Gen 5] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3474024/\">BW2 UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning'],
	},
	{
		name: "[Gen 5] RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3473124/\">BW2 RU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning'],
	},
	{
		name: "[Gen 5] NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3484121/\">BW2 NU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist'],
	},
	{
		name: "[Gen 5] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3485860/\">BW2 LC Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela'],
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Random Battle",
		section: "BW2 Singles",

		mod: 'gen5',

		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',

		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533424/\">BW2 Doubles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533421/\">BW2 Doubles Viability Ranking</a>",
		],
		section: 'BW2 Doubles',
		column: 4,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Jirachi',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop',
		],
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',

		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',

		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// DPP Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],
		section: "DPP Singles",
		column: 4,

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 4] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505128/\">DPP Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446464/\">DPP Ubers Sample Teams</a>",
		],
		section: "DPP Singles",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus'],
	},
	{
		name: "[Gen 4] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503638/\">DPP UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],
		section: "DPP Singles",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL'],
	},
	{
		name: "[Gen 4] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/dp/articles/little_cup_guide\">DPP LC Guide</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],
		section: "DPP Singles",

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['LC Uber', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma', 'Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 4] Custom Game",
		section: "DPP Singles",

		mod: 'gen4',

		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// DPP Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] Doubles Custom Game",
		section: "DPP Doubles",
		column: 4,

		mod: 'gen4',
		gameType: 'doubles',

		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 3] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
		],
		section: "Past Generations",
		column: 4,

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536426/\">ADV Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446466/\">ADV Ubers Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',

		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3507552/\">GSC Ubers Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen2',

		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Random Battle",
		section: "Past Generations",

		mod: 'gen2',

		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',

		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541329/\">RBY Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen1',

		ruleset: ['Pokemon', 'Standard'],
		banlist: [],
	},
	{
		name: "[Gen 1] OU (tradeback)",
		section: "Past Generations",

		mod: 'gen1',

		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Allow Tradeback', 'Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Random Battle",
		section: "Past Generations",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Challenge Cup",
		section: "Past Generations",

		mod: 'gen1',
		team: 'randomCC',

		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Stadium",
		section: "Past Generations",

		mod: 'stadium',

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',

		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
        name: "[Gen 1] OU + Heal Bell",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
        ],
        section: "What If",
        column: 5,

        mod: 'gen1healbell',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 1] OU + Sleep Talk",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen1sleeptalk',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 1] OU + Hidden Power",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen1hiddenpower',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 1] OU + Substitute",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen1substitute',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 1] OU + Rapid Spin & Spikes",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen1rapidspin',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 1] OU + Shadow Ball",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen1shadowball',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 1] OU + Toxic",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen1toxic',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 1] OU + Jellicent",
        section: "What If",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
        ],

        mod: 'gen1jellicent',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },/*
    {
        name: "[Gen 2] OU + No Special Split",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen2specialsplit',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },*/
    {
        name: "[Gen 2] OU + Abilities",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen2abilities',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 2] OU + No Steel-Types",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen2steeltypes',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 2] OU + Hyper Beam Glitch",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen2hyperbeam',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 2] OU + Calm Mind",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen2calmmind',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 2] OU + DPP Evolutions",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen2dpp',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },/*
    {
        name: "[Gen 2] OU + Predictable Phazing",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen2phazing',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber'],
    },*/
    {
        name: "[Gen 3] OU + Gastrodon",
        section: "What If",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
        ],

        mod: 'gen3gastrodon',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber', 'Smeargle + Ingrain'],
    },
    {
        name: "[Gen 3] OU + Sand Sp. Def Boost",
        section: "What If",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
        ],

        mod: 'gen3sand',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber', 'Smeargle + Ingrain'],
    },
    {
        name: "[Gen 3] OU + U-turn",
        section: "What If",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
        ],

        mod: 'gen3uturn',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber', 'Smeargle + Ingrain'],
    },
    {
        name: "[Gen 3] OU + Trick Room",
        section: "What If",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
        ],

        mod: 'gen3trickroom',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber', 'Smeargle + Ingrain'],
    },/*
    {
        name: "[Gen 3] OU + Gen 2 Moves",
        section: "What If",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
        ],

        mod: 'gen3gen2',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber', 'Smeargle + Ingrain'],
    },*/
    {
        name: "[Gen 3] OU + Choice Scarf",
        section: "What If",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
        ],

        mod: 'gen3choicescarf',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber', 'Smeargle + Ingrain'],
    },
    {
        name: "[Gen 3] OU + Gyro Ball",
        section: "What If",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
        ],

        mod: 'gen3gyroball',
        ruleset: ['Pokemon', 'Standard'],
        banlist: ['Uber', 'Smeargle + Ingrain'],
    },
    {
        name: "[Gen 4] OU + No Stealth Rock",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen4',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
        banlist: ['Uber', 'Stealth Rock'],
    },
    {
        name: "[Gen 4] OU + Team Preview",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
        ],
        section: "What If",

        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 4] OU + No Type Split",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen4split',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 4] OU + Air Balloon",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen4balloon',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 4] OU + No Choice Items",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
        ],
        section: "What If",

        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
        banlist: ['Uber', 'Choice Scarf', 'Choice Specs', 'Choice Band'],
    },
    {
        name: "[Gen 4] OU + Weather",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen4weather',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 4] OU + Knock Off",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen4knockoff',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
        banlist: ['Uber'],
    },
    {
        name: "[Gen 5] OU + Fairy & Mega",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen5fairy',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
        banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
    },
    {
        name: "[Gen 5] OU + Explosion Buff",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen5explosion',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
        banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
    },/*
    {
        name: "[Gen 5] OU + No EVs & IVs",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen5evs',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
        banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
    },*/
    {
        name: "[Gen 5] OU + Gen 6 Steel-Types",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen5gen6',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
        banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
    },
    {
        name: "[Gen 5] OU + Dream World",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen5dreamworld',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
        banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
    },
    {
        name: "[Gen 5] OU + Defog",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen5defog',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
        banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
    },
    /*{
        name: "[Gen 5] OU + Spikes",
        desc: [
            "&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
            "&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
        ],
        section: "What If",

        mod: 'gen5spikes',
        ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
        banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
    },*/
];
