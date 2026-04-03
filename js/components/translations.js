/**
 * Simple translation store for UI strings.
 */
export const translations = {
    de: {
        // General
        'app.title': 'Süßes Leben mit Diabetes.<br/>Dein Zuckerersatz-Kompass.',
        'app.subtitle': 'Für Diabetiker (Typ 1 & 2): Vergleiche Süßungsmittel nach glykämischem Index,<br/>Kalorien und Insulinbedarf. Finde deine beste Option.',
        'app.search_placeholder': 'Süßungsmittel suchen (z.B. Erythrit, Stevia)...',

        // Navigation
        'nav.home': 'Startseite',
        'nav.about': 'Über uns',
        'nav.guide': 'Ratgeber',
        'nav.impressum': 'Impressum',
        'nav.privacy': 'Datenschutz',

        // Filter Labels (above dropdowns)
        'filter.label.category': 'Kategorie',
        'filter.label.price': 'Preis',
        'filter.label.calories': 'Kalorien',
        'filter.label.gi': 'Blutzuckerwirkung',
        // Filter Options
        'filter.category.all': 'Alle',
        'filter.category.natural': 'Natürlich',
        'filter.category.alcohols': 'Zuckeralkohole',
        'filter.category.extracts': 'Naturextrakte',
        'filter.category.synthetic': 'Synthetisch',
        'filter.price.all': 'Alle',
        'filter.price.low': 'Günstig (€)',
        'filter.price.mid': 'Mittel (€€)',
        'filter.price.high': 'Premium (€€€)',
        'filter.baking.all': 'Alle',
        'filter.baking.good': 'Gut geeignet',
        'filter.calories.all': 'Alle',
        'filter.calories.low': 'Sehr wenig – 0 bis 50 kcal',
        'filter.calories.mid': 'Moderat – 50 bis 200 kcal',
        'filter.calories.high': 'Hoch – über 200 kcal',
        'filter.gi.all': 'Alle',
        'filter.gi.zero': 'Keine',
        'filter.gi.low': 'Niedrig',
        'filter.gi.mid': 'Mittel',
        'filter.gi.high': 'Hoch',
        'sort.label': 'Sortieren:',
        'sort.gi_asc': 'Blutzuckerschonend',
        'sort.kcal_asc': 'Kalorien',
        'sort.price_asc': 'Preis',

        // Cards & Details
        'card.gi': 'Glykäm. Index (GI)',
        'card.kcal': 'kcal / 100g',
        'card.sweetness': 'Süßkraft vs. Zucker',
        'card.blood_sugar': 'Blutzuckerwirkung',
        'card.details': 'Details',
        'card.buy': 'Kaufen',
        'card.no_results': 'Kein Süßungsmittel für diese Auswahl gefunden. Tipp: Entferne einen Filter.',

        // Detail Page
        'detail.back': 'Zurück zur Übersicht',
        'detail.what_is': 'Was ist',
        'detail.properties': 'Eigenschaften',
        'detail.origin': 'Herkunft',
        'detail.baking': 'Zum Backen',
        'detail.nutrition': 'Nährwerte',
        'detail.price': 'Preis (ca.)',
        'detail.buy_title': 'Interesse geweckt?',
        'detail.buy_text': 'Direkt online bestellen – geprüfte Produkte für Diabetiker.',
        'detail.buy_btn': 'Jetzt auf Amazon ansehen',
        'detail.affiliate': '* Affiliate-Link – für dich ohne Mehrkosten',

        // Footer
        // Footer
        'footer.text': '&copy; 2026 DiaSweet. Mit ❤️ von einem Diabetiker.',

        // Quiz & Tabs
        'tab.explore': 'Alle Entdecken',
        'tab.quiz': 'Berater-Quiz',
        'quiz.title': 'Finde deinen Match',
        'quiz.subtitle': 'Beantworte 4 kurze Fragen und wir zeigen dir die besten Alternativen für dich.',
        'quiz.q1.title': '1. Dein Diabetes-Typ?',
        'quiz.q1.a1': 'Typ 1',
        'quiz.q1.a2': 'Typ 2',
        'quiz.q1.a3': 'Keiner / Angehöriger',
        'quiz.q2.title': '2. Was ist dein Hauptziel?',
        'quiz.q2.a1': 'Abnehmen (Kalorien sparen)',
        'quiz.q2.a2': 'Blutzucker absolut stabil halten',
        'quiz.q2.a3': 'Bester Geschmack & Genuss',
        'quiz.q3.title': '3. Hast du einen empfindlichen Magen?',
        'quiz.q3.a1': 'Ja (leicht blähend)',
        'quiz.q3.a2': 'Nein, vertrage alles',
        'quiz.q4.title': '4. Wofür nutzt du es meistens?',
        'quiz.q4.a1': 'Zum Backen',
        'quiz.q4.a2': 'Kaffee & Tee',
        'quiz.q4.a3': 'Alltag (Joghurt, Kaltgetränke)',
        'quiz.btn.show_results': 'Ergebnisse anzeigen',
        'quiz.btn.restart': 'Quiz neu starten',
        'quiz.results.title': 'Deine besten Matches',
        'quiz.results.top_match': 'Top Match',

        // New Detail Sections
        'detail.red_flags': 'Red Flags (Vorsicht)',
        'detail.simulation': 'Blutzucker-Simulation',
        'detail.simulation_text': 'Vergleich: 1 TL Haushaltszucker vs. 1 TL dieses Süßstoffs.',
        'detail.insulin_need': 'Insulinbedarf',
        'detail.low': 'Gering',
        'detail.high': 'Hoch',
        'detail.no_impact': 'Kein Einfluss',

        // Tolerability
        'detail.tolerability': 'Verträglichkeit & Nebenwirkungen',
        'detail.side_effects': 'Mögliche Begleiterscheinungen',
        'tolerability.bloating': 'Blähungen (bei empfindlichem Magen)',
        'tolerability.laxative': 'Abführende Wirkung bei Übermaß',
        'tolerability.cravings': 'Kann Heißhunger triggern',

        // ELID Specifics
        'elid.be_count': 'Berechnung (BE/KE)',
        'elid.t1_tip': 'Typ 1 Profi-Tipp: Da der GI 0 ist, benötigst du keinen Mahlzeiten-Bolus. Achte aber auf die Menge bei Backrezepten.',
        'elid.t2_tip': 'Typ 2 Fokus: Hilft bei der Gewichtsreduktion und entlastet die Bauchspeicheldrüse (kein Insulin-Peak).',
        'elid.beginner_title': 'Für Neudiabetiker',
        'elid.advanced_title': 'Für Profis (Loop & ICT)',
        'elid.beginner_text': 'Warum der GI wichtig ist? Er sagt dir, wie schnell dein Blutzucker Achterbahn fährt.',
        'elid.advanced_text': 'Achtung bei Loop-Systemen: Da keine Glukose ankommt, kann der Algorithmus die Basalrate senken, wenn du zuvor Sport getrieben hast.',
        'elid.time_in_range': 'Time in Range Optimierung',
    },
    en: {
        // General
        'app.title': 'Sweet life with diabetes.<br/>Your guide to sugar alternatives.',
        'app.subtitle': 'For Type 1 and Type 2 diabetics: Compare sweeteners by glycemic index,<br/>calories and insulin impact. Find the best option for you.',
        'app.search_placeholder': 'Search sweeteners (e.g. Erythritol, Stevia)...',

        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.guide': 'Guide',
        'nav.impressum': 'Imprint',
        'nav.privacy': 'Privacy',

        // Filter Labels (above dropdowns)
        'filter.label.category': 'Category',
        'filter.label.price': 'Price',
        'filter.label.calories': 'Calories',
        'filter.label.gi': 'Blood Sugar Impact',
        // Filter Options
        'filter.category.all': 'All',
        'filter.category.natural': 'Natural',
        'filter.category.alcohols': 'Sugar Alcohols',
        'filter.category.extracts': 'Natural Extracts',
        'filter.category.synthetic': 'Synthetic',
        'filter.price.all': 'All',
        'filter.price.low': 'Budget (€)',
        'filter.price.mid': 'Mid-Range (€€)',
        'filter.price.high': 'Premium (€€€)',
        'filter.baking.all': 'All',
        'filter.baking.good': 'Suitable',
        'filter.calories.all': 'All',
        'filter.calories.low': 'Very low – 0 to 50 kcal',
        'filter.calories.mid': 'Moderate – 50 to 200 kcal',
        'filter.calories.high': 'High – over 200 kcal',
        'filter.gi.all': 'All',
        'filter.gi.zero': 'None',
        'filter.gi.low': 'Low',
        'filter.gi.mid': 'Medium',
        'filter.gi.high': 'High',
        'sort.label': 'Sort by:',
        'sort.gi_asc': 'Blood Sugar Friendly',
        'sort.kcal_asc': 'Calories',
        'sort.price_asc': 'Price',

        // Cards & Details
        'card.gi': 'Glycemic Index (GI)',
        'card.kcal': 'kcal / 100g',
        'card.sweetness': 'Sweetness vs Sugar',
        'card.blood_sugar': 'Blood Sugar Effect',
        'card.details': 'Details',
        'card.buy': 'Buy',
        'card.no_results': 'No sweeteners found. Tip: Remove a filter.',

        // Detail Page
        'detail.back': 'Back to overview',
        'detail.what_is': 'What is',
        'detail.properties': 'Properties',
        'detail.origin': 'Origin',
        'detail.baking': 'Baking Suitability',
        'detail.nutrition': 'Nutrition Values',
        'detail.price': 'Price (approx.)',
        'detail.buy_title': 'Interested?',
        'detail.buy_text': 'Order directly online – vetted products for diabetics.',
        'detail.buy_btn': 'View on Amazon',
        'detail.affiliate': '* Affiliate link – no extra cost for you',

        // Footer
        // Footer
        'footer.text': '&copy; 2026 DiaSweet. Made with ❤️ by a diabetic.',

        // Quiz & Tabs
        'tab.explore': 'Explore All',
        'tab.quiz': 'Advisor Quiz',
        'quiz.title': 'Find your Match',
        'quiz.subtitle': 'Answer 4 quick questions and we will show you the best alternatives for you.',
        'quiz.q1.title': '1. Your Diabetes Type?',
        'quiz.q1.a1': 'Type 1',
        'quiz.q1.a2': 'Type 2',
        'quiz.q1.a3': 'None / Relative',
        'quiz.q2.title': '2. What is your main goal?',
        'quiz.q2.a1': 'Weight loss (Save calories)',
        'quiz.q2.a2': 'Keep blood sugar absolutely stable',
        'quiz.q2.a3': 'Best taste & enjoyment',
        'quiz.q3.title': '3. Do you have a sensitive stomach?',
        'quiz.q3.a1': 'Yes (easily bloated)',
        'quiz.q3.a2': 'No, I tolerate everything',
        'quiz.q4.title': '4. What will you use it for mostly?',
        'quiz.q4.a1': 'Baking',
        'quiz.q4.a2': 'Coffee & Tea',
        'quiz.q4.a3': 'Everyday (Yogurt, Cold drinks)',
        'quiz.btn.show_results': 'Show Results',
        'quiz.btn.restart': 'Restart Quiz',
        'quiz.results.title': 'Your Best Matches',
        'quiz.results.top_match': 'Top Match',

        // New Detail Sections
        'detail.red_flags': 'Red Flags (Warning)',
        'detail.simulation': 'Blood Sugar Simulation',
        'detail.simulation_text': 'Comparison: 1 tsp Table Sugar vs. 1 tsp of this sweetener.',
        'detail.insulin_need': 'Insulin Demand',
        'detail.low': 'Low',
        'detail.high': 'High',
        'detail.no_impact': 'No Impact',

        // Tolerability
        'detail.tolerability': 'Tolerability & Side Effects',
        'detail.side_effects': 'Possible Side Effects',
        'tolerability.bloating': 'Bloating (for sensitive stomachs)',
        'tolerability.laxative': 'Laxative effect in excess',
        'tolerability.cravings': 'Can trigger cravings',

        // ELID Specifics
        'elid.be_count': 'Carb Count (BE/KE)',
        'elid.t1_tip': 'Type 1 Pro-Tip: Since GI is 0, no meal bolus is required. But watch the total bulk in baking recipes.',
        'elid.t2_tip': 'Type 2 Focus: Supports weight loss and reduces strain on the pancreas (no insulin peak).',
        'elid.beginner_title': 'For New Diabetics',
        'elid.advanced_title': 'For Pros (Loop & ICT)',
        'elid.beginner_text': 'Why GI matters? it tells you how fast your blood sugar goes on a rollercoaster ride.',
        'elid.advanced_text': 'Note for Loopers: Since no glucose is coming in, the algorithm might lower basal if you exercised earlier.',
        'elid.time_in_range': 'Time in Range Optimization',
    }
};

let currentLanguage = 'de';

export function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        // Optionally store in localStorage
        localStorage.setItem('sweetswap_lang', lang);
    }
}

export function getLanguage() {
    return currentLanguage;
}

export function t(key) {
    return translations[currentLanguage][key] || key;
}

// Init lang from local storage if exists
const savedLang = localStorage.getItem('sweetswap_lang');
if (savedLang) {
    setLanguage(savedLang);
}
