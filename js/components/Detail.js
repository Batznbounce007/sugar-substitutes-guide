import { getLanguage, t } from './translations.js?v=8';

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

    const html = `
        <div class="animate-in pb-16">
            <div class="container mx-auto max-w-4xl px-4 pt-10">
                <!-- Back Button -->
                <button class="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8" data-route="home">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                    ${t('detail.back')}
                </button>

                <!-- Hero Header Card -->
                <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border mb-8 flex flex-col md:flex-row items-center gap-10">
                    <div class="w-40 h-40 md:w-48 md:h-48 shrink-0 bg-[#F8F7F4] rounded-full flex items-center justify-center text-7xl md:text-8xl filter drop-shadow-md overflow-hidden relative">
                        ${item.newImage
            ? `<img src="assets/images/${item.newImage}" alt="${name}" class="w-full h-full object-cover" />`
            : `${item.iconEmoji}`
        }
                    </div>
                    <div>
                        <div class="mb-5 flex flex-wrap items-center gap-3">
                            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-muted text-foreground uppercase tracking-widest shadow-sm">
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
                            "${item.shortDescription || description}"
                        </p>
                    </div>
                </div>

                <!-- Main Content Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <!-- Left: Description -->
                    <div class="lg:col-span-2 space-y-8">
                        <section class="bg-white rounded-3xl p-8 border border-border shadow-sm">
                            <h2 class="text-2xl font-serif font-bold mb-4 flex items-center gap-2 text-foreground">
                                <i data-lucide="book-open" class="text-primary w-6 h-6"></i> ${t('detail.what_is')} ${name}?
                            </h2>
                            <p class="text-foreground/80 leading-relaxed text-[17px]">
                                ${description}
                            </p>
                        </section>

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
                    </div>

                    <!-- Right: Stats Sidebar -->
                    <div class="space-y-6">
                        <div class="bg-white rounded-3xl p-6 border border-border shadow-sm">
                            <h3 class="font-serif text-xl font-bold mb-6">${t('detail.nutrition')}</h3>
                            
                            <div class="space-y-4">
                                <!-- Stat Item -->
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('card.gi')}</span>
                                    <span class="font-bold text-xl ${item.glycemicIndex === 0 ? 'text-primary' : 'text-foreground'}">${item.glycemicIndex}</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('card.kcal')}</span>
                                    <span class="font-bold text-xl">${item.calories} kcal</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('card.sweetness')}</span>
                                    <span class="font-bold text-xl">${sweetnessLabel}</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('card.blood_sugar')}</span>
                                    <span class="font-bold text-[17px] ${item.bloodSugarImpact === 'Niedrig' || bloodSugarImpact === 'Low' ? 'text-primary' : 'text-foreground'}">${bloodSugarImpact}</span>
                                </div>
                                <div class="bg-[#F8F7F4] rounded-2xl p-4 flex items-center justify-between">
                                    <span class="text-sm font-medium text-muted-foreground w-1/2">${t('detail.price')}</span>
                                    <span class="font-bold text-lg">${priceText || 'k.A.'}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Buy Card -->
                        <div class="bg-primary/5 rounded-3xl p-6 border border-primary/20 text-center">
                            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">🛒</div>
                            <h3 class="font-serif text-lg font-bold mb-1">${t('detail.buy_title')}</h3>
                            <p class="text-sm text-muted-foreground mb-6">${t('detail.buy_text')}</p>
                            <a href="${item.affiliateLink}" target="_blank" rel="noopener noreferrer" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
                                ${t('detail.buy_btn')} <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </a>
                            <p class="text-[10px] text-muted-foreground mt-3 opacity-60">${t('detail.affiliate')}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    container.innerHTML = html;

    if (window.lucide) window.lucide.createIcons();
}
