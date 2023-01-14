Vue.createApp({
    data() {
        return {
            NameTask: '',
            tasks: [],
        };
    },
    methods: {
        handlyInput(event){
          this.NameTask = event.target.value;
        },
        addTask(){
            if (this.NameTask === '') return false;
            this.tasks.push({
                title: this.NameTask,
                id: Math.random(),
            });
            this.NameTask = '';
        },
        removeTask(id){
            this.tasks.splice(id, 1);
        },
        removeAll(){
            this.tasks = [];
        }
    }
}).mount('#app')