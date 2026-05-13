import { getLanguage, t } from './translations.js?v=8';

export async function renderAbout(container) {
    const lang = getLanguage();
    const isEn = lang === 'en';

    const html = `
    <div class="animate-in pb-20">
        
        <!-- Hero Section -->
        <section class="pt-16 pb-12 px-4 mb-4">
            <div class="container mx-auto max-w-4xl text-center">
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-6 uppercase tracking-widest border border-primary/20">
                    <i data-lucide="target" class="w-4 h-4"></i> ${isEn ? 'Mission & Vision' : 'Mission & Vision'}
                </span>
                <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    ${isEn ? 'Transparency over<br/>marketing promises.' : 'Transparenz statt<br/>Marketing-Versprechen.'}
                </h1>
                <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    ${isEn 
                        ? 'Why DiaSweet exists, and how I want to help you find the right sugar substitute with clinical precision.' 
                        : 'Warum DiaSweet existiert und wie ich dir helfen möchte, mit klinischer Präzision den richtigen Zuckerersatz zu finden.'}
                </p>
            </div>
        </section>

        <div class="container mx-auto max-w-5xl px-4 space-y-10">
            
            <!-- Founder Story Card -->
            <section class="bg-white rounded-[32px] p-8 md:p-12 border border-border/60 shadow-sm flex flex-col md:flex-row gap-12 items-start relative overflow-hidden">
                <!-- Subtle background decoration -->
                <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <!-- Image Column -->
                <div class="w-full md:w-[35%] shrink-0 flex flex-col items-center md:items-start z-10 md:sticky md:top-32">
                    <div class="relative w-full aspect-[4/5] mb-6">
                        <img src="assets/images/founder.png" alt="${isEn ? 'Founder of DiaSweet' : 'Gründer von DiaSweet'}" class="w-full h-full rounded-[24px] shadow-md border border-border/40 object-cover" />

                    </div>
                    <div class="text-center md:text-left w-full">
                        <h3 class="font-bold text-lg text-foreground">Heiko</h3>
                        <p class="text-sm font-medium text-muted-foreground uppercase tracking-wider">${isEn ? 'Founder & Type 1 Diabetic' : 'Gründer & Typ-1-Diabetiker'}</p>
                    </div>
                </div>

                <!-- Story Column -->
                <div class="flex-1 space-y-8 z-10">
                    <div>
                        <h4 class="text-[11px] font-bold text-primary uppercase tracking-widest mb-2">${isEn ? 'The Diagnosis' : 'Die Diagnose'}</h4>
                        <h2 class="font-serif text-2xl font-bold text-foreground mb-3">${isEn ? 'Life changes overnight.' : 'Das Leben krempelt sich um.'}</h2>
                        <p class="text-[16px] text-foreground/80 leading-relaxed">
                            ${isEn 
                                ? 'A diabetes diagnosis changes your life - especially when it comes to food. Suddenly, that morning spoonful of sugar in your coffee isn\'t a given anymore. The hunt begins for a real "sugar substitute" that doesn\'t taste like chemicals or dangerously spike your blood sugar.' 
                                : 'Die Diagnose Diabetes ändert alles - besonders beim Essen. Plötzlich ist der morgendliche Löffel Zucker im Kaffee kein Standard mehr. Die verzweifelte Suche nach echtem "Zuckerersatz" beginnt, der weder nach Chemie schmeckt, noch den Blutzucker unkontrolliert in die Höhe treibt.'}
                        </p>
                    </div>

                    <hr class="border-border/40" />

                    <div>
                        <h4 class="text-[11px] font-bold text-primary uppercase tracking-widest mb-2">${isEn ? 'The Problem' : 'Das Problem'}</h4>
                        <h2 class="font-serif text-2xl font-bold text-foreground mb-3">${isEn ? 'Lost in the supermarket aisle.' : 'Verloren im Supermarkt-Regal.'}</h2>
                        <p class="text-[16px] text-foreground/80 leading-relaxed">
                            ${isEn 
                                ? 'I used to stand in the supermarket staring at dozens of packages: Stevia, Xylitol, Agave syrup... Every product promised the world on its shiny label. But the crucial medical information was missing: How does this specific substance affect my insulin? Can I bake with it without creating toxic compounds?' 
                                : 'Ich stand damals im Supermarkt vor dutzenden Päckchen: Stevia, Xylit, Agavendicksaft, "Streusüße". Jedes Produkt versprach das Blaue vom Himmel. Aber mir fehlten die harten, medizinischen Fakten: Wie reagiert mein Insulin auf diesen konkreten Stoff? Darf ich das überhaupt erhitzen?'}
                        </p>
                    </div>

                    <hr class="border-border/40" />

                    <div>
                        <h4 class="text-[11px] font-bold text-primary uppercase tracking-widest mb-2">${isEn ? 'The Solution' : 'Die Lösung'}</h4>
                        <h2 class="font-serif text-2xl font-bold text-foreground mb-3">${isEn ? 'A clinical database for everyone.' : 'Eine klinische Datenbank für alle.'}</h2>
                        <p class="text-[16px] text-foreground/80 leading-relaxed">
                            ${isEn 
                                ? 'Out of pure necessity, I started researching meticulously, reading EFSA reports, and writing everything down. That private list has now become DiaSweet - an independent, science-based search engine. From a diabetic, for other diabetics.' 
                                : 'Aus reiner Notwendigkeit habe ich angefangen, EFSA-Berichte zu lesen und alles akribisch zu recherchieren. Aus dieser privaten Liste ist DiaSweet entstanden - eine unabhängige, wissenschaftsbasierte Suchmaschine. Von einem Diabetiker, für andere Diabetiker.'}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Trust Values Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-[24px] p-8 border border-border/60 shadow-sm text-center">
                    <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
                        <i data-lucide="shield-check" class="w-5 h-5 text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-foreground mb-2">${isEn ? '100% Independent' : '100% Unabhängig'}</h3>
                    <p class="text-sm text-muted-foreground leading-relaxed">${isEn ? 'No sponsored products. No hidden industry influence. Just facts.' : 'Keine gesponserten Produkte. Kein versteckter Einfluss der Lebensmittelindustrie. Nur Fakten.'}</p>
                </div>
                <div class="bg-white rounded-[24px] p-8 border border-border/60 shadow-sm text-center">
                    <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                        <i data-lucide="microscope" class="w-5 h-5 text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-foreground mb-2">${isEn ? 'Science-Based' : 'Wissenschaftsbasiert'}</h3>
                    <p class="text-sm text-muted-foreground leading-relaxed">${isEn ? 'Data based on official EFSA, WHO, and FDA reports and guidelines.' : 'Alle medizinischen Einschätzungen basieren auf offiziellen Berichten von EFSA, WHO und BfR.'}</p>
                </div>
                <div class="bg-white rounded-[24px] p-8 border border-border/60 shadow-sm text-center">
                    <div class="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-100">
                        <i data-lucide="heart-pulse" class="w-5 h-5 text-purple-600"></i>
                    </div>
                    <h3 class="font-bold text-foreground mb-2">${isEn ? 'For Diabetics' : 'Für Diabetiker'}</h3>
                    <p class="text-sm text-muted-foreground leading-relaxed">${isEn ? 'Laser-focused on blood sugar impact, insulin response, and daily usability.' : 'Klarer Fokus auf Blutzuckerwirkung, Insulinbedarf und die tatsächliche Nutzbarkeit im Alltag.'}</p>
                </div>
            </div>
            
            <!-- Transparency / Financing Section -->
            <section class="bg-[#F8F7F4] rounded-[32px] p-8 md:p-10 border border-border/40 text-center max-w-4xl mx-auto mt-6">

                <h2 class="font-serif text-2xl font-bold text-foreground mb-4">${isEn ? 'A word on financing & transparency' : 'Ein Wort zur Finanzierung & Transparenz'}</h2>
                <p class="text-[15px] text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-6">
                    ${isEn 
                        ? 'To keep this database free and ad-free, some of the links on DiaSweet are so-called Affiliate Links. If you order through these links (e.g., at Amazon), I receive a small commission to cover server costs. For you, the product will of course be <strong>not one cent more expensive</strong>.' 
                        : 'Um diese Datenbank kostenlos und werbefrei betreiben zu können, sind einige der Links auf DiaSweet sogenannte Affiliate-Links. Wenn du über diese Links (z.B. bei Amazon) ein Produkt bestellst, erhalte ich eine kleine Provision zur Deckung der Serverkosten. Für dich wird das Produkt dadurch natürlich <strong>keinen einzigen Cent teurer</strong>.'}
                </p>
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-bold text-muted-foreground border border-border/40 shadow-sm">
                    ${isEn ? 'Thank you for your support!' : 'Danke für deine Unterstützung!'}
                </div>
            </section>

        </div>
    </div>
    `;

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
}
