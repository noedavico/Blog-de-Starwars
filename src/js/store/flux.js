import {
    array
} from "prop-types";

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
            favoritos: [],
            filtrados: [],
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
            // declaro las funciones para realizar los fetch de planeta y que los datos se guarden en store
            loadPersonajes: () => {
                fetch('https://swapi.dev/api/people')
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
            // funciones para realizar los fetch de infopersonajes la cual llamo en la vista con useEffect y le paso el parametro para completar la ruta y obtener la info de cada personaje 
            loadinfoPersonajes: (uid) => {
                // fetch(`https://www.swapi.tech/api/people/${uid}`)
                fetch('https://www.swapi.tech/api/people/' + uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        infoPersonajes: data.result
                    }))
            },

            loadinfoPlanetas: (uid) => {
                fetch('https://www.swapi.tech/api/planets/' + uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        infoPlanetas: data.result
                    }))
            },

            loadinfoVehiculos: (uid) => {
                fetch('https://www.swapi.tech/api/vehicles/' + uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        infoVehiculos: data.result
                    }))
            },

            // funcion para agregar favoritos asociadas al boton corazon de cada card en home 
            agregarFavoritos: (item) => {
                const store = getStore();
                // forma un array extrayendo la propiedad nombre de favoritos
                const array = store.favoritos.map((item) => {
                    return (item.name)
                });
                //verifica si el nombre se ecuentra en el array, sino esta lo agrega a el array favoritos 
                const res = array.includes(item.name);
                if (res == false) {
                    setStore({
                        favoritos: [...store.favoritos, item],
                    });
                }
            },

            //funcion para borrar favoritos asociadas al boton X dentro de la lista en el dropdown de navbar
            borrarFavoritos: (itemBorrar) => {
                const store = getStore();
                const newfavoritos = store.favoritos.filter((item) => item !== itemBorrar)
                setStore({
                    favoritos: newfavoritos
                })
            },

            //Funcion asociada al input para buscar personajes/planeta/vehiculo conformada if aninado, sino lo encuentra en una pasa al siguiente .
            searchItems: (searchValue) => {
                const store = getStore()
                let filteredData = []
                let filteredPlanet = []
                let filteredVehiculos = []
                if (searchValue !== '') {
                    filteredData = store.personajes.filter((item) => {
                        return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
                    })
                    filteredPlanet = store.planetas.filter((item) => {
                        return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
                    })
                    filteredVehiculos = store.vehiculos.filter((item) => {
                        return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
                    })
                    if (filteredData.length > 0) {
                        setStore({
                            filtrados: filteredData
                        });
                    }
                    if (filteredPlanet.length > 0) {
                        setStore({
                            filtrados: filteredPlanet
                        });
                    }
                    if (filteredVehiculos.length > 0) {
                        setStore({
                            filtrados: filteredVehiculos
                        });
                    }
                } else {
                    setStore({
                        filtrados: []
                    });
                }
            },

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