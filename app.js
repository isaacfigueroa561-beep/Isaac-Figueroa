// Chart instances
let portfolioChart = null;
let allocationChart = null;
let detailChart = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    initializeNavigation();
    initializeInteractions();
    initializePriceAnimations();
});

// Initialize navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// Initialize charts
function initializeCharts() {
    // Portfolio Chart
    const portfolioCtx = document.getElementById('portfolioChart');
    if (portfolioCtx) {
        portfolioChart = new Chart(portfolioCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Portfolio Value',
                    data: [120000, 119500, 121000, 122100, 121500, 124000, 124586.42],
                    borderColor: '#0066cc',
                    backgroundColor: 'rgba(0, 102, 204, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 6,
                    pointBackgroundColor: '#0066cc',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: {
                            callback: (value) => '$' + (value / 1000).toFixed(0) + 'k'
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Allocation Chart
    const allocationCtx = document.getElementById('allocationChart');
    if (allocationCtx) {
        allocationChart = new Chart(allocationCtx, {
            type: 'doughnut',
            data: {
                labels: ['Stocks', 'ETFs', 'Bonds', 'Cash'],
                datasets: [{
                    data: [55, 25, 15, 5],
                    backgroundColor: [
                        '#0066cc',
                        '#10b981',
                        '#f59e0b',
                        '#8b5cf6'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { padding: 20, font: { size: 12 } }
                    }
                }
            }
        });
    }

    // Detail Chart
    const detailCtx = document.getElementById('detailChart');
    if (detailCtx) {
        detailChart = new Chart(detailCtx, {
            type: 'line',
            data: {
                labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '4:00'],
                datasets: [{
                    label: 'AAPL Price',
                    data: [170, 172, 171.5, 173, 175, 174.5, 173, 175.5, 176.5, 175.8, 176.2, 175.5, 175.50],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// Initialize interactions
function initializeInteractions() {
    // Period buttons
    const periodBtns = document.querySelectorAll('.period-btn');
    periodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            periodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateCharts();
        });
    });

    // Trade form
    const orderTypeSelect = document.getElementById('orderType');
    const tradeQuantity = document.getElementById('tradeQuantity');
    const tradePrice = document.getElementById('tradePrice');

    if (orderTypeSelect) {
        orderTypeSelect.addEventListener('change', (e) => {
            if (e.target.value === 'Market') {
                tradePrice.disabled = true;
                tradePrice.value = '';
            } else {
                tradePrice.disabled = false;
            }
        });
    }

    // Calculate order preview
    if (tradeQuantity && tradePrice) {
        [tradeQuantity, tradePrice].forEach(input => {
            input.addEventListener('input', updateOrderPreview);
        });
    }

    // Buy/Sell buttons
    document.querySelectorAll('.btn-buy, .btn-sell').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showOrderConfirmation(btn.classList.contains('btn-buy'));
        });
    });

    // Stock detail interaction
    document.querySelectorAll('.stock-item').forEach(item => {
        item.addEventListener('click', () => {
            const stockInfo = item.querySelector('.stock-info h4').textContent;
            updateTradeDetail(stockInfo);
        });
    });
}

// Update charts on period change
function updateCharts() {
    if (portfolioChart) {
        portfolioChart.data.datasets[0].data = generateRandomData(7, 120000, 125000);
        portfolioChart.update('active');
    }
}

// Generate random data for charts
function generateRandomData(count, min, max) {
    return Array.from({ length: count }, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}

// Update order preview
function updateOrderPreview() {
    const quantity = document.getElementById('tradeQuantity').value || 0;
    const price = document.getElementById('tradePrice').value || 0;
    const cost = (quantity * price).toFixed(2);

    const previewItems = document.querySelectorAll('.preview-item');
    if (previewItems.length > 0) {
        previewItems[0].querySelector('.preview-value').textContent = '$' + cost;
        previewItems[2].querySelector('.preview-value').textContent = '$' + cost;
    }
}

// Update trade detail
function updateTradeDetail(symbol) {
    document.getElementById('tradeSymbol').value = symbol.substring(0, 4);
    document.getElementById('detailSymbol').textContent = symbol.substring(0, 4);

    // Animate detail card
    const detailCard = document.querySelector('.trade-details-card');
    detailCard.style.animation = 'none';
    setTimeout(() => {
        detailCard.style.animation = '';
    }, 10);
}

// Show order confirmation
function showOrderConfirmation(isBuy) {
    const symbol = document.getElementById('tradeSymbol').value || 'STOCK';
    const quantity = document.getElementById('tradeQuantity').value || '0';
    const action = isBuy ? 'Buy' : 'Sell';

    alert(`Order Preview:\n${action} ${quantity} shares of ${symbol}\n\nPlease confirm to proceed.`);
}

// Animate price changes
function initializePriceAnimations() {
    const priceElements = document.querySelectorAll('[id*="portfolio"], [id*="detail"]');

    setInterval(() => {
        // Simulate price updates
        const portfolioValue = document.getElementById('portfolioValue');
        if (portfolioValue) {
            const currentValue = 124586.42;
            const change = (Math.random() - 0.5) * 100;
            const newValue = (currentValue + change).toFixed(2);
            animateValue(portfolioValue, parseFloat(portfolioValue.textContent.replace('$', '').replace(',', '')), newValue);
        }
    }, 5000);
}

// Animate value changes
function animateValue(element, start, end) {
    const duration = 500;
    const startTime = Date.now();

    const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (end - start) * progress;
        element.textContent = '$' + current.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    animate();
}

// Add scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.style.animation || 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .holding-item, .stock-item').forEach(el => {
    observer.observe(el);
});

// Add hover effects to interactive elements
document.querySelectorAll('.card-glow, .stat-card, .holding-item, .stock-item').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Real-time price ticker
function startPriceTicker() {
    const tickers = [
        { symbol: 'AAPL', price: 175.50, change: 2.45 },
        { symbol: 'TSLA', price: 255.17, change: 3.80 },
        { symbol: 'MSFT', price: 312.67, change: 2.25 }
    ];

    setInterval(() => {
        tickers.forEach(ticker => {
            const changeAmount = (Math.random() - 0.5) * 2;
            ticker.price += changeAmount;
            ticker.change += (Math.random() - 0.5) * 0.5;

            // Update UI if visible
            const element = Array.from(document.querySelectorAll('.holding-item')).find(el =>
                el.textContent.includes(ticker.symbol)
            );

            if (element) {
                const valueEl = element.querySelector('.holding-value p');
                const changeEl = element.querySelector('.holding-value span');
                if (valueEl) valueEl.textContent = '$' + (ticker.price * 24).toFixed(2);
                if (changeEl) {
                    const className = ticker.change > 0 ? 'positive' : 'negative';
                    changeEl.className = className;
                    changeEl.textContent = (ticker.change > 0 ? '+' : '') + ticker.change.toFixed(1) + '%';
                }
            }
        });
    }, 2000);
}

startPriceTicker();

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + 1 = Dashboard, 2 = Portfolio, 3 = Markets, 4 = Trade
    if (e.ctrlKey || e.metaKey) {
        const shortcuts = {
            '1': 'dashboard',
            '2': 'portfolio',
            '3': 'markets',
            '4': 'trade'
        };

        if (shortcuts[e.key]) {
            document.querySelector(`[data-section="${shortcuts[e.key]}"]`).click();
        }
    }
});

// Performance monitoring
if (typeof PerformanceObserver !== 'undefined') {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 100) {
                    console.log(`Slow interaction: ${entry.name} (${entry.duration.toFixed(2)}ms)`);
                }
            }
        });
        observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    } catch (e) {
        // Gracefully handle if not supported
    }
}

// Add a small pulse animation to important numbers
function addPulseToNumbers() {
    const numbers = document.querySelectorAll('[id*="Value"], [id*="Change"]');
    numbers.forEach(num => {
        num.addEventListener('mouseover', function() {
            this.style.animation = 'pulse 0.3s ease-out';
        });
    });
}

addPulseToNumbers();

// Add ripple effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Modal-like behavior for user menu
document.querySelector('.user-menu').addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
});

document.addEventListener('click', function() {
    document.querySelector('.user-menu').classList.remove('active');
});

// Add subtle animations on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
            el.classList.add('animated');
        }
    });
});

console.log('✨ CapitalFlow - Modern Finance Platform Loaded');
console.log('Keyboard shortcuts: Ctrl+1 (Dashboard), Ctrl+2 (Portfolio), Ctrl+3 (Markets), Ctrl+4 (Trade)');
