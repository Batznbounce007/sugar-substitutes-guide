import { substitutes } from '../data/substitutes.js?v=10';
import { getLanguage, t } from './translations.js?v=10';

// Global State
let activeTab = 'explore'; // 'explore' or 'quiz'
let activeCategory = 'Alle';
let activePrice = 'Alle';
let activeBaking = 'Alle';
let activeCalories = 'Alle';
let activeGI = 'Alle';
let searchQuery = '';
let activeSort = 'gi_asc'; // gi_asc, kcal_asc, price_asc

// Quiz State
let quizStep = 1;
let quizAnswers = {
    diabetesType: null,
    goal: null,
    sensitiveStomach: null,
    useCase: null
};
let quizResults = [];

export async function renderHome(container) {
    const html = `
        <div class="animate-in pb-16">
            <!-- Hero Section -->
            <section class="bg-background pt-10 pb-4 px-4 flex flex-col items-center text-center">
                <h1 class="font-serif text-5xl md:text-6xl lg:text-[64px] font-bold text-foreground mb-3 leading-tight max-w-4xl tracking-tight">
                    ${t('app.title')}
                </h1>
                <p class="text-lg text-muted-foreground max-w-2xl mb-8">
                    ${t('app.subtitle')}
                </p>

                <!-- Tab Switcher -->
                <div class="flex p-1 bg-secondary/50 rounded-2xl mb-8 w-full max-w-md">
                    <button id="tab-explore" class="flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all ${activeTab === 'explore' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}">
                        ${t('tab.explore')}
                    </button>
                    <button id="tab-quiz" class="flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all ${activeTab === 'quiz' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}">
                        ${t('tab.quiz')}
                    </button>
                </div>
            </section>

            <div id="tab-content-container">
                <!-- Content will be injected here -->
            </div>
        </div>
    `;

    container.innerHTML = html;
    renderTabContent();

    // Tab Listeners
    document.getElementById('tab-explore').addEventListener('click', () => {
        activeTab = 'explore';
        renderTabContent();
    });
    document.getElementById('tab-quiz').addEventListener('click', () => {
        activeTab = 'quiz';
        renderTabContent();
    });
}

function renderTabContent() {
    const container = document.getElementById('tab-content-container');
    if (!container) return;

    // Update Tab UI highlights
    const btnExplore = document.getElementById('tab-explore');
    const btnQuiz = document.getElementById('tab-quiz');

    if (activeTab === 'explore') {
        btnExplore.className = "flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all bg-white shadow-sm text-primary";
        btnQuiz.className = "flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all text-muted-foreground hover:text-foreground";
        renderExploreTab(container);
    } else {
        btnQuiz.className = "flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all bg-white shadow-sm text-primary";
        btnExplore.className = "flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all text-muted-foreground hover:text-foreground";
        renderQuizTab(container);
    }
}

function renderExploreTab(container) {
    container.innerHTML = `
        <!-- Search Bar -->
        <section class="flex flex-col items-center px-4 mb-8">
            <div class="w-full max-w-lg relative group">
                <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <i data-lucide="search" class="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors"></i>
                </div>
                <input type="text" id="search-input" value="${searchQuery}" placeholder="${t('app.search_placeholder')}" 
                    class="w-full rounded-full border border-border bg-white py-4 pl-12 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]">
            </div>
        </section>

        <!-- Filters & Grid Section -->
        <section class="container mx-auto max-w-7xl px-4 mt-4">
            <!-- Toolbar -->
            <div class="flex flex-col lg:flex-row gap-4 py-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-border/60">
                <div class="flex flex-wrap lg:flex-nowrap items-end gap-3 w-full lg:w-auto flex-1">
                    <!-- Category Filter -->
                    <div class="relative w-full sm:w-auto">
                        <div class="flex items-center bg-[#F8F7F4] border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary hover:bg-muted/50 transition-all">
                            <label for="filter-category" class="pl-3 pr-1 py-1.5 text-sm font-semibold text-muted-foreground whitespace-nowrap cursor-pointer">${t('filter.label.category')}:</label>
                            <select id="filter-category" class="appearance-none bg-transparent py-1.5 pl-1 pr-8 text-sm font-medium text-foreground focus:outline-none cursor-pointer flex-grow">
                                <option value="Alle" ${activeCategory === 'Alle' ? 'selected' : ''}>${t('filter.category.all')}</option>
                                <option value="Natürlich" ${activeCategory === 'Natürlich' ? 'selected' : ''}>${t('filter.category.natural')}</option>
                                <option value="Zuckeralkohole" ${activeCategory === 'Zuckeralkohole' ? 'selected' : ''}>${t('filter.category.alcohols')}</option>
                                <option value="Naturextrakte" ${activeCategory === 'Naturextrakte' ? 'selected' : ''}>${t('filter.category.extracts')}</option>
                                <option value="Synthetisch" ${activeCategory === 'Synthetisch' ? 'selected' : ''}>${t('filter.category.synthetic')}</option>
                            </select>
                            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <i data-lucide="chevron-down" class="h-4 w-4 text-muted-foreground"></i>
                            </div>
                        </div>
                    </div>

                    <!-- GI Filter -->
                    <div class="relative w-full sm:w-auto">
                        <div class="flex items-center bg-[#F8F7F4] border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary hover:bg-muted/50 transition-all">
                            <label for="filter-gi" class="pl-3 pr-1 py-1.5 text-sm font-semibold text-muted-foreground whitespace-nowrap cursor-pointer">${t('filter.label.gi')}:</label>
                            <select id="filter-gi" class="appearance-none bg-transparent py-1.5 pl-1 pr-8 text-sm font-medium text-foreground focus:outline-none cursor-pointer flex-grow">
                                <option value="Alle" ${activeGI === 'Alle' ? 'selected' : ''}>${t('filter.gi.all')}</option>
                                <option value="zero" ${activeGI === 'zero' ? 'selected' : ''}>${t('filter.gi.zero')}</option>
                                <option value="low" ${activeGI === 'low' ? 'selected' : ''}>${t('filter.gi.low')}</option>
                                <option value="mid" ${activeGI === 'mid' ? 'selected' : ''}>${t('filter.gi.mid')}</option>
                                <option value="high" ${activeGI === 'high' ? 'selected' : ''}>${t('filter.gi.high')}</option>
                            </select>
                            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <i data-lucide="chevron-down" class="h-4 w-4 text-muted-foreground"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Calories Filter -->
                    <div class="relative w-full sm:w-auto">
                        <div class="flex items-center bg-[#F8F7F4] border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary hover:bg-muted/50 transition-all">
                            <label for="filter-calories" class="pl-3 pr-1 py-1.5 text-sm font-semibold text-muted-foreground whitespace-nowrap cursor-pointer">${t('filter.label.calories')}:</label>
                            <select id="filter-calories" class="appearance-none bg-transparent py-1.5 pl-1 pr-8 text-sm font-medium text-foreground focus:outline-none cursor-pointer flex-grow">
                                <option value="Alle" ${activeCalories === 'Alle' ? 'selected' : ''}>${t('filter.calories.all')}</option>
                                <option value="low" ${activeCalories === 'low' ? 'selected' : ''}>${t('filter.calories.low')}</option>
                                <option value="mid" ${activeCalories === 'mid' ? 'selected' : ''}>${t('filter.calories.mid')}</option>
                                <option value="high" ${activeCalories === 'high' ? 'selected' : ''}>${t('filter.calories.high')}</option>
                            </select>
                            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <i data-lucide="chevron-down" class="h-4 w-4 text-muted-foreground"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Price Filter -->
                    <div class="relative w-full sm:w-auto">
                        <div class="flex items-center bg-[#F8F7F4] border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary hover:bg-muted/50 transition-all">
                            <label for="filter-price" class="pl-3 pr-1 py-1.5 text-sm font-semibold text-muted-foreground whitespace-nowrap cursor-pointer">${t('filter.label.price')}:</label>
                            <select id="filter-price" class="appearance-none bg-transparent py-1.5 pl-1 pr-8 text-sm font-medium text-foreground focus:outline-none cursor-pointer flex-grow">
                                <option value="Alle" ${activePrice === 'Alle' ? 'selected' : ''}>${t('filter.price.all')}</option>
                                <option value="1" ${activePrice === '1' ? 'selected' : ''}>${t('filter.price.low')}</option>
                                <option value="2" ${activePrice === '2' ? 'selected' : ''}>${t('filter.price.mid')}</option>
                                <option value="3" ${activePrice === '3' ? 'selected' : ''}>${t('filter.price.high')}</option>
                            </select>
                            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <i data-lucide="chevron-down" class="h-4 w-4 text-muted-foreground"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sort -->
                <div class="flex items-center gap-3 w-full lg:w-auto shrink-0 justify-end lg:border-l border-border/60 lg:pl-4">
                    <div class="relative w-full sm:w-auto">
                        <div class="flex items-center bg-white border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary hover:bg-muted/10 transition-all cursor-pointer">
                            <label for="sort-select" class="pl-3 pr-1 py-1.5 text-muted-foreground cursor-pointer flex items-center justify-center pointer-events-none" aria-label="${t('sort.label')}">
                                <i data-lucide="arrow-up-down" class="w-4 h-4"></i>
                            </label>
                            <select id="sort-select" class="appearance-none bg-transparent py-1.5 pl-1 pr-8 text-sm font-medium focus:outline-none cursor-pointer flex-grow min-w-[160px]">
                                <option value="gi_asc" ${activeSort === 'gi_asc' ? 'selected' : ''}>${t('sort.gi_asc')}</option>
                                <option value="kcal_asc" ${activeSort === 'kcal_asc' ? 'selected' : ''}>${t('sort.kcal_asc')}</option>
                                <option value="price_asc" ${activeSort === 'price_asc' ? 'selected' : ''}>${t('sort.price_asc')}</option>
                            </select>
                            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <i data-lucide="chevron-down" class="h-4 w-4 text-muted-foreground"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grid -->
            <div id="substitutes-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Cards injected here -->
            </div>
        </section>
    `;

    if (window.lucide) window.lucide.createIcons();
    updateGrid();

    // Listeners for explore tab
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        updateGrid();
    });
    document.getElementById('filter-category').addEventListener('change', (e) => {
        activeCategory = e.target.value;
        updateGrid();
    });
    document.getElementById('filter-price').addEventListener('change', (e) => {
        activePrice = e.target.value;
        updateGrid();
    });
    document.getElementById('filter-calories').addEventListener('change', (e) => {
        activeCalories = e.target.value;
        updateGrid();
    });
    document.getElementById('filter-gi').addEventListener('change', (e) => {
        activeGI = e.target.value;
        updateGrid();
    });
    document.getElementById('sort-select').addEventListener('change', (e) => {
        activeSort = e.target.value;
        updateGrid();
    });
}

function updateGrid() {
    const grid = document.getElementById('substitutes-grid');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = substitutes.filter(s => {
        let matchCat = activeCategory === 'Alle' || s.category === activeCategory;
        let matchPrice = activePrice === 'Alle' || (s.priceCategory && s.priceCategory == parseInt(activePrice));

        let matchCalories = activeCalories === 'Alle';
        if (activeCalories === 'low') matchCalories = s.calories <= 50;
        if (activeCalories === 'mid') matchCalories = s.calories > 50 && s.calories <= 200;
        if (activeCalories === 'high') matchCalories = s.calories > 200;

        let matchGI = activeGI === 'Alle';
        if (activeGI === 'zero') matchGI = s.glycemicIndex === 0;
        if (activeGI === 'low') matchGI = s.glycemicIndex > 0 && s.glycemicIndex < 35;
        if (activeGI === 'mid') matchGI = s.glycemicIndex >= 35 && s.glycemicIndex < 55;
        if (activeGI === 'high') matchGI = s.glycemicIndex >= 55;

        // Ensure we check localized names in search
        const isEn = getLanguage() === 'en';
        const name = isEn ? s.nameEn : s.name;
        const shortDesc = isEn && s.shortDescriptionEn ? s.shortDescriptionEn : s.shortDescription;
        let matchSearch = name.toLowerCase().includes(searchQuery) || (shortDesc && shortDesc.toLowerCase().includes(searchQuery));

        return matchCat && matchPrice && matchCalories && matchGI && matchSearch;
    });

    // Apply Sort
    filtered.sort((a, b) => {
        if (activeSort === 'gi_asc') return a.glycemicIndex - b.glycemicIndex;
        if (activeSort === 'kcal_asc') return a.calories - b.calories;
        if (activeSort === 'price_asc') return (a.priceCategory || 99) - (b.priceCategory || 99);
        return 0;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-16 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl bg-white/50">
                <i data-lucide="search-x" class="mx-auto h-8 w-8 mb-3 opacity-50"></i>
                <p>${t('card.no_results')}</p>
            </div>`;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    const isEn = getLanguage() === 'en';
    filtered.forEach(item => {
        const name = isEn ? item.nameEn : item.name;
        const category = isEn && item.categoryEn ? item.categoryEn : item.category;
        const sweetnessLabel = isEn ? item.sweetnessLabelEn : item.sweetnessLabel;
        const bloodSugarImpact = isEn ? item.bloodSugarImpactEn : item.bloodSugarImpact;

        const card = document.createElement('div');
        card.className = 'group relative flex flex-col bg-white rounded-[20px] shadow-sm border border-border/60 hover:shadow-md transition-shadow overflow-hidden';

        card.innerHTML = `
            <div class="h-44 bg-[#F8F7F4] flex items-center justify-center relative ${item.newImage ? 'p-0' : 'p-4'} cursor-pointer" data-route="detail" data-id="${item.id}">
                <div class="absolute top-4 right-4 z-10">
                    <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-white text-foreground shadow-sm uppercase tracking-wider">
                        ${category}
                    </span>
                </div>
                ${item.newImage
                ? `<img src="assets/images/${item.newImage}" alt="${name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />`
                : `<div class="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center text-5xl filter drop-shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-border/40">
                         ${item.iconEmoji}
                       </div>`
            }
            </div>

            <div class="p-6 flex flex-col flex-1 transform transition-all hover:bg-white relative">
                <div class="flex items-start justify-between gap-3 mb-5">
                    <h3 class="font-serif text-[22px] leading-tight font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer" data-route="detail" data-id="${item.id}">
                        ${name}
                    </h3>
                    <span class="shrink-0 inline-flex items-center gap-1 text-[13px] font-bold text-yellow-600 bg-yellow-50/50 py-0.5 px-2 rounded-lg border border-yellow-200/50 drop-shadow-sm mt-0.5" title="Amazon Rating">
                        <i data-lucide="star" class="w-3.5 h-3.5 fill-current text-yellow-500"></i>
                        ${item.amazonRating}
                    </span>
                </div>
                
                <div class="grid grid-cols-2 gap-3 mb-6 flex-1">
                    <div class="bg-[#F8F7F4] rounded-xl p-3 text-center flex flex-col justify-center">
                        <span class="font-bold text-lg leading-tight ${item.glycemicIndex === 0 ? 'text-primary' : 'text-foreground'}">${item.glycemicIndex}</span>
                        <span class="text-[10px] text-muted-foreground tracking-wide mt-1">${t('card.gi')}</span>
                    </div>
                    <div class="bg-[#F8F7F4] rounded-xl p-3 text-center flex flex-col justify-center">
                        <span class="font-bold text-lg leading-tight">${item.calories}</span>
                        <span class="text-[10px] text-muted-foreground tracking-wide mt-1">${t('card.kcal')}</span>
                    </div>
                    <div class="bg-[#F8F7F4] rounded-xl p-3 text-center flex flex-col justify-center">
                        <span class="font-bold text-lg leading-tight">${sweetnessLabel}</span>
                        <span class="text-[10px] text-muted-foreground tracking-wide mt-1">${t('card.sweetness')}</span>
                    </div>
                    <div class="bg-[#F8F7F4] rounded-xl p-3 text-center flex flex-col justify-center">
                        <span class="font-bold text-[13px] leading-tight ${item.bloodSugarImpact === 'Niedrig' || bloodSugarImpact === 'Low' ? 'text-primary' : 'text-foreground'}">${bloodSugarImpact}</span>
                        <span class="text-[10px] text-muted-foreground tracking-wide mt-1">${t('card.blood_sugar')}</span>
                    </div>
                </div>

                <div class="flex items-stretch gap-3 mt-auto">
                    <button class="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center" data-route="detail" data-id="${item.id}">
                        ${t('card.details')}
                    </button>
                    <a href="${item.affiliateLink}" target="_blank" rel="noopener noreferrer" class="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                        ${t('card.buy')} <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
}

function renderQuizTab(container) {
    container.innerHTML = `
        <section class="container mx-auto max-w-2xl px-4 py-8">
            <div class="bg-white rounded-3xl p-8 border border-border shadow-sm text-center">
                <div id="quiz-step-container">
                    <!-- Quiz Step will be injected here -->
                </div>
            </div>
        </section>
    `;
    renderQuizStep();
}

function renderQuizStep() {
    const container = document.getElementById('quiz-step-container');
    if (!container) return;

    if (quizStep === 1) {
        container.innerHTML = `
            <div class="animate-in">
                <h2 class="font-serif text-3xl font-bold mb-4">${t('quiz.q1.title')}</h2>
                <div class="grid grid-cols-1 gap-4 mt-8 text-left">
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="type1">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q1.a1')}</div>
                        <div class="text-sm text-muted-foreground italic">Insulinpflichtig</div>
                    </button>
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="type2">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q1.a2')}</div>
                        <div class="text-sm text-muted-foreground italic">Insulinresistenz / Tablette</div>
                    </button>
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="none">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q1.a3')}</div>
                        <div class="text-sm text-muted-foreground italic">Prävention / Gesunder Lebensstil</div>
                    </button>
                </div>
            </div>
        `;
    } else if (quizStep === 2) {
        container.innerHTML = `
            <div class="animate-in">
                <h2 class="font-serif text-3xl font-bold mb-4">${t('quiz.q2.title')}</h2>
                <div class="grid grid-cols-1 gap-4 mt-8 text-left">
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="weightloss">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q2.a1')}</div>
                    </button>
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="stable">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q2.a2')}</div>
                    </button>
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="taste">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q2.a3')}</div>
                    </button>
                </div>
            </div>
        `;
    } else if (quizStep === 3) {
        container.innerHTML = `
            <div class="animate-in">
                <h2 class="font-serif text-3xl font-bold mb-4">${t('quiz.q3.title')}</h2>
                <div class="grid grid-cols-1 gap-4 mt-8 text-left">
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="yes">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q3.a1')}</div>
                    </button>
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="no">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q3.a2')}</div>
                    </button>
                </div>
            </div>
        `;
    } else if (quizStep === 4) {
        container.innerHTML = `
            <div class="animate-in">
                <h2 class="font-serif text-3xl font-bold mb-4">${t('quiz.q4.title')}</h2>
                <div class="grid grid-cols-1 gap-4 mt-8 text-left">
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="baking">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q4.a1')}</div>
                    </button>
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="coffee">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q4.a2')}</div>
                    </button>
                    <button class="quiz-opt p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group" data-val="everyday">
                        <div class="font-bold text-lg mb-1 group-hover:text-primary">${t('quiz.q4.a3')}</div>
                    </button>
                </div>
            </div>
        `;
    } else {
        renderQuizLoading();
        return;
    }

    // Question Button Listeners
    container.querySelectorAll('.quiz-opt').forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.dataset.val;
            if (quizStep === 1) quizAnswers.diabetesType = val;
            if (quizStep === 2) quizAnswers.goal = val;
            if (quizStep === 3) quizAnswers.sensitiveStomach = val;
            if (quizStep === 4) quizAnswers.useCase = val;

            quizStep++;
            renderQuizStep();
        });
    });
}

function renderQuizLoading() {
    const container = document.getElementById('quiz-step-container');
    if (!container) return;
    container.innerHTML = `
        <div class="py-12 flex flex-col items-center">
            <div class="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
            <p class="text-muted-foreground animate-pulse">Analysiere Profile...</p>
        </div>
    `;

    setTimeout(() => {
        calculateMatches();
        renderQuizResults();
    }, 1200);
}

function calculateMatches() {
    let scores = substitutes.map(s => {
        let score = 0;

        // Diabetes Type & Goal Logic
        if (quizAnswers.diabetesType === 'type1' || quizAnswers.goal === 'stable') {
            if (s.glycemicIndex === 0) score += 50;
            else if (s.glycemicIndex < 35) score += 10;
            else score -= 100; // Penalize High GI for Type 1 / Stability
        }

        if (quizAnswers.goal === 'weightloss') {
            if (s.calories === 0) score += 30;
            else if (s.calories < 50) score += 10;
            else score -= 20;
        }

        // Stomach Sensitivity
        if (quizAnswers.sensitiveStomach === 'yes') {
            // Penalize high FODMAP alcohols except Erythritol
            if (s.category === 'Zuckeralkohole' && s.name !== 'Erythritol' && s.name !== 'Erythrit') {
                score -= 60;
            }
        }

        // Use Case
        if (quizAnswers.useCase === 'baking') {
            if (s.baking === 'good') score += 40;
            else if (s.baking === 'mixed') score += 10;
            else score -= 50;
        }

        if (quizAnswers.useCase === 'coffee') {
            if (s.category === 'Naturextrakte' || s.name === 'Erythrit' || s.name === 'Erythritol') score += 20;
        }

        return { substitute: s, score: score };
    });

    scores.sort((a, b) => b.score - a.score);
    quizResults = scores.slice(0, 3).map(res => res.substitute);
}

function renderQuizResults() {
    const container = document.getElementById('quiz-step-container');
    if (!container) return;
    const isEn = getLanguage() === 'en';

    let gridHtml = quizResults.map((item, index) => {
        const name = isEn ? item.nameEn : item.name;
        const category = isEn && item.categoryEn ? item.categoryEn : item.category;

        return `
            <div class="relative flex flex-col bg-[#F8F7F4] rounded-2xl p-6 border ${index === 0 ? 'border-primary shadow-md scale-105 z-10' : 'border-border'} transition-all">
                ${index === 0 ? `<span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">${t('quiz.results.top_match')}</span>` : ''}
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl border border-border/40">
                         ${item.iconEmoji}
                    </div>
                    <div class="text-left">
                        <div class="text-[10px] font-bold text-primary uppercase tracking-wider">${category}</div>
                        <h4 class="font-serif text-xl font-bold">${name}</h4>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-2 mb-6">
                    <div class="bg-white/80 rounded-lg p-2 text-center">
                        <span class="block font-bold text-sm">${item.glycemicIndex}</span>
                        <span class="text-[8px] text-muted-foreground uppercase">GI</span>
                    </div>
                    <div class="bg-white/80 rounded-lg p-2 text-center">
                        <span class="block font-bold text-sm">${item.calories}</span>
                        <span class="text-[8px] text-muted-foreground uppercase">KCAL</span>
                    </div>
                </div>
                
                <button class="mt-auto w-full bg-primary text-white font-bold py-2 rounded-xl text-xs" data-route="detail" data-id="${item.id}">
                    ${t('card.details')}
                </button>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="animate-in">
            <h2 class="font-serif text-3xl font-bold mb-2">${t('quiz.results.title')}</h2>
            <p class="text-muted-foreground mb-12">Basierend auf deinem Profil sind dies unsere Top-Empfehlungen.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                ${gridHtml}
            </div>
            
            <button id="quiz-restart" class="text-primary font-bold hover:underline flex items-center gap-2 mx-auto">
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i> ${t('quiz.btn.restart')}
            </button>
        </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    document.getElementById('quiz-restart').addEventListener('click', () => {
        quizStep = 1;
        quizAnswers = { diabetesType: null, goal: null, sensitiveStomach: null, useCase: null };
        renderQuizStep();
    });
}
