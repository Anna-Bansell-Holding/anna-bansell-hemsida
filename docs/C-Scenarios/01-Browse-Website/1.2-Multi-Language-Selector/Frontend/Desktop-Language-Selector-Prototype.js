/**
 * Desktop Language Selector Prototype
 * Anna Bansell Consulting - Three-State Language Selector
 * 
 * States: Default → Activated → Collapsed
 * Languages: Swedish (Svenska), English, Croatian
 */

class LanguageSelectorPrototype {
    constructor() {
        this.currentState = 'default';
        this.selectedLanguage = 'se';
        this.isTransitioning = false;
        
        // DOM Elements
        this.navList = document.getElementById('navList');
        this.languageSelector = document.getElementById('languageSelector');
        this.languageDropdown = document.getElementById('languageDropdown');
        this.hoverCursor = document.getElementById('hoverCursor');
        this.activeCursor = document.getElementById('activeCursor');
        this.consoleOutput = document.getElementById('consoleOutput');
        this.currentStateDisplay = document.getElementById('currentState');
        this.selectedLanguageDisplay = document.getElementById('selectedLanguage');
        
        // Language mappings
        this.languageMap = {
            'se': { name: 'Svenska', flag: '🇸🇪' },
            'en': { name: 'English', flag: '🇬🇧' },
            'hr': { name: 'Croatian', flag: '🇭🇷' }
        };
        
        this.init();
    }
    
    init() {
        this.log('🚀 Language Selector Prototype Initialized');
        this.setupEventListeners();
        this.updateDisplay();
        this.log('✅ All event listeners attached');
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
            option.addEventListener('mouseenter', (e) => this.handleOptionHover(e));
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }
    
    handleTabHover(e) {
        if (this.isTransitioning) return;
        
        const tab = e.currentTarget;
        const rect = tab.getBoundingClientRect();
        const containerRect = this.navList.getBoundingClientRect();
        
        this.hoverCursor.style.left = `${rect.left - containerRect.left}px`;
        this.hoverCursor.style.width = `${rect.width}px`;
        this.hoverCursor.classList.add('show');
        
        this.log(`🖱️ Hover: ${tab.textContent.trim()}`);
    }
    
    handleTabLeave() {
        if (this.isTransitioning) return;
        
        this.hoverCursor.classList.remove('show');
        this.log('🖱️ Leave: Navigation tab');
    }
    
    handleTabClick(e) {
        e.preventDefault();
        const tab = e.currentTarget;
        const tabId = tab.dataset.id;
        
        this.log(`🖱️ Click: Navigation tab - ${tabId}`);
        
        // Update active state
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active cursor
        this.updateActiveCursor(tab);
    }
    
    handleLanguageHover(e) {
        if (this.isTransitioning) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const containerRect = this.navList.getBoundingClientRect();
        
        this.hoverCursor.style.left = `${rect.left - containerRect.left}px`;
        this.hoverCursor.style.width = `${rect.width}px`;
        this.hoverCursor.classList.add('show');
        
        this.log('🖱️ Hover: Language selector');
    }
    
    handleLanguageLeave() {
        if (this.isTransitioning) return;
        
        this.hoverCursor.classList.remove('show');
        this.log('🖱️ Leave: Language selector');
    }
    
    handleLanguageClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (this.isTransitioning) {
            this.log('⚠️ Click ignored: Transition in progress');
            return;
        }
        
        this.log(`🖱️ Click: Language selector (Current state: ${this.currentState})`);
        
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
        
        this.log(`🖱️ Select: Language option - ${this.languageMap[language].name}`);
        
        this.selectLanguage(language);
    }
    
    handleOptionHover(e) {
        const option = e.currentTarget;
        this.log(`🖱️ Hover: Language option - ${option.textContent.trim()}`);
    }
    
    handleOutsideClick(e) {
        if (!this.languageSelector.contains(e.target) && 
            !this.languageDropdown.contains(e.target)) {
            if (this.currentState === 'activated') {
                this.log('🖱️ Click: Outside dropdown - collapsing');
                this.collapseDropdown();
            }
        }
    }
    
    handleKeydown(e) {
        if (e.key === 'Escape' && this.currentState === 'activated') {
            this.log('⌨️ Key: Escape - collapsing dropdown');
            this.collapseDropdown();
        }
    }
    
    activateDropdown() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentState = 'activated';
        
        this.log('🔄 State Change: Default → Activated');
        
        // Add expanded class for arrow rotation
        this.languageSelector.classList.add('expanded');
        
        // Show dropdown with slide animation
        this.languageDropdown.classList.add('show', 'slide-in');
        
        // Update display
        this.updateDisplay();
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
            this.log('✅ Transition Complete: Activated state');
        }, 300);
    }
    
    collapseDropdown() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentState = 'collapsed';
        
        this.log('🔄 State Change: Activated → Collapsed');
        
        // Remove expanded class
        this.languageSelector.classList.remove('expanded');
        
        // Hide dropdown with slide animation
        this.languageDropdown.classList.remove('show', 'slide-in');
        this.languageDropdown.classList.add('slide-out');
        
        // Update display
        this.updateDisplay();
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
            this.currentState = 'default';
            this.languageDropdown.classList.remove('slide-out');
            this.log('✅ Transition Complete: Default state');
            this.updateDisplay();
        }, 300);
    }
    
    selectLanguage(language) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.selectedLanguage = language;
        
        this.log(`🌐 Language Change: ${this.languageMap[language].name}`);
        
        // Update current language display
        const currentLangSpan = this.languageSelector.querySelector('.current-language');
        currentLangSpan.textContent = this.languageMap[language].name;
        
        // Update selected option in dropdown
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.lang === language) {
                option.classList.add('selected');
            }
        });
        
        // Update display
        this.updateDisplay();
        
        // Collapse dropdown after selection
        setTimeout(() => {
            this.collapseDropdown();
        }, 150);
    }
    
    updateActiveCursor(tab) {
        const rect = tab.getBoundingClientRect();
        const containerRect = this.navList.getBoundingClientRect();
        
        this.activeCursor.style.left = `${rect.left - containerRect.left}px`;
        this.activeCursor.style.width = `${rect.width}px`;
        this.activeCursor.classList.add('show');
        
        this.log(`📍 Active Cursor: Updated for ${tab.textContent.trim()}`);
    }
    
    updateDisplay() {
        this.currentStateDisplay.textContent = this.currentState.charAt(0).toUpperCase() + this.currentState.slice(1);
        this.selectedLanguageDisplay.textContent = `Language: ${this.languageMap[this.selectedLanguage].name}`;
    }
    
    log(message) {
        const timestamp = new Date().toLocaleTimeString();
        const logMessage = `[${timestamp}] ${message}`;
        
        console.log(logMessage);
        
        // Update console display
        this.consoleOutput.textContent += logMessage + '\n';
        this.consoleOutput.scrollTop = this.consoleOutput.scrollHeight;
    }
}

// Global functions for HTML buttons
function clearConsole() {
    const consoleOutput = document.getElementById('consoleOutput');
    consoleOutput.textContent = '';
    console.clear();
    console.log('🧹 Console cleared');
}

// Initialize prototype when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageSelector = new LanguageSelectorPrototype();
    
    // Add some initial logging
    console.log('🎯 Desktop Language Selector Prototype Ready');
    console.log('📋 Available Commands:');
    console.log('  - Click language selector to activate dropdown');
    console.log('  - Select language option to change language');
    console.log('  - Click outside to close dropdown');
    console.log('  - Press Escape to close dropdown');
    console.log('  - Hover over navigation items to see cursor effects');
});
