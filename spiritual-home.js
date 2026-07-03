/**
 * spiritual-home.js — Daily verse rotation for home page
 * Content cycles by day of week — no API calls, pure JS
 */

const HOME_CONTENT = {
    dailyVerses: [
        // Sunday
        {
            sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
            translit: "Karmany evadhikaras te ma phaleshu kadachana",
            text: "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, nor become attached to inaction.",
            ref: "Bhagavad Gita 2.47"
        },
        // Monday
        {
            sanskrit: "न जायते मृियते वा कदाचि नायं भूत्वा भविता वा न भूयः",
            translit: "Na jayate mriyate va kadachinayam bhutva bhavita va na bhuyah",
            text: "For the soul, there is neither birth nor death. It has never come into existence, has no origin, and will never cease to be. Unborn, eternal, everlasting — the Ancient One is not killed when the body is slain.",
            ref: "Bhagavad Gita 2.20"
        },
        // Tuesday
        {
            sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय",
            translit: "Yogasthah kuru karmani sangam tyaktva dhananjaya",
            text: "Established in yoga, O Arjuna, perform actions abandoning attachment. He who is established in yoga and has renounced the fruits of action attains the supreme peace.",
            ref: "Bhagavad Gita 2.48"
        },
        // Wednesday
        {
            sanskrit: "प्रज्ञा च प्रशान्ता च विशोका धृ तिस्मिता",
            translit: "Prajna cha prashanta cha vishoka dhriti smita",
            text: "The sage in wisdom, peace, freedom from sorrow, endowed with firm forbearance and contentment — this is the highest state of being.",
            ref: "Bhagavad Gita 2.56"
        },
        // Thursday
        {
            sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया",
            translit: "Tadviddhi pranipatena pariprashnena sevaya",
            text: "Understand this truth through reverential service and sincere inquiry. The wise who explain it to you with love reveal the highest secret of existence.",
            ref: "Bhagavad Gita 4.34"
        },
        // Friday
        {
            sanskrit: "सर्वभूतस्थितं यो मां भजति त्वन्या स समाहितः",
            translit: "Sarva-bhuta-sthitam yo mam bhajati tv anya sa samahitah",
            text: "He who sees Me in all beings and all beings in Me — him I never abandon and he never loses Me. For such a devotee of pure love, I am ever present.",
            ref: "Bhagavad Gita 6.30"
        },
        // Saturday
        {
            sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः",
            translit: "Bandhur atma tanayasya yena atm eva atmana jitah",
            text: "The soul is the friend of the self when it has conquered the lower self through the higher self. But for those who have not conquered the self, the self acts as an enemy.",
            ref: "Bhagavad Gita 6.6"
        }
    ],
    
    // Weekly chapter highlights
    chapterHighlights: {
        0: { chapter: 7, name: "Yoga of Royal Knowledge", verse: "From me, all beings arise. I am the origin of the entire universe." },
        1: { chapter: 3, name: "Yoga of Action", verse: "No one can remain actionless even for a moment. Everyone is forced to act by the qualities of nature." },
        2: { chapter: 11, name: "Vision of the Cosmic Form", verse: "I am the source of all — from me everything flows. Understanding this, the wise worship me." },
        3: { chapter: 13, name: "Yoga of Distinction", verse: "The field is the body. The knower of the field is distinct. This is the supreme knowledge." },
        4: { chapter: 6, name: "Yoga of Meditation", verse: "When the mind, intellect, and self are under control, one attains peace." },
        5: { chapter: 9, name: "Royal Knowledge", verse: "I am the father, mother, and grandfather of this universe. I am the object of knowledge." },
        6: { chapter: 2, name: "Sankhya Yoga", verse: "You are the soul, not the body. You have always existed. You will always exist." }
    }
};

function getDayIndex() {
    return new Date().getDay();
}

function initHome() {
    const dayIndex = getDayIndex();
    
    // Set day label
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('day-label').textContent = dayNames[dayIndex] + "'s Verse";
    
    // Load today's verse
    const verse = HOME_CONTENT.dailyVerses[dayIndex];
    document.getElementById('daily-sanskrit').textContent = verse.sanskrit;
    document.getElementById('daily-translit').textContent = verse.translit;
    document.getElementById('daily-text').textContent = verse.text;
    document.getElementById('daily-ref').innerHTML = '— <em>' + verse.ref + '</em>';
}

document.addEventListener('DOMContentLoaded', initHome);
if (document.readyState !== 'loading') setTimeout(initHome, 50);