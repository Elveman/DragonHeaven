'use strict';

exports.BattleScripts = {
	pokemon: {
		formeChange: function (template) {
			template = this.battle.getTemplate(template);
			let crossTemplate = this.battle.getTemplate(this.set.name);
			if (!crossTemplate.exists) return false;
			if (!template.abilities) return false;
			this.illusion = null;
			this.template = template;
			this.types = template.types;
			this.addedType = '';
			// Base Stat changes
			let delta = Math.floor((crossTemplate.baseStats["hp"]+this.baseStats["hp"])/2);
			let boostedHP = Math.floor(Math.floor(2 * (delta) + this.set.ivs['hp'] + Math.floor(this.set.evs['hp'] / 4) + 100) * this.level / 100 + 10);
			if (this.maxhp > 1 && this.maxhp < boostedHP) this.hp = this.maxhp = boostedHP;
			let stets = ['atk','def','spa','spd','spe'];
			for (let jj=0;jj<stets.length;jj++) {
				let stat = this.template.baseStats[stets[jj]]; 
				stat = (crossTemplate.baseStats[stets[jj]] + stat)/2;
				stat = Math.floor(Math.floor(2 * stat + this.set.ivs[stets[jj]] + Math.floor(this.set.evs[stets[jj]] / 4)) * this.level / 100 + 5);

				let nature = this.battle.getNature(this.set.nature);
				if (stets[jj] === nature.plus) stat *= 1.1;
				if (stets[jj] === nature.minus) stat *= 0.9;
				this.baseStats[stets[jj]] = this.stats[stets[jj]] = Math.floor(stat);
			}

			// Type changes
			if(this.types[0]!=crossTemplate.types[0])
				this.types[1]= crossTemplate.types[0];
			this.fusion = true;
			return true;
		},
	},
};
