/**
 * Desktop Language Selector Prototype
 * Simplified version - clean navigation menu with smooth animations
 * States: Default → Activated → Collapsed
 * Languages: Swedish (Svenska), English, Croatian
 */

class LanguageSelectorPrototype {
    constructor() {
        this.currentState = 'default';
        this.selectedLanguage = 'se';
        this.isTransitioning = false;
        
        // Animation IDs for cancellation
        this.hoverCursorAnimationId = null;
        this.activeCursorAnimationId = null;
        
        // DOM Elements
        this.navList = document.getElementById('navList');
        this.languageSelector = document.getElementById('languageSelector');
        this.languageDropdown = document.getElementById('languageDropdown');
        this.hoverCursor = document.getElementById('hoverCursor');
        this.activeCursor = document.getElementById('activeCursor');
        
        // Language mappings - using local language names
        this.languageMap = {
            'se': { name: 'Svenska', localName: 'Svenska' },
            'en': { name: 'English', localName: 'English' },
            'hr': { name: 'Croatian', localName: 'Hrvatski' }
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setDefaultActiveState();
        this.measureLanguageSelector();
        // Delay the activated state to ensure measurement is complete
        setTimeout(() => {
            this.showActivatedState();
        }, 100);
    }
    
    measureLanguageSelector() {
        // Temporarily show the language dropdown to measure its width
        this.languageDropdown.style.position = 'absolute';
        this.languageDropdown.style.visibility = 'hidden';
        this.languageDropdown.style.opacity = '1';
        this.languageDropdown.style.transform = 'scaleX(1)';
        this.languageDropdown.style.display = 'flex';
        
        // Force a reflow to ensure the element is rendered
        this.languageDropdown.offsetHeight;
        
        // Measure the expanded width
        const expandedWidth = this.languageDropdown.offsetWidth;
        
        // Reset the dropdown to hidden state
        this.languageDropdown.style.position = '';
        this.languageDropdown.style.visibility = '';
        this.languageDropdown.style.opacity = '0';
        this.languageDropdown.style.transform = 'scaleX(0)';
        this.languageDropdown.style.display = '';
        
        // Calculate the required margin (expanded width + some padding)
        const requiredMargin = expandedWidth + 20; // 20px padding
        
        // Apply the dynamic margin to the language selector
        this.languageSelector.style.marginLeft = `${requiredMargin}px`;
        
        console.log(`Language selector measured: ${expandedWidth}px expanded width, setting margin to ${requiredMargin}px`);
        
        // Return the margin for use in activated state
        return requiredMargin;
    }
    
    showActivatedState() {
        // Show the language selector in activated state for demonstration
        this.currentState = 'activated';
        this.isTransitioning = false;
        
        // Add expanded class for arrow rotation
        this.languageSelector.classList.add('expanded');
        
        // Hide the current language text and show dropdown
        const currentLangSpan = this.languageSelector.querySelector('.current-language');
        const dropdownArrow = this.languageSelector.querySelector('.dropdown-arrow');
        
        currentLangSpan.style.opacity = '0';
        dropdownArrow.style.opacity = '0';
        
        // Force the dropdown to be visible with proper styling
        this.languageDropdown.style.opacity = '1';
        this.languageDropdown.style.transform = 'scaleX(1)';
        this.languageDropdown.style.pointerEvents = 'auto';
        this.languageDropdown.classList.add('show');
        
        // Debug: Check if dropdown is visible
        console.log("Language selector activated state shown");
        console.log("Dropdown element:", this.languageDropdown);
        console.log("Dropdown classes:", this.languageDropdown.className);
        console.log("Dropdown computed style:", window.getComputedStyle(this.languageDropdown).display);
        console.log("Language options count:", this.languageDropdown.children.length);
        console.log("Dropdown opacity:", window.getComputedStyle(this.languageDropdown).opacity);
        console.log("Dropdown transform:", window.getComputedStyle(this.languageDropdown).transform);
    }
    
    setupEventListeners() {
        // Navigation tabs hover effects
        const navTabs = document.querySelectorAll('.nav-tab[data-type="navigation"]');
        navTabs.forEach(tab => {
            tab.addEventListener('mouseenter', (e) => this.handleTabHover(e));
            tab.addEventListener('mouseleave', () => this.handleTabLeave());
            tab.addEventListener('click', (e) => this.handleTabClick(e));
        });
        
        // Language selector specific events
        this.languageSelector.addEventListener('mouseenter', (e) => this.handleLanguageHover(e));
        this.languageSelector.addEventListener('mouseleave', () => this.handleLanguageLeave());
        this.languageSelector.addEventListener('click', (e) => this.handleLanguageClick(e));
        
        // Language dropdown options
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => this.handleLanguageSelect(e));
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }
    
    setDefaultActiveState() {
        // Set the first navigation tab as active by default (it already has active class in HTML)
        const firstTab = document.querySelector('.nav-tab.active');
        if (firstTab) {
            this.updateActiveCursor(firstTab);
        }
    }
    
    handleTabHover(e) {
        if (this.isTransitioning) return;
        
        const tab = e.currentTarget;
        const rect = tab.getBoundingClientRect();
        const containerRect = this.navList.getBoundingClientRect();
        
        // Calculate position relative to the navigation list
        const leftPosition = rect.left - containerRect.left;
        const width = rect.width;
        
        // Smooth transition using requestAnimationFrame
        this.animateCursorTo(leftPosition, width);
        this.hoverCursor.classList.add('show');
    }
    
    animateCursorTo(targetLeft, targetWidth) {
        // Cancel any existing animation
        if (this.hoverCursorAnimationId) {
            cancelAnimationFrame(this.hoverCursorAnimationId);
        }
        
        const startLeft = parseFloat(this.hoverCursor.style.left) || 0;
        const startWidth = parseFloat(this.hoverCursor.style.width) || 0;
        const duration = 300; // 300ms
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            const currentLeft = startLeft + (targetLeft - startLeft) * easeOut;
            const currentWidth = startWidth + (targetWidth - startWidth) * easeOut;
            
            this.hoverCursor.style.left = `${currentLeft}px`;
            this.hoverCursor.style.width = `${currentWidth}px`;
            
            if (progress < 1) {
                this.hoverCursorAnimationId = requestAnimationFrame(animate);
            } else {
                this.hoverCursorAnimationId = null;
            }
        };
        
        this.hoverCursorAnimationId = requestAnimationFrame(animate);
    }
    
    handleTabLeave() {
        if (this.isTransitioning) return;
        this.hoverCursor.classList.remove('show');
    }
    
    handleTabClick(e) {
        e.preventDefault();
        const tab = e.currentTarget;
        const tabId = tab.dataset.id;
        
        // Update active state and reset text colors
        document.querySelectorAll('.nav-tab').forEach(t => {
            t.classList.remove('active');
            t.style.color = '#1a1a1a'; // Reset to black
        });
        tab.classList.add('active');
        
        // Update active cursor with smooth animation
        this.updateActiveCursor(tab);
    }
    
    handleLanguageHover(e) {
        if (this.isTransitioning) return;
        
        const tab = e.currentTarget;
        const rect = tab.getBoundingClientRect();
        const containerRect = this.navList.getBoundingClientRect();
        
        // Calculate position relative to the navigation list
        const leftPosition = rect.left - containerRect.left;
        const width = rect.width;
        
        // Smooth transition using requestAnimationFrame
        this.animateCursorTo(leftPosition, width);
        this.hoverCursor.classList.add('show');
    }
    
    handleLanguageLeave() {
        if (this.isTransitioning) return;
        this.hoverCursor.classList.remove('show');
    }
    
    handleLanguageClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (this.currentState === 'default') {
            this.activateDropdown();
        } else if (this.currentState === 'activated') {
            this.collapseDropdown();
        }
    }
    
    handleLanguageSelect(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const option = e.currentTarget;
        const language = option.dataset.lang;
        this.selectLanguage(language);
    }
    
    handleOutsideClick(e) {
        if (!this.languageSelector.contains(e.target) && 
            !this.languageDropdown.contains(e.target)) {
            if (this.currentState === 'activated') {
                this.collapseDropdown();
            }
        }
    }
    
    handleKeydown(e) {
        if (e.key === 'Escape' && this.currentState === 'activated') {
            this.collapseDropdown();
        }
    }
    
    activateDropdown() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentState = 'activated';
        
        // Add expanded class for arrow rotation
        this.languageSelector.classList.add('expanded');
        
        // Hide the current language text and show dropdown
        const currentLangSpan = this.languageSelector.querySelector('.current-language');
        const dropdownArrow = this.languageSelector.querySelector('.dropdown-arrow');
        
        currentLangSpan.style.opacity = '0';
        dropdownArrow.style.opacity = '0';
        
        // Show dropdown with horizontal expansion
        this.languageDropdown.classList.add('show');
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
        }, 300);
    }
    
    collapseDropdown() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentState = 'collapsed';
        
        // Remove expanded class
        this.languageSelector.classList.remove('expanded');
        
        // Hide dropdown
        this.languageDropdown.classList.remove('show');
        
        // Show the current language text
        const currentLangSpan = this.languageSelector.querySelector('.current-language');
        const dropdownArrow = this.languageSelector.querySelector('.dropdown-arrow');
        
        currentLangSpan.style.opacity = '1';
        dropdownArrow.style.opacity = '1';
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
            this.currentState = 'default';
        }, 300);
    }
    
    selectLanguage(language) {
        this.selectedLanguage = language;
        
        // Update the current language display using local language name
        const currentLangSpan = this.languageSelector.querySelector('.current-language');
        currentLangSpan.textContent = this.languageMap[language].localName;
        
        // Update selected state in dropdown
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('selected');
        });
        document.querySelector(`[data-lang="${language}"]`).classList.add('selected');
        
        // Collapse dropdown after selection
        setTimeout(() => {
            this.collapseDropdown();
        }, 150);
    }
    
    updateActiveCursor(tab) {
        const rect = tab.getBoundingClientRect();
        const containerRect = this.navList.getBoundingClientRect();
        
        // Calculate position relative to the navigation list
        const leftPosition = rect.left - containerRect.left;
        const width = rect.width;
        
        // Always animate, but if cursor is not visible, start from 0,0
        if (!this.activeCursor.classList.contains('show')) {
            this.activeCursor.style.left = '0px';
            this.activeCursor.style.width = '0px';
            this.activeCursor.classList.add('show');
        }
        
        // Change text color immediately when animation starts
        tab.style.color = 'white';
        
        // Always animate to new position
        this.animateActiveCursorTo(leftPosition, width);
    }
    
    animateActiveCursorTo(targetLeft, targetWidth) {
        // Cancel any existing animation
        if (this.activeCursorAnimationId) {
            cancelAnimationFrame(this.activeCursorAnimationId);
        }
        
        const startLeft = parseFloat(this.activeCursor.style.left) || 0;
        const startWidth = parseFloat(this.activeCursor.style.width) || 0;
        const duration = 500; // 500ms - longer for more visible animation
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            const currentLeft = startLeft + (targetLeft - startLeft) * easeOut;
            const currentWidth = startWidth + (targetWidth - startWidth) * easeOut;
            
            this.activeCursor.style.left = `${currentLeft}px`;
            this.activeCursor.style.width = `${currentWidth}px`;
            
            if (progress < 1) {
                this.activeCursorAnimationId = requestAnimationFrame(animate);
            } else {
                this.activeCursorAnimationId = null;
            }
        };
        
        this.activeCursorAnimationId = requestAnimationFrame(animate);
    }
}

// Initialize the prototype when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSelectorPrototype();
});