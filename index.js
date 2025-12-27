// Strain Database with Lineage Information
const placeholderImage = "https://via.placeholder.com/300x200/4a7c28/ffffff?text=Strain";

const strainsData = [
    {
        id: 1,
        name: "OG Kush",
        type: "hybrid",
        icon: "🌿",
        parents: [],
        genetics: "Chemdawg × (Lemon Thai × Pakistani Kush)",
        varietals: "Chemdawg, Lemon Thai, Pakistani Kush",
        effects: "Euphoric, relaxed, happy, uplifted. Known for stress relief and creative thinking.",
        growing: "8-9 weeks flowering time. Medium difficulty. Thrives in controlled indoor environments.",
        funFacts: "OG Kush became legendary in the 1990s California scene. 'OG' stands for 'Ocean Grown' or 'Original Gangster' depending on who you ask! This strain has spawned countless hybrids and remains a cornerstone of modern cannabis breeding. Popular in many premium brands including Cookies, Sherbinskis, and countless others.",
        image: "https://via.placeholder.com/300x200/4a7c28/ffffff?text=OG+Kush",
        imageGallery: [
            { src: placeholderImage, label: "Lineage" }
        ]
    },
    {
        id: 13,
        name: "Blueberry",
        type: "indica",
        icon: "🫐",
        parents: [],
        genetics: "DJ Short's Afghani × Thai hybrid (classic Blueberry)",
        varietals: "Afghani indica, Thai sativa",
        effects: "Relaxed, euphoric, happy, sleepy. Perfect for evening use.",
        growing: "7-9 weeks flowering. Easy to moderate. Beautiful purple hues.",
        funFacts: "Created by legendary breeder DJ Short in the 1970s-80s. Won the High Times Cannabis Cup in 2000. Its sweet berry flavor revolutionized cannabis breeding and seeded countless modern cultivars.",
        image: "blueberry-plant.webp",
        imageGallery: [
            { src: "blueberry-plant.webp", label: "Plant" },
            { src: "blueberry-nugs.jpg", label: "Nugs" }
        ]
    },
    {
        id: 5,
        name: "Blueberry Kush",
        type: "hybrid",
        icon: "🫐",
        parents: [13, 1],
        genetics: "Blueberry × OG Kush",
        varietals: "Blueberry family, OG Kush",
        effects: "Relaxed, euphoric, happy, sleepy with a kush backbone.",
        growing: "8-9 weeks flowering. Easy to moderate. Dense buds with berry-kush aroma.",
        funFacts: "Blueberry Kush marries DJ Short's Blueberry with the famed OG Kush, delivering sweet berry notes with kush gas. It's beloved for evening relaxation and colorful buds.",
        image: "blueberry-plant.webp",
        imageGallery: [
            { src: "blueberry-plant.webp", label: "Plant" },
            { src: "blueberry-nugs.jpg", label: "Nugs" }
        ]
    },
    {
        id: 2,
        name: "Blue Dream",
        type: "hybrid",
        icon: "💙",
        parents: [13, 7],
        genetics: "Blueberry × Haze",
        varietals: "Blueberry, Haze",
        effects: "Balanced, creative, uplifted, gentle relaxation. Perfect for daytime use.",
        growing: "9-10 weeks flowering. Easy to grow. High yields with proper care.",
        funFacts: "Blue Dream originated in California and became one of the most popular strains in the US. It's been a dispensary staple since the early 2000s and is known for its sweet berry aroma. Featured prominently by brands like Stiiizy and Raw Garden. DJ Short's Blueberry genetics made this cross legendary!",
        image: "blue-dream-plant.jpg",
        imageGallery: [
            { src: "blue-dream-plant.jpg", label: "Plant" },
            { src: "blue-dream-nugs.jpg", label: "Nugs" }
        ]
    },
    {
        id: 3,
        name: "Girl Scout Cookies",
        type: "hybrid",
        icon: "🍪",
        parents: [1, 8],
        genetics: "OG Kush × Durban Poison",
        varietals: "OG Kush, Durban Poison landrace",
        effects: "Euphoric, happy, relaxed. Strong body high with cerebral effects.",
        growing: "9-10 weeks flowering. Moderate difficulty. Prefers warm climate.",
        funFacts: "GSC (now just called Cookies) was developed in the Bay Area and launched the Cookies empire by Berner. It revolutionized the cannabis industry with its distinctive minty, sweet flavor. Cookies has become one of the most recognized cannabis brands globally, with dozens of dispensaries and collaborations.",
        image: "girl-scout-cookies-plant.jpg",
        imageGallery: [
            { src: "girl-scout-cookies-plant.jpg", label: "Plant" },
            { src: "girl-scout-cookies-nugs.jpg", label: "Nugs" }
        ]
    },
    {
        id: 4,
        name: "Sour Diesel",
        type: "sativa",
        icon: "⛽",
        parents: [],
        genetics: "Chemdog 91 × Super Skunk (disputed origin)",
        varietals: "Chemdog, Skunk",
        effects: "Energetic, uplifting, cerebral, focused. Great for daytime creativity.",
        growing: "10-11 weeks flowering. Moderate to difficult. Grows tall and lanky.",
        funFacts: "Sour Diesel (or 'Sour D') emerged from New York in the 1990s and became an East Coast legend. Its pungent diesel aroma is unmistakable. The strain helped define the modern cannabis market and is featured by countless brands. Some say it originated from a Grateful Dead concert parking lot!",
        image: "sour-diesel-plant.png",
        imageGallery: [
            { src: "sour-diesel-plant.png", label: "Plant" },
            { src: "sour-diesel-nugs.jpg", label: "Nugs" }
        ]
    },
    {
        id: 6,
        name: "White Widow",
        type: "hybrid",
        icon: "🕸️",
        parents: [],
        genetics: "Brazilian Sativa × South Indian Indica",
        varietals: "Brazilian sativa, South Indian indica",
        effects: "Energetic, euphoric, creative. Balanced high with strong potency.",
        growing: "8-9 weeks flowering. Easy to moderate. Resilient and stable.",
        funFacts: "Bred in the Netherlands in the 1990s by Green House Seeds. White Widow won the High Times Cannabis Cup in 1995 and became one of the most famous strains in Amsterdam coffee shops. The resin-covered buds look frosted with white trichomes, hence the name. Featured in countless Dutch seed banks.",
        image: "white-widow-plant.jpg",
        imageGallery: [
            { src: "white-widow-plant.jpg", label: "Plant" },
            { src: "white-widow-nugs.webp", label: "Nugs" }
        ]
    },
    {
        id: 7,
        name: "Haze",
        type: "sativa",
        icon: "☁️",
        parents: [],
        genetics: "Landrace Sativa blend (Mexican, Colombian, Thai, South Indian)",
        varietals: "Mexican, Colombian, Thai, South Indian landraces",
        effects: "Highly cerebral, creative, energetic, psychedelic. Long-lasting effects.",
        growing: "10-14 weeks flowering. Difficult. Requires patience and space.",
        funFacts: "Haze strains were developed in California in the 1960s-70s by the Haze Brothers. These genetics have influenced nearly every modern sativa. Original Haze is considered the 'holy grail' of sativas. Amnesia Haze won Cannabis Cups, and variants are staples in Amsterdam coffee shops and worldwide dispensaries.",
        image: "haze-plant.webp",
        imageGallery: [
            { src: "haze-plant.webp", label: "Plant" },
            { src: "haze-nugs.jpg", label: "Nugs" }
        ]
    },
    {
        id: 8,
        name: "Durban Poison",
        type: "sativa",
        icon: "🌍",
        parents: [],
        genetics: "South African Landrace",
        varietals: "South African anise-leaning landrace",
        effects: "Energetic, uplifting, creative, focused. Pure sativa experience.",
        growing: "8-9 weeks flowering. Easy to moderate. Resistant to mold and pests.",
        funFacts: "A pure South African landrace strain from Durban, brought to the US by Ed Rosenthal in the 1970s. One of the few pure sativas widely available. Known for its sweet, earthy anise flavor. Used by Cookie Fam to create Girl Scout Cookies! This strain proves that landrace genetics are irreplaceable.",
        image: "durban-poison-plant.png",
        imageGallery: [
            { src: "durban-poison-plant.png", label: "Plant" },
            { src: "durban-poison-nugs.jpg", label: "Nugs" }
        ]
    },
    {
        id: 9,
        name: "Northern Lights",
        type: "indica",
        icon: "🌌",
        parents: [],
        genetics: "Afghani × Thai",
        varietals: "Afghani indica, Thai sativa",
        effects: "Deeply relaxing, sedating, euphoric. Perfect for insomnia and pain relief.",
        growing: "6-8 weeks flowering. Very easy. Compact and resilient.",
        funFacts: "Northern Lights is one of the most famous indicas of all time. Bred in the Pacific Northwest and popularized in Amsterdam, it shaped modern indica breeding and is featured by countless brands worldwide.",
        image: placeholderImage,
        imageGallery: [
            { src: placeholderImage, label: "Lineage" }
        ]
    },
    {
        id: 10,
        name: "Jack Herer",
        type: "sativa",
        icon: "📜",
        parents: [7, 9],
        genetics: "Haze × (Northern Lights #5 × Shiva Skunk)",
        varietals: "Haze, Northern Lights, Skunk",
        effects: "Energetic, clear-headed, creative. Perfect daytime strain.",
        growing: "8-9 weeks flowering. Moderate difficulty. Tall and resinous.",
        funFacts: "Named after famed cannabis activist Jack Herer, author of 'The Emperor Wears No Clothes'. This strain has won numerous awards and is beloved for its uplifting effects. Popular with brands and dispensaries worldwide.",
        image: "jack-herer-plant.jpg",
        imageGallery: [
            { src: "jack-herer-plant.jpg", label: "Plant" },
            { src: "jack-herer-nugs.webp", label: "Nugs" }
        ]
    },
    {
        id: 11,
        name: "Gelato",
        type: "hybrid",
        icon: "🍨",
        parents: [3, 16],
        genetics: "Sunset Sherbet × Thin Mint GSC",
        varietals: "Sherbet, Thin Mint Cookies",
        effects: "Euphoric, creative, relaxed. Balanced hybrid with dessert flavors.",
        growing: "8-9 weeks flowering. Moderate difficulty. Beautiful purple hues.",
        funFacts: "Created by Cookie Fam and Sherbinskis in the Bay Area. Gelato #33 and #41 became ultra-premium strains commanding top prices. The dessert-like flavor profile revolutionized modern breeding. Connected Cannabis Co., Raw Garden, and countless brands feature Gelato crosses. Spawned the 'dessert strain' movement!",
        image: "gelato-plant.webp",
        imageGallery: [
            { src: "gelato-plant.webp", label: "Plant" }
        ]
    },
    {
        id: 12,
        name: "Granddaddy Purple",
        type: "indica",
        icon: "💜",
        parents: [14, 15],
        genetics: "Purple Urkle × Big Bud",
        varietals: "Purple Urkle, Big Bud",
        effects: "Deeply relaxing, sleepy, euphoric. Excellent for pain and insomnia.",
        growing: "8-11 weeks flowering. Easy to moderate. Stunning purple buds.",
        funFacts: "Bred by Ken Estes in the Bay Area in 2003. GDP became California's most famous purple strain. The grape and berry flavor combined with heavy indica effects made it legendary. Featured in countless rap songs and popular culture. Available from many brands including Papa & Barkley, Kiva, and more.",
        image: "grand-daddy-purp-plant.png",
        imageGallery: [
            { src: "grand-daddy-purp-plant.png", label: "Plant" },
            { src: "grand-daddy-purp-nugs.jpg", label: "Nugs" }
        ]
    },
    {
        id: 14,
        name: "Purple Urkle",
        type: "indica",
        icon: "🍇",
        parents: [],
        genetics: "Mendocino Purps selection",
        varietals: "Mendocino Purps",
        effects: "Relaxing, heavy, grape-forward.",
        growing: "8-9 weeks flowering. Compact with purple hues.",
        funFacts: "Purple Urkle's grape candy aroma made it a 90s favorite and a staple in purple strain lineages.",
        image: placeholderImage,
        imageGallery: [
            { src: placeholderImage, label: "Lineage" }
        ]
    },
    {
        id: 15,
        name: "Big Bud",
        type: "indica",
        icon: "🌿",
        parents: [],
        genetics: "Afghani lineage selected for size",
        varietals: "Classic Afghani",
        effects: "Relaxing, body-focused.",
        growing: "7-9 weeks flowering. Known for huge yields and heavy colas.",
        funFacts: "Big Bud was bred for commercial yields and lends its size to many modern cultivars.",
        image: placeholderImage,
        imageGallery: [
            { src: placeholderImage, label: "Lineage" }
        ]
    },
    {
        id: 16,
        name: "Sunset Sherbet",
        type: "hybrid",
        icon: "🌇",
        parents: [3],
        genetics: "GSC phenotype with indica influence",
        varietals: "Cookies family, indica-leaning Sherbet",
        effects: "Relaxing, euphoric, dessert-like sweetness.",
        growing: "8-9 weeks flowering. Colorful and resinous.",
        funFacts: "Sunset Sherbet (Sherbert) from Sherbinskis brings creamy dessert terps that set the stage for Gelato.",
        image: placeholderImage,
        imageGallery: [
            { src: placeholderImage, label: "Lineage" }
        ]
    }
];

class StrainGuide {
    constructor() {
        this.canvas = document.getElementById('strainCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.container = document.getElementById('canvasContainer');
        this.strainCardsContainer = document.getElementById('strainCards');

        this.searchTerm = '';
        this.filterType = 'all';
        this.cardScale = 1;
        this.viewScale = 1;
        this.pan = { x: 0, y: 0 };
        this.connections = [];
        this.relationships = this.buildRelationships();
        this.highlightedStrains = new Set();
        this.highlightedConnection = null;
        this.activeModalStrain = null;
        this.modalGalleryIndex = 0;
        this.activePointers = new Map();
        this.lastPinchDistance = null;
        this.panAnchor = { x: 0, y: 0 };
        this.pointerStart = { x: 0, y: 0 };

        this.init();
    }

    init() {
        this.calculateStrainPositions();
        this.createStrainCards();
        this.drawConnections();
        this.setupEventListeners();
        window.addEventListener('resize', () => this.handleResize());
    }

    buildRelationships() {
        const parents = new Map();
        const children = new Map();

        strainsData.forEach(strain => {
            parents.set(strain.id, [...strain.parents]);
            strain.parents.forEach(parentId => {
                if (!children.has(parentId)) {
                    children.set(parentId, []);
                }
                children.get(parentId).push(strain.id);
            });
        });

        return { parents, children };
    }

    getLayoutConfig() {
        const width = this.container.getBoundingClientRect().width;
        if (width < 720) {
            return { padding: 120, verticalSpacing: 230, horizontalSpacing: 220 };
        }
        if (width < 1040) {
            return { padding: 140, verticalSpacing: 240, horizontalSpacing: 270 };
        }
        return { padding: 150, verticalSpacing: 250, horizontalSpacing: 300 };
    }

    resizeCanvas() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.canvasWidth = rect.width;
        this.canvasHeight = rect.height;
    }

    calculateStrainPositions() {
        this.resizeCanvas();
        this.strainPositions = [];
        const { padding, verticalSpacing, horizontalSpacing } = this.getLayoutConfig();

        const levels = { 0: [], 1: [], 2: [] };

        strainsData.forEach(strain => {
            if (strain.parents.length === 0) {
                levels[0].push(strain);
            } else if (strain.parents.some(p => {
                const parent = strainsData.find(s => s.id === p);
                return parent && parent.parents.length === 0;
            })) {
                levels[1].push(strain);
            } else {
                levels[2].push(strain);
            }
        });

        const positioned = new Map();

        const getParentAnchor = (strain) => {
            const coords = strain.parents.map(p => positioned.get(p)).filter(Boolean);
            if (!coords.length) return padding;
            const avg = coords.reduce((sum, coord) => sum + coord.x, 0) / coords.length;
            return avg;
        };

        const placeLevel = (levelIndex, strains) => {
            const levelY = padding + (levelIndex * verticalSpacing);
            const sorted = strains.slice().sort((a, b) => getParentAnchor(a) - getParentAnchor(b));
            const totalWidth = (sorted.length - 1) * horizontalSpacing;
            let currentX = Math.max(padding, (this.canvasWidth - totalWidth) / 2);

            sorted.forEach(strain => {
                const anchorX = getParentAnchor(strain);
                const x = Math.max(anchorX, currentX);
                this.strainPositions.push({
                    id: strain.id,
                    x,
                    y: levelY,
                    strain
                });
                positioned.set(strain.id, { x, y: levelY });
                currentX = x + horizontalSpacing;
            });
        };

        placeLevel(0, levels[0]);
        placeLevel(1, levels[1]);
        placeLevel(2, levels[2]);
    }

    getContentBounds() {
        const metrics = this.getCardMetrics();
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;

        this.strainPositions.forEach(pos => {
            minX = Math.min(minX, pos.x - metrics.halfWidth);
            maxX = Math.max(maxX, pos.x + metrics.halfWidth);
            minY = Math.min(minY, pos.y - metrics.halfHeight);
            maxY = Math.max(maxY, pos.y + metrics.halfHeight);
        });

        return { minX, maxX, minY, maxY };
    }

    createStrainCards() {
        this.strainCardsContainer.innerHTML = '';
        this.strainPositions.forEach(pos => {
            const card = document.createElement('div');
            card.className = `strain-card ${pos.strain.type} collapsed`;
            const initialImage = pos.strain.imageGallery?.[0] || { src: placeholderImage, label: 'Lineage' };
            card.innerHTML = `
                <div class="strain-card-body">
                    <div class="strain-card-icon">${pos.strain.icon}</div>
                    <div class="strain-card-name">${pos.strain.name}</div>
                    <span class="strain-card-type">${pos.strain.type}</span>
                    ${pos.strain.varietals ? `<div class="strain-card-varietals"><em>${pos.strain.varietals}</em></div>` : ''}
                </div>
                <div class="strain-card-image" aria-hidden="true">
                    <button class="card-image-nav prev" aria-label="Previous photo">◀</button>
                    <img src="${initialImage.src}" alt="${pos.strain.name}" data-index="0">
                    <button class="card-image-nav next" aria-label="Next photo">▶</button>
                    <div class="image-label">${initialImage.label}</div>
                </div>
                <div class="strain-card-actions">
                    <button class="card-toggle" type="button">Show Photos</button>
                    <button class="card-open" type="button">Open Details</button>
                </div>
            `;

            this.updateCardPosition(card, pos);
            card.querySelector('.card-open').addEventListener('click', (event) => {
                event.stopPropagation();
                this.openStrainModal(pos.strain);
            });
            card.querySelector('.card-toggle').addEventListener('click', (event) => {
                event.stopPropagation();
                this.toggleCardExpansion(card);
            });
            card.addEventListener('dblclick', () => this.openStrainModal(pos.strain));
            card.addEventListener('mouseenter', () => this.highlightByStrain(pos.strain.id));
            card.addEventListener('mouseleave', () => this.clearHighlights());
            this.setupCardGallery(card, pos.strain);

            this.strainCardsContainer.appendChild(card);
            pos.element = card;
        });
        this.updateLayerTransforms();
        this.updateCardHighlights();
    }

    getCardMetrics() {
        const styles = getComputedStyle(document.documentElement);
        const width = parseFloat(styles.getPropertyValue('--card-width')) || 160;
        const height = parseFloat(styles.getPropertyValue('--card-height')) || 150;
        const scale = this.cardScale;
        return {
            width,
            height,
            scale,
            halfWidth: (width * scale) / 2,
            halfHeight: (height * scale) / 2
        };
    }

    toggleCardExpansion(card) {
        const isCollapsed = card.classList.contains('collapsed');
        card.classList.toggle('collapsed');
        const toggleButton = card.querySelector('.card-toggle');
        if (toggleButton) {
            toggleButton.textContent = isCollapsed ? 'Hide Photos' : 'Show Photos';
        }
    }

    setupCardGallery(card, strain) {
        const images = strain.imageGallery?.length ? strain.imageGallery : [{ src: placeholderImage, label: 'Lineage' }];
        const imageEl = card.querySelector('img');
        const labelEl = card.querySelector('.image-label');
        let currentIndex = 0;

        const updateImage = (nextIndex) => {
            const safeIndex = (nextIndex + images.length) % images.length;
            currentIndex = safeIndex;
            imageEl.src = images[safeIndex].src;
            imageEl.dataset.index = safeIndex;
            labelEl.textContent = images[safeIndex].label;
        };

        card.querySelectorAll('.card-image-nav').forEach(btn => {
            const direction = btn.classList.contains('prev') ? -1 : 1;
            if (images.length === 1) {
                btn.classList.add('disabled');
            }
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateImage(currentIndex + direction);
            });
        });

        updateImage(0);
    }

    updateCardPosition(card, pos) {
        const metrics = this.getCardMetrics();
        const x = pos.x - metrics.halfWidth;
        const y = pos.y - metrics.halfHeight;
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
    }

    drawConnections() {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.pan.x, this.pan.y);
        this.ctx.scale(this.viewScale, this.viewScale);
        const metrics = this.getCardMetrics();
        this.connections = [];

        this.strainPositions.forEach(childPos => {
            const childVisible = childPos.element && childPos.element.style.display !== 'none';
            if (!childVisible || childPos.strain.parents.length === 0) return;

            childPos.strain.parents.forEach(parentId => {
                const parentPos = this.strainPositions.find(p => p.id === parentId);
                const parentVisible = parentPos && parentPos.element && parentPos.element.style.display !== 'none';
                if (!parentPos || !parentVisible) return;
                const isHighlighted = this.shouldHighlightConnection(parentId, childPos.id);
                const connection = this.drawConnection(parentPos, childPos, childPos.strain.type, metrics, isHighlighted);
                this.connections.push(connection);
            });
        });
        this.ctx.restore();
    }

    drawConnection(from, to, type, metrics, highlighted) {
        const colors = {
            indica: '#b08cff',
            sativa: '#f2a65a',
            hybrid: '#45c4b0'
        };

        const baseColor = colors[type] || '#6fbf73';
        this.ctx.strokeStyle = highlighted ? '#1f2937' : baseColor;
        this.ctx.lineWidth = highlighted ? 5.5 : 4;
        this.ctx.lineCap = 'round';
        this.ctx.setLineDash(highlighted ? [] : [6, 8]);
        if (highlighted) {
            this.ctx.shadowColor = baseColor;
            this.ctx.shadowBlur = 14;
        }

        const start = { x: from.x, y: from.y + metrics.halfHeight };
        const end = { x: to.x, y: to.y - metrics.halfHeight };
        const midY = (from.y + to.y) / 2;
        const control1 = { x: from.x, y: midY };
        const control2 = { x: to.x, y: midY };

        this.ctx.beginPath();
        this.ctx.moveTo(start.x, start.y);
        this.ctx.bezierCurveTo(control1.x, control1.y, control2.x, control2.y, end.x, end.y);

        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.shadowBlur = 0;

        return { fromId: from.id, toId: to.id, start, end, control1, control2, type };
    }

    shouldHighlightConnection(fromId, toId) {
        if (this.highlightedConnection && this.highlightedConnection.fromId === fromId && this.highlightedConnection.toId === toId) {
            return true;
        }
        return this.highlightedStrains.has(fromId) && this.highlightedStrains.has(toId);
    }

    highlightByStrain(strainId) {
        const connected = new Set([strainId]);
        const parents = this.relationships.parents.get(strainId) || [];
        parents.forEach(p => connected.add(p));
        const children = this.relationships.children.get(strainId) || [];
        children.forEach(c => connected.add(c));

        this.highlightedStrains = connected;
        this.highlightedConnection = null;
        this.updateCardHighlights();
        this.drawConnections();
    }

    highlightConnection(connection) {
        this.highlightedConnection = connection;
        this.highlightedStrains = new Set([connection.fromId, connection.toId]);
        this.updateCardHighlights();
        this.drawConnections();
    }

    clearHighlights() {
        this.highlightedStrains.clear();
        this.highlightedConnection = null;
        this.updateCardHighlights();
        this.drawConnections();
    }

    updateCardHighlights() {
        const hasHighlight = this.highlightedStrains.size > 0;
        this.strainPositions.forEach(pos => {
            const card = pos.element;
            if (!card) return;
            card.classList.toggle('highlighted', this.highlightedStrains.has(pos.id));
            card.classList.toggle('dimmed', hasHighlight && !this.highlightedStrains.has(pos.id));
        });
    }

    setupEventListeners() {
        document.getElementById('zoomIn').addEventListener('click', () => this.adjustScale(0.08));
        document.getElementById('zoomOut').addEventListener('click', () => this.adjustScale(-0.08));
        document.getElementById('resetView').addEventListener('click', () => this.resetView());

        document.getElementById('searchInput').addEventListener('input', (e) => this.handleSearch(e));
        document.getElementById('filterType').addEventListener('change', (e) => this.handleFilter(e));

        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('strainModal').addEventListener('click', (e) => {
            if (e.target.id === 'strainModal') this.closeModal();
        });

        this.canvas.addEventListener('mousemove', (e) => this.handleCanvasHover(e));
        this.canvas.addEventListener('mouseleave', () => this.clearHighlights());
        this.canvas.addEventListener('click', (e) => this.handleCanvasClick(e));

        document.getElementById('modalImagePrev').addEventListener('click', () => this.navigateModalGallery(-1));
        document.getElementById('modalImageNext').addEventListener('click', () => this.navigateModalGallery(1));

        this.container.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
        this.container.addEventListener('pointermove', (e) => this.handlePointerMove(e));
        this.container.addEventListener('pointerup', (e) => this.handlePointerUp(e));
        this.container.addEventListener('pointercancel', (e) => this.handlePointerUp(e));
        this.container.addEventListener('wheel', (e) => this.handleWheelZoom(e), { passive: false });
    }

    adjustScale(delta) {
        const rect = this.container.getBoundingClientRect();
        const centerPoint = { x: rect.width / 2, y: rect.height / 2 };
        const contentPoint = this.screenToContent(centerPoint);
        const nextScale = Math.min(1.5, Math.max(0.7, this.viewScale + delta));
        this.viewScale = parseFloat(nextScale.toFixed(3));
        this.pan = this.clampPan({
            x: centerPoint.x - contentPoint.x * this.viewScale,
            y: centerPoint.y - contentPoint.y * this.viewScale
        });
        document.documentElement.style.setProperty('--card-scale', 1);
        this.updateLayerTransforms();
        this.redraw();
    }

    updateLayerTransforms() {
        this.pan = this.clampPan({ ...this.pan });
        const transform = `translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.viewScale})`;
        this.strainCardsContainer.style.transform = transform;
    }

    handleCanvasHover(event) {
        const point = this.getCanvasPoint(event);
        const hit = this.findConnectionNearPoint(point, 10);
        if (hit) {
            this.highlightConnection(hit);
        } else if (this.highlightedConnection) {
            this.clearHighlights();
        }
    }

    handleCanvasClick(event) {
        const point = this.getCanvasPoint(event);
        const hit = this.findConnectionNearPoint(point, 10);
        if (hit) {
            this.highlightConnection(hit);
        } else {
            this.clearHighlights();
        }
    }

    handlePointerDown(event) {
        if (event.target.closest('.card-open, .card-toggle, .card-image-nav')) {
            return;
        }
        this.container.setPointerCapture(event.pointerId);
        this.activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        if (this.activePointers.size === 1) {
            this.panAnchor = { ...this.pan };
            this.pointerStart = { x: event.clientX, y: event.clientY };
        }
        if (this.activePointers.size === 2) {
            this.lastPinchDistance = this.getPinchDistance();
        }
    }

    handlePointerMove(event) {
        if (!this.activePointers.has(event.pointerId)) return;
        this.activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

        if (this.activePointers.size === 1) {
            const deltaX = event.clientX - this.pointerStart.x;
            const deltaY = event.clientY - this.pointerStart.y;
            this.pan = { x: this.panAnchor.x + deltaX, y: this.panAnchor.y + deltaY };
            this.updateLayerTransforms();
            this.drawConnections();
        }

        if (this.activePointers.size === 2) {
            const pinchDistance = this.getPinchDistance();
            if (this.lastPinchDistance) {
                const delta = (pinchDistance - this.lastPinchDistance) / 300;
                this.adjustScale(delta);
            }
            this.lastPinchDistance = pinchDistance;
        }
    }

    handlePointerUp(event) {
        if (this.container.hasPointerCapture(event.pointerId)) {
            this.container.releasePointerCapture(event.pointerId);
        }
        this.activePointers.delete(event.pointerId);
        if (this.activePointers.size < 2) {
            this.lastPinchDistance = null;
        }
    }

    handleWheelZoom(event) {
        event.preventDefault();
        const delta = -event.deltaY / 600;
        this.adjustScale(delta);
    }

    getPinchDistance() {
        const points = Array.from(this.activePointers.values());
        if (points.length < 2) return null;
        const [p1, p2] = points;
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    screenToContent(point) {
        return {
            x: (point.x - this.pan.x) / this.viewScale,
            y: (point.y - this.pan.y) / this.viewScale
        };
    }

    getCanvasPoint(event) {
        const rect = this.canvas.getBoundingClientRect();
        return this.screenToContent({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }

    clampPan(pan) {
        const bounds = this.getContentBounds();
        const rect = this.container.getBoundingClientRect();
        const scale = this.viewScale;

        const minPanX = rect.width - bounds.maxX * scale;
        const maxPanX = -bounds.minX * scale;
        const minPanY = rect.height - bounds.maxY * scale;
        const maxPanY = -bounds.minY * scale;

        const clamped = { ...pan };

        if (minPanX > maxPanX) {
            clamped.x = (minPanX + maxPanX) / 2;
        } else {
            clamped.x = Math.min(Math.max(pan.x, minPanX), maxPanX);
        }

        if (minPanY > maxPanY) {
            clamped.y = (minPanY + maxPanY) / 2;
        } else {
            clamped.y = Math.min(Math.max(pan.y, minPanY), maxPanY);
        }

        return clamped;
    }

    findConnectionNearPoint(point, threshold = 12) {
        let closest = null;
        let minDistance = threshold;

        this.connections.forEach(connection => {
            const distance = this.distanceToBezier(point, connection);
            if (distance < minDistance) {
                minDistance = distance;
                closest = connection;
            }
        });

        return closest;
    }

    distanceToBezier(point, connection) {
        // sample curve for proximity detection
        let closest = Infinity;
        for (let t = 0; t <= 1; t += 0.05) {
            const curvePoint = this.getPointOnBezier(connection.start, connection.control1, connection.control2, connection.end, t);
            const dx = point.x - curvePoint.x;
            const dy = point.y - curvePoint.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < closest) closest = distance;
        }
        return closest;
    }

    getPointOnBezier(p0, p1, p2, p3, t) {
        const x = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
        const y = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
        return { x, y };
    }

    resetView() {
        this.cardScale = 1;
        this.viewScale = 1;
        this.pan = { x: 0, y: 0 };
        document.documentElement.style.setProperty('--card-scale', 1);
        this.calculateStrainPositions();
        this.createStrainCards();
        this.clearHighlights();
        this.updateLayerTransforms();
        this.redraw();
    }

    handleResize() {
        this.calculateStrainPositions();
        this.createStrainCards();
        this.clearHighlights();
        this.updateLayerTransforms();
        this.redraw();
    }

    handleSearch(e) {
        this.searchTerm = e.target.value.toLowerCase();
        this.filterStrains();
    }

    handleFilter(e) {
        this.filterType = e.target.value;
        this.filterStrains();
    }

    filterStrains() {
        this.strainPositions.forEach(pos => {
            const matchesSearch = pos.strain.name.toLowerCase().includes(this.searchTerm);
            const matchesType = this.filterType === 'all' || pos.strain.type === this.filterType;

            if (matchesSearch && matchesType) {
                pos.element.style.display = 'block';
            } else {
                pos.element.style.display = 'none';
            }
        });

        this.updateCardHighlights();
        this.drawConnections();
    }

    redraw() {
        this.updateLayerTransforms();
        this.drawConnections();
        this.strainPositions.forEach(pos => {
            this.updateCardPosition(pos.element, pos);
        });
        this.updateCardHighlights();
    }

    openStrainModal(strain) {
        const modal = document.getElementById('strainModal');
        this.activeModalStrain = strain;
        this.modalGalleryIndex = 0;

        document.getElementById('modalName').textContent = strain.name;
        document.getElementById('modalType').textContent = strain.type;
        document.getElementById('modalType').className = `modal-type ${strain.type}`;
        document.getElementById('modalType').style.background = this.getTypeColor(strain.type);

        document.getElementById('modalGenetics').textContent = strain.genetics;
        document.getElementById('modalEffects').textContent = strain.effects;
        document.getElementById('modalGrowing').textContent = strain.growing;
        document.getElementById('modalFunFacts').textContent = strain.funFacts;

        const lineageDiv = document.getElementById('lineageInfo');
        if (strain.parents.length > 0) {
            lineageDiv.innerHTML = '';
            strain.parents.forEach(parentId => {
                const parent = strainsData.find(s => s.id === parentId);
                if (parent) {
                    const item = document.createElement('div');
                    item.className = 'lineage-item';
                    item.innerHTML = `
                        <span>${parent.icon}</span>
                        <strong>${parent.name}</strong>
                        <span>(${parent.type})</span>
                    `;
                    lineageDiv.appendChild(item);
                }
            });
            document.getElementById('modalLineage').style.display = 'block';
        } else {
            document.getElementById('modalLineage').style.display = 'none';
        }

        this.updateModalImage(0);

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('strainModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.activeModalStrain = null;
        this.modalGalleryIndex = 0;
    }

    updateModalImage(index = 0) {
        if (!this.activeModalStrain) return;
        const images = this.activeModalStrain.imageGallery?.length ? this.activeModalStrain.imageGallery : [{ src: placeholderImage, label: 'Lineage' }];
        const safeIndex = (index + images.length) % images.length;
        this.modalGalleryIndex = safeIndex;
        document.getElementById('modalImage').src = images[safeIndex].src;
        document.getElementById('modalImageLabel').textContent = images[safeIndex].label;

        const prevBtn = document.getElementById('modalImagePrev');
        const nextBtn = document.getElementById('modalImageNext');
        const toggleDisabled = images.length <= 1;
        prevBtn.classList.toggle('disabled', toggleDisabled);
        nextBtn.classList.toggle('disabled', toggleDisabled);
    }

    navigateModalGallery(direction) {
        if (!this.activeModalStrain) return;
        this.updateModalImage(this.modalGalleryIndex + direction);
    }

    getTypeColor(type) {
        const colors = {
            indica: '#b08cff',
            sativa: '#f2a65a',
            hybrid: '#45c4b0'
        };
        return colors[type] || '#6fbf73';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new StrainGuide();
});
