HTML5CSS3JavaScriptNodeJSReactBootstrapFirebaseReact RouterDepfu

Logohabemuspapagit 
Habemus Papa! React - Curso de CoderHouse

Video de navegación en la aplicación (click para ver)
habemuspapayoutube
Proyecto ficticio de sitio e-commerce creado para el curso de ReactJS de CoderHouse, basado en el proyecto Habemus Papa! para el curso de Desarrollo Web.

En este proyecto para el curso de ReactJS creamos varios componentes con el objetivo de construir un sitio e-commerce funcional. Los componentes centrales para el desarrollo de la funcionalidad son: ItemListContainer, ItemList, Item, ItemDetailContainer, ItemDetail, CartView, CartWidget, CartContext, NavBar, ItemCount.

Comenzamos instalando el software necesario, NodeJS, npm, etc. Luego con el comando npx create-react-app para generar la estructura básica de un proyecto ReactJS.

Decidí reutilizar los diseños del proyecto Habemus Papa! que realizamos en el curso de Desarrollo Web también en CoderHouse https://github.com/Diego-Schmidt/habemus-full-responsive/tree/habemus-sass

Para crear la funcionalidad necesaria para un proyecto ecommerce con carrito tuvimos que crear varios componentes. NavBar, Footer, CartContext, CartWidget, Item, ItemList, ItemListContainer, ItemDetailContainer, ItemDetail, ItemCount, LoadingSpinner y CartView, CheckOut.

Navbar = Componente que contiene los links para la navegación dentro de la app, el logo y el ícono del carrito.

CartWidget = Componente del ícono del carrito de compras.

Footer= Componente con el diseño del footer.

CartContext = Componente con toda la programación para mostrar el estado del contenido del carrito de compras.

Item = Componente que se encarga de generar el diseño de los ítems que se muestran en la lista del catálogo.

ItemList = Componente que se encarga de pasarle los parámetros a Item para generar cada unidad en la lista del catálogo

ItemListContainer = Componente con toda la lógica y programación para leer la base de datos y obtener los items.

ItemDetailContainer = Componente con la funcionalidad necesaria para crear el ItemDetail, los detalles del producto.

ItemDetail = Componente con los estilos necesarios para tomar la información que envía ItemDetailContainer.

ItemCount = Componente para agregar o quitar n productos al carrito desde la sección de detalles del producto.

LoaDingSpinner = Componente con estilos que muestra el clásico spinner cuando está cargando el contenido.

CartView = Componente para generar el carrito de compras recibiendo la información que genera CartContext.

CheckOut = Componente para generar el paso final del proceso de compras, donde el cliente ingresa sus datos y realiza el pago.

Agradezco a profesores y turores de CoderHouse por la guia y la buena onda en todos los cursos, durante el proceso de aprendizaje :D y también a todos los compañeros que me ayudaron y a los cuales ayudé.

Echo con
[HTML]
[CSS]
Bootstrap
[JavaScript]
[ReactJS]
[React-Bootstrap]
[Sweetalert2]
[Firebase]
License
Distributed under the MIT License. See LICENSE.txt for more information.

(Volver arriba)

Contacto
Diego Schmidt - @diegogschmidt - email@diegoschmidt.com

Link del proyecto: https://github.com/Diego-Schmidt/coderhouse-react Web Deployment: https://diego-schmidt.github.io/coderhouse-react/