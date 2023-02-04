const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            color: "no hay color",
			personajes: [],
            planetas: [],
            vehiculos: [],
            infoPersonajes: [],
            infoPlanetas: [],
            infoVehiculos: [],
            favorites: [],
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            loadPersonajes: () => {
                fetch('https://www.swapi.tech/api/people/')
                    .then((response) => response.json())
                    .then(data => setStore({
                        personajes: data.results
                    }))
            },

            loadPlanetas: () => {
                fetch("https://swapi.dev/api/planets")
		.then(res => res.json())
		.then(data => setStore({
            planetas: data.results
        }))
    },

    loadVehiculos: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
.then(res => res.json())
.then(data => setStore({
    vehiculos: data.results
}))
},

loadinfoPersonajes: (uid) => {
    // fetch(`https://www.swapi.tech/api/people/${uid}`)
    fetch('https://www.swapi.tech/api/people/'+uid)
        .then((response) => response.json())
        .then(data => setStore({
            infoPersonajes: data.result
        }))
},

loadinfoPlanetas: (uid) => {
        fetch('https://www.swapi.tech/api/planets/'+uid)
            .then((response) => response.json())
            .then(data => setStore({
                infoPlanetas: data.result
        }))
},
    
loadinfoVehiculos: (uid) => {
    fetch('https://www.swapi.tech/api/vehicles/'+uid)
    .then((response) => response.json())
    .then(data => setStore({
        infoVehiculos: data.result
}))
},


agregarFavoritos: (item) => {
    const store = getStore();
    setStore({ favorites: [...store.favorites, item]});
},
borrarFavoritos: (itemBorrar) => {
        const store = getStore();
        const newFavorites = store.favorites.filter((item) => item !== itemBorrar)
        setStore({favorites: newFavorites})
},

            // loadSomeData: () => {
            //     /**
            //     	fetch().then().then(data => setStore({ "foo": data.bar }))
            //     */
            // },

            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;