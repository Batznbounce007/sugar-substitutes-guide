import { getLanguage, t } from './translations.js?v=12';

export async function renderDetail(container, item) {
    const isEn = getLanguage() === 'en';
    const name = isEn ? item.nameEn : item.name;
    const description = isEn ? item.descriptionEn : item.description;
    const origin = isEn ? item.originEn : item.origin;
    const bakingSuitability = isEn ? item.bakingSuitabilityEn : item.bakingSuitability;
    const sweetnessLabel = isEn ? item.sweetnessLabelEn : item.sweetnessLabel;
    const priceText = isEn ? item.priceTextEn : item.priceText;
    const category = isEn && item.categoryEn ? item.categoryEn : item.category;
    const redFlags = isEn ? (item.redFlagsEn || []) : (item.redFlags || []);
    
    // Evaluate colors for metrics
    const giColor = item.glycemicIndex === 0 ? 'text-primary' : (item.glycemicIndex > 40 ? 'text-red-500' : 'text-foreground');
    const insulinLabel = getInsulinLabel(item.glycemicIndex);

    const html = `
        <div class="animate-in pb-16">
            <div class="container mx-auto max-w-5xl px-4 pt-6 md:pt-10">
                <!-- Navigation -->
                <button class="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6" data-route="home">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                    ${t('detail.back')}
                </button>

                <!-- Hero Profile Card -->
                <div class="bg-white rounded-[32px] border border-border/60 shadow-sm flex flex-col md:flex-row mb-6 overflow-hidden">
                    <div class="w-full md:w-[35%] h-64 md:h-auto shrink-0 bg-[#F8F7F4] flex items-center justify-center text-8xl relative border-b md:border-b-0 md:border-r border-border/40">
                        ${item.newImage
                            ? `<img src="assets/images/${item.newImage}" alt="${name}" class="absolute inset-0 w-full h-full object-cover" />`
                            : `${item.iconEmoji}`
                        }
                    </div>
                    <div class="flex-1 p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
                        <div class="mb-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
                            <span class="px-3 py-1 bg-muted/30 rounded-full text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border/40">
                                ${category}
                            </span>
                            <span class="inline-flex items-center gap-1 text-sm font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-md border border-yellow-100">
                                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                                ${item.amazonRating}
                            </span>
                        </div>
                        <h1 class="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">${name}</h1>
                        <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            ${item.shortDescription || description.substring(0, 100) + '...'}
                        </p>
                    </div>
                </div>

                <!-- Key Medical Metrics Bar -->
                <div class="bg-white rounded-[32px] border border-border/60 shadow-sm mb-6 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border/40">
                    <!-- GI -->
                    <div class="flex-1 p-5 flex flex-col justify-center items-center text-center">
                        <span class="text-3xl font-bold ${giColor} mb-1">${item.glycemicIndex}</span>
                        <span class="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">${t('card.gi')}</span>
                    </div>
                    <!-- Kcal -->
                    <div class="flex-1 p-5 flex flex-col justify-center items-center text-center">
                        <span class="text-3xl font-bold text-foreground mb-1">${item.calories}</span>
                        <span class="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">${t('card.kcal')}</span>
                    </div>
                    <!-- Sweetness -->
                    <div class="flex-1 p-5 flex flex-col justify-center items-center text-center">
                        <span class="text-3xl font-bold text-foreground mb-1">${sweetnessLabel.replace('x', '')}<span class="text-xl">x</span></span>
                        <span class="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">${t('card.sweetness')}</span>
                    </div>
                    <!-- Insulin -->
                    <div class="flex-1 p-5 flex flex-col justify-center items-center text-center">
                        <span class="text-lg font-bold text-foreground mb-1 mt-2">${insulinLabel}</span>
                        <span class="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">${t('detail.insulin_need')}</span>
                    </div>
                </div>

                <!-- Dashboard Content Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    
                    <!-- Left Column: Consolidated Details -->
                    <div class="lg:col-span-2">
                        <section class="bg-white rounded-[32px] p-8 md:p-10 border border-border/60 shadow-sm space-y-10">
                            
                            <!-- What is it -->
                            <div>
                                <h2 class="text-xl font-serif font-bold mb-4 text-foreground">
                                    ${t('detail.what_is')} ${name}?
                                </h2>
                                <p class="text-foreground/80 leading-relaxed text-[15px] md:text-base">
                                    ${description}
                                </p>
                            </div>

                            <hr class="border-border/40" />

                            <!-- Usage Profile -->
                            ${(item.suitableFor || item.unsuitableFor) ? `
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <!-- Suitable -->
                                ${item.suitableFor ? `
                                <div>
                                    <h4 class="font-bold text-sm text-foreground mb-3 flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-green-600"></i> ${t('detail.suitable_for')}</h4>
                                    <div class="flex flex-wrap gap-2">
                                        ${item.suitableFor.map(u => `<span class="px-2.5 py-1 bg-green-50 text-green-800 text-xs font-medium rounded-md border border-green-100">${u}</span>`).join('')}
                                    </div>
                                </div>
                                ` : ''}
                                <!-- Unsuitable -->
                                ${item.unsuitableFor ? `
                                <div>
                                    <h4 class="font-bold text-sm text-foreground mb-3 flex items-center gap-1.5"><i data-lucide="x-circle" class="w-4 h-4 text-red-500"></i> ${t('detail.unsuitable_for')}</h4>
                                    <div class="flex flex-wrap gap-2">
                                        ${item.unsuitableFor.map(u => `<span class="px-2.5 py-1 bg-red-50 text-red-800 text-xs font-medium rounded-md border border-red-100">${u}</span>`).join('')}
                                    </div>
                                </div>
                                ` : ''}
                            </div>
                            <hr class="border-border/40" />
                            ` : ''}

                            <!-- Properties Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div class="flex items-start gap-4">
                                    <div class="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center shrink-0">
                                        <i data-lucide="leaf" class="text-muted-foreground w-5 h-5"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-sm text-foreground mb-1">${t('detail.origin')}</h4>
                                        <p class="text-muted-foreground text-sm leading-snug">${origin}</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center shrink-0">
                                        <i data-lucide="chef-hat" class="text-muted-foreground w-5 h-5"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-sm text-foreground mb-1">${t('detail.baking')}</h4>
                                        <p class="text-muted-foreground text-sm leading-snug">${bakingSuitability}</p>
                                    </div>
                                </div>
                            </div>

                            <hr class="border-border/40" />

                            <!-- Medical Assessment -->
                            ${item.medicalAssessment ? `
                            <div>
                                <h2 class="text-xl font-serif font-bold mb-5 text-foreground">
                                    ${t('detail.medical_assessment')}
                                </h2>
                                <div class="space-y-4">
                                    <div class="bg-[#F8F7F4] rounded-2xl p-5 border border-border/40">
                                        <h4 class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">${t('detail.summary')}</h4>
                                        <p class="text-sm text-foreground/90 leading-relaxed">${item.medicalAssessment.summary}</p>
                                    </div>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div class="bg-white rounded-2xl p-5 border border-border/60 shadow-sm">
                                            <h4 class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">${t('detail.adi')}</h4>
                                            <p class="text-sm font-medium text-foreground">${item.medicalAssessment.adi}</p>
                                        </div>
                                        <div class="bg-white rounded-2xl p-5 border border-border/60 shadow-sm">
                                            <h4 class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">${t('detail.cancer_risk')}</h4>
                                            <p class="text-sm font-medium text-foreground">${item.medicalAssessment.cancerRisk}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="border-border/40" />
                            ` : ''}

                            <!-- Digestion & Taste -->
                            ${item.digestionAndTaste ? `
                            <div>
                                <h2 class="text-xl font-serif font-bold mb-5 text-foreground">
                                    ${t('detail.digestion_taste')}
                                </h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                                            <i data-lucide="activity" class="text-blue-600 w-5 h-5"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-sm text-foreground mb-1">${t('detail.digestion')}</h4>
                                            <p class="text-muted-foreground text-sm leading-relaxed">${item.digestionAndTaste.digestion}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0 border border-yellow-100">
                                            <i data-lucide="utensils" class="text-yellow-600 w-5 h-5"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-sm text-foreground mb-1">${t('detail.taste')}</h4>
                                            <p class="text-muted-foreground text-sm leading-relaxed">${item.digestionAndTaste.taste}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="border-border/40" />
                            ` : ''}

                            <!-- Tolerability & Red Flags -->
                            <div>
                                <h2 class="text-xl font-serif font-bold mb-5 flex items-center gap-2 text-foreground">
                                    <div class="w-8 h-8 rounded-full ${redFlags.length > 0 ? 'bg-orange-100' : 'bg-green-100'} flex items-center justify-center">
                                        <i data-lucide="${redFlags.length > 0 ? 'alert-circle' : 'check-circle-2'}" class="${redFlags.length > 0 ? 'text-orange-600' : 'text-green-600'} w-4 h-4"></i>
                                    </div>
                                    ${t('detail.tolerability')}
                                </h2>
                                
                                ${redFlags.length > 0 ? `
                                    <ul class="space-y-3 mb-6">
                                        ${redFlags.map(flag => `
                                            <li class="flex items-start gap-3 bg-[#F8F7F4] p-3 rounded-xl border border-border/40">
                                                <i data-lucide="info" class="text-muted-foreground w-4 h-4 shrink-0 mt-0.5"></i>
                                                <span class="text-sm font-medium text-foreground/80">${flag}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                ` : `
                                    <div class="bg-[#F8F7F4] p-4 rounded-xl border border-border/40 mb-6 flex items-center gap-3">
                                        <i data-lucide="check" class="text-green-600 w-5 h-5 shrink-0"></i>
                                        <span class="text-sm font-medium text-foreground/80">${isEn ? 'Generally very well tolerated.' : 'Allgemein sehr gut verträglich.'}</span>
                                    </div>
                                `}
                                
                                <div class="flex items-start gap-2 text-[11px] text-muted-foreground bg-muted/10 p-3 rounded-lg">
                                    <i data-lucide="shield" class="w-4 h-4 shrink-0 opacity-50"></i>
                                    <p>${isEn ? 'Note: Response is individual. Start with small amounts to test personal tolerance.' : 'Medizinischer Hinweis: Die Reaktion auf Ersatzstoffe ist sehr individuell. Bei erster Nutzung in kleinen Mengen herantasten.'}</p>
                                </div>
                            </div>

                            <!-- Sources -->
                            ${item.sources ? `
                            <hr class="border-border/40" />
                            <div class="pt-2">
                                <h4 class="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5"><i data-lucide="link" class="w-3 h-3"></i> ${t('detail.sources')}</h4>
                                <div class="flex flex-wrap gap-2 text-[11px] text-muted-foreground/70">
                                    ${item.sources.map(s => `<span class="bg-muted/10 px-2 py-0.5 rounded border border-border/40">${s}</span>`).join('')}
                                </div>
                            </div>
                            ` : ''}
                        </section>
                    </div>

                    <!-- Right Column: Sidebar (Chart & Action) -->
                    <div class="lg:col-span-1">
                        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-border/60 shadow-sm sticky top-6 space-y-8">
                            
                            <!-- Simulation Widget -->
                            <section>
                                <div class="mb-6">
                                    <h2 class="text-xl font-serif font-bold text-foreground">
                                        ${t('detail.simulation')}
                                    </h2>
                                </div>
                                
                                ${renderSimulationChart(name, item.simulation)}

                                <!-- Legend -->
                                <div class="mt-6 flex flex-col gap-2 pt-4 border-t border-border/40">
                                    <div class="flex items-center justify-between text-xs font-medium">
                                        <div class="flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full bg-red-400"></span>
                                            <span class="text-muted-foreground">Haushaltszucker</span>
                                        </div>
                                        <span class="text-red-500">Starker Anstieg</span>
                                    </div>
                                    <div class="flex items-center justify-between text-xs font-medium">
                                        <div class="flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full bg-primary"></span>
                                            <span class="text-foreground">${name}</span>
                                        </div>
                                        <span class="text-primary">${item.glycemicIndex === 0 ? 'Kein Effekt' : 'Leichter Anstieg'}</span>
                                    </div>
                                </div>
                            </section>

                            <hr class="border-border/40" />

                            <!-- Buy Action -->
                            <section>
                                <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-5">
                                    <span class="text-sm font-medium text-muted-foreground">${t('detail.price')}:</span>
                                    <span class="text-sm font-medium text-foreground">${priceText || 'k.A.'}</span>
                                </div>
                                <a href="${item.affiliateLink}" target="_blank" rel="noopener noreferrer" class="w-full bg-foreground hover:bg-foreground/90 text-background font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 mb-3">
                                    ${t('card.buy')} auf Amazon <i data-lucide="external-link" class="w-4 h-4 opacity-70"></i>
                                </a>
                                <p class="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                                    <i data-lucide="shopping-bag" class="w-3 h-3"></i> ${t('detail.affiliate')}
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    container.innerHTML = html;

    if (window.lucide) window.lucide.createIcons();
}

function renderSimulationChart(name, sim) {
    const sugarSim = [5, 40, 95, 70, 20]; // Default sugar spike
    const subSim = (sim && sim.substitute) ? sim.substitute : [5, 5, 5, 5, 5]; // Default flatline

    // Map 0-100 values to SVG Y (0 is top 100, 100 is bottom 0)
    // To leave padding, map to 10-90
    const mapY = (v) => 100 - (v * 0.85);
    const mapX = (i) => i * 25; // 0, 25, 50, 75, 100

    const createPath = (data) => data.map((v, i) => `${i===0?'M':'L'} ${mapX(i)} ${mapY(v)}`).join(' ');

    const sugarPath = createPath(sugarSim);
    const subPath = createPath(subSim);

    // Close the path to create an area chart
    const subArea = `${subPath} L 100 100 L 0 100 Z`;

    return `
    <div class="relative w-full aspect-[4/3] bg-gradient-to-b from-[#F8F7F4] to-white rounded-2xl border border-border/50 p-4 pb-7 shadow-inner">
        <!-- Y-Axis Label -->
        <div class="absolute top-3 left-4 text-[9px] font-bold text-muted-foreground/80 uppercase tracking-widest z-10 flex items-center gap-1">
            <i data-lucide="activity" class="w-3 h-3"></i> Blutzucker
        </div>
        
        <svg viewBox="0 0 100 100" class="w-full h-full overflow-visible mt-3" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="0" y1="15" x2="100" y2="15" stroke="currentColor" stroke-width="0.3" class="text-border/40" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="0.3" class="text-border/40" stroke-dasharray="2 2" />
            <line x1="0" y1="100" x2="100" y2="100" stroke="currentColor" stroke-width="0.3" class="text-border/40" />
            
            <defs>
                <linearGradient id="subGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="hsl(var(--primary))" stop-opacity="0.35" />
                    <stop offset="100%" stop-color="hsl(var(--primary))" stop-opacity="0.0" />
                </linearGradient>
            </defs>
            
            <!-- Sugar Curve (Reference) -->
            <path d="${sugarPath}" fill="none" stroke="#EF4444" stroke-width="2" stroke-dasharray="2 4" class="opacity-40 drop-shadow-sm" />
            
            <!-- Substitute Curve Area -->
            <path d="${subArea}" fill="url(#subGradient)" class="animate-in" />
            
            <!-- Substitute Curve Line -->
            <!-- Use stroke color directly as tailwind variable injection in SVG is tricky without class compilation -->
            <path d="${subPath}" fill="none" stroke="hsl(149, 30%, 29%)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-md animate-in" />

            <!-- Data Points -->
            ${subSim.map((v, i) => `<circle cx="${mapX(i)}" cy="${mapY(v)}" r="2.5" fill="white" stroke="hsl(149, 30%, 29%)" stroke-width="1.5" class="drop-shadow-sm" />`).join('')}
        </svg>

        <!-- X-Axis Labels -->
        <div class="absolute bottom-2 left-4 right-4 flex justify-between text-[9px] font-bold text-muted-foreground/70">
            <span>0m</span>
            <span>30m</span>
            <span>60m</span>
            <span>90m</span>
            <span>120m</span>
        </div>
    </div>
    `;
}

function getInsulinLabel(gi) {
    if (gi === 0) return t('detail.no_impact');
    if (gi < 15) return t('detail.low');
    return t('detail.high');
}

