 const questions =[{
    id:'1',
    name: 'Desarrollo de aplicaciones',
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
    id:'2',
    name: 'Tecnología',
    data:[
        {
            type:'unique',
            question:'¿Cuantas horas dedicas a la utilizacion de la computadora?',
            question_id: 1,
            request:[{
                    id:'1',
                    request:'1 hora'
                },
                {
                    id:'2',
                    request:'No dedico ningun tiempo'
                },
                {
                    id:'3',
                    request:'De 5 horas en adelante'
                },
                {
                    id:'4',
                    request:'De 2 a 4 horas'
                }]
        },
        {
            type:'unique',
            question:'¿tienes computadora en tu hogar?',
            question_id: 2,
            request:[{
                    id:'5',
                    request:'Si'
                },
                {
                    id:'6',
                    request:'No'
                }]
        },{
            type:'free',
            question:'¿para que utilizas tu la computadora?',
            question_id: 3,
            request:''
        },
        {
            type:'unique',
            question:'¿que nivel crees tu que tienes en el manejo de la computadora?',
            question_id: 4,
            request:[{
                    id:'7',
                    request:'Avanzado'
                },
                {
                    id:'8',
                    request:'Basico'
                },
                {
                    id:'9',
                    request:'Bajo'
                },
                {
                    id:'10',
                    request:'Alto'
                }]
        },{
            type:'free',
            question:'¿para ti que es tecnologia?',
            question_id: 5,
            request:''
        },{
            type:'free',
            question:'¿para ti que es informatica?',
            question_id: 6,
            request:''
        },
        {
            type:'unique',
            question:'¿tienes correo electronico?',
            question_id: 7,
            request:[{
                    id:'11',
                    request:'Si'
                },
                {
                    id:'12',
                    request:'No'
                }]
        },
        {
            type:'unique',
            question:'¿a cual de las siguientes redes sociales perteneces?',
            question_id: 8,
            request:[{
                    id:'13',
                    request:'ninguna'
                },
                {
                    id:'14',
                    request:'twitter'
                },
                {
                    id:'15',
                    request:'hi5'
                },
                {
                    id:'16',
                    request:'facebook'
                }]
        }
    ]
}
]

export default questions