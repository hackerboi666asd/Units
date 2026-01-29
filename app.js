// ===== Units Hilfe - JavaScript Logik =====

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const popularTagsContainer = document.getElementById('popularTags');
    const categoriesSection = document.getElementById('categoriesSection');
    const categoryCards = document.querySelectorAll('.category-card');
    const guidesSection = document.getElementById('guidesSection');
    const guidesGrid = document.getElementById('guidesGrid');
    const guidesTitle = document.getElementById('guidesTitle');
    const backBtn = document.getElementById('backBtn');
    const noResults = document.getElementById('noResults');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const platformButtons = document.querySelectorAll('.toggle-btn');

    // State
    let currentPlatform = 'all';
    let currentCategory = null;
    let searchQuery = '';
    let isSearchMode = false;

    // Initialize
    renderPopularTags();

    // ===== Event Listeners =====

    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        if (searchQuery.length > 0) {
            isSearchMode = true;
            categoriesSection.style.display = 'none';
            guidesSection.style.display = 'block';
            guidesTitle.textContent = `Suchergebnisse für "${e.target.value}"`;
            backBtn.style.display = 'none';
            renderGuides();
        } else {
            resetToCategories();
        }
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        resetToCategories();
    });

    // Platform toggle
    platformButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            platformButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPlatform = btn.dataset.platform;
            if (currentCategory || isSearchMode) {
                renderGuides();
            }
        });
    });

    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            currentCategory = card.dataset.category;
            isSearchMode = false;
            showGuidesForCategory(currentCategory);
        });
    });

    // Back button
    backBtn.addEventListener('click', () => {
        resetToCategories();
    });

    // Modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ===== Functions =====

    function resetToCategories() {
        currentCategory = null;
        isSearchMode = false;
        searchInput.value = '';
        searchQuery = '';
        categoriesSection.style.display = 'block';
        guidesSection.style.display = 'none';
        backBtn.style.display = 'block';
    }

    function showGuidesForCategory(category) {
        const categoryNames = {
            'stundenplan': '📅 Stundenplan',
            'unterricht': '📖 Unterricht',
            'klassenbuch': '📝 Klassenbuch'
        };
        guidesTitle.textContent = categoryNames[category] || category;
        backBtn.textContent = '← Zurück zu Kategorien';
        backBtn.style.display = 'block';
        categoriesSection.style.display = 'none';
        guidesSection.style.display = 'block';
        renderGuides();
    }

    function renderPopularTags() {
        popularTagsContainer.innerHTML = popularTags.map(tag =>
            `<button class="search-tag" data-tag="${tag}">${tag}</button>`
        ).join('');

        popularTagsContainer.querySelectorAll('.search-tag').forEach(tagBtn => {
            tagBtn.addEventListener('click', () => {
                searchInput.value = tagBtn.dataset.tag;
                searchQuery = tagBtn.dataset.tag.toLowerCase();
                isSearchMode = true;
                categoriesSection.style.display = 'none';
                guidesSection.style.display = 'block';
                guidesTitle.textContent = `Suchergebnisse für "${tagBtn.dataset.tag}"`;
                backBtn.style.display = 'none';
                renderGuides();
                searchInput.focus();
            });
        });
    }

    function renderGuides() {
        const filtered = guides.filter(guide => {
            // Platform filter
            if (currentPlatform !== 'all' && guide.platform !== currentPlatform && guide.platform !== 'beide') {
                return false;
            }
            // Category filter (only if not in search mode)
            if (!isSearchMode && currentCategory && guide.category !== currentCategory) {
                return false;
            }
            // Search filter
            if (searchQuery) {
                const searchText = `${guide.title} ${guide.description} ${guide.tags.join(' ')} ${guide.subcategory}`.toLowerCase();
                return searchText.includes(searchQuery);
            }
            return true;
        });

        if (filtered.length === 0) {
            guidesGrid.style.display = 'none';
            noResults.style.display = 'block';
        } else {
            guidesGrid.style.display = 'grid';
            noResults.style.display = 'none';

            guidesGrid.innerHTML = filtered.map(guide => `
                <div class="guide-card" data-id="${guide.id}">
                    <div class="guide-meta">
                        <span class="guide-platform ${guide.platform}">${getPlatformLabel(guide.platform)}</span>
                        <span class="guide-category-tag">${guide.subcategory}</span>
                    </div>
                    <h3>${highlightSearch(guide.title)}</h3>
                    <p>${highlightSearch(guide.description)}</p>
                    <div class="guide-tags">
                        ${guide.tags.slice(0, 4).map(tag => `<span class="guide-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');

            guidesGrid.querySelectorAll('.guide-card').forEach(card => {
                card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
            });
        }
    }

    // ===== Modal Functions =====

    function openModal(guideId) {
        const guide = guides.find(g => g.id === guideId);
        if (!guide) return;

        document.getElementById('modalPlatform').textContent = getPlatformLabel(guide.platform);
        document.getElementById('modalPlatform').className = `modal-platform ${guide.platform}`;
        document.getElementById('modalCategory').textContent = guide.subcategory;
        document.getElementById('modalTitle').textContent = guide.title;
        document.getElementById('modalContent').innerHTML = guide.content;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===== Helper Functions =====

    function getPlatformLabel(platform) {
        switch (platform) {
            case 'web': return '🖥️ WebUntis';
            case 'app': return '📱 App';
            case 'beide': return '🖥️📱 Web & App';
            default: return platform;
        }
    }

    function highlightSearch(text) {
        if (!searchQuery) return text;
        const regex = new RegExp(`(${escapeRegex(searchQuery)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
});
