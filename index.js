// Strain Database with Lineage Information
const strainsData = [
    {
        id: 1,
        name: "OG Kush",
        type: "hybrid",
        icon: "🌿",
        parents: [],
        genetics: "Chemdawg × (Lemon Thai × Pakistani Kush)",
        effects: "Euphoric, relaxed, happy, uplifted. Known for stress relief and creative thinking.",
        growing: "8-9 weeks flowering time. Medium difficulty. Thrives in controlled indoor environments.",
        funFacts: "OG Kush became legendary in the 1990s California scene. 'OG' stands for 'Ocean Grown' or 'Original Gangster' depending on who you ask! This strain has spawned countless hybrids and remains a cornerstone of modern cannabis breeding. Popular in many premium brands including Cookies, Sherbinskis, and countless others.",
        image: "https://via.placeholder.com/300x200/4a7c28/ffffff?text=OG+Kush"
    },
    {
        id: 2,
        name: "Blue Dream",
        type: "hybrid",
        icon: "💙",
        parents: [5, 7],
        genetics: "Blueberry × Haze",
        effects: "Balanced, creative, uplifted, gentle relaxation. Perfect for daytime use.",
        growing: "9-10 weeks flowering. Easy to grow. High yields with proper care.",
        funFacts: "Blue Dream originated in California and became one of the most popular strains in the US. It's been a dispensary staple since the early 2000s and is known for its sweet berry aroma. Featured prominently by brands like Stiiizy and Raw Garden. DJ Short's Blueberry genetics made this cross legendary!",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Blue+Dream"
    },
    {
        id: 3,
        name: "Girl Scout Cookies",
        type: "hybrid",
        icon: "🍪",
        parents: [1, 8],
        genetics: "OG Kush × Durban Poison",
        effects: "Euphoric, happy, relaxed. Strong body high with cerebral effects.",
        growing: "9-10 weeks flowering. Moderate difficulty. Prefers warm climate.",
        funFacts: "GSC (now just called Cookies) was developed in the Bay Area and launched the Cookies empire by Berner. It revolutionized the cannabis industry with its distinctive minty, sweet flavor. Cookies has become one of the most recognized cannabis brands globally, with dozens of dispensaries and collaborations.",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=GSC"
    },
    {
        id: 4,
        name: "Sour Diesel",
        type: "sativa",
        icon: "⛽",
        parents: [],
        genetics: "Chemdog 91 × Super Skunk (disputed origin)",
        effects: "Energetic, uplifting, cerebral, focused. Great for daytime creativity.",
        growing: "10-11 weeks flowering. Moderate to difficult. Grows tall and lanky.",
        funFacts: "Sour Diesel (or 'Sour D') emerged from New York in the 1990s and became an East Coast legend. Its pungent diesel aroma is unmistakable. The strain helped define the modern cannabis market and is featured by countless brands. Some say it originated from a Grateful Dead concert parking lot!",
        image: "https://via.placeholder.com/300x200/f97316/ffffff?text=Sour+Diesel"
    },
    {
        id: 5,
        name: "Blueberry",
        type: "indica",
        icon: "🫐",
        parents: [],
        genetics: "Purple Thai × Thai × Afghani",
        effects: "Relaxed, euphoric, happy, sleepy. Perfect for evening use.",
        growing: "7-9 weeks flowering. Easy to moderate. Beautiful purple hues.",
        funFacts: "Created by legendary breeder DJ Short in the 1970s-80s. Won the High Times Cannabis Cup in 2000. Its sweet berry flavor revolutionized cannabis breeding. DJ Short's Blueberry genetics are in countless modern strains. The purple coloration and fruity taste set new standards for aesthetics and flavor.",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Blueberry"
    },
    {
        id: 6,
        name: "White Widow",
        type: "hybrid",
        icon: "🕸️",
        parents: [],
        genetics: "Brazilian Sativa × South Indian Indica",
        effects: "Energetic, euphoric, creative. Balanced high with strong potency.",
        growing: "8-9 weeks flowering. Easy to moderate. Resilient and stable.",
        funFacts: "Bred in the Netherlands in the 1990s by Green House Seeds. White Widow won the High Times Cannabis Cup in 1995 and became one of the most famous strains in Amsterdam coffee shops. The resin-covered buds look frosted with white trichomes, hence the name. Featured in countless Dutch seed banks.",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=White+Widow"
    },
    {
        id: 7,
        name: "Haze",
        type: "sativa",
        icon: "☁️",
        parents: [],
        genetics: "Landrace Sativa blend (Mexican, Colombian, Thai, South Indian)",
        effects: "Highly cerebral, creative, energetic, psychedelic. Long-lasting effects.",
        growing: "10-14 weeks flowering. Difficult. Requires patience and space.",
        funFacts: "Haze strains were developed in California in the 1960s-70s by the Haze Brothers. These genetics have influenced nearly every modern sativa. Original Haze is considered the 'holy grail' of sativas. Amnesia Haze won Cannabis Cups, and variants are staples in Amsterdam coffee shops and worldwide dispensaries.",
        image: "https://via.placeholder.com/300x200/f97316/ffffff?text=Haze"
    },
    {
        id: 8,
        name: "Durban Poison",
        type: "sativa",
        icon: "🌍",
        parents: [],
        genetics: "South African Landrace",
        effects: "Energetic, uplifting, creative, focused. Pure sativa experience.",
        growing: "8-9 weeks flowering. Easy to moderate. Resistant to mold and pests.",
        funFacts: "A pure South African landrace strain from Durban, brought to the US by Ed Rosenthal in the 1970s. One of the few pure sativas widely available. Known for its sweet, earthy anise flavor. Used by Cookie Fam to create Girl Scout Cookies! This strain proves that landrace genetics are irreplaceable.",
        image: "https://via.placeholder.com/300x200/f97316/ffffff?text=Durban+Poison"
    },
    {
        id: 9,
        name: "Northern Lights",
        type: "indica",
        icon: "🌌",
        parents: [],
        genetics: "Afghani × Thai",
        effects: "Deeply relaxing, sedating, euphoric. Perfect for insomnia and pain relief.",
        growing: "6-8 weeks flowering. Very easy. Compact and resilient.",
        funFacts: "Northern Lights emerged in Washington State in the 1970s and was refined in the Netherlands. It has won numerous Cannabis Cups and is one of the most awarded strains ever. NL genetics are in countless modern indicas. Sensi Seeds popularized this strain, making it a global legend. Perfect for hash production!",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Northern+Lights"
    },
    {
        id: 10,
        name: "Jack Herer",
        type: "sativa",
        icon: "👨",
        parents: [7, 9],
        genetics: "Haze × (Northern Lights × Shiva Skunk)",
        effects: "Clear-headed, creative, euphoric, energetic. Excellent focus and motivation.",
        growing: "8-10 weeks flowering. Moderate difficulty. Indoor and outdoor friendly.",
        funFacts: "Named after legendary cannabis activist Jack Herer. Developed by Sensi Seeds in the 1990s. Won numerous Cannabis Cups and is considered one of the finest medicinal strains. Jack's activism and this strain both helped change cannabis laws worldwide. Available from almost every major seed bank and beloved by Dutch coffee shops.",
        image: "https://via.placeholder.com/300x200/f97316/ffffff?text=Jack+Herer"
    },
    {
        id: 11,
        name: "Gelato",
        type: "hybrid",
        icon: "🍨",
        parents: [3],
        genetics: "Sunset Sherbet × Thin Mint GSC",
        effects: "Euphoric, creative, relaxed. Balanced hybrid with dessert flavors.",
        growing: "8-9 weeks flowering. Moderate difficulty. Beautiful purple hues.",
        funFacts: "Created by Cookie Fam and Sherbinskis in the Bay Area. Gelato #33 and #41 became ultra-premium strains commanding top prices. The dessert-like flavor profile revolutionized modern breeding. Connected Cannabis Co., Raw Garden, and countless brands feature Gelato crosses. Spawned the 'dessert strain' movement!",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=Gelato"
    },
    {
        id: 12,
        name: "Granddaddy Purple",
        type: "indica",
        icon: "💜",
        parents: [5],
        genetics: "Purple Urkle × Big Bud",
        effects: "Deeply relaxing, sleepy, euphoric. Excellent for pain and insomnia.",
        growing: "8-11 weeks flowering. Easy to moderate. Stunning purple buds.",
        funFacts: "Bred by Ken Estes in the Bay Area in 2003. GDP became California's most famous purple strain. The grape and berry flavor combined with heavy indica effects made it legendary. Featured in countless rap songs and popular culture. Available from many brands including Papa & Barkley, Kiva, and more.",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=GDP"
    }
];

// Canvas and Interaction Setup
class StrainGuide {
    constructor() {
        this.canvas = document.getElementById('strainCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.container = document.getElementById('canvasContainer');
        this.strainCardsContainer = document.getElementById('strainCards');
        
        // Canvas state
        this.offsetX = 0;
        this.offsetY = 0;
        this.scale = 1;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        
        // Strain positions
        this.strainPositions = [];
        
        // Filters
        this.searchTerm = '';
        this.filterType = 'all';
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        this.calculateStrainPositions();
        this.createStrainCards();
        this.drawConnections();
        this.setupEventListeners();
        
        window.addEventListener('resize', () => this.handleResize());
    }
    
    resizeCanvas() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.canvasWidth = rect.width;
        this.canvasHeight = rect.height;
    }
    
    calculateStrainPositions() {
        const padding = 200;
        const verticalSpacing = 250;
        const horizontalSpacing = 250;
        
        // Group strains by generation/level
        const levels = {
            0: [], // Parent strains (no parents)
            1: [], // First generation
            2: []  // Second generation and beyond
        };
        
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
        
        // Calculate positions for each level
        Object.keys(levels).forEach(level => {
            const strains = levels[level];
            const levelY = padding + (parseInt(level) * verticalSpacing);
            const totalWidth = (strains.length - 1) * horizontalSpacing;
            const startX = (this.canvasWidth - totalWidth) / 2;
            
            strains.forEach((strain, index) => {
                this.strainPositions.push({
                    id: strain.id,
                    x: startX + (index * horizontalSpacing),
                    y: levelY,
                    strain: strain
                });
            });
        });
    }
    
    createStrainCards() {
        this.strainCardsContainer.innerHTML = '';
        
        this.strainPositions.forEach(pos => {
            const card = document.createElement('div');
            card.className = `strain-card ${pos.strain.type}`;
            card.innerHTML = `
                <div class="strain-card-icon">${pos.strain.icon}</div>
                <div class="strain-card-name">${pos.strain.name}</div>
                <span class="strain-card-type">${pos.strain.type}</span>
            `;
            
            this.updateCardPosition(card, pos);
            
            card.addEventListener('click', () => this.openStrainModal(pos.strain));
            
            this.strainCardsContainer.appendChild(card);
            pos.element = card;
        });
    }
    
    updateCardPosition(card, pos) {
        const x = pos.x * this.scale + this.offsetX - 70; // 70 is half card width
        const y = pos.y * this.scale + this.offsetY - 60; // Approximate half card height
        
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
        card.style.transform = `scale(${this.scale})`;
    }
    
    drawConnections() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.save();
        this.ctx.translate(this.offsetX, this.offsetY);
        this.ctx.scale(this.scale, this.scale);
        
        // Draw connections between parents and children
        this.strainPositions.forEach(childPos => {
            if (childPos.strain.parents.length > 0) {
                childPos.strain.parents.forEach(parentId => {
                    const parentPos = this.strainPositions.find(p => p.id === parentId);
                    if (parentPos) {
                        this.drawConnection(parentPos, childPos, childPos.strain.type);
                    }
                });
            }
        });
        
        this.ctx.restore();
    }
    
    drawConnection(from, to, type) {
        const colors = {
            indica: '#8b5cf6',
            sativa: '#f97316',
            hybrid: '#10b981'
        };
        
        this.ctx.strokeStyle = colors[type] || '#4a7c28';
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([10, 5]);
        
        this.ctx.beginPath();
        this.ctx.moveTo(from.x, from.y + 60);
        
        // Draw curved connection
        const midY = (from.y + to.y) / 2;
        this.ctx.bezierCurveTo(
            from.x, midY,
            to.x, midY,
            to.x, to.y - 60
        );
        
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }
    
    setupEventListeners() {
        // Zoom controls
        document.getElementById('zoomIn').addEventListener('click', () => this.zoom(1.2));
        document.getElementById('zoomOut').addEventListener('click', () => this.zoom(0.8));
        document.getElementById('resetView').addEventListener('click', () => this.resetView());
        
        // Pan controls
        this.container.addEventListener('mousedown', (e) => this.startDrag(e));
        this.container.addEventListener('mousemove', (e) => this.drag(e));
        this.container.addEventListener('mouseup', () => this.endDrag());
        this.container.addEventListener('mouseleave', () => this.endDrag());
        
        // Touch controls
        this.container.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]));
        this.container.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.drag(e.touches[0]);
        });
        this.container.addEventListener('touchend', () => this.endDrag());
        
        // Search and filter
        document.getElementById('searchInput').addEventListener('input', (e) => this.handleSearch(e));
        document.getElementById('filterType').addEventListener('change', (e) => this.handleFilter(e));
        
        // Modal
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('strainModal').addEventListener('click', (e) => {
            if (e.target.id === 'strainModal') this.closeModal();
        });
    }
    
    zoom(factor) {
        const newScale = this.scale * factor;
        if (newScale >= 0.5 && newScale <= 3) {
            this.scale = newScale;
            this.redraw();
        }
    }
    
    resetView() {
        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.redraw();
    }
    
    startDrag(e) {
        this.isDragging = true;
        this.dragStartX = e.clientX - this.offsetX;
        this.dragStartY = e.clientY - this.offsetY;
    }
    
    drag(e) {
        if (this.isDragging) {
            this.offsetX = e.clientX - this.dragStartX;
            this.offsetY = e.clientY - this.dragStartY;
            this.redraw();
        }
    }
    
    endDrag() {
        this.isDragging = false;
    }
    
    handleResize() {
        this.resizeCanvas();
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
        
        this.drawConnections();
    }
    
    redraw() {
        this.drawConnections();
        this.strainPositions.forEach(pos => {
            this.updateCardPosition(pos.element, pos);
        });
    }
    
    openStrainModal(strain) {
        const modal = document.getElementById('strainModal');
        
        document.getElementById('modalName').textContent = strain.name;
        document.getElementById('modalImage').src = strain.image;
        document.getElementById('modalType').textContent = strain.type;
        document.getElementById('modalType').className = `modal-type ${strain.type}`;
        document.getElementById('modalType').style.background = this.getTypeColor(strain.type);
        
        document.getElementById('modalGenetics').textContent = strain.genetics;
        document.getElementById('modalEffects').textContent = strain.effects;
        document.getElementById('modalGrowing').textContent = strain.growing;
        document.getElementById('modalFunFacts').textContent = strain.funFacts;
        
        // Show lineage
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
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        const modal = document.getElementById('strainModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    getTypeColor(type) {
        const colors = {
            indica: '#8b5cf6',
            sativa: '#f97316',
            hybrid: '#10b981'
        };
        return colors[type] || '#4a7c28';
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const app = new StrainGuide();
});
