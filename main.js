// Initialize Chart.js with smooth animations
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('analysisChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                label: 'UK carrots',
                data: [1, 3, 5, 8, 10, 12],
                borderColor: '#1B4332',
                backgroundColor: 'rgba(27, 67, 50, 0.1)',
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#1B4332',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: 'Predicted Growth',
                data: [2, 4, 6, 9, 11, 13],
                borderColor: '#90BE6D',
                backgroundColor: 'rgba(144, 190, 109, 0.1)',
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#90BE6D',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
});

// Add smooth animations to cards and metrics
const animateOnHover = (elements, transform) => {
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = transform;
            element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'none';
        });
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Progress cards hover effect
    animateOnHover(document.querySelectorAll('.progress-card'), 'translateY(-8px)');
    
    // Environmental metrics hover effect
    animateOnHover(document.querySelectorAll('.env-metric'), 'translateY(-4px)');
    
    // Weather days hover effect
    animateOnHover(document.querySelectorAll('.weather-day'), 'translateX(4px)');
    
    // Add ripple effect to buttons
    document.querySelectorAll('button, .nav-item').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 50%;
                pointer-events: none;
                width: 100px;
                height: 100px;
                transform: translate(-50%, -50%);
                animation: ripple 0.6s linear;
            `;
            
            ripple.style.left = e.clientX - rect.left + 'px';
            ripple.style.top = e.clientY - rect.top + 'px';
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});
