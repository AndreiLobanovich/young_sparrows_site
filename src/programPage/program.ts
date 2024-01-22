type Subject = {
    name: string,
    description: string,
    imageUrls: string[],
}

type programData = { [key: string]: Subject[] }

export const program: programData = {
    clubs: [
        {
            name: 'Choir student club',
            description: 'In a group setting that fosters camaraderie and team spirit, your child learns how to ' +
                'express emotions through music.',
            imageUrls: ['./subjectImages/choir.png']
        },
        {
            name: 'Robotics student club',
            description: 'A playground for future innovators, our club helps your child build a love for ' +
                'problem-solving and engineering.',
            imageUrls: ['./subjectImages/robo.png']
        },
        {
            name: 'Pottery work student club',
            description: 'Teaching your child that patience leads to art, the club fine-tunes motor skills and ' +
                'boosts creative thinking.',
            imageUrls: ['./subjectImages/pottery.png']
        }
    ],
    year1: [
        {
            name: 'Mathematics',
            description: 'Serving as an introduction to the language of logic and problem-solving, these lessons ' +
                'improve your child\'s critical thinking and numerical fluency.',
            imageUrls: ['./subjectImages/math.png']
        },
        {
            name: 'Phonics/Handwriting',
            description: 'Our interactive phonics and handwriting exercises are designed to enhance your child’s ' +
                'ability to express thoughts and emotions articulately.',
            imageUrls: ['./subjectImages/phonics.png']
        },
        {
            name: 'Science',
            description: 'Engaging hands-on experiments unveil the wonders of the natural world and bring the ' +
                'basic scientific principles closer to your child.',
            imageUrls: ['./subjectImages/science.png']
        },
        {
            name: 'Humanities',
            description: 'The lessons spark curiosity about the ever-changing world and foster an understanding ' +
                'of diverse perspectives and cultures.',
            imageUrls: ['./subjectImages/humanities.png']
        },
        {
            name: 'Art & design',
            description: 'By unleashing creativity through colors and forms, your child is encouraged to use ' +
                'visual expression as a tool for cognitive growth.',
            imageUrls: ['./subjectImages/design.png']
        },
        {
            name: 'Ballet and dancing',
            description: 'The class is created by the renowned Konstantin Kostyukov and led by Tamara Ivanović, ' +
                'the principal dancer of the Ballet of the Serbian National Theater.',
            imageUrls: ['./subjectImages/ballet.png']
        },
        {
            name: 'Music',
            description: 'Children learn to harness their creative powers through music, experiencing how ' +
                'perseverance leads to improvement.',
            imageUrls: ['./subjectImages/music.png']
        },
        {
            name: 'Pottery work',
            description: 'Guided by experienced tutors, your child learns to strengthen focus, discover the ' +
                'importance of perseverance, and explore their creative depths.',
            imageUrls: ['./subjectImages/pottery.png']
        },
        {
            name: 'Karate',
            description: 'Designed by the Gendarmerie karate club and often led by the members of the national ' +
                'karate team, the age-appropriate class promotes a healthy view of competitiveness.',
            imageUrls: ['./subjectImages/karate.png']
        },
        {
            name: 'Swimming (optional)',
            description: 'An activity that develops all crucial muscle groups - while building endurance and ' +
                'strength. Held by professional tutors who keep a watchful eye on what is going on in and ' +
                'around the pool.',
            imageUrls: ['./subjectImages/swimming.png']
        },
        {
            name: 'Yoga (optional)',
            description: 'An increasingly popular class aims to help your child become more focused and flexible, ' +
                'in addition to learning about the proper breathing techniques.',
            imageUrls: ['./subjectImages/yoga.png']
        }
    ],
    year2: [
        {
            name: 'English as a second language',
            description: 'Lessons that help your child unlock the world of global communication, fostering bilingual ' +
                'confidence and cultural awareness at an early age.',
            imageUrls: ['./subjectImages/gbFlag.png']
        },
        {
            name: 'Mathematics',
            description: 'Serving as an introduction to the language of logic and problem-solving, these lessons ' +
                'improve your child\'s critical thinking and numerical fluency.',
            imageUrls: ['./subjectImages/math.png']
        },
        {
            name: 'Phonics/Handwriting',
            description: 'Our interactive phonics and handwriting exercises are designed to enhance your child’s ' +
                'ability to express thoughts and emotions articulately.',
            imageUrls: ['./subjectImages/phonics.png']
        },
        {
            name: 'Wellbeing',
            description: 'Developing your child’s self-awareness, the lessons explore different factors that ' +
                'contribute to emotional and physical well-being.',
            imageUrls: ['./subjectImages/wellbeing.png']
        },
        {
            name: 'Guided reading',
            description: 'By diving into engaging, age-appropriate stories, your child develops creativity and ' +
                'begins to build a lifelong love of reading.',
            imageUrls: ['./subjectImages/reading.png']
        },
        {
            name: 'Humanities',
            description: 'The lessons spark curiosity about the ever-changing world and foster an understanding ' +
                'of diverse perspectives and cultures.',
            imageUrls: ['./subjectImages/humanities.png']
        },
        {
            name: 'Science',
            description: 'Engaging hands-on experiments unveil the wonders of the natural world and bring the ' +
                'basic scientific principles closer to your child.',
            imageUrls: ['./subjectImages/science.png']
        },
        {
            name: 'Music',
            description: 'Children learn to harness their creative powers through music, experiencing how ' +
                'perseverance leads to improvement.',
            imageUrls: ['./subjectImages/music.png']
        },
        {
            name: 'Art & design',
            description: 'By unleashing creativity through colors and forms, your child is encouraged to use ' +
                'visual expression as a tool for cognitive growth.',
            imageUrls: ['./subjectImages/design.png']
        },
        {
            name: 'German language (optional)',
            description: 'Enhance your child’s linguistic arsenal with German language lessons, opening doors to a ' +
                'rich cultural heritage.',
            imageUrls: ['./subjectImages/deu1.png']
        },
        {
            name: 'Swimming (optional)',
            description: 'Our popular swimming lessons help your child learn how to swim at an early age, boosting ' +
                'confidence, endurance, and physical strength.',
            imageUrls: ['./subjectImages/swimming.png']
        },
    ],
}