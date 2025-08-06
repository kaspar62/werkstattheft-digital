// Drawing Module - MS-08: Zeichenfunktion & Apple Pencil Support
const Drawing = {
    // Canvas-Instanzen
    canvasInstances: new Map(),
    
    // Zeichentools
    currentTool: 'pen',
    penColor: '#000000',
    penWidth: 2,
    
    // Touch/Pencil Support
    isDrawing: false,
    lastPoint: null,
    
    // MS-08: HTML5 Canvas für Zeichenbereiche initialisieren
    initCanvasArea(containerId, width = 300, height = 200) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Canvas container not found:', containerId);
            return null;
        }
        
        // Canvas erstellen
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.className = 'drawing-canvas';
        
        // Canvas-Context
        const ctx = canvas.getContext('2d');
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = this.penColor;
        ctx.lineWidth = this.penWidth;
        
        // Touch/Pencil Events für iPad
        this.setupTouchEvents(canvas, ctx);
        
        // Canvas in Container einfügen
        container.appendChild(canvas);
        
        // Canvas-Instanz speichern
        this.canvasInstances.set(containerId, { canvas, ctx });
        
        return { canvas, ctx };
    },
    
    // MS-08: Touch-Events für Apple Pencil
    setupTouchEvents(canvas, ctx) {
        // Touch-Optimierung für iPad
        canvas.style.touchAction = 'none';
        canvas.style.webkitTouchCallout = 'none';
        canvas.style.webkitUserSelect = 'none';
        canvas.style.userSelect = 'none';
        
        // Mouse Events (Desktop)
        canvas.addEventListener('mousedown', (e) => this.startDrawing(e, ctx));
        canvas.addEventListener('mousemove', (e) => this.draw(e, ctx));
        canvas.addEventListener('mouseup', () => this.stopDrawing());
        canvas.addEventListener('mouseout', () => this.stopDrawing());
        
        // Touch Events (iPad/Mobile)
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, { passive: false });
        
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, { passive: false });
        
        canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            const mouseEvent = new MouseEvent('mouseup', {});
            canvas.dispatchEvent(mouseEvent);
        }, { passive: false });
        
        // Apple Pencil & Stylus Support (Pointer Events)
        canvas.addEventListener('pointerdown', (e) => {
            if (e.pointerType === 'pen' || e.pointerType === 'touch') {
                e.preventDefault();
                this.startDrawing(e, ctx);
            }
        });
        
        canvas.addEventListener('pointermove', (e) => {
            if (e.pointerType === 'pen') {
                // Pressure-sensitive drawing für Apple Pencil
                const pressureMultiplier = e.pressure || 0.5;
                ctx.lineWidth = Math.max(1, this.penWidth * pressureMultiplier);
                
                if (this.isDrawing) {
                    this.draw(e, ctx);
                }
            } else if (e.pointerType === 'touch' && this.isDrawing) {
                this.draw(e, ctx);
            }
        });
        
        canvas.addEventListener('pointerup', (e) => {
            if (e.pointerType === 'pen' || e.pointerType === 'touch') {
                e.preventDefault();
                this.stopDrawing();
                // Restore normal line width after pressure drawing
                ctx.lineWidth = this.penWidth;
            }
        });
        
        // Additional touch handling for better iPad compatibility
        canvas.addEventListener('gesturestart', (e) => e.preventDefault());
        canvas.addEventListener('gesturechange', (e) => e.preventDefault());
        canvas.addEventListener('gestureend', (e) => e.preventDefault());
    },
    
    // Zeichnen starten
    startDrawing(e, ctx) {
        this.isDrawing = true;
        this.lastPoint = this.getCanvasPoint(e);
        
        if (this.currentTool === 'pen') {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = this.penColor;
        } else if (this.currentTool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
        }
    },
    
    // Zeichnen
    draw(e, ctx) {
        if (!this.isDrawing) return;
        
        const currentPoint = this.getCanvasPoint(e);
        
        ctx.beginPath();
        ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
        ctx.lineTo(currentPoint.x, currentPoint.y);
        ctx.stroke();
        
        this.lastPoint = currentPoint;
    },
    
    // Zeichnen stoppen
    stopDrawing() {
        this.isDrawing = false;
        this.lastPoint = null;
    },
    
    // Canvas-Koordinaten berechnen
    getCanvasPoint(e) {
        const canvas = e.target;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    },
    
    // MS-08: Basis-Zeichentools
    setTool(tool) {
        this.currentTool = tool;
        
        // Canvas-Instanzen aktualisieren
        this.canvasInstances.forEach(({ ctx }) => {
            if (tool === 'pen') {
                ctx.globalCompositeOperation = 'source-over';
                ctx.lineWidth = this.penWidth;
            } else if (tool === 'eraser') {
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineWidth = this.penWidth * 3; // Radiergummi größer
            }
        });
    },
    
    // Stiftfarbe setzen
    setPenColor(color) {
        this.penColor = color;
        this.canvasInstances.forEach(({ ctx }) => {
            if (this.currentTool === 'pen') {
                ctx.strokeStyle = color;
            }
        });
    },
    
    // Stiftdicke setzen
    setPenWidth(width) {
        this.penWidth = width;
        this.canvasInstances.forEach(({ ctx }) => {
            if (this.currentTool === 'pen') {
                ctx.lineWidth = width;
            } else if (this.currentTool === 'eraser') {
                ctx.lineWidth = width * 3;
            }
        });
    },
    
    // Canvas löschen
    clearCanvas(containerId) {
        const instance = this.canvasInstances.get(containerId);
        if (instance) {
            const { canvas, ctx } = instance;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    },
    
    // Canvas-Daten als Base64 exportieren (für späteres Speichern in MS-09)
    getCanvasData(containerId) {
        const instance = this.canvasInstances.get(containerId);
        if (instance) {
            return instance.canvas.toDataURL();
        }
        return null;
    },
    
    // Canvas aus Base64-Daten laden (für späteres Laden in MS-09)
    loadCanvasData(containerId, dataURL) {
        const instance = this.canvasInstances.get(containerId);
        if (instance && dataURL) {
            const { canvas, ctx } = instance;
            const img = new Image();
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
            };
            img.src = dataURL;
        }
    },
    
    // MS-08: Zeichenbereiche für bestimmte Seiten erstellen
    createDrawingAreas(pageId) {
        // Zeichenbereiche basierend auf PDF-Analyse
        switch (pageId) {
            case 'werkstatt-1':
                // Name/Klasse Zeichenbereiche (Handschrift)
                this.initCanvasArea('name-canvas', 300, 40);
                this.initCanvasArea('class-canvas', 200, 40);
                break;
                
            case 'material-1':
                // Technische Zeichnungen für Verbindungen
                this.initCanvasArea('stoss-drawing', 200, 150);
                this.initCanvasArea('gehrung-drawing', 200, 150);
                break;
                
            default:
                // Standard-Zeichenbereich für andere Seiten
                if (document.getElementById('general-canvas')) {
                    this.initCanvasArea('general-canvas', 400, 300);
                }
                break;
        }
    },
    
    // MS-08: Einfache Toolbar für Zeichentools
    createDrawingToolbar(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const canvasContainerId = containerId.replace('-toolbar', '-container');
        
        const toolbar = document.createElement('div');
        toolbar.className = 'drawing-toolbar';
        toolbar.innerHTML = `
            <div class="tool-group">
                <button class="tool-btn active" onclick="Drawing.setToolForCanvas('pen', '${canvasContainerId}')" title="Stift">
                    ✏️
                </button>
                <button class="tool-btn" onclick="Drawing.setToolForCanvas('eraser', '${canvasContainerId}')" title="Radiergummi">
                    🧽
                </button>
            </div>
            <div class="tool-group">
                <button class="clear-btn" onclick="Drawing.clearCanvas('${canvasContainerId}')" title="Löschen">
                    🗑️
                </button>
            </div>
        `;
        
        container.appendChild(toolbar);
    },
    
    // Tool für spezifischen Canvas setzen
    setToolForCanvas(tool, containerId) {
        this.currentTool = tool;
        
        // Toolbar-Buttons aktualisieren
        const toolbar = document.querySelector(`#${containerId.replace('-container', '-toolbar')} .drawing-toolbar`);
        if (toolbar) {
            toolbar.querySelectorAll('.tool-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${tool}'`));
            });
        }
        
        // Canvas-Context für diesen Container aktualisieren
        const instance = this.canvasInstances.get(containerId);
        if (instance) {
            const { ctx } = instance;
            if (tool === 'pen') {
                ctx.globalCompositeOperation = 'source-over';
                ctx.lineWidth = this.penWidth;
                ctx.strokeStyle = this.penColor;
            } else if (tool === 'eraser') {
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineWidth = this.penWidth * 3;
            }
        }
    }
};

// Export für ES6 Module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Drawing;
}