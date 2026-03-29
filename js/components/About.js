import { getLanguage } from './translations.js?v=8';

export async function renderAbout(container) {
    const lang = getLanguage();

    let html = '';
    if (lang === 'en') {
        html = `
        <div class="animate-in pb-16">
            <section class="bg-primary/5 pt-16 pb-12 px-4 mb-8">
                <div class="container mx-auto max-w-4xl text-center">
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                        <i data-lucide="heart" class="w-4 h-4"></i> About Us
                    </span>
                    <h1 class="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Hi, I'm a diabetic on <br/>the search for sweetness.
                    </h1>
                </div>
            </section>

            <div class="container mx-auto max-w-3xl px-4 space-y-12">
                <section class="prose prose-lg max-w-none text-foreground/80 leading-relaxed text-[17px]">
                    <p class="mb-6">
                        A diabetes diagnosis changes your life – especially when it comes to food. Suddenly, that morning spoonful of sugar in your coffee isn't a given anymore, and the hunt begins for a real "sugar substitute" that doesn't taste like chemicals or spike your blood sugar.
                    </p>
                    <p class="mb-6">
                        <strong>DiaSweet was born out of my own frustration.</strong>
                    </p>
                    <p>
                        I used to stand in the supermarket staring at dozens of different packages: Stevia, Xylitol, Agave syrup... Every product promised the world, but I was missing the crucial information. How does this affect my blood sugar? How do I bake with it?
                        Out of necessity, I started researching meticulously and wrote everything down. That list has now become this little search engine – from a diabetic for other diabetics (and anyone who wants to watch their blood sugar).
                    </p>
                </section>
                
                <section class="bg-white rounded-3xl p-8 border border-border shadow-sm text-center">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                        <i data-lucide="handshake" class="w-8 h-8"></i>
                    </div>
                    <h2 class="font-serif text-2xl font-bold text-foreground mb-4">Transparency matters to me</h2>
                    <p class="text-[16px] text-muted-foreground max-w-xl mx-auto">
                        Some of the links (Buy buttons) on DiaSweet are so-called Affiliate Links. 
                        This means if you order through these links (e.g. at Amazon), I get a small commission. 
                        This helps me cover the server costs for DiaSweet. For you, the product will of course be <strong>not one cent more expensive</strong>.
                    </p>
                </section>
            </div>
        </div>
        `;
    } else {
        html = `
        <div class="animate-in pb-16">
            <section class="bg-primary/5 pt-16 pb-12 px-4 mb-8">
                <div class="container mx-auto max-w-4xl text-center">
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-4 uppercase tracking-wide">
                        <i data-lucide="heart" class="w-4 h-4"></i> Über Uns
                    </span>
                    <h1 class="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Hallo, ich bin ein Diabetiker auf <br/>der Suche nach Süße.
                    </h1>
                </div>
            </section>

            <div class="container mx-auto max-w-3xl px-4 space-y-12">
                <section class="prose prose-lg max-w-none text-foreground/80 leading-relaxed text-[17px]">
                    <p class="mb-6">
                        Die Diagnose Diabetes krempelt das Leben um – besonders beim Thema Essen. Plötzlich ist der morgendliche Löffel Zucker im Kaffee nicht mehr so selbstverständlich, und die Suche nach echtem "Zuckerersatz", der nicht nach Chemie schmeckt oder den Blutzucker in die Höhe treibt, beginnt.
                    </p>
                    <p class="mb-6">
                        <strong>DiaSweet ist aus meiner eigenen Frustration entstanden.</strong>
                    </p>
                    <p>
                        Ich stand damals im Supermarkt vor dutzenden verschiedenen Päckchen: Stevia, Xylit, Agavendicksaft, "Streusüße". Jedes Produkt versprach das Blaue vom Himmel, aber oft fehlten mir die entscheidenden Infos. Wie wirkt das auf meinen Blutzucker? Wie backe ich damit?
                        Aus der Notwendigkeit heraus habe ich angefangen, alles akribisch zu recherchieren und für mich aufzuschreiben. Aus dieser Liste ist diese kleine Suchmaschine geworden – von einem Diabetiker für andere Diabetiker (und alle, die auf ihren Blutzucker achten möchten).
                    </p>
                </section>
                
                <section class="bg-white rounded-3xl p-8 border border-border shadow-sm text-center">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                        <i data-lucide="handshake" class="w-8 h-8"></i>
                    </div>
                    <h2 class="font-serif text-2xl font-bold text-foreground mb-4">Transparenz ist mir wichtig</h2>
                    <p class="text-[16px] text-muted-foreground max-w-xl mx-auto">
                        Einige der Links (Kaufen-Buttons) auf DiaSweet sind sogenannte Affiliate Links. 
                        Das bedeutet, wenn du über diese Links (z.B. bei Amazon) bestellst, bekomme ich eine kleine Provision. 
                        Das hilft mir, die Serverkosten für DiaSweet zu decken. Für dich wird das Produkt dadurch natürlich <strong>keinen Cent teurer</strong>.
                    </p>
                </section>
            </div>
        </div>
        `;
    }

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
}
