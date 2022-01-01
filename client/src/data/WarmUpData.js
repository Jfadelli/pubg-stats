let Motivation = [
    'Aim small miss small!',
    'Be the hero you were born to be.',
    'Don\'t get your tits in a tussle.',
    'You got this!',
    'They\'re all shitters!!!',
    'Did somebody say donuts?',
    'Good choice, now go get \'em!!',
    'I\'d hate to die twice. It’s so boring',
    'They couldn’t hit an elephant at this dist—',
    'Now is not the time for making new enemies. -Voltaire',
    'I desire to go to Hell and not to Heaven. In the former I shall enjoy the company of popes, kings and princes, while in the latter are only beggars, monks and apostles.',
    'Only the bravest let the gods decide their fate! \n',
]

let Styles = [
    'Aggro', 'Passive',
]

const Armory = {
    'AR': {
        'AKM':{'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips':['Stock'],'tips':['Comp', 'Suppressor', 'Flash Hider']},
        'M16':{'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips':['Stock'],'tips':['Comp', 'Suppressor', 'Flash Hider']},
        'M4': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips': ['Vert Grip', 'Lightweight Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'Scar': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips': ['Vert Grip', 'Lightweight Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'Mutant': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips': ['Vert Grip', 'Lightweight Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'Beryl': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips': ['Vert Grip', 'Lightweight Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'G36C': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips': ['Vert Grip', 'Lightweight Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'QBZ': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips': ['Vert Grip', 'Lightweight Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'K2': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']}
    },
    'SMG': {
        'MP5': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x'], 'grips': ['Vert Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'UMP': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x'], 'grips': ['Vert Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'UZI': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'Bizon': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'Thompson': {'scopes': ['Ironsights', 'Red Dot', 'Holo'], 'grips': ['Vert Grip'], 'tips': ['Suppressor']},
        'Vector': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x'], 'grips': ['Vert Grip', 'Half Grip', 'Light Grip', 'Laser Sight'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']}
    },
    'DMR': {
        'Mini': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x', '8x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'SKS': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x', '8x'], 'grips': ['Vert Grip', 'Lightweight Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'QBU': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x', '8x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'SLR': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x', '8x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'MK12': {'scopes': ['Ironsights', 'Red Dot', 'Holo', '2x', '3x', '4x', '6x', '8x'], 'grips': ['Vert Grip', 'Lightweight Grip', 'Thumbgrip', 'Half Grip', 'Angled Grip'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'VSS': {'scopes': ['Stock'], 'grips': ['Stock'], 'tips': ['Stock']}
    },
    'SR': {
        'K9': {'scopes': ['Ironsights', '2x', '3x', '4x', '6x', '8x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'M24': {'scopes': ['Ironsights', '2x', '3x', '4x', '6x', '8x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'Mosin': {'scopes': ['Ironsights', '2x', '3x', '4x', '6x', '8x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'Win94': {'scopes': ['Stock'], 'grips': ['Stock'], 'tips': ['Stock']},
    },
    'SHOTTY': {
        'S1897': {'scopes': ['Stock'], 'grips': ['Stock'], 'tips': ['Choke', 'Duckbill']},
        'S686': {'scopes': ['Stock'], 'grips': ['Stock'], 'tips': ['Choke', 'Duckbill']},
        'S12K': {'scopes': ['Ironsights', '2x', '3x'], 'grips': ['Stock'], 'tips': ['Comp', 'Suppressor', 'Flash Hider']},
        'DBS': {'scopes': ['Ironsights', '2x', '3x'], 'grips': ['Stock'], 'tips': ['Stock']},
    }}

let Commands = {
    'exit': ['quit', 'exit', 'q']
}

export {Armory, Commands, Styles, Motivation}