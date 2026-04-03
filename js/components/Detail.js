import { getLanguage, t } from './translations.js?v=11';

export async function renderDetail(container, item) {
    const isEn = getLanguage() === 'en';
    const name = isEn ? item.nameEn : item.name;
    const description = isEn ? item.descriptionEn : item.description;
    const origin = isEn ? item.originEn : item.origin;
    const bakingSuitability = isEn ? item.bakingSuitabilityEn : item.bakingSuitability;
    const sweetnessLabel = isEn ? item.sweetnessLabelEn : item.sweetnessLabel;
    const bloodSugarImpact = isEn ? item.bloodSugarImpactEn : item.bloodSugarImpact;
    const priceText = isEn ? item.priceTextEn : item.priceText;
    const category = isEn && item.categoryEn ? item.categoryEn : item.category;

    const redFlags = isEn ? (item.redFlagsEn || []) : (item.redFlags || []);

    const html = `
        <div class="animate-in pb-16">
            <div class="container mx-auto max-w-4xl px-4 pt-10">
                <!-- Back Button -->
                <button class="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8" data-route="home">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                    ${t('detail.back')}
                </button>

                <!-- Hero Header Card -->
                <div class="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-border mb-8 flex flex-col md:flex-row items-center gap-10">
                    <div class="w-40 h-40 md:w-48 md:h-48 shrink-0 bg-[#F8F7F4] rounded-full flex items-center justify-center text-7xl md:text-8xl filter drop-shadow-md overflow-hidden relative border border-border/40">
                        ${item.newImage
            ? `<img src="assets/images/${item.newImage}" alt="${name}" class="w-full h-full object-cover" />`
            : `${item.iconEmoji}`
        }
                    </div>
                    <div>
                        <div class="mb-5 flex flex-wrap items-center gap-3">
                            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary uppercase tracking-widest shadow-sm">
                                ${category}
                            </span>
                        </div>
                        <div class="flex items-center gap-4 mb-4 flex-wrap">
                            <h1 class="font-serif text-4xl md:text-5xl font-bold text-foreground leading-none">${name}</h1>
                            <span class="shrink-0 inline-flex items-center gap-1.5 text-[15px] font-bold text-yellow-600 bg-yellow-50/80 px-3 py-1.5 rounded-full border border-yellow-300/50 shadow-sm mt-1">
                                <i data-lucide="star" class="w-5 h-5 fill-current text-yellow-500"></i>
                                ${item.amazonRating}
                            </span>
                        </div>
                        <p class="text-xl text-muted-foreground leading-relaxed font-serif">
                            "${item.shortDescription || description.substring(0, 100) + '...'}"
                        </p>
                    </div>
                </div>

                <!-- Main Content Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <!-- Left: Description & New Sections -->
                    <div class="lg:col-span-2 space-y-8">
                        <!-- What is section -->
                        <section class="bg-white rounded-3xl p-8 border border-border shadow-sm">
                            <h2 class="text-2xl font-serif font-bold mb-4 flex items-center gap-2 text-foreground">
                                <i data-lucide="book-open" class="text-primary w-6 h-6"></i> ${t('detail.what_is')} ${name}?
                            </h2>
                            <p class="text-foreground/80 leading-relaxed text-[17px]">
                                ${description}
                            </p>
                        </section>

                        <!-- Blood Sugar Simulation -->
                        <section class="bg-white rounded-3xl p-8 border border-border shadow-sm">
                            <h2 class="text-2xl font-serif font-bold mb-2 flex items-center gap-2 text-foreground">
                                <i data-lucide="activity" class="text-primary w-6 h-6"></i> ${t('detail.simulation')}
                            </h2>
                            <p class="text-sm text-muted-foreground mb-8">${t('detail.simulation_text')}</p>
                            
                            <div class="relative bg-muted/5 rounded-2xl p-6 border border-border/40">
                                <div class="flex justify-between items-end h-40 gap-1 mb-2 relative">
                                    <!-- Simple SVG Simulation Viz -->
                                    <svg viewBox="0 0 100 40" class="w-full h-full preserve-3d" preserveAspectRatio="none">
                                        <!-- Grid Lines -->
                                        <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" stroke-width="0.1" class="text-border" />
                                        <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" stroke-width="0.1" class="text-border" />
                                        <line x1="0" y1="30" x2="100" y2="30" stroke="currentColor" stroke-width="0.1" class="text-border" />
                                        
                                        <!-- Sugar Curve -->
                                        <path d="M 0 35 L 20 15 L 40 5 L 60 15 L 80 30 L 100 35" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="0" class="drop-shadow-sm" />
                                        
                                        <!-- Substitute Curve -->
                                        ${renderSimulationPath(item.simulation)}
                                    </svg>
                                </div>
                                <div class="flex justify-between text-[10px] text-muted-foreground font-bold uppercase tracking-widest px-2">
                                    <span>0 Min</span>
                                    <span>30 Min</span>
                                    <span>60 Min</span>
                                    <span>90 Min</span>
                                    <span>120 Min</span>
                                </div>

                                <div class="mt-8 flex flex-wrap gap-6 justify-center border-t border-border/40 pt-6">
                                    <div class="flex items-center gap-2">
                                        <span class="w-3 h-3 rounded-full bg-[#EF4444]"></span>
                                        <span class="text-xs font-bold text-foreground">1 TL Zucker</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-3 h-3 rounded-full bg-primary"></span>
                                        <span class="text-xs font-bold text-foreground">1 TL ${name}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 p-4 bg-primary/5 rounded-2xl flex items-center justify-between border border-primary/10">
                                <span class="text-sm font-semibold text-primary/80 uppercase tracking-wide italic">${t('detail.insulin_need')}:</span>
                                <span class="font-bold text-foreground text-lg">${getInsulinLabel(item.glycemicIndex)}</span>
                            </div>
                        </section>

                        <!-- Properties -->
                        <section class="bg-white rounded-3xl p-8 border border-border shadow-sm">
                            <h2 class="text-2xl font-serif font-bold mb-6 flex items-center gap-2 text-foreground">
                                <i data-lucide="check-circle-2" class="text-primary w-6 h-6"></i> ${t('detail.properties')}
                            </h2>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="flex items-start gap-4">
                                    <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <i data-lucide="leaf" class="text-primary w-5 h-5"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-sm uppercase tracking-wide text-foreground mb-1">${t('detail.origin')}</h4>
                                        <p class="text-muted-foreground text-sm">${origin}</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="w-10 h-10 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0">
                                        <i data-lucide="chef-hat" class="text-[#F59E0B] w-5 h-5"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-sm uppercase tracking-wide text-foreground mb-1">${t('detail.baking')}</h4>
                                        <p class="text-muted-foreground text-sm">${bakingSuitability}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Red Flags & Tolerability -->
                        <section class="bg-white rounded-3xl p-8 border border-border shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                            <h2 class="text-2xl font-serif font-bold mb-6 flex items-center gap-2 text-foreground relative z-10">
                                <i data-lucide="shield-alert" class="text-red-500 w-6 h-6"></i> ${t('detail.tolerability')}
                            </h2>
                            
                            <div class="space-y-4 relative z-10">
                                ${redFlags.length > 0 ? redFlags.map(flag => `
                                    <div class="flex items-start gap-3 bg-red-50/50 p-4 rounded-2xl border border-red-100">
                                        <i data-lucide="alert-triangle" class="text-red-500 w-5 h-5 shrink-0 mt-0.5"></i>
                                        <span class="text-red-950 font-medium">${flag}</span>
                                    </div>
                                `).join('') : `
                                    <div class="flex items-start gap-3 bg-green-50/50 p-4 rounded-2xl border border-green-100">
                                        <i data-lucide="check-shield" class="text-green-600 w-5 h-5 shrink-0 mt-0.5"></i>
                                        <span class="text-green-950 font-medium">${isEn ? 'Generally very well tolerated.' : 'Allgemein sehr gut verträglich.'}</span>
                                    </div>
                                `}
                            </div>

                            <p class="text-xs text-muted-foreground mt-6 italic border-t border-border/40 pt-4">
                                ${isEn
            ? 'Note: Response to sugar substitutes is individual. Start with small amounts to test your personal tolerance.'
            : 'Hinweis: Die Reaktion auf Ersatzstoffe ist individuell. Starte mit kleinen Mengen, um deine persönliche Verträglichkeit zu testen.'}
                            </p>
                        </section>

                        <!-- ELID: Beginner vs Advanced -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Beginner Box -->
                            <section class="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 shadow-sm">
                                <h3 class="text-xl font-serif font-bold mb-4 flex items-center gap-2 text-blue-900">
                                    <i data-lucide="info" class="text-blue-500 w-5 h-5"></i> ${t('elid.beginner_title')}
                                </h3>
                                <p class="text-blue-900/80 text-sm leading-relaxed mb-4">
                                    ${t('elid.beginner_text')}
                                </p>
                                <div class="p-3 bg-white/60 rounded-xl border border-blue-100 text-xs text-blue-800 italic">
                                    ${t('elid.time_in_range')}
                                </div>
                            </section>

                            <!-- Advanced Box -->
                            <section class="bg-purple-50/50 rounded-3xl p-8 border border-purple-100 shadow-sm">
                                <h3 class="text-xl font-serif font-bold mb-4 flex items-center gap-2 text-purple-900">
                                    <i data-lucide="zap" class="text-purple-500 w-5 h-5"></i> ${t('elid.advanced_title')}
                                </h3>
                                <p class="text-purple-900/80 text-sm leading-relaxed mb-4">
                                    ${t('elid.advanced_text')}
                                </p>
                                <div class="p-3 bg-white/60 rounded-xl border border-purple-100 text-xs text-purple-800 font-bold">
                                    ${t('elid.t1_tip')}
                                </div>
                            </section>
                        </div>
                    </div>

                    <!-- Right: Stats Sidebar -->
                    <div class="space-y-6">
                        <div class="bg-white rounded-3xl p-6 border border-border shadow-sm sticky top-24">
                            <h3 class="font-serif text-xl font-bold mb-6">${t('detail.nutrition')}</h3>
                            
                            <div class="space-y-4">
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between group hover:bg-muted/10 transition-colors">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('card.gi')}</span>
                                    <span class="font-bold text-xl ${item.glycemicIndex === 0 ? 'text-primary' : (item.glycemicIndex > 40 ? 'text-red-500' : 'text-foreground')}">${item.glycemicIndex}</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between group hover:bg-muted/10 transition-colors">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('card.kcal')}</span>
                                    <span class="font-bold text-xl">${item.calories} kcal</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between group hover:bg-muted/10 transition-colors">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('card.sweetness')}</span>
                                    <span class="font-bold text-xl">${sweetnessLabel}</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between group hover:bg-muted/10 transition-colors">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('card.blood_sugar')}</span>
                                    <span class="font-bold text-[17px] ${item.bloodSugarImpact === 'Niedrig' || bloodSugarImpact === 'Low' ? 'text-primary' : 'text-foreground'}">${bloodSugarImpact}</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between group hover:bg-muted/10 transition-colors">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('elid.be_count')}</span>
                                    <span class="font-bold text-lg">${getBECount(item.glycemicIndex)} BE / 100g</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between group hover:bg-muted/10 transition-colors">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('detail.price')}</span>
                                    <span class="font-bold text-lg">${priceText || 'k.A.'}</span>
                                </div>
                            </div>

                            <div class="mt-10 bg-primary/5 rounded-3xl p-6 border border-primary/20 text-center">
                                <div class="text-5xl mb-4">🛒</div>
                                <h3 class="font-serif text-lg font-bold mb-1">${t('detail.buy_title')}</h3>
                                <p class="text-sm text-muted-foreground mb-6">${t('detail.buy_text')}</p>
                                <a href="${item.affiliateLink}" target="_blank" rel="noopener noreferrer" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm">
                                    ${t('detail.buy_btn')} <i data-lucide="arrow-right" class="w-4 h-4"></i>
                                </a>
                                <p class="text-[10px] text-muted-foreground mt-3 opacity-60">${t('detail.affiliate')}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    container.innerHTML = html;

    if (window.lucide) window.lucide.createIcons();
}

function renderSimulationPath(sim) {
    if (!sim || !sim.substitute) {
        // Flatline default
        return `<path d="M 0 35 L 20 35 L 40 35 L 60 35 L 80 35 L 100 35" fill="none" stroke="var(--primary)" stroke-width="2" />`;
    }

    // Sim values are 0-100, we need to map to SVG Y (down is positive, 0-40 range)
    // 100 -> 0 (top), 0 -> 35 (baseline)
    const mapY = (v) => 35 - (v * 0.35);

    const d = `M 0 ${mapY(sim.substitute[0])} L 20 ${mapY(sim.substitute[1])} L 40 ${mapY(sim.substitute[2])} L 60 ${mapY(sim.substitute[3])} L 80 ${mapY(sim.substitute[4])} L 100 ${mapY(sim.substitute[0])}`;

    return `<path d="${d}" fill="none" stroke="var(--primary)" stroke-width="2" class="animate-in" />`;
}

function getInsulinLabel(gi) {
    if (gi === 0) return t('detail.no_impact');
    if (gi < 15) return t('detail.low');
    return t('detail.high');
}

function getBECount(gi) {
    if (gi === 0) return "0";
    if (gi < 15) return "0.1 - 0.2";
    return "0.5 - 1.0";
}
