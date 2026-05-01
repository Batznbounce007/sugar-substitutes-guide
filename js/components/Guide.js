import { getLanguage } from './translations.js?v=8';

export async function renderGuide(container) {
    const lang = getLanguage();
    let html = '';

    if (lang === 'en') {
        html = `
        <div class="animate-in pb-16">
            <!-- Hero -->
            <section class="bg-primary/5 pt-16 pb-12 px-4 border-b border-primary/10 mb-12">
                <div class="container mx-auto max-w-4xl text-center">
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-6 uppercase tracking-wide">
                        <i data-lucide="compass" class="w-4 h-4"></i> Navigating the Sugar Jungle
                    </span>
                    <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Your Trusted Guide to<br/>Safe Sweetening
                    </h1>
                    <p class="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Whether you are managing your own blood sugar, caring for an older relative, or looking out for your kids - we break down exactly what you need to know, without the overwhelming jargon.
                    </p>
                </div>
            </section>

            <div class="container mx-auto max-w-5xl px-4 space-y-16">

                <!-- Target Audience Profiles -->
                <section>
                    <div class="text-center mb-10">
                        <h2 class="font-serif text-3xl font-bold text-foreground mb-4">Who is this guide for?</h2>
                        <p class="text-lg text-muted-foreground">Information tailored to your everyday life.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Profile 1: Parents -->
                        <div class="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div class="w-full h-48 bg-gray-100 relative">
                                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop" alt="For Parents" class="w-full h-full object-cover" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div class="p-8 flex-1">
                                <h3 class="font-serif text-xl font-bold text-foreground mb-3">For Parents</h3>
                                <p class="text-[15px] text-foreground/80 leading-relaxed">
                                    Your child has diabetes and you want them to enjoy treats without feeling restricted. Learn which alternatives keep your child's blood sugar stable and don't require insulin.
                                </p>
                            </div>
                        </div>

                        <!-- Profile 2: Caregivers -->
                        <div class="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div class="w-full h-48 bg-gray-100 relative">
                                <img src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=600&auto=format&fit=crop" alt="For Relatives" class="w-full h-full object-cover" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div class="p-8 flex-1">
                                <h3 class="font-serif text-xl font-bold text-foreground mb-3">For Relatives</h3>
                                <p class="text-[15px] text-foreground/80 leading-relaxed">
                                    Helping older parents manage their Type 2 diabetes can be stressful. Discover easy 1:1 sugar replacements so they can still enjoy their afternoon cake without the blood sugar spike.
                                </p>
                            </div>
                        </div>

                        <!-- Profile 3: Individuals -->
                        <div class="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div class="w-full h-48 bg-gray-100 relative">
                                <img src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=600&auto=format&fit=crop" alt="For You" class="w-full h-full object-cover" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div class="p-8 flex-1">
                                <h3 class="font-serif text-xl font-bold text-foreground mb-3">For You</h3>
                                <p class="text-[15px] text-foreground/80 leading-relaxed">
                                    Cut through the marketing noise online. Gain absolute clarity on what impacts your blood sugar, what requires insulin, and what you can enjoy completely freely.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                <!-- GI Section -->
                <section class="bg-white rounded-3xl p-8 border border-border shadow-sm">
                    <div class="mb-6">
                        <h2 class="font-serif text-2xl font-bold text-foreground">The Glycemic Index (GI) - The Key Metric</h2>
                    </div>
                    <div class="space-y-4 text-[17px] text-foreground/80">
                        <p>
                            The Glycemic Index (GI) measures how quickly a carbohydrate-containing food raises blood sugar.
                            Pure glucose = 100. Table sugar = 65. The lower the GI, the safer the sweetener is for diabetics.
                        </p>
                        <p class="font-medium text-primary mt-4">What the GI means for your insulin management:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                            <!-- Card 1 -->
                            <div class="flex flex-col h-full bg-white rounded-3xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                                <div class="w-max px-3 h-12 min-w-[3rem] bg-green-50 rounded-2xl inline-flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-xl font-bold whitespace-nowrap">0</span>
                                </div>
                                <h3 class="font-serif text-xl font-bold text-foreground mb-1">Optimal: GI = 0</h3>
                                <p class="text-sm font-medium text-muted-foreground mb-4">e.g. Erythritol</p>
                                <div class="flex-grow pt-4 border-t border-border/50">
                                    <p class="text-[15px] text-foreground/80 leading-relaxed">
                                        No blood sugar effect whatsoever.
                                        <span class="block mt-2 font-medium text-green-700">✓ Type 1: No bolus needed</span>
                                        <span class="block font-medium text-green-700">✓ Type 2: Completely safe</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Card 2 -->
                            <div class="flex flex-col h-full bg-white rounded-3xl p-6 border border-yellow-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                                <div class="w-max px-3 h-12 min-w-[3rem] bg-yellow-50 rounded-2xl inline-flex items-center justify-center text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-xl font-bold whitespace-nowrap">1-34</span>
                                </div>
                                <h3 class="font-serif text-xl font-bold text-foreground mb-1">Low GI</h3>
                                <p class="text-sm font-medium text-muted-foreground mb-4">e.g. Xylitol</p>
                                <div class="flex-grow pt-4 border-t border-border/50">
                                    <p class="text-[15px] text-foreground/80 leading-relaxed">
                                        Very slow, minimal rise.
                                        <span class="block mt-2 font-medium text-yellow-700">! Type 1: Check in small quantities</span>
                                        <span class="block font-medium text-yellow-700">! Type 2: Moderate amounts ok</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Card 3 -->
                            <div class="flex flex-col h-full bg-white rounded-3xl p-6 border border-orange-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1 bg-orange-400"></div>
                                <div class="w-max px-3 h-12 min-w-[3rem] bg-orange-50 rounded-2xl inline-flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-xl font-bold whitespace-nowrap">35-54</span>
                                </div>
                                <h3 class="font-serif text-xl font-bold text-foreground mb-1">Medium GI</h3>
                                <p class="text-sm font-medium text-muted-foreground mb-4">e.g. Maltitol</p>
                                <div class="flex-grow pt-4 border-t border-border/50">
                                    <p class="text-[15px] text-foreground/80 leading-relaxed">
                                        Measurable blood sugar spike.
                                        <span class="block mt-2 font-medium text-orange-700">! Treat like regular carbs</span>
                                        <span class="block font-medium text-orange-700">! Both types need to monitor</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Card 4 -->
                            <div class="flex flex-col h-full bg-white rounded-3xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                                <div class="w-max px-3 h-12 min-w-[3rem] bg-red-50 rounded-2xl inline-flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-xl font-bold whitespace-nowrap">55+</span>
                                </div>
                                <h3 class="font-serif text-xl font-bold text-foreground mb-1">High GI</h3>
                                <p class="text-sm font-medium text-muted-foreground mb-4">e.g. Honey</p>
                                <div class="flex-grow pt-4 border-t border-border/50">
                                    <p class="text-[15px] text-foreground/80 leading-relaxed">
                                        Fast and high blood sugar spike.
                                        <span class="block mt-2 font-medium text-red-700">✗ Reacts almost identical to sugar</span>
                                        <span class="block font-medium text-red-700">✗ Avoid if possible</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Categories -->
                <section class="space-y-6">
                    <h2 class="font-serif text-3xl font-bold text-foreground mb-6">Which Category is Right for Me?</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Sugar Alcohols -->
                        <div class="bg-[#F8F7F4] rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                                <span class="bg-primary/10 text-primary p-2 rounded-xl"><i data-lucide="sparkles" class="w-5 h-5"></i></span> Sugar Alcohols
                            </h3>
                            <p class="text-sm border-b border-border/50 pb-3 mb-3 text-muted-foreground">Erythritol, Xylitol, Maltitol</p>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong>The Everyday Heroes:</strong> Look and bake almost exactly like real sugar. Erythritol is our top recommendation here - zero calories, zero blood sugar impact, and completely tooth-friendly. Perfect for diabetics and kids alike.
                            </p>
                        </div>

                        <!-- Natural Extracts -->
                        <div class="bg-[#F8F7F4] rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                                <span class="bg-primary/10 text-primary p-2 rounded-xl"><i data-lucide="leaf" class="w-5 h-5"></i></span> Natural Extracts
                            </h3>
                            <p class="text-sm border-b border-border/50 pb-3 mb-3 text-muted-foreground">Stevia, Monk Fruit</p>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong>The Plant Power:</strong> Highly concentrated and completely blood-sugar neutral (GI=0). Ideal for stirring into drinks, yogurt, or combining with Erythritol for baking (this hides Stevia's slight licorice aftertaste!).
                            </p>
                        </div>

                        <!-- Synthetic Sweeteners -->
                        <div class="bg-[#F8F7F4] rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                                <span class="bg-primary/10 text-primary p-2 rounded-xl"><i data-lucide="flask-conical" class="w-5 h-5"></i></span> Synthetic Sweeteners
                            </h3>
                            <p class="text-sm border-b border-border/50 pb-3 mb-3 text-muted-foreground">Sucralose, Aspartame, Saccharin</p>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong>The Classics:</strong> Known from diet sodas. They have a GI of 0 and don't require insulin. While completely safe for blood sugar, note that Aspartame loses sweetness when baked, and Sucralose shouldn't be heated above 120°C.
                            </p>
                        </div>

                        <!-- Natural Sugars -->
                        <div class="bg-[#F8F7F4] rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                                <span class="bg-primary/10 text-primary p-2 rounded-xl"><i data-lucide="sprout" class="w-5 h-5"></i></span> Natural Sugars
                            </h3>
                            <p class="text-sm border-b border-border/50 pb-3 mb-3 text-muted-foreground">Honey, Agave, Coconut Sugar</p>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong>The Marketing Trap:</strong> Often pushed as "healthy alternatives" in wellness blogs. However, they have a medium to high GI and must be bolused for. Enjoy them for their flavor, but treat them like regular sugar.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Watch out box -->
                <section class="bg-red-50 rounded-3xl p-8 border border-red-200 mt-12 mb-12">
                    <div class="flex items-center gap-3 mb-4">
                        <i data-lucide="triangle-alert" class="w-6 h-6 text-red-500 shrink-0"></i>
                        <h2 class="font-serif text-xl font-bold text-red-700">Common Traps for Diabetics</h2>
                    </div>
                    <ul class="space-y-3 text-[15px] text-foreground/80">
                        <li class="flex gap-3"><span>⚠️</span><span><strong>"Sugar-free" chocolate</strong> often contains Maltitol (GI=35) - this raises blood sugar!</span></li>
                        <li class="flex gap-3"><span>⚠️</span><span><strong>Agave syrup</strong> - low GI but very high fructose content → burdens the liver.</span></li>
                        <li class="flex gap-3"><span>⚠️</span><span><strong>Coconut sugar</strong> - "natural" but GI=35. Must be calculated like sugar.</span></li>
                        <li class="flex gap-3"><span>⚠️</span><span><strong>Large amounts of Xylitol or Sorbitol</strong> can cause bloating and diarrhea.</span></li>
                        <li class="flex gap-3"><span>⚠️</span><span><strong>Xylitol is highly toxic to dogs</strong> - keep it out of their reach!</span></li>
                    </ul>
                </section>

                <!-- Recommendation Box -->
                <section class="bg-green-50 rounded-3xl p-8 border border-green-200 text-center relative overflow-hidden mt-12">
                    <div class="absolute -top-10 -right-10 text-green-200 opacity-50 rotate-12 pointer-events-none">
                        <i data-lucide="heart" class="w-48 h-48"></i>
                    </div>
                    <div class="relative z-10">
                        <h2 class="font-serif text-3xl font-bold text-green-900 mb-4">Our Top Recommendation</h2>
                        <p class="text-lg text-green-800 max-w-2xl mx-auto mb-6">
                            If you're feeling overwhelmed, start here: <strong>Erythritol</strong> or an Erythritol-Stevia blend. 
                        </p>
                        <div class="flex flex-wrap gap-4 justify-center items-center mb-6">
                            <span class="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-green-700 font-medium shadow-sm"><i data-lucide="check-circle-2" class="w-5 h-5"></i> Zero Calories</span>
                            <span class="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-green-700 font-medium shadow-sm"><i data-lucide="check-circle-2" class="w-5 h-5"></i> GI of 0 (No Insulin)</span>
                            <span class="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-green-700 font-medium shadow-sm"><i data-lucide="check-circle-2" class="w-5 h-5"></i> Bakes like Sugar</span>
                        </div>
                        <p class="text-sm text-green-800/70 max-w-xl mx-auto mt-6 border-t border-green-200/50 pt-4">
                            <i data-lucide="info" class="inline w-4 h-4 mr-1 align-middle"></i>
                            Always discuss major dietary changes with your diabetes care team, as individual responses may vary.
                        </p>
                    </div>
                </section>

                <!-- Myths vs Facts -->
                <section class="mt-16 mb-8">
                    <h2 class="font-serif text-3xl font-bold text-foreground mb-8 text-center">Common Myths and Misconceptions</h2>
                    <div class="space-y-4 max-w-3xl mx-auto">
                        <!-- Myth 1 -->
                        <div class="bg-white rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <h3 class="font-bold text-lg text-red-700 mb-2 flex items-center gap-2">
                                <i data-lucide="x-circle" class="w-5 h-5 shrink-0"></i> Myth: Agave nectar is healthy for diabetics.
                            </h3>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong class="text-green-700">Fact:</strong> False. While agave has a lower GI than sugar, it consists almost entirely of fructose. In high amounts, isolated fructose overloads the liver and can actually worsen insulin resistance (Type 2).
                            </p>
                        </div>
                        <!-- Myth 2 -->
                        <div class="bg-white rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <h3 class="font-bold text-lg text-red-700 mb-2 flex items-center gap-2">
                                <i data-lucide="x-circle" class="w-5 h-5 shrink-0"></i> Myth: "No Added Sugar" means I can safely eat it.
                            </h3>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong class="text-green-700">Fact:</strong> Be careful! Such products often contain natural sugars (from dates, raisins) or sugar alcohols like Maltitol, which still cause significant blood sugar spikes and require insulin bolusing.
                            </p>
                        </div>
                        <!-- Myth 3 -->
                        <div class="bg-white rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <h3 class="font-bold text-lg text-red-700 mb-2 flex items-center gap-2">
                                <i data-lucide="x-circle" class="w-5 h-5 shrink-0"></i> Myth: Artificial sweeteners trick the body into releasing insulin.
                            </h3>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong class="text-green-700">Fact:</strong> This is a common myth (Cephalic Phase Insulin Response) that has been scientifically debunked in humans. Without carbohydrates, sweeteners like Erythritol or Sucralose do not trigger insulin release.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
        `;
    } else {
        html = `
        <div class="animate-in pb-16">
        <div class="animate-in pb-16">
            <!-- Hero -->
            <section class="bg-primary/5 pt-16 pb-12 px-4 border-b border-primary/10 mb-12">
                <div class="container mx-auto max-w-4xl text-center">
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-6 uppercase tracking-wide">
                        <i data-lucide="compass" class="w-4 h-4"></i> Sicher durch den Zuckerdschungel
                    </span>
                    <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Dein Ratgeber für<br/>sicheres Süßen
                    </h1>
                    <p class="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Egal, ob du deinen eigenen Blutzucker managst, einen älteren Angehörigen unterstützt oder auf deine Kinder achtest, wir zeigen dir genau, worauf es ankommt, ganz ohne medizinischen Kauderwelsch.
                    </p>
                </div>
            </section>

            <div class="container mx-auto max-w-5xl px-4 space-y-16">

                <!-- Target Audience Profiles -->
                <section>
                    <div class="text-center mb-10">
                        <h2 class="font-serif text-3xl font-bold text-foreground mb-4">Für wen ist dieser Ratgeber?</h2>
                        <p class="text-lg text-muted-foreground">Informationen, die genau auf deinen Alltag zugeschnitten sind.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Profile 1: Parents -->
                        <div class="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div class="w-full h-48 bg-gray-100 relative">
                                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop" alt="Für Eltern" class="w-full h-full object-cover" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div class="p-8 flex-1">
                                <h3 class="font-serif text-xl font-bold text-foreground mb-3">Für Eltern</h3>
                                <p class="text-[15px] text-foreground/80 leading-relaxed">
                                    Dein Kind hat Diabetes und du möchtest trotzdem unbeschwerte Momente beim Kuchenessen und Naschen ermöglichen. Erfahre, welche Alternativen den Blutzuckerspiegel deines Kindes nicht belasten und kein Insulin erfordern.
                                </p>
                            </div>
                        </div>

                        <!-- Profile 2: Caregivers -->
                        <div class="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div class="w-full h-48 bg-gray-100 relative">
                                <img src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=600&auto=format&fit=crop" alt="Für Angehörige" class="w-full h-full object-cover" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div class="p-8 flex-1">
                                <h3 class="font-serif text-xl font-bold text-foreground mb-3">Für Angehörige</h3>
                                <p class="text-[15px] text-foreground/80 leading-relaxed">
                                    Älteren Eltern bei Typ-2-Diabetes zu helfen, kann stressig sein. Entdecke einfache 1:1-Zuckerersatzstoffe, damit sie ihren Nachmittagskuchen weiterhin ohne Blutzuckerspitzen genießen können.
                                </p>
                            </div>
                        </div>

                        <!-- Profile 3: Individuals -->
                        <div class="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div class="w-full h-48 bg-gray-100 relative">
                                <img src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=600&auto=format&fit=crop" alt="Für Dich" class="w-full h-full object-cover" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div class="p-8 flex-1">
                                <h3 class="font-serif text-xl font-bold text-foreground mb-3">Für Dich</h3>
                                <p class="text-[15px] text-foreground/80 leading-relaxed">
                                    Durchblicke das Marketing-Chaos im Netz. Bekomme absolute Klarheit darüber, was deinen Blutzucker beeinflusst, wofür du Insulin brauchst und was du völlig frei genießen kannst.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                <!-- GI Section -->
                <section class="bg-white rounded-3xl p-8 border border-border shadow-sm">
                    <div class="mb-6">
                        <h2 class="font-serif text-2xl font-bold text-foreground">Der Glykämische Index (GI) - Die wichtigste Kennzahl</h2>
                    </div>
                    <div class="space-y-4 text-[17px] text-foreground/80">
                        <p>
                            Der Glykämische Index (GI) gibt an, wie schnell ein kohlenhydrathaltiges Lebensmittel den Blutzucker ansteigen lässt.
                            Reine Glukose = 100. Haushaltszucker = 65. Je niedriger der GI, desto sicherer ist das Süßungsmittel für Diabetiker.
                        </p>
                        <p class="font-medium text-primary mt-4">Was der GI für dein Insulinmanagement bedeutet:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                            <!-- Card 1 -->
                            <div class="flex flex-col h-full bg-white rounded-3xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                                <div class="w-max px-3 h-12 min-w-[3rem] bg-green-50 rounded-2xl inline-flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-xl font-bold whitespace-nowrap">0</span>
                                </div>
                                <h3 class="font-serif text-xl font-bold text-foreground mb-1">Optimal: GI = 0</h3>
                                <p class="text-sm font-medium text-muted-foreground mb-4">z.B. Erythrit</p>
                                <div class="flex-grow pt-4 border-t border-border/50">
                                    <p class="text-[15px] text-foreground/80 leading-relaxed">
                                        Keinerlei Auswirkung auf den Blutzucker.
                                        <span class="block mt-2 font-medium text-green-700">✓ Typ 1: Kein Bolus nötig</span>
                                        <span class="block font-medium text-green-700">✓ Typ 2: Völlig unbedenklich</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Card 2 -->
                            <div class="flex flex-col h-full bg-white rounded-3xl p-6 border border-yellow-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                                <div class="w-max px-3 h-12 min-w-[3rem] bg-yellow-50 rounded-2xl inline-flex items-center justify-center text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-xl font-bold whitespace-nowrap">1-34</span>
                                </div>
                                <h3 class="font-serif text-xl font-bold text-foreground mb-1">Niedriger GI</h3>
                                <p class="text-sm font-medium text-muted-foreground mb-4">z.B. Xylit</p>
                                <div class="flex-grow pt-4 border-t border-border/50">
                                    <p class="text-[15px] text-foreground/80 leading-relaxed">
                                        Sehr langsamer, minimaler Anstieg.
                                        <span class="block mt-2 font-medium text-yellow-700">! Typ 1: In kleinen Mengen testen</span>
                                        <span class="block font-medium text-yellow-700">! Typ 2: Moderater Konsum ok</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Card 3 -->
                            <div class="flex flex-col h-full bg-white rounded-3xl p-6 border border-orange-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1 bg-orange-400"></div>
                                <div class="w-max px-3 h-12 min-w-[3rem] bg-orange-50 rounded-2xl inline-flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-xl font-bold whitespace-nowrap">35-54</span>
                                </div>
                                <h3 class="font-serif text-xl font-bold text-foreground mb-1">Mittlerer GI</h3>
                                <p class="text-sm font-medium text-muted-foreground mb-4">z.B. Maltit</p>
                                <div class="flex-grow pt-4 border-t border-border/50">
                                    <p class="text-[15px] text-foreground/80 leading-relaxed">
                                        Messbarer Blutzuckeranstieg.
                                        <span class="block mt-2 font-medium text-orange-700">! Zählt wie normale Kohlenhydrate</span>
                                        <span class="block font-medium text-orange-700">! Beide Typen müssen aufpassen</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Card 4 -->
                            <div class="flex flex-col h-full bg-white rounded-3xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                                <div class="w-max px-3 h-12 min-w-[3rem] bg-red-50 rounded-2xl inline-flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-xl font-bold whitespace-nowrap">55+</span>
                                </div>
                                <h3 class="font-serif text-xl font-bold text-foreground mb-1">Hoher GI</h3>
                                <p class="text-sm font-medium text-muted-foreground mb-4">z.B. Honig</p>
                                <div class="flex-grow pt-4 border-t border-border/50">
                                    <p class="text-[15px] text-foreground/80 leading-relaxed">
                                        Starker und schneller Blutzuckeranstieg.
                                        <span class="block mt-2 font-medium text-red-700">✗ Analoge Wirkung wie Haushaltszucker</span>
                                        <span class="block font-medium text-red-700">✗ Keine sichere Diabetiker-Option</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Categories -->
                <section class="space-y-6">
                    <h2 class="font-serif text-3xl font-bold text-foreground mb-6">Welche Kategorie ist die Richtige für mich?</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Sugar Alcohols -->
                        <div class="bg-[#F8F7F4] rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                                <span class="bg-primary/10 text-primary p-2 rounded-xl"><i data-lucide="sparkles" class="w-5 h-5"></i></span> Zuckeralkohole
                            </h3>
                            <p class="text-sm border-b border-border/50 pb-3 mb-3 text-muted-foreground">Erythrit, Xylit, Maltit</p>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong>Die Alltags-Helden:</strong> Sie sehen aus und backen sich fast exakt wie echter Zucker. Erythrit ist unsere Top-Empfehlung: null Kalorien und absolut blutzuckerneutral. Perfekt für Kinder und Diabetiker.
                            </p>
                        </div>

                        <!-- Natural Extracts -->
                        <div class="bg-[#F8F7F4] rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                                <span class="bg-primary/10 text-primary p-2 rounded-xl"><i data-lucide="leaf" class="w-5 h-5"></i></span> Naturextrakte
                            </h3>
                            <p class="text-sm border-b border-border/50 pb-3 mb-3 text-muted-foreground">Stevia, Mönchsfrucht</p>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong>Die Pflanzen-Power:</strong> Pflanzlich, hochkonzentriert und vollständig blutzuckerneutral (GI=0). Ideal für Getränke oder Joghurt. Beim Backen am besten mit Erythrit mischen, was den leichten Eigengeschmack gut überdeckt.
                            </p>
                        </div>

                        <!-- Synthetic Sweets -->
                        <div class="bg-[#F8F7F4] rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                                <span class="bg-primary/10 text-primary p-2 rounded-xl"><i data-lucide="flask-conical" class="w-5 h-5"></i></span> Synthetische Süßstoffe
                            </h3>
                            <p class="text-sm border-b border-border/50 pb-3 mb-3 text-muted-foreground">Sucralose, Aspartam, Saccharin</p>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong>Die Klassiker:</strong> Bekannt aus Light-Getränken. Sie haben einen GI von 0 und benötigen kein Insulin. Achtung beim Backen: Aspartam verliert die Süße und Sucralose sollte nicht über 120°C erhitzt werden.
                            </p>
                        </div>

                        <!-- Natural Sugars -->
                        <div class="bg-[#F8F7F4] rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                                <span class="bg-primary/10 text-primary p-2 rounded-xl"><i data-lucide="sprout" class="w-5 h-5"></i></span> Natürliche Zucker
                            </h3>
                            <p class="text-sm border-b border-border/50 pb-3 mb-3 text-muted-foreground">Honig, Agave, Kokosblütenzucker</p>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong>Die Marketing-Falle:</strong> In Blogs oft als „gesündere" Alternativen angepriesen, für Diabetiker aber fast identisch mit Haushaltszucker. Sie benötigen regulär Insulin und sollten nur für den Geschmack genutzt werden.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Recommendation Box -->
                <section class="bg-green-50 rounded-3xl p-8 border border-green-200 text-center relative overflow-hidden mt-12">
                    <div class="absolute -top-10 -right-10 text-green-200 opacity-50 rotate-12 pointer-events-none">
                        <i data-lucide="heart" class="w-48 h-48"></i>
                    </div>
                    <div class="relative z-10">
                        <h2 class="font-serif text-3xl font-bold text-green-900 mb-4">Unsere Top-Empfehlung</h2>
                        <p class="text-lg text-green-800 max-w-2xl mx-auto mb-6">
                            Wenn du dich überfordert fühlst, starte hiermit: <strong>Erythrit</strong> oder ein Erythrit-Stevia-Mix.
                        </p>
                        <div class="flex flex-wrap gap-4 justify-center items-center mb-6">
                            <span class="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-green-700 font-medium shadow-sm"><i data-lucide="check-circle-2" class="w-5 h-5"></i> Null Kalorien</span>
                            <span class="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-green-700 font-medium shadow-sm"><i data-lucide="check-circle-2" class="w-5 h-5"></i> GI von 0 (Kein Insulin)</span>
                            <span class="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-green-700 font-medium shadow-sm"><i data-lucide="check-circle-2" class="w-5 h-5"></i> Backt wie Zucker</span>
                        </div>
                        <p class="text-sm text-green-800/70 max-w-xl mx-auto mt-6 border-t border-green-200/50 pt-4">
                            <i data-lucide="info" class="inline w-4 h-4 mr-1 align-middle"></i>
                            Besprich größere Ernährungsumstellungen immer mit deinem Diabetologen oder Diabetes-Team. Individuelle Blutzuckerreaktionen können variieren.
                        </p>
                    </div>
                </section>

                <!-- Myths vs Facts -->
                <section class="mt-16 mb-8">
                    <h2 class="font-serif text-3xl font-bold text-foreground mb-8 text-center">Häufige Mythen und Missverständnisse</h2>
                    <div class="space-y-4 max-w-3xl mx-auto">
                        <!-- Myth 1 -->
                        <div class="bg-white rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <h3 class="font-bold text-lg text-red-700 mb-2 flex items-center gap-2">
                                <i data-lucide="x-circle" class="w-5 h-5 shrink-0"></i> Mythos: Agavendicksaft ist gesund für Diabetiker.
                            </h3>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong class="text-green-700">Fakt:</strong> Falsch. Agavendicksaft hat zwar einen niedrigeren GI als Zucker, besteht aber fast nur aus Fruktose. In großen Mengen kann isolierte Fruktose die Leber belasten und eine Insulinresistenz (Typ 2) sogar verschlechtern.
                            </p>
                        </div>
                        <!-- Myth 2 -->
                        <div class="bg-white rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <h3 class="font-bold text-lg text-red-700 mb-2 flex items-center gap-2">
                                <i data-lucide="x-circle" class="w-5 h-5 shrink-0"></i> Mythos: "Ohne Zuckerzusatz" bedeutet, ich kann es bedenkenlos essen.
                            </h3>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong class="text-green-700">Fakt:</strong> Vorsicht! Solche Produkte enthalten oft fruchteigene Zucker (aus Datteln, Rosinen) oder Zuckeralkohole wie Maltit, die den Blutzucker dennoch massiv ansteigen lassen und mit Insulin abgedeckt werden müssen.
                            </p>
                        </div>
                        <!-- Myth 3 -->
                        <div class="bg-white rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <h3 class="font-bold text-lg text-red-700 mb-2 flex items-center gap-2">
                                <i data-lucide="x-circle" class="w-5 h-5 shrink-0"></i> Mythos: Süßstoffe locken Insulin durch den süßen Geschmack.
                            </h3>
                            <p class="text-[15px] text-foreground/80 leading-relaxed">
                                <strong class="text-green-700">Fakt:</strong> Das ist ein Irrtum (Kephalischer Insulinreflex), der in Studien für den Menschen widerlegt wurde. Süßstoffe wie Erythrit oder Sucralose triggern ohne Aufnahme von Kohlenhydraten keine Insulinausschüttung.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
        `;
    }

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
}
