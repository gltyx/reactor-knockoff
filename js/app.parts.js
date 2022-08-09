(function() {
'use strict';

window.parts = [
		// Cells
		{
			id: 'uranium',
			type: 'uranium',
			levels: 3,
			title: 'Uranium Cell',
			base_description: '%single_cell_description',
			flavor: 'The most common nuclear fuel.',
			category: 'cell',
			base_cost: 10,
			cost_multiplier: 3,
			base_ticks: 5*5,
			base_power: 1,
			base_heat: 1,
			cell_tick_upgrade_cost: 225,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 225,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 1000
		},
		{
			id: 'plutonium',
			type: 'plutonium',
			levels: 3,
			title: 'Plutonium Cell',
			base_description: '%single_cell_description',
			flavor: "The most common isotope of Uranium, Uranium-238, is not useable as nuclear fuel until it is given an extra neutron AND beta decay occurs TWICE forming plutionium-239",
			category: 'cell',
			base_cost: 10*800,
			cost_multiplier: 3,
			base_ticks: 5*5*5,
			base_power: 150,
			base_heat: 150,
			cell_tick_upgrade_cost: 225*225,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 225*225,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 1000*500
		},
		{
			id: 'thorium',
			type: 'thorium',
			levels: 3,
			title: 'Thorium Cell',
			base_description: '%single_cell_description',
			flavor: 'More abundant in the earth\'s crust than uranium, but not economically more available, thorium produces less nuclear waste than uranium.',
			category: 'cell',
			base_cost: 10*800*800,
			cost_multiplier: 3,
			base_ticks: 5*5*5*5,
			base_power: 150*150,
			base_heat: 150*150,
			cell_tick_upgrade_cost: 225*225*225,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 225*225*225,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 1000*500*500
		},
		{
			id: 'seaborgium',
			type: 'seaborgium',
			levels: 3,
			title: 'Seaborgium Cell',
			base_description: '%single_cell_description',
			flavor: 'A synthetic radioactive metal usually used excluseively for research. A game developer would be wrong to represent it as nuclear fuel.',
			category: 'cell',
			base_cost: 10*800*800*800,
			cost_multiplier: 3,
			base_ticks: 5*5*5*5*5,
			base_power: 150*150*150,
			base_heat: 150*150*150,
			cell_tick_upgrade_cost: 225*225*225*225,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 225*225*225*225,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 1000*500*500*500
		},
		{
			id: 'dolorium',
			type: 'dolorium',
			levels: 3,
			title: 'Dolorium Cell',
			base_description: '%single_cell_description',
			flavor: 'For some reason the mere presence of dolorium causes severe emotional pain.',
			category: 'cell',
			base_cost: 10*800*800*800*800,
			cost_multiplier: 3,
			base_ticks: 5*5*5*5*5*5,
			base_power: 150*150*150*150,
			base_heat: 150*150*150*150,
			cell_tick_upgrade_cost: 225*225*225*225*225,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 225*225*225*225*225,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 1000*500*500*500*500
		},
		{
			id: 'nefastium',
			type: 'nefastium',
			levels: 3,
			title: 'Nefastium Cell',
			base_description: '%single_cell_description',
			flavor: 'Every single person who has worked with nefastium has died of a tragic unrelated accident within a year.',
			category: 'cell',
			base_cost: 10*800*800*800*800*800,
			cost_multiplier: 3,
			base_ticks: 5*5*5*5*5*5*5,
			base_power: 150*150*150*150*150,
			base_heat: 150*150*150*150*150,
			cell_tick_upgrade_cost: 225*225*225*225*225*225,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 225*225*225*225*225*225,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 1000*500*500*500*500*500
		},
		{
			id: 'protium',
			type: 'protium',
			levels: 3,
			title: 'Protium Cell',
			base_description: '%single_cell_description' + ' After being fully depleted, protium cells permanently generate 10% more power per depleted cell.',
			flavor: 'This extremely volatile synthetic substance is an early development that appears tro violate conservastion of mass and energy.',
			category: 'cell',
			experimental: true,
			erequires: 'protium_cells',
			erequiresLevel: 1,
			base_cost: 3e15,
			cost_multiplier: 3,
			base_ticks: 3.6e3,
			base_power: 1.25e12,
			base_heat: 1.125e12
		},
		{
			id: 'chlorophymium',
			type: 'chlorophymium',
			levels: 3,
			title: 'Chlorophymium Cell',
			base_description: '%single_cell_description' + ' Produces its peak power at noon and its minimum at midnight.',
			flavor: 'A synthetic substance formed exclusively from green plant matter.',
			category: 'cell',
			experimental: true,
			erequires: 'chlorophymium_cells',
			erequiresLevel: 1,
			base_cost: 3e15,
			cost_multiplier: 3,
			base_ticks: 3.6e3,
			base_power: 1.25e12,
			base_heat: 1.125e12,
		},
		{
			id: 'mitochondrium',
			type: 'mitochondrium',
			levels: 3,
			title: 'Mitochondrium Cell',
			base_description: '%single_cell_description' + ' Produces 0.1% of your power capacity (up to %max_power).',
			flavor: 'This synthetic substance is a new power house made using "ethically sourced" biomatter.',
			category: 'cell',
			experimental: true,
			erequires: 'mitochondrium_cells',
			erequiresLevel: 1,
			base_cost: 3e15,
			cost_multiplier: 3,
			base_ticks: 3.6e3,
			base_power: 1.25e12,
			base_heat: 1.125e12,
		},

		// Energy
		{
			id: 'reflector',
			type: 'reflector',
			title: 'Neutron Reflector',
			base_description: 'Increases adjacent cell power output by %power_increase% for %ticks total pulses.',
			flavor: 'This mesh based reflection surface reflects neutrons back in the 4 cardinal directions.',
			levels: 5,
			category: 'reflector',
			level: 1,
			base_cost: 500,
			cost_multiplier: 50,
			base_power_increase: 5,
			power_increase_add: 1,
			base_ticks: 100,
			ticks_multiplier: 2
		},
		{
			id: 'reflector6',
			type: 'reflector',
			title: 'Thermal Neutron Reflector',
			base_description: 'Increases adjacent cell power output by %power_increase% and heat output by %heat_increase% for %ticks total pulses.',
			flavor: 'The reflection surface on this contraption is made of near depleted nuclear fuel cells.',
			category: 'reflector',
			experimental: true,
			erequires: 'heat_reflection',
			erequiresLevel: 1,
			level: 6,
			base_cost: 100000000000000,
			base_power_increase: 5,
			base_heat_increase: 50,
			base_ticks: 3200
		},
		{
			id: 'capacitor',
			type: 'capacitor',
			title: 'Capacitor',
			base_description: 'Increases the maximum power of the reactor by %reactor_power. Holds a maximum of %containment heat.',
			flavor: 'Sheets of metal used to store energy.',
			levels: 5,
			category: 'capacitor',
			level: 1,
			base_cost: 1000,
			cost_multiplier: 160,
			base_reactor_power: 100,
			reactor_power_multiplier: 140,
			base_containment: 10,
			containment_multiplier: 5
		},
		{
			id: 'capacitor6',
			type: 'capacitor',
			title: 'Extreme Capacitor',
			base_description: 'Increases the maximum power of the reactor by %reactor_power. Holds a maximum of %containment heat. Heat is added to each unit equal to 50% of the power automatically sold by it.',
			flavor: 'by ingoring safety standards we can store even more energy AND save a little cost by not cooling the power output!',
			category: 'capacitor',
			experimental: true,
			erequires: 'experimental_capacitance',
			erequiresLevel: 1,
			level: 6,
			base_cost: 105000000000000,
			base_reactor_power: 2100000000000000,
			base_containment: 5400000000000
		},

		// Heat
		{
			id: 'vent',
			type: 'vent',
			title: 'Heat Vent',
			base_description: 'Lowers heat of itself by %vent per tick. Holds a maximum of %containment heat.',
			flavor: 'but this device is actually powered by a hamster wheel. Mind blown!',
			levels: 5,
			category: 'vent',
			level: 1,
			base_cost: 50,
			cost_multiplier: 250,
			base_containment: 80,
			containment_multiplier: 75,
			base_vent: 4,
			vent_multiplier: 75,
			location: 'cooling'
		},
		{
			id: 'vent6',
			type: 'vent',
			title: 'Extreme Vent',
			base_description: 'Lowers heat of itself by %vent per tick. Holds a maximum of %containment heat. Must consume power from the reactor at a rate of 100% of the heat removed from itself.',
			flavor: 'This device requires more power than a single hamster wheel, but two hamster wheels would look ridiculus.',
			category: 'vent',
			experimental: true,
			erequires: 'vortex_cooling',
			erequiresLevel: 1,
			level: 6,
			base_cost: 50000000000000,
			base_containment: 100000000000,
			base_vent: 5000000000,
		},
		{
			id: 'heat_exchanger',
			type: 'heat_exchanger',
			title: 'Heat Exchanger',
			base_description: 'Attempts to balance the heat between itself and adjacent components by percentage. Transfers up to %transfer heat per tick for each adjacent component. Holds up to %containment heat.',
			flavor: 'It\'s just pipes filled with coolant.',
			levels: 5,
			category: 'heat_exchanger',
			level: 1,
			base_cost: 160,
			cost_multiplier: 200,
			base_containment: 320,
			containment_multiplier: 75,
			base_transfer: 16,
			transfer_multiplier: 75,
			location: 'cooling'
		},
		{
			id: 'heat_exchanger6',
			type: 'heat_exchanger',
			title: 'Extreme Heat Exchanger',
			base_description: 'Attempts to balance the heat between itself, adjacent components and its entire row by percentage. Transfers up to %transfer heat per tick for each adjacent component. Holds up to %containment heat.',
			flavor: 'The engineers claim that it warps a 4th spatial dimension to actually be adjacent to a full row of components',
			category: 'heat_exchanger',
			experimental: true,
			erequires: 'underground_heat_extraction',
			erequiresLevel: 1,
			level: 6,
			base_cost: 50000000000000,
			base_containment: 1000000000000,
			base_transfer: 20000000000,
		},
		{
			id: 'heat_inlet',
			type: 'heat_inlet',
			title: 'Heat Inlet',
			base_description: 'Takes %transfer heat out of each adjacent component and puts it into the reactor each tick.',
			flavor: 'It\s like a heat exchanger but it has a constant access to chilled coolant.',
			levels: 5,
			category: 'heat_inlet',
			level: 1,
			base_cost: 160,
			cost_multiplier: 200,
			base_transfer: 16,
			transfer_multiplier: 75,
			location: 'cooling'
		},
		{
			id: 'heat_inlet6',
			type: 'heat_inlet',
			title: 'Extreme Heat Inlet',
			base_description: 'Takes %transfer heat out of each adjacent component and puts it into the reactor each tick. Has a range of %range squares.',
			flavor: 'You can extually feel the warping of space in the presence of this device.',
			category: 'heat_inlet',
			experimental: true,
			erequires: 'vortex_extraction',
			erequiresLevel: 1,
			base_range: 2,
			level: 6,
			base_cost: 50000000000000,
			base_transfer: 20000000000
		},
		{
			id: 'heat_outlet',
			type: 'heat_outlet',
			title: 'Heat Outlet',
			base_description: '%transfer heat is taken out of the reactor and put into each adjacent component.',
			flavor: 'It\s like a heat exchanger but it has a constant access to hot coolant.',
			levels: 5,
			category: 'heat_outlet',
			level: 1,
			base_cost: 160,
			cost_multiplier: 200,
			base_transfer: 16,
			transfer_multiplier: 75,
			location: 'cooling'
		},
		{
			id: 'heat_outlet6',
			type: 'heat_outlet',
			title: 'Extreme Heat Outlet',
			base_description: 'For each adjacent component %transfer is taken out of the reactor and put into the adjacent component. Has a range of %range squares.',
			flavor: 'You can extually feel the warping of space in the presence of this device.',
			category: 'heat_outlet',
			experimental: true,
			erequires: 'explosive_ejection',
			erequiresLevel: 1,
			base_range: 2,
			level: 6,
			base_cost: 50000000000000,
			base_transfer: 20000000000
		},
		{
			id: 'coolant_cell',
			type: 'coolant_cell',
			title: 'Coolant Cell',
			base_description: 'Holds %containment heat before being destroyed.',
			flavor: 'This is literally procrastination of heat management.',
			levels: 5,
			category: 'coolant_cell',
			level: 1,
			base_cost: 500,
			cost_multiplier: 200,
			base_containment: 2000,
			containment_multiplier: 180,
			location: 'cooling'
		},
		{
			id: 'coolant_cell6',
			type: 'coolant_cell',
			title: 'Thermionic Coolant Cell',
			base_description: 'Holds %containment heat before being destroyed. 50% of the heat added to this part is instantly converted to power and added to the generator.',
			flavor: 'A fair trade I\'d say.',
			category: 'coolant_cell',
			experimental: true,
			erequires: 'thermionic_conversion',
			erequiresLevel: 1,
			level: 6,
			base_cost: 160000000000000,
			base_containment: 380000000000000
		},
		{
			id: 'reactor_plating',
			type: 'reactor_plating',
			title: 'Reactor Plating',
			base_description: 'Increases maximum heat of the reactor by %reactor_heat.',
			flavor: 'Instead of using a liquid to increase the thermal mass of the reactor, we opted to add metal plates.',
			levels: 5,
			category: 'reactor_plating',
			level: 1,
			base_cost: 1000,
			cost_multiplier: 160,
			base_reactor_heat: 100,
			reactor_heat_multiplier: 140,
			location: 'cooling'
		},
		{
			id: 'reactor_plating6',
			type: 'reactor_plating',
			title: 'Charged Reactor Plating',
			base_description: 'Increases maximum heat and power of the reactor by %reactor_heat.',
			flavor: "Being 100% honest, you're paying too much for this. You can get the same capacitor for 1/100th of the price and the metal casing doesn't justify the cost.",
			category: 'reactor_plating',
			experimental: true,
			erequires: 'micro_capacitance',
			erequiresLevel: 1,
			level: 6,
			base_cost: 100000000000000,
			base_reactor_heat: 8000000000000
		},
		{
			id: 'particle_accelerator',
			type: 'particle_accelerator',
			title: 'Particle Accelerator',
			base_description: 'Generates Exotic Particles based on heat passing through the accelerator (maximum %ep_heat). If this part explodes it causes instant reactor meltdown. Holds a maximum of %containment heat. (heat must come directly from cells for safety!)',
			flavor: "We produce suspicious particles that an anonymous source trades for technology by using thermal energy to accelerate individual atoms.",
			levels: 5,
			category: 'particle_accelerator',
			level: 1,
			base_cost: 1000000000000,
			cost_multiplier: 10000,
			base_containment: 100,
			containment_multiplier: 1,//000000,
			base_ep_heat: 500000000,
			ep_heat_multiplier: 20000,
			location: 'cooling'
		},
		{
			id: 'particle_accelerator6',
			type: 'particle_accelerator',
			title: 'Black Hole Particle Accelerator',
			base_description: 'Generates Exotic Particles based on heat passing through the accelerator (maximum %ep_heat). If this part explodes it causes instant reactor meltdown. Holds a maximum of %containment heat. Actively draws %transfer heat from the reactor at the cost of 1 power per 1 heat. (heat must come directly from cells for safety!)',
			flavor: 'The use a a miniature black hole provides significant assistance in accelerating particles.',
			//category: 'singularity_harnessing',
			category: 'particle_accelerator',
			experimental: true,
			erequires: 'singularity_harnessing',
			erequiresLevel: 1,
			level: 6,
			base_transfer: 1000000000000000000000000000000,
			base_cost: 100000000000000,
			base_containment: 100,//000000000000000000000000000000,
			base_ep_heat: 1600000000000000000000000000000
		}
	];

})();
