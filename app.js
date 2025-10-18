// Основное Vue приложение
new Vue({
    el: '#app',
    data: function() {
        return {
            menuCategories: menuData.menuCategories,
            cart: [],
            activeCategory: 'all',
            maxItems: 8,
            showDetailedCart: false,
            searchQuery: ''
        };
    },
    computed: {
        totalBelki: function() {
            return this.cart.reduce(function(sum, item) { 
                return sum + item.belki * item.count; 
            }, 0).toFixed(1);
        },
        totalZhiry: function() {
            return this.cart.reduce(function(sum, item) { 
                return sum + item.zhiry * item.count; 
            }, 0).toFixed(1);
        },
        totalUglevody: function() {
            return this.cart.reduce(function(sum, item) { 
                return sum + item.uglevody * item.count; 
            }, 0).toFixed(1);
        },
        totalKJ: function() {
            return this.cart.reduce(function(sum, item) { 
                return sum + item.kJ * item.count; 
            }, 0).toFixed(0);
        },
        totalKcal: function() {
            return this.cart.reduce(function(sum, item) { 
                return sum + item.kcal * item.count; 
            }, 0).toFixed(0);
        },
        totalItems: function() {
            return this.cart.reduce(function(sum, item) { 
                return sum + item.count; 
            }, 0);
        },
        categories: function() {
            return ['all'].concat(this.menuCategories.map(function(cat) { 
                return cat.name; 
            }));
        },
        hasResults: function() {
            if (this.searchQuery) {
                var query = this.searchQuery.toLowerCase();
                return this.menuCategories.some(function(category) {
                    return category.items.some(function(item) {
                        return item.nazvanie_blyuda.toLowerCase().includes(query);
                    });
                });
            }
            return true;
        }
    },
    methods: {
        setCategory: function(category) {
            this.activeCategory = category;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        filteredItems: function(items) {
            var filtered = items;
            
            // Применяем поиск
            if (this.searchQuery) {
                var query = this.searchQuery.toLowerCase();
                filtered = items.filter(function(item) {
                    return item.nazvanie_blyuda.toLowerCase().includes(query);
                });
            }
            
            // Ограничение по максимуму на мобильных
            if (window.innerWidth <= 768) {
                return filtered.slice(0, this.maxItems);
            }
            return filtered;
        },
        shouldShowCategory: function(category) {
            if (this.activeCategory !== 'all' && this.activeCategory !== category.name) {
                return false;
            }
            
            // Показываем категорию только если есть результаты поиска
            if (this.searchQuery) {
                return this.filteredItems(category.items).length > 0;
            }
            
            return true;
        },
        getCartItem: function(item) {
            return this.cart.find(function(ci) { 
                return ci.nazvanie_blyuda === item.nazvanie_blyuda; 
            });
        },
        addToCart: function(item) {
            var existingIndex = this.cart.findIndex(function(ci) { 
                return ci.nazvanie_blyuda === item.nazvanie_blyuda; 
            });
            
            if (existingIndex !== -1) {
                this.cart[existingIndex].count++;
            } else {
                var newItem = Object.assign({}, item);
                newItem.count = 1;
                this.cart.push(newItem);
            }
            
            // Убрано автоматическое открытие детальной корзины
        },
        removeFromCart: function(item) {
            var index = this.cart.findIndex(function(ci) { 
                return ci.nazvanie_blyuda === item.nazvanie_blyuda; 
            });
            
            if (index !== -1) {
                if (this.cart[index].count > 1) {
                    this.cart[index].count--;
                } else {
                    this.cart.splice(index, 1);
                }
            }
        },
        clearCart: function() {
            this.cart = [];
            this.showDetailedCart = false;
        },
        handleResize: function() {
            this.maxItems = window.innerWidth <= 768 ? 6 : 12;
        }
    },
    mounted: function() {
        // Загрузка корзины из localStorage
        var savedCart = localStorage.getItem('mare-damore-cart');
        if (savedCart) {
            try {
                this.cart = JSON.parse(savedCart);
            } catch (e) {
                console.error('Error loading cart from localStorage:', e);
                this.cart = [];
            }
        }
        
        // Адаптация к мобильным устройствам
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    },
    watch: {
        cart: {
            handler: function(newCart) {
                // Сохранение корзины в localStorage
                try {
                    localStorage.setItem('mare-damore-cart', JSON.stringify(newCart));
                } catch (e) {
                    console.error('Error saving cart to localStorage:', e);
                }
            },
            deep: true
        }
    }
});