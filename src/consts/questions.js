 const questions =[{
    name: 'Desarrollador',
    data:[
    {
        type:'unique',
        question:'Para tus desarrollos Web utilizas algun framework?',
        question_id: 1,
        request:[{
                id:'1',
                request:'Si, siempre'
            },
            {
                id:'2',
                request:'Solo para proyectos pequeños'
            },
            {
                id:'3',
                request:'Solo para proyectos grandes'
            },
            {
                id:'4',
                request:'No, nunca'
            },
            {
                id:'5',
                request:'No se que es un framework'
            }]
    },
    {
        type:'unique',
        question:'Bajo qué sistema operativo desarrollas tus aplicaciones móviles?',
        question_id: 2,
        request:[{
                id:'6',
                request:'Android'
            },
            {
                id:'7',
                request:'iOS'
            },
            {
                id:'8',
                request:'Firefox OS'
            },
            {
                id:'9',
                request:'Ubuntu Touch'
            },
            {
                id:'10',
                request:'No desarrollo aplicaciones móviles'
            }]
    },
    {
        type:'multiple',
        question:'Cual crees que es el sistema operativo mas estable para PC',
        question_id: 3,
        request:[{
                id:'11',
                request:'FreeBSD'
            },
            {
                id:'12',
                request:'GNU/Linux'
            },
            {
                id:'13',
                request:'Mac OSX'
            },
            {
                id:'14',
                request:'Unix'
            },
            {
                id:'15',
                request:'Windows'
            },
            {
                id:'16',
                request:'Otros'
            }]
    },
    {
        type:'unique',
        question:'¿Tienes página web en Internet?',
        question_id: 4,
        request:[{
                id:'17',
                request:'Si'
            },
            {
                id:'18',
                request:'No'
            }]
    },{
        type:'free',
        question:'¿Que piensas del machine learning?',
        question_id: 5,
        request:''
    }
]
},
{
    name: 'Motos',
    data:[]
}
]

export default questions