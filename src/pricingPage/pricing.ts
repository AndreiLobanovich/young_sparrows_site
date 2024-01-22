type Price = {
    title: string,
    text: string[],
}

export const pricing: { [key: string]: Price[] } = {
    year2: [
        {
            title: 'Standard lessons:',
            text: [
                "✅ 5 English as a second language lessons per week",
                "✅ 5 Mathematics lessons per week",
                "✅ 5 Guided reading lessons per week",
                "✅ 4 Phonics/handwriting lessons per week",
                "✅ 4 Wellbeing lessons per week",
                "✅ 2 Humanities lessons per week",
                "✅ 1 Science lesson per week",
                "✅ 1 Music lesson per week",
                "✅ 1 Art & design lesson per week",
                "✅ 1 Physical education lesson per week"
            ]
        },
        {
            title: 'Standard offer:',
            text: [
                "✅ 3 Outside play times per day",
                "✅ 2 Dental checkups per year",
                "✅ 2-3 Medical checkups per year",
                "✅ Free accident insurance",
                "✅ Regular exams and progress reports",
                "✅ 8:00-15:30 working hours"
            ]
        },
        {
            title: 'Optional lessons:',
            text: [
                "➕ 2 German language lessons per week",
                "➕ 2 Swimming lessons per week"
            ]
        },
        {
            title: 'Optional offer:',
            text: [
                "➕ Choir student club",
                "➕ Robotics student club",
                "➕ Pottery work student club",
                "➕ Two to three nutritious meals per day",
                "➕ Transfers to and from our school",
                "➕ Fun and educational field trips",
                "➕ 15:30-17:00 extended stay"
            ]
        },
    ],
    year1: [
        {
            title: '',
            text: [
                "✅ Two PE classes per week",
                "✅ Two music lessons per week",
                "✅ One karate lesson per week",
                "✅ One ballet lesson per week",
                "✅ One pottery lesson per week",
                "✅ One German (or Serbian) language lesson per week",
                "✅ 3 English as a second language lessons per week",
                "✅ 3 Mathematics lessons per week",
                "✅ 2 Phonics/handwriting lessons per week",
                "✅ 1 Humanities lessons per week",
                "✅ 1 Science lesson per week",
                "✅ 2 Art & design lesson per week"
            ]
        },
        {
            title: '',
            text: [
                "✅ Four nutritious meals per day",
                "✅ Two dental checkups per year",
                "✅ Two to three medical checkups per year",
                "✅ Free accident insurance",
                "✅ Regular progress reports",
                "✅ 8:00-17:30 working hours"
            ]
        },
    ],
    optional1: [
        {
            title: '',
            text: [
                "Mini-bus transfers*:",
                "🚐 One way: 168 EUR",
                "🚐 Round-trip: 273 EUR",
                "*Within 7km of the city center."
            ]
        },
        {
            title: '',
            text: [
                "Home-cooked meals: ",
                "🍲 Breakfast, lunch & 2snacks: 180 EUR",
            ]
        }
    ],
    optional2: [
        {
            title: '',
            text: [
                "Mini-bus transfers*:",
                "🚐 One way: 168 EUR",
                "🚐 Round-trip: 273 EUR",
                "*Within 7km of the city center."
            ]
        },
        {
            title: '',
            text: [
                "Home-cooked meals:",
                "🍲 Breakfast: 168 EUR",
                "🍲 Lunch: 168 EUR",
                "🍲 Breakfast & lunch: 210 EUR"
            ]
        },
        {
            title: '',
            text: [
                "Extended stay program (15:30-17:00):",
                "🕔 3 days/w: 120 EUR",
                "🕔 4 days/w: 160 EUR",
                "🕔 5 days/w: 200 EUR",
                "🕔 3 days/w + Swimming: 194 EUR"
            ]
        }
    ]
}