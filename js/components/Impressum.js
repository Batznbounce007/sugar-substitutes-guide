import { getLanguage } from './translations.js?v=8';

export async function renderImpressum(container) {
    const lang = getLanguage();
    let html = '';

    if (lang === 'en') {
        html = `
        <div class="animate-in pb-16">
            <section class="bg-primary/5 pt-16 pb-12 px-4 mb-8">
                <div class="container mx-auto max-w-4xl text-center">
                    <h1 class="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Imprint / Legal Notice</h1>
                </div>
            </section>
            
            <div class="container mx-auto max-w-3xl px-4 space-y-8 text-foreground/80 leading-relaxed">
                <section class="bg-white rounded-3xl p-8 border border-border">
                    <h2 class="font-bold text-xl mb-4 text-foreground">Information according to § 5 TMG</h2>
                    <p>
                        Max Mustermann<br>
                        Musterstraße 123<br>
                        12345 Musterstadt<br>
                        Germany
                    </p>

                    <h2 class="font-bold text-xl mt-8 mb-4 text-foreground">Contact</h2>
                    <p>
                        Phone: +49 (0) 123 44 55 66<br>
                        Email: info@sweetswap-example.de
                    </p>

                    <h2 class="font-bold text-xl mt-8 mb-4 text-foreground">Disclaimer for Content</h2>
                    <p>
                        As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
                    </p>
                    
                    <h2 class="font-bold text-xl mt-8 mb-4 text-foreground">Affiliate Links (Advertising)</h2>
                    <p>
                        This website contains so-called affiliate links (e.g. to Amazon or Xucker). If you click on such a link and buy through this link, we get a commission from the respective online shop or provider. For you the price does not change.
                    </p>
                </section>
                
                <div class="text-center pt-8">
                    <a href="#" class="inline-flex bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors" data-route="home">
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
        `;
    } else {
        html = `
        <div class="animate-in pb-16">
            <section class="bg-primary/5 pt-16 pb-12 px-4 mb-8">
                <div class="container mx-auto max-w-4xl text-center">
                    <h1 class="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Impressum</h1>
                </div>
            </section>
            
            <div class="container mx-auto max-w-3xl px-4 space-y-8 text-foreground/80 leading-relaxed">
                <section class="bg-white rounded-3xl p-8 border border-border">
                    <h2 class="font-bold text-xl mb-4 text-foreground">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Max Mustermann<br>
                        Musterstraße 123<br>
                        12345 Musterstadt<br>
                        Deutschland
                    </p>

                    <h2 class="font-bold text-xl mt-8 mb-4 text-foreground">Kontakt</h2>
                    <p>
                        Telefon: +49 (0) 123 44 55 66<br>
                        E-Mail: info@sweetswap-example.de
                    </p>

                    <h2 class="font-bold text-xl mt-8 mb-4 text-foreground">Haftung für Inhalte</h2>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    
                    <h2 class="font-bold text-xl mt-8 mb-4 text-foreground">Affiliate-Links (Werbung)</h2>
                    <p>
                        Diese Website enthält sogenannte Affiliate-Links (z.B. zu Amazon oder Xucker). Wenn Sie auf so einen Link klicken und über diesen Link einkaufen, bekommen wir von dem betreffenden Online-Shop oder Anbieter eine Provision. Für Sie verändert sich der Preis nicht.
                    </p>
                </section>
                
                <div class="text-center pt-8">
                    <a href="#" class="inline-flex bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors" data-route="home">
                        Zurück zur Startseite
                    </a>
                </div>
            </div>
        </div>
        `;
    }

    container.innerHTML = html;
}
