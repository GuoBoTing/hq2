// ============================================
// Navigation Toggle (Mobile)
// ============================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// ============================================
// Smooth Scroll with Offset
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#header') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for sticky nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Active Navigation Link on Scroll
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Handle header section
    if (scrollY < 100) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#header') {
                link.classList.add('active');
            }
        });
    }
}

window.addEventListener('scroll', updateActiveNav);

// ============================================
// PDF Modal/Lightbox
// ============================================

const pdfLinks = document.querySelectorAll('.pdf-link');
const pdfModal = document.getElementById('pdf-modal');
const pdfIframe = document.getElementById('pdf-iframe');
const pdfModalTitle = document.getElementById('pdf-modal-title');
const pdfModalClose = document.getElementById('pdf-modal-close');
const pdfModalBackdrop = document.getElementById('pdf-modal-backdrop');
const pdfDownloadLink = document.getElementById('pdf-download-link');
const pdfLoading = document.getElementById('pdf-loading');

if (pdfLinks.length > 0 && pdfModal) {
    pdfLinks.forEach(link => {
        link.addEventListener('click', function() {
            const pdfPath = this.getAttribute('data-pdf');
            const pdfTitle = this.getAttribute('data-title');
            
            if (pdfPath) {
                // Set modal title
                if (pdfModalTitle) {
                    pdfModalTitle.textContent = pdfTitle || '檢驗報告';
                }
                
                // Set download link
                if (pdfDownloadLink) {
                    pdfDownloadLink.href = pdfPath;
                    pdfDownloadLink.download = pdfPath.split('/').pop();
                }
                
                // Show loading
                if (pdfLoading) {
                    pdfLoading.style.display = 'block';
                }
                
                // Open modal
                pdfModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Load PDF in iframe
                if (pdfIframe) {
                    pdfIframe.src = pdfPath + '#toolbar=0&navpanes=0&scrollbar=1';
                    
                    // Hide loading when PDF loads
                    pdfIframe.onload = function() {
                        if (pdfLoading) {
                            pdfLoading.style.display = 'none';
                        }
                    };
                }
            }
        });
    });
    
    // Close modal functions
    function closePdfModal() {
        pdfModal.classList.remove('active');
        document.body.style.overflow = '';
        // Clear iframe to stop loading
        if (pdfIframe) {
            pdfIframe.src = '';
        }
    }
    
    if (pdfModalClose) {
        pdfModalClose.addEventListener('click', closePdfModal);
    }
    
    if (pdfModalBackdrop) {
        pdfModalBackdrop.addEventListener('click', closePdfModal);
    }
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && pdfModal.classList.contains('active')) {
            closePdfModal();
        }
    });
}

// ============================================
// Image Modal/Lightbox
// ============================================

function initImageModal() {
    const clickableImages = document.querySelectorAll('.clickable-image');
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('image-modal-close');
    const modalBackdrop = document.getElementById('image-modal-backdrop');

    if (clickableImages.length > 0 && imageModal && modalImage) {
        // Add click event to all clickable images
        clickableImages.forEach(clickableImage => {
            clickableImage.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (img) {
                    modalImage.src = img.src;
                    modalImage.alt = img.alt;
                    imageModal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            });
        });

        // Close modal functions
        function closeImageModal() {
            imageModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }

        if (modalClose) {
            modalClose.addEventListener('click', closeImageModal);
        }

        if (modalBackdrop) {
            modalBackdrop.addEventListener('click', closeImageModal);
        }

        // Close modal on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && imageModal.classList.contains('active')) {
                closeImageModal();
            }
        });
    }
}

// ============================================
// Intersection Observer for Fade-in Animation
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => observer.observe(el));
});

// ============================================
// Navbar Scroll Effect
// ============================================

let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Form Handling (if contact form is added later)
// ============================================

// Placeholder for future contact form functionality
function handleContactForm(e) {
    e.preventDefault();
    // Form handling logic can be added here
    alert('詢價功能開發中，請直接致電或傳真聯繫我們。');
}

// ============================================
// Mobile Menu Toggle (if needed in future)
// ============================================

// Placeholder for mobile navigation if needed
function initMobileMenu() {
    // Mobile menu logic can be added here if needed
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initImageModal();
});

