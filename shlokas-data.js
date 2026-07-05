/**
 * shlokas-data.js — Sacred Shlokas, Chants, and Daily Prayers
 */

const SHLOKAS = {
    mahaShlokas: [
        {
            name: "Gayatri Mantra",
            type: "The Supreme Chant",
            sanskrit: "ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥",
            translit: "Om Bhur Bhuvah Svah. Tat Savitur Varenyam Bhargo Devasya Dhimahi. Dhiyo Yo Nah Prachodayat.",
            translation: "We meditate upon the divine light of the supreme creator. May He stimulate our intellect and guide us toward righteousness.",
            benefit: "Chanted at dawn and dusk. Enhances wisdom, purification, spiritual awakening."
        },
        {
            name: "Mahamrityunjaya Mantra",
            type: "The Great Death-Conquering Mantra",
            sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
            translit: "Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam. Urvarukam-Iva Bandhanan Mrityor Mukshiya Ma-Amritat.",
            translation: "We worship the three-eyed one who is fragrant with nourishment. Like a cucumber from its stem, may I be freed from death — but not from immortality.",
            benefit: "The supreme healing mantra. Protects from accidents, illness, and premature death."
        },
        {
            name: "Om Namah Shivaya",
            type: "The Sacred Five-Syllable Mantra",
            sanskrit: "ॐ नमः शिवाय",
            translit: "Om Namah Shivaya",
            translation: "I bow to Shiva — the auspicious one who dwells in all, who is the embodiment of pure consciousness, who is the lord of all beings.",
            benefit: "The most powerful Shiva mantra. Destroys sin, bestows peace, leads to self-realization."
        },
        {
            name: "Om Namo Narayanaya",
            type: "The Supreme Vishnu Mantra",
            sanskrit: "ॐ नमो नारायणाय",
            translit: "Om Namo Narayanaya",
            translation: "I bow to Narayana — the supreme self who rests within all beings, the refuge of all souls.",
            benefit: "The supreme Vishnu mantra. Grants liberation, protection, and divine grace."
        },
        {
            name: "Maha Lakshmi Mantra",
            type: "The Wealth & Abundance Chant",
            sanskrit: "ॐ श्रीं ह्रीं क्लीं कमलायै नमः",
            translit: "Om Shrim Hrim Klim Kamalayaai Namah",
            translation: "I bow to the lotus-born goddess Lakshmi — the one who grants wealth, prosperity, beauty, and spiritual abundance.",
            benefit: "Attracts prosperity, removes poverty, brings harmony to the home."
        },
        {
            name: "Kavacham — Morning Shield",
            type: "Cosmic Armor Chant",
            sanskrit: "काराग्रेण बलं मेऽस्तु प्रज्ञया च धनं मम। आरोग्येण त्रिभिर्भूत्वा सुखं जीवेयमनामयः॥",
            "translit": "KaaragreNa bale me astu prajnyaaya cha dhanam mama. AarogyeNa tribhir bhootva, sukham jeevema anaamayah.",
                        "translation": "May strength be at the tip of my hands, and wisdom in my intellect. Having obtained these three — health, strength, and insight — may I live happily free from all illness.",
            benefit: "Chanted upon waking. Invokes divine protection throughout the day."
        },
        {
            name: "Meditation on the Self",
            type: "Pranava Ashram Chant",
            sanskrit: "अयं निजः परो वित्त इत्यवयं निश्चित्य बुधः। निकामयति न यावदायुः कर्म परमाप्नोति धर्मम्॥",
            translit: "Ayam nijah paro vitta iti niyamya buddhah. Nikamayati na yavad ayuh karma samarpayati dharmam.",
            translation: "This self is one's own, all else is temporary — this the wise realize. They do not hoard wealth. Until the end of life, they perform their sacred duty.",
            benefit: "Chanted during meditation. Cultivates detachment and selfless action."
        },
        {
            name: "Sarvajna Peetham",
            type: "Lord's Presence",
            sanskrit: "सर्वं खल्विदं ब्रह्म अजमनादिमपारं शाश्वतम्। अहमेव परं ज्योतिरहमेव परं मनः॥",
            translit: "Sarvam khalvidam brahma ajam anadim aparam shashvatam. Aham eva param jyotir aham eva param manah.",
            translation: "All this is verily Brahman — unborn, beginningless, endless, eternal. I am the supreme light. I am the supreme mind.",
            benefit: "Affirms the unity of the self with the infinite. Dissolves the illusion of separation."
        },
        {
            name: "Vishnu's Eternal Form",
            type: "Bhagavata Scripture",
            sanskrit: "यस्य द्विरदवक्त्राद्याः पारिषद्याः परः शतम्। गायन्ति कीर्तने श्रेष्ठं तं वै लक्ष्मीपतिं नुमः॥",
            translit: "Yasya dvi-ravad-vaktry-adayah parishadyah parah shatam. Gayanti keertane shreshtham tam vai Lakshmi-patimum nah.",
            translation: "We bow to the Lord of Lakshmi, whose attendants number hundreds, whose faces are elephants, whose glories they sing in the highest heaven.",
            benefit: "Chanted in devotion to Vishnu-Lakshmi. Brings divine grace and protection."
        },
        {
            name: "Guru Gita",
            type: "Hymn to the Divine Teacher",
            sanskrit: "गुरुर्विष्णुर्वः सर्वज्ञः सर्वविता सर्वेश्वरः। गुरुर्महान्सोऽहमस्मि गुरुर्मे सोऽस्तु शंकरः॥",
            translit: "Gurur Vishnur va all-knowing, all-seeing, all-Lord. Guru is great, I am that, Guru is my Shankar.",
            translation: "The guru is Vishnu himself — all-knowing, all-seeing, the supreme lord. The guru is the great one, I am that. May the guru be my auspiciousness.",
            benefit: "Honors the divine teacher. Opens the heart to receive sacred knowledge."
        },
        {
            name: "Turiya State Chant",
            type: "Beyond the Three States",
            sanskrit: "नेति नेतीत्येतयोर्वै तृतीयः स स्वयं प्रभुः। तं ज्ञात्वा अमृतं विन्देत तस्मात्तुरीयं विजानीयात्॥",
            translit: "Neti neti ity etayor vai tritiyah sa svayam prabhuh. Tam jnatva amritam vindet tasmat turiyam vijaniyat.",
            translation: "Not this, not this — beyond these two (waking and sleeping) exists the third. That is the lord himself. Knowing that, one finds immortality. Therefore know the fourth.",
            benefit: "Points to the state beyond the three ordinary states of consciousness — the turiya."
        },
        {
            name: "Narayana's Universal Form",
            type: "Shukta Brahman",
            sanskrit: "नारायण परं ब्रह्म तत्परं ज्योतिरुत्तमम्। यस्मात्सर्वं प्रवर्तते तद्भजस्वाथ कौरव॥",
            translit: "Narayana param brahma tat param jyotir uttamam. Yasmat sarvam pravartate tad bhajasvaatha Kaurava.",
            translation: "Narayana is the supreme Brahman, the highest light. From him all things flow. Worship him, O Arjuna, son of kuru.",
            benefit: "Devotion to Narayana. Leads to realization of the all-pervading self."
        }
    ],
    
    dailyPrayers: [
        {
            name: "Morning Prayer — Peace Invocation",
            sanskrit: "असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मामृतं गमय।",
            translit: "Asato ma sad-gamaya. Tamaso ma jyotir-gamaya. Mrityor ma amritam gamaya.",
            translation: "Lead me from unreal to the real. Lead me from darkness to light. Lead me from death to immortality."
        },
        {
            name: "Prayer Before Study",
            sanskrit: "श्री गुरुभ्यो नमः। सर्वदा शरणं गच्छामि सर्वोपनिषद्सु। सर्वं परेश्वरे ज्ञेये ज्ञेयं परं निरञ्जनम्॥",
            translit: "Shri Gurubhyo namah. Sarvada sharanam gachchhami sarvopaneshu. Sarvam pareshvare jneye jneyam param niranjanam.",
            translation: "Reverence to the guru. I always take refuge in all the Upanishads. Everything should be known in the supreme Lord — the knowable is the stainless one."
        },
        {
            name: "Offering of Food",
            sanskrit: "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्। ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना॥",
            translit: "Brahmarpanam brahma havir-brahmaagnau brahmana hutam. Brahmeva tena gantavyam brahma-karma-samadhipa.",
            translation: "The offering is Brahman, the oblation is Brahman, offered by Brahman into the fire of Brahman. Brahman alone is to be reached by one absorbed in Brahman-action."
        },
        {
            name: "Evening Prayer — Surrender",
            sanskrit: "विश्वं दैवं हृदि यत्पुरस्ताद्वा तस्मै देवाय नमः। यो जगामरिरम्भस्थः सर्वभूतनिवासिने॥",
            translit: "Vishvam daivam hridi yat purastad va tasmai devaya namah. Yo jagma arim-bha-sthah sarva-bhuta-nivasine.",
            translation: "To the divine of the universe residing in the heart — to that god, we bow. To the one who pervades all beings, who is the refuge of all — we surrender."
        },
        {
            name: "Prayer for Right Action",
            sanskrit: "कायेन वाचा मनसेन्द्रियैर्वा बुद्ध्यात्मना वा प्रकृतिसंभवैः। करोति यद्यदालेपकं लोकस्तदनुवर्तते॥",
            translit: "Kayena vacha manasendriyai va buddhy atmana va prakriti-sambhavaih. Karoti yad yad alepakam lokas tad anuvartate.",
            "translation": "All actions of body, speech, mind, senses, and intellect — when offered with the intellect to the Supreme — become divine offering. Whatever one does with attachment, the fruit returns to them alone."
        },
        {
            name: "Bhakti Stotram — Devotion's Praise",
            sanskrit: "न गुरोरधिकं ज्ञानं न कर्मणामयं फलम्। गुरोः कारुण्यतः पश्चाद्विज्ञेयं तत्परं पदम्॥",
            translit: "Na guroh adhikam jnanam na karmanam ayam phalam. Guroh karunyatah pashchat vijneyam tat param padam.",
            translation: "There is no knowledge greater than the guru, no fruit of action greater than service to the guru. By the guru's grace alone, the supreme state is known."
        },
        {
            name: "Santosh Shloka — Contentment",
            sanskrit: "सन्तोषामृतं तथा इष्टा धनं सर्वार्थतः समृद्धिम्। कल्पान्तरेऽभयं सौख्यं मयि तिष्ठति नित्यशः॥",
            translit: "Santoshamrit tatha ishta dhanam sarvarthatah samrittim. Kalp-antare shune 'bhayam saukhyam mayi tishthati nityashah.",
            translation: "Contentment is the supreme nectar, desired by all. In the golden age, it bestows fearlessness and eternal bliss that dwells in me forever."
        },
        {
            name: "Universal Prayer",
            sanskrit: "दीनबन्धुर्द्धिगो जन्तूनां करुणात्मा शशाङ्कवत्। सर्वस्याऽऽश्रयणं विष्णो रक्ष रक्ष परः पुमान्॥",
            translit: "Deena-bandhur dhi-go jantanam karunatma shasha-ankavat. Sarvasya ashrayanam Vishnau raksha raksha parah pumaan.",
            translation: "The friend of the poor, the well-wisher of all creatures. The moon-like ocean of compassion. Vishnu is the refuge of all. Protect, protect, O supreme one."
        },
        {
            name: "Shiva's Grace",
            sanskrit: "त्रिगुणात्मकं विश्वं सदसद्भ्यां विनिर्मितम्। शिवः शिवेन संयुक्तं शिवां सेवेत मुक्तये॥",
            translit: "Triguna-atmakam vishvam sadasadbhyam vinirmitam. Shivah shivena samyuktam shivaam seveta muktaye.",
            translation: "The world made of three gunas, created from the real and the unreal. United with Shiva, serve Shiva for liberation."
        },
        {
            name: "Final Meditation Verse",
            sanskrit: "सर्वं खल्विदं ब्रह्म। अजमनादिनिधनं शाश्वतम्। अहं ब्रह्मास्मि अहं विश्वं। तत्त्वमसि देवोऽसि सोऽहमस्मि॥",
            translit: "Sarvam khalvidam brahma. Ajam anadi-nidhanam shashvatam. Aham brahmasmi aham vishvam. Tattvam asi devo 'si so 'ham asmi.",
            translation: "All this is verily Brahman — unborn, without beginning, endless. I am Brahman. I am the universe. Thou art that, thou art divine. I am that."
        }
    ]
};