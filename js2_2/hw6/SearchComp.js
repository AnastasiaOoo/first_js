Vue.component('app-search', {
	data() {
		return {
			filterData: ''
		}
	},

	template: `
        <form action="#" class="search-form" 
        	@submit.prevent="$parent.$refs.appProducts.filter(filterData)">
            <input type="text" class="search-field" v-model="filterData">
            <button class="btn-search" type="submit" >
                <i class="fa fa-search"></i>
            </button>
        </form>
	`,
	methods: {
		filter(filterData) {
			const regexp = new RegExp(filterData, 'i');
			this.products.forEach(el => el.filter = regexp.test(el.product_name));
		}
	},
	mounted() {
		this.app.list
			.then(data => {
				for (let el of data) {
					el.filter = true;
					this.products.push(el);
				}
			})
			.catch(error => {
				this.errorMsg = error;
			});		
	}
});