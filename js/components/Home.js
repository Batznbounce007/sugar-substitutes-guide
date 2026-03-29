import { substitutes } from '../data/substitutes.js?v=10';
import { getLanguage, t } from './translations.js?v=10';

let activeCategory = 'Alle';
let activePrice = 'Alle';
let activeCalories = 'Alle';
let activeGI = 'Alle';
let searchQuery = '';
let activeSort = 'gi_asc'; // gi_asc, kcal_asc, price_asc
let activeTab = 'explore'; // 'explore', 'quiz'

// Quiz State
let currentQuizStep = 1;
let quizAnswers = {
    type: null, // 1, 2, none
    goal: null, // weight, stability, taste
    sensitive: null, // yes, no
    useCase: null // baking, coffee, everyday
};
let quizResults = null;

export async function renderHome(container) {
    const html = `
        <div class="animate-in pb-16">
            <!-- Hero Section -->
            <section class="bg-background pt-10 pb-6 px-4 flex flex-col items-center text-center">
                <h1 class="font-serif text-5xl md:text-6xl lg:text-[64px] font-bold text-foreground mb-3 leading-tight max-w-4xl tracking-tight">
                    ${t('app.title')}
                </h1>
                <p class="text-lg text-muted-foreground max-w-2xl mb-8">
                    ${t('app.subtitle')}
                </p>

                <!-- Tab Switcher -->
                <div class="flex p-1 bg-muted/30 rounded-2xl w-full max-w-sm mb-8 border border-border/40">
                    <button id="tab-explore" class="flex-1 py-2.5 px-4 rounded-xl text-[15px] font-semibold transition-all ${activeTab === 'explore' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}">
                        ${t('tab.explore')}
                    </button>
                    <button id="tab-quiz" class="flex-1 py-2.5 px-4 rounded-xl text-[15px] font-semibold transition-all ${activeTab === 'quiz' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}">
                        ${t('tab.quiz')}
                    </button>
                </div>

                ${activeTab === 'explore' ? `
                <!-- Search Bar -->
                <div class="w-full max-w-lg relative group">
                    <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <i data-lucide="search" class="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors"></i>
                    </div>
                    <input type="text" id="search-input" value="${searchQuery}" placeholder="${t('app.search_placeholder')}" 
                        class="w-full rounded-full border border-border bg-white py-4 pl-12 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]">
                </div>
                ` : ''}
            </section>

            <div id="home-content">
                ${activeTab === 'explore' ? renderExploreView() : renderQuizView()}
            </div>
        </div>
    `;

    container.innerHTML = html;

    // Attach Tab Listeners
    document.getElementById('tab-explore').onclick = () => {
        activeTab = 'explore';
        renderHome(container);
    };
    document.getElementById('tab-quiz').onclick = () => {
        activeTab = 'quiz';
        renderHome(container);
    };

    if (activeTab === 'explore') {
        attachExploreListeners(container);
        updateGrid();
    } else {
        attachQuizListeners(container);
    }

    if (window.lucide) window.lucide.createIcons();
}

function renderExploreView() {
    return `
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
            </div>

            <!-- Sort -->
            <div class="flex items-center gap-3 w-full lg:w-auto shrink-0 justify-end lg:border-l border-border/60 lg:pl-4">
                <div class="relative w-full sm:w-auto">
                    <div class="flex items-center bg-white border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary hover:bg-muted/10 transition-all cursor-pointer">
                        <label for="sort-select" class="pl-3 pr-1 py-1.5 text-muted-foreground cursor-pointer flex items-center justify-center pointer-events-none">
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
            <!-- Cards will be injected here -->
        </div>
    </section>`;
}

function renderQuizView() {
    if (quizResults) {
        return renderQuizResults();
    }

    const steps = [
        {
            key: 'type', title: t('quiz.q1.title'), options: [
                { id: '1', label: t('quiz.q1.a1'), icon: 'activity' },
                { id: '2', label: t('quiz.q1.a2'), icon: 'scale' },
                { id: 'none', label: t('quiz.q1.a3'), icon: 'heart' }
            ]
        },
        {
            key: 'goal', title: t('quiz.q2.title'), options: [
                { id: 'weight', label: t('quiz.q2.a1'), icon: 'trending-down' },
                { id: 'stability', label: t('quiz.q2.a2'), icon: 'bar-chart-2' },
                { id: 'taste', label: t('quiz.q2.a3'), icon: 'utensils' }
            ]
        },
        {
            key: 'sensitive', title: t('quiz.q3.title'), options: [
                { id: 'yes', label: t('quiz.q3.a1'), icon: 'alert-circle' },
                { id: 'no', label: t('quiz.q3.a2'), icon: 'check-circle' }
            ]
        },
        {
            key: 'useCase', title: t('quiz.q4.title'), options: [
                { id: 'baking', label: t('quiz.q4.a1'), icon: 'pie-chart' },
                { id: 'coffee', label: t('quiz.q4.a2'), icon: 'coffee' },
                { id: 'everyday', label: t('quiz.q4.a3'), icon: 'sun' }
            ]
        }
    ];

    const step = steps[currentQuizStep - 1];

    return `
    <section class="container mx-auto max-w-2xl px-4 py-8">
        <div class="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-border/60 text-center animate-in">
            <span class="text-sm font-bold text-primary mb-4 block uppercase tracking-widest">${currentQuizStep} / 4</span>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">${step.title}</h2>
            
            <div class="grid gap-4">
                ${step.options.map(opt => `
                    <button class="quiz-option flex items-center gap-4 p-5 rounded-2xl border-2 border-border/40 hover:border-primary hover:bg-primary/5 transition-all text-left group" data-key="${step.key}" data-val="${opt.id}">
                        <div class="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <i data-lucide="${opt.icon}" class="w-6 h-6"></i>
                        </div>
                        <span class="text-lg font-semibold text-foreground">${opt.label}</span>
                        <i data-lucide="chevron-right" class="ml-auto w-5 h-5 text-muted-foreground"></i>
                    </button>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderQuizResults() {
    return `
    <section class="container mx-auto max-w-5xl px-4 py-8 animate-in">
        <div class="text-center mb-12">
            <h2 class="font-serif text-4xl font-bold text-foreground mb-4">${t('quiz.results.title')}</h2>
            <button id="restart-quiz" class="text-primary font-semibold hover:underline flex items-center gap-2 mx-auto">
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i> ${t('quiz.btn.restart')}
            </button>
        </div>
        <div id="substitutes-grid" class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Results injected here -->
        </div>
    </section>`;
}

function attachExploreListeners(container) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            updateGrid();
        });
    }

    ['filter-category', 'filter-gi', 'filter-calories', 'sort-select'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', (e) => {
                if (id === 'filter-category') activeCategory = e.target.value;
                if (id === 'filter-gi') activeGI = e.target.value;
                if (id === 'filter-calories') activeCalories = e.target.value;
                if (id === 'sort-select') activeSort = e.target.value;
                updateGrid();
            });
        }
    });
}

function attachQuizListeners(container) {
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.onclick = () => {
            const key = btn.dataset.key;
            const val = btn.dataset.val;
            quizAnswers[key] = val;

            if (currentQuizStep < 4) {
                currentQuizStep++;
                renderHome(container);
            } else {
                calculateResults();
                renderHome(container);
            }
        };
    });

    const restartBtn = document.getElementById('restart-quiz');
    if (restartBtn) {
        restartBtn.onclick = () => {
            currentQuizStep = 1;
            quizAnswers = { type: null, goal: null, sensitive: null, useCase: null };
            quizResults = null;
            renderHome(container);
        };
    }

    if (quizResults) {
        updateResultsGrid();
    }
}

function calculateResults() {
    let matches = substitutes.filter(s => {
        // Sensitive stomach filter
        if (quizAnswers.sensitive === 'yes') {
            const avoids = ['xylit', 'maltit', 'sorbit', 'isomalt'];
            if (avoids.includes(s.id)) return false;
        }

        // Use case filter
        if (quizAnswers.useCase === 'baking') {
            if (s.bakingSuitability.includes('Mäßig') || s.bakingSuitability.includes('Läßig')) {
                // Keep anyway if it's generally good, but prioritize
            }
        }

        return true;
    });

    // Score them
    matches = matches.map(s => {
        let score = 0;

        // GI influence
        if (quizAnswers.type === '1' || quizAnswers.goal === 'stability') {
            if (s.glycemicIndex === 0) score += 50;
            else if (s.glycemicIndex < 10) score += 20;
            else score -= 30;
        }

        // Calorie influence
        if (quizAnswers.goal === 'weight') {
            if (s.calories === 0) score += 50;
            else if (s.calories < 100) score += 20;
            else score -= 20;
        }

        // Use case match
        if (quizAnswers.useCase === 'baking' && s.bakingSuitability.toLowerCase().includes('sehr gut')) score += 30;
        if (quizAnswers.useCase === 'coffee' && (s.id === 'erythrit' || s.id === 'stevia' || s.id === 'sucralose')) score += 20;

        return { ...s, quizScore: score };
    });

    matches.sort((a, b) => b.quizScore - a.quizScore);
    quizResults = matches.slice(0, 3);
}

function updateResultsGrid() {
    const grid = document.getElementById('substitutes-grid');
    if (!grid) return;
    renderGridInner(grid, quizResults);
}

function updateGrid() {
    const grid = document.getElementById('substitutes-grid');
    if (!grid) return;

    let filtered = substitutes.filter(s => {
        let matchCat = activeCategory === 'Alle' || s.category === activeCategory;
        let matchCalories = activeCalories === 'Alle';
        if (activeCalories === 'low') matchCalories = s.calories <= 50;
        if (activeCalories === 'mid') matchCalories = s.calories > 50 && s.calories <= 200;
        if (activeCalories === 'high') matchCalories = s.calories > 200;

        let matchGI = activeGI === 'Alle';
        if (activeGI === 'zero') matchGI = s.glycemicIndex === 0;
        if (activeGI === 'low') matchGI = s.glycemicIndex > 0 && s.glycemicIndex < 35;
        if (activeGI === 'mid') matchGI = s.glycemicIndex >= 35 && s.glycemicIndex < 55;
        if (activeGI === 'high') matchGI = s.glycemicIndex >= 55;

        let matchSearch = s.name.toLowerCase().includes(searchQuery) || (s.nameEn && s.nameEn.toLowerCase().includes(searchQuery));
        return matchCat && matchCalories && matchGI && matchSearch;
    });

    filtered.sort((a, b) => {
        if (activeSort === 'gi_asc') return a.glycemicIndex - b.glycemicIndex;
        if (activeSort === 'kcal_asc') return a.calories - b.calories;
        if (activeSort === 'price_asc') return (a.priceCategory || 99) - (b.priceCategory || 99);
        return 0;
    });

    renderGridInner(grid, filtered);
}

function renderGridInner(grid, items) {
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-16 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl bg-white/50">
            <i data-lucide="search-x" class="mx-auto h-8 w-8 mb-3 opacity-50"></i>
            <p>${t('card.no_results')}</p>
        </div>`;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    const isEn = getLanguage() === 'en';
    items.forEach((item, index) => {
        const name = isEn ? item.nameEn : item.name;
        const category = isEn && item.categoryEn ? item.categoryEn : item.category;
        const sweetnessLabel = isEn ? item.sweetnessLabelEn : item.sweetnessLabel;
        const bloodSugarImpact = isEn ? item.bloodSugarImpactEn : item.bloodSugarImpact;

        const card = document.createElement('div');
        card.className = 'group relative flex flex-col bg-white rounded-[24px] shadow-sm border border-border/60 hover:shadow-md transition-all overflow-hidden animate-in';

        card.innerHTML = `
            <div class="h-44 bg-[#F8F7F4] flex items-center justify-center relative ${item.newImage ? 'p-0' : 'p-4'} cursor-pointer" data-route="detail" data-id="${item.id}">
                ${index === 0 && quizResults ? `<span class="absolute top-4 left-4 z-20 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 uppercase tracking-tighter animate-pulse">${t('quiz.results.top_match')}</span>` : ''}
                <div class="absolute top-4 right-4 z-10">
                    <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-sm text-foreground shadow-sm uppercase tracking-wider">
                        ${category}
                    </span>
                </div>
                ${item.newImage
                ? `<img src="assets/images/${item.newImage}" alt="${name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />`
                : `<div class="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center text-5xl group-hover:scale-110 transition-all duration-300 border border-border/40">${item.iconEmoji}</div>`
            }
            </div>
            <div class="p-6 flex flex-col flex-1 transform transition-all hover:bg-white relative">
                <div class="flex items-start justify-between gap-3 mb-5">
                    <h3 class="font-serif text-[22px] leading-tight font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer" data-route="detail" data-id="${item.id}">
                        ${name}
                    </h3>
                    <span class="shrink-0 inline-flex items-center gap-1 text-[13px] font-bold text-yellow-600 bg-yellow-50/50 py-0.5 px-2 rounded-lg border border-yellow-200/50 drop-shadow-sm mt-0.5">
                        <i data-lucide="star" class="w-3.5 h-3.5 fill-current text-yellow-500"></i>
                        ${item.amazonRating}
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-6 flex-1">
                    <div class="bg-muted/10 rounded-xl p-3 text-center flex flex-col justify-center border border-transparent hover:border-primary/20 transition-colors">
                        <span class="font-bold text-lg leading-tight ${item.glycemicIndex === 0 ? 'text-primary' : 'text-foreground'}">${item.glycemicIndex}</span>
                        <span class="text-[10px] text-muted-foreground tracking-wide mt-1">${t('card.gi')}</span>
                    </div>
                    <div class="bg-muted/10 rounded-xl p-3 text-center flex flex-col justify-center border border-transparent hover:border-primary/20 transition-colors">
                        <span class="font-bold text-lg leading-tight">${item.calories}</span>
                        <span class="text-[10px] text-muted-foreground tracking-wide mt-1">${t('card.kcal')}</span>
                    </div>
                    <div class="bg-muted/10 rounded-xl p-3 text-center flex flex-col justify-center border border-transparent hover:border-primary/20 transition-colors">
                        <span class="font-bold text-lg leading-tight">${sweetnessLabel}</span>
                        <span class="text-[10px] text-muted-foreground tracking-wide mt-1">${t('card.sweetness')}</span>
                    </div>
                    <div class="bg-muted/10 rounded-xl p-3 text-center flex flex-col justify-center border border-transparent hover:border-primary/20 transition-colors">
                        <span class="font-bold text-[12px] leading-tight ${item.bloodSugarImpact === 'Niedrig' || bloodSugarImpact === 'Low' ? 'text-primary' : 'text-foreground'}">${bloodSugarImpact}</span>
                        <span class="text-[10px] text-muted-foreground tracking-wide mt-1">${t('card.blood_sugar')}</span>
                    </div>
                </div>
                <div class="flex items-stretch gap-3 mt-auto">
                    <button class="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all active:scale-95 shadow-sm hover:shadow-md" data-route="detail" data-id="${item.id}">
                        ${t('card.details')}
                    </button>
                    <a href="${item.affiliateLink}" target="_blank" rel="noopener noreferrer" class="flex-1 bg-white border border-border hover:border-primary hover:text-primary transition-all font-semibold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm">
                        ${t('card.buy')} <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>`;
        grid.appendChild(card);
    });
    if (window.lucide) window.lucide.createIcons();
}
