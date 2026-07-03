/**
 * spiritual.js — Sacred verses, quotes, and daily rotation for The 1 Path
 */

const SACRED_CONTENT = {
    // Gita verses
    verses: [
        {
            text: "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, nor become attached to inaction.",
            ref: "Bhagavad Gita 2.47",
            chapter: 2
        },
        {
            text: "For the soul there is neither birth nor death. It has never come into existence, has no origin, and will never cease to be. Unborn, eternal, everlasting — the Ancient One is not killed when the body is slain.",
            ref: "Bhagavad Gita 2.20",
            chapter: 2
        },
        {
            text: "When meditation is mastered, the mind can be steadied like the flame of a candle in a windless place.",
            ref: "Bhagavad Gita 6.19",
            chapter: 6
        },
        {
            text: "The mind is the root of both bondage and liberation. When it is attached to the senses, it binds. When it is free from sense attachments, it liberates.",
            ref: "Bhagavad Gita 6.6",
            chapter: 6
        },
        {
            text: "Better indeed is knowledge accompanied by renunciation than mere knowledge alone. Better is renunciation coupled with discernment than renunciation alone.",
            ref: "Bhagavad Gita 13.11",
            chapter: 13
        },
        {
            text: "The soul is born neither when the body takes shape nor when it dies. The soul is birthless, ageless, eternal. It does not come into being or cease to be.",
            ref: "Bhagavad Gita 13.31",
            chapter: 13
        },
        {
            text: "He who sees Me in all things and all things in Me — him I never abandon and he never loses Me. That devotee of pure love dwells always in Me.",
            ref: "Bhagavad Gita 6.30",
            chapter: 6
        },
        {
            text: "Lust, anger, and greed are the three gates to the hellish realm. Therefore, one must learn to abandon them before they destroy one's spiritual progress.",
            ref: "Bhagavad Gita 16.21",
            chapter: 16
        },
        {
            text: "Whatever action you perform, whatever food you eat, whatever offering you make, whatever austerity you practice — do it as an offering to Me.",
            ref: "Bhagavad Gita 9.27",
            chapter: 9
        },
        {
            text: "I am the Supreme Personality of Godhead. Among the rudras, I am Sankara. Among the mountains, I am Meru. Among celestial controllers, I am Brihaspati.",
            ref: "Bhagavad Gita 10.23",
            chapter: 10
        },
        {
            text: "The peace that comes from equanimity — accepting pleasure and pain with equal minds — is the sign of one who has realized the Self.",
            ref: "Bhagavad Gita 2.48",
            chapter: 2
        },
        {
            text: "One who is not disturbed by the triple suffering — caused by body, mind, or external sources — and remains balanced through all trials, has achieved spiritual perfection.",
            ref: "Bhagavad Gita 6.7",
            chapter: 6
        },
        {
            text: "Wherever a great soul departs, there you will find victory, prosperity, and righteousness. This is the eternal decree.",
            ref: "Bhagavad Gita 4.8",
            chapter: 4
        },
        {
            text: "I deliver the righteous, I destroy the unrighteous. I re-establish dharma from age to age. When virtue declines and vice rises, I manifest Myself.",
            ref: "Bhagavad Gita 4.7-8",
            chapter: 4
        },
        {
            text: "Yoga is the journey of the self, through the self, to the self. The teacher appears when the student is ready.",
            ref: "Bhagavad Gita 6.20",
            chapter: 6
        }
    ],
    
    // Spiritual wisdom quotes
    quotes: [
        {
            text: "The soul is not born; it does not die. It is eternal, ever-existing, without beginning or end.",
            author: "Ancient Vedic Wisdom"
        },
        {
            text: "Karma is the law of cause and effect — what we sow, we reap. Every action creates a ripple that returns to us.",
            author: "Yoga Sutras"
        },
        {
            text: "Dharma is the path of righteousness. When we walk our dharma, we align with the cosmic order.",
            author: "Mahabharata"
        },
        {
            text: "The mind is everything. What you think, you become.",
            author: "Buddha"
        },
        {
            text: "Silence is the sleep that awakens the soul.",
            author: "Vedic Proverb"
        },
        {
            text: "The world is a stage — we are the actors playing our parts. But the True Self is the witness beyond all roles.",
            author: "Upanishads"
        },
        {
            text: "Desire is the root of all suffering. When desire ends, suffering ends and liberation begins.",
            author: "Ancient Rishi"
        },
        {
            text: "The divine lives in all creatures. To harm another is to harm the Self.",
            author: "Bhagavad Gita 6.32"
        },
        {
            text: "In the still waters of meditation, we glimpse the infinite ocean of consciousness within.",
            author: "Yoga Tradition"
        }
    ],
    
    // Daily teachings (7 days)
    dailyTeaching: {
        0: {
            text: "Today, practice non-attachment. Perform your duties with full dedication, but release any expectation of results. Surrender every outcome to the Divine plan.",
            ref: "Karma Yoga — Sunday Reflection"
        },
        1: {
            text: "You are not the body, nor the mind. You are the eternal witness consciousness. Today, observe your thoughts without identifying with them.",
            ref: "Self-Realization — Monday Teaching"
        },
        2: {
            text: "Devotion is not about rituals alone — it is the quality of love in your heart. Offer everything you do as worship to the Divine.",
            ref: "Bhakti Yoga — Tuesday Teaching"
        },
        3: {
            text: "Discrimination is the sword of wisdom. Separate the real from the unreal, the eternal from the temporary. Seek only that which truly exists.",
            ref: "Jnana Yoga — Wednesday Teaching"
        },
        4: {
            text: "In stillness, truth reveals itself. Sit in meditation today, even for just ten minutes. Let the surface waves of the mind settle, and discover the depth within.",
            ref: "Dhyana Yoga — Thursday Teaching"
        },
        5: {
            text: "The divine light shines in every heart. See God in all beings — the beggar and the king, the saint and the sinner. All are expressions of the One.",
            ref: "Universal Consciousness — Friday Teaching"
        },
        5: {
            text: "Release the three fires of desire, anger, and greed before they consume you. Cultivate contentment, patience, and generosity instead.",
            ref: "Inner Peace — Saturday Teaching"
        }
    },
    
    // Upanishad sayings
    upanishads: [
        "Tat Tvam Asi — Thou Art That",
        "Aham Brahmasmi — I Am the Absolute",
        "Prajnanam Brahma — Consciousness Is God",
        "Ayam Atma Brahma — This Self Is Brahman"
    ]
};

/**
 * Get day of week index
 */
function getDayIndex() {
    return new Date().getDay();
}

/**
 * Shuffle array (Fisher-Yates)
 */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/**
 * Load featured verse of the day
 */
function loadFeaturedVerse() {
    const dayIndex = getDayIndex();
    const featuredVerse = SACRED_CONTENT.verses[dayIndex % SACRED_CONTENT.verses.length];
    
    document.getElementById('featured-verse-text').textContent = featuredVerse.text;
    document.getElementById('featured-verse-ref').textContent = '— ' + featuredVerse.ref;
}

/**
 * Load verses grid
 */
function loadVerses() {
    const container = document.getElementById('verses-container');
    // Get 6 verses starting from today's index
    const startIndex = getDayIndex();
    const verses = [];
    for (let i = 0; i < 6; i++) {
        verses.push(SACRED_CONTENT.verses[(startIndex + i) % SACRED_CONTENT.verses.length]);
    }
    
    container.innerHTML = verses.map((v, i) => `
        <div class="verse-card reveal">
            <div class="verse-number">Verse ${i + 1}</div>
            <div class="verse-text">${v.text}</div>
            <div class="verse-ref"><em>${v.ref}</em></div>
        </div>
    `).join('');
    
    // Re-observe new elements
    const reveals = container.querySelectorAll('.reveal');
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => observer.observe(el), 100);
    });
}

/**
 * Load wisdom quotes
 */
function loadQuotes() {
    const container = document.getElementById('quotes-container');
    const dayIndex = getDayIndex();
    // Get 6 quotes starting from today's index
    const quotes = [];
    for (let i = 0; i < 6; i++) {
        quotes.push(SACRED_CONTENT.quotes[(dayIndex + i) % SACRED_CONTENT.quotes.length]);
    }
    
    container.innerHTML = quotes.map((q, i) => `
        <div class="quote-card reveal">
            <div class="quote-icon">❧</div>
            <div class="quote-text">${q.text}</div>
            <div class="quote-author">${q.author}</div>
        </div>
    `).join('');
    
    // Re-observe
    const reveals = container.querySelectorAll('.reveal');
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => observer.observe(el), 100);
    });
}

/**
 * Load daily reflection
 */
function loadDailyReflection() {
    const dayIndex = getDayIndex();
    const today = SACRED_CONTENT.dailyTeaching[dayIndex];
    
    document.getElementById('daily-text').textContent = today.text;
    document.getElementById('daily-ref').textContent = '— ' + today.ref;
}

// Intersection Observer for scroll reveals
let observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
        if (el.isIntersecting) el.target.classList.add('visible');
    });
}, { threshold: 0.1 });

// Initialize all content
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedVerse();
    loadVerses();
    loadQuotes();
    loadDailyReflection();
    
    // Also run if script loads after DOM
    if (document.readyState !== 'loading') {
        setTimeout(() => {
            loadFeaturedVerse();
            loadVerses();
            loadQuotes();
            loadDailyReflection();
        }, 100);
    }
});

// Expose for manual refresh
window.spiritualRefresh = () => {
    loadFeaturedVerse();
    loadVerses();
    loadQuotes();
    loadDailyReflection();
};