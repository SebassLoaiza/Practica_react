import React from "react";
import './body.css';
import Card from './card';
import { useState } from "react";

function Body() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Pechuga de pollo",
            description: "Fresca, lista para cocinar",
            price: "$12.000",
            badge: "Destacado",
            category: "Pollo y huevos",
            count: 0,
            shop: false
        },
        {
            id: 2,
            name: "Huevos AA",
            description: "Cubeta x30 unidades",
            price: "$18.000",
            badge: "Orgánico",
            category: "Pollo y huevos",
            count: 0,
            shop: false
        },
        {
            id: 3,
            name: "Tilapia fresca",
            description: "Directo del mar",
            price: "$15.000",
            badge: "Nuevo",
            category: "Pescado",
            count: 0,
            shop: false
        },
        {
            id: 4,
            name: "Queso campesino",
            description: "100% natural",
            price: "$9.000",
            badge: "Oferta",
            category: "Lácteos",
            count: 0,
            shop: false
        }
    ]);

    const [input, setInput] = useState('');

    const [task, setTask] = useState([]);

    const [dele, setDele] = useState(false);

    const scrollToProducts = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    const add = () => {

        if (input.trim() === "") return;

        const newTask = {
            text: input,
            completed: false
        };

        setTask([...task, newTask]);

        setInput("");
    };

    function abrirModal(id) {
        setProducts(products.map(product =>
            product.id === id
                ? { ...product, shop: true }
                : product
        ));
    }

    function cerrarModal(id) {
        setProducts(products.map(product =>
            product.id === id
                ? { ...product, shop: false }
                : product
        ));
    }

    function confirmarCompra(id) {

        const producto = products.find(p => p.id === id);

        alert(`Compra realizada: ${producto.name}`);

        cerrarModal(id);
    }

    function agregar(id) {

        setProducts(products.map(product =>
            product.id === id
                ? { ...product, count: product.count + 1 }
                : product
        ));
    }

    function quitar(id) {

        setProducts(products.map(product =>
            product.id === id
                ? {
                    ...product,
                    count: product.count > 0
                        ? product.count - 1
                        : 0
                }
                : product
        ));
    }

    function quitar() {
        setContador(contador - 1)
    }

    const tareaCompletada = (index) => {

        const updatedTasks = [...task];

        updatedTasks[index].completed =
            !updatedTasks[index].completed;

        setTask(updatedTasks);
    };

    const eliminarTarea = (index) => {

        const updatedTasks = task.filter((_, i) => i !== index);

        setTask(updatedTasks);
    };

    return (
        <main className="main">

            <section className="hero">
                <h1>Avícola Mar y Tierra</h1>
                <p>
                    Ofrecemos productos frescos de la mejor calidad: pollo, huevos,
                    pescado y más. Comprometidos con la frescura, el sabor y la confianza
                    de nuestros clientes.
                </p>
            </section>

            <div className="app">
                <div className="todo-container">

                    <h1>Lista de compras</h1>

                    <div className="input-group">

                        <input
                            value={input}
                            type="text"
                            placeholder="Agregar nueva tarea..."
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <button onClick={add}>
                            Agregar
                        </button>

                    </div>

                    <ul className="todo-list">

                        {task.map((element, i) => (

                            <li
                                className={`todo-item ${element.completed ? "done" : ""}`}
                                key={i}
                            >

                                <span>
                                    {element.text}
                                </span>

                                <div className="actions">

                                    <button
                                        className="complete"
                                        onClick={() => tareaCompletada(i)}
                                    >
                                        ✔
                                    </button>

                                    <button
                                        className="delete"
                                        onClick={() => eliminarTarea(i)}
                                    >
                                        ✖
                                    </button>

                                </div>

                            </li>

                        ))}

                    </ul>

                </div>
            </div>

            <section className="categories-section">
                <h2>Categorías</h2>

                <div className="categories-grid">

                    <div className="category-card">
                        <Card
                            title={'Pollo y huevos'}
                            url={"https://pazodevilane.com/wp-content/uploads/2022/01/granja-avicola-de-jaula_3.jpg"}
                            nameButton={'Ver mas'}
                            click={scrollToProducts}
                        />
                    </div>

                    <div className="category-card">
                        <Card
                            title={'Pescado'}
                            url={"https://alaskaseafood.es/wp-content/uploads/2020/04/producto-pescado-blanco-.jpg"}
                            nameButton={'Ver mas'}
                            click={scrollToProducts}
                        />
                    </div>

                    <div className="category-card">
                        <Card
                            title={'Lacteos'}
                            url={"https://www.alqueria.com.co/_next/image?url=https%3A%2F%2Falqueriauploads.s3.us-east-1.amazonaws.com%2Fprod%2FBlog_Alqueria_Productos_lacteos_892191dfc3.jpg&w=3840&q=75"}
                            nameButton={'Ver mas'}
                            click={scrollToProducts}
                        />
                    </div>

                    <div className="category-card">
                        <Card
                            title={'Aceites'}
                            url={"https://hips.hearstapps.com/hmg-prod/images/aceites-diferentes-elle-gourmet-65226dba46ae1.jpg"}
                            nameButton={'Ver mas'}
                            click={scrollToProducts}
                        />
                    </div>

                    <div className="category-card">
                        <Card
                            title={'Embutidos'}
                            url={"https://thefoodtech.com/wp-content/uploads/2020/05/jamon-y-salchicha.jpg"}
                            nameButton={'Ver mas'}
                            click={scrollToProducts}
                        />
                    </div>

                    <div className="category-card">
                        <Card
                            title={'Harinas'}
                            url={"https://chapela.es/wp-content/uploads/2025/03/tipos-de-harinas-e1747301637580.jpg"}
                            nameButton={'Ver mas'}
                            click={scrollToProducts}
                        />
                    </div>
                </div>
            </section>

            <section className="category">
                <h2>Pollo y huevos</h2>

                <div className="grid">

                    {products
                        .filter(product => product.category === "Pollo y huevos")
                        .map(product => (

                            <div className="card" key={product.id}>

                                <span className="badge">
                                    {product.badge}
                                </span>

                                <img
                                    src="https://via.placeholder.com/200"
                                    alt={product.name}
                                />

                                <h3>{product.name}</h3>

                                <p>{product.description}</p>

                                <div className="card-footer">

                                    <span className="price">
                                        {product.price}
                                    </span>

                                    <button onClick={() => abrirModal(product.id)}>
                                        Comprar
                                    </button>

                                </div>

                                <h2 className="title">Contador</h2>

                                <p className="number">
                                    {product.count}
                                </p>

                                <div className="buttons">

                                    <button
                                        className="button"
                                        onClick={() => quitar(product.id)}
                                    >
                                        -
                                    </button>

                                    <button
                                        className="button"
                                        onClick={() => agregar(product.id)}
                                    >
                                        +
                                    </button>

                                </div>

                                {product.shop && (

                                    <div className="modal-overlay">

                                        <div className="modal">

                                            <p>
                                                ¿Seguro que desea comprar {product.name}?
                                            </p>

                                            <div className="modal-buttons">

                                                <button
                                                    onClick={() => confirmarCompra(product.id)}
                                                >
                                                    Sí
                                                </button>

                                                <button
                                                    onClick={() => cerrarModal(product.id)}
                                                >
                                                    Cancelar
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>

                        ))}

                </div>
            </section>

            <section className="category">
                <div className="grid">

                    {products
                        .filter(product => product.category === "Pescado")
                        .map(product => (

                            <div className="card" key={product.id}>

                                <span className="badge">
                                    {product.badge}
                                </span>

                                <img
                                    src="https://via.placeholder.com/200"
                                    alt={product.name}
                                />

                                <h3>{product.name}</h3>

                                <p>{product.description}</p>

                                <div className="card-footer">

                                    <span className="price">
                                        {product.price}
                                    </span>

                                    <button onClick={() => abrirModal(product.id)}>
                                        Comprar
                                    </button>

                                </div>

                                <h2 className="title">Contador</h2>

                                <p className="number">
                                    {product.count}
                                </p>

                                <div className="buttons">

                                    <button
                                        className="button"
                                        onClick={() => quitar(product.id)}
                                    >
                                        -
                                    </button>

                                    <button
                                        className="button"
                                        onClick={() => agregar(product.id)}
                                    >
                                        +
                                    </button>

                                </div>

                                {product.shop && (

                                    <div className="modal-overlay">

                                        <div className="modal">

                                            <p>
                                                ¿Seguro que desea comprar {product.name}?
                                            </p>

                                            <div className="modal-buttons">

                                                <button
                                                    onClick={() => confirmarCompra(product.id)}
                                                >
                                                    Sí
                                                </button>

                                                <button
                                                    onClick={() => cerrarModal(product.id)}
                                                >
                                                    Cancelar
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>

                        ))}

                </div>
            </section>

            <section className="category">
                <div className="grid">

                    {products
                        .filter(product => product.category === "Lacteos")
                        .map(product => (

                            <div className="card" key={product.id}>

                                <span className="badge">
                                    {product.badge}
                                </span>

                                <img
                                    src="https://via.placeholder.com/200"
                                    alt={product.name}
                                />

                                <h3>{product.name}</h3>

                                <p>{product.description}</p>

                                <div className="card-footer">

                                    <span className="price">
                                        {product.price}
                                    </span>

                                    <button onClick={() => abrirModal(product.id)}>
                                        Comprar
                                    </button>

                                </div>

                                <h2 className="title">Contador</h2>

                                <p className="number">
                                    {product.count}
                                </p>

                                <div className="buttons">

                                    <button
                                        className="button"
                                        onClick={() => quitar(product.id)}
                                    >
                                        -
                                    </button>

                                    <button
                                        className="button"
                                        onClick={() => agregar(product.id)}
                                    >
                                        +
                                    </button>

                                </div>

                                {product.shop && (

                                    <div className="modal-overlay">

                                        <div className="modal">

                                            <p>
                                                ¿Seguro que desea comprar {product.name}?
                                            </p>

                                            <div className="modal-buttons">

                                                <button
                                                    onClick={() => confirmarCompra(product.id)}
                                                >
                                                    Sí
                                                </button>

                                                <button
                                                    onClick={() => cerrarModal(product.id)}
                                                >
                                                    Cancelar
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>

                        ))}

                </div>
            </section>

            <section className="category">
                <h2>Aceites</h2>
                <p className="empty">Próximamente productos...</p>
            </section>

            <section className="category">
                <h2>Embutidos</h2>
                <p className="empty">Próximamente productos...</p>
            </section>

            <section className="category">
                <h2>Harinas</h2>
                <p className="empty">Próximamente productos...</p>
            </section>

        </main>
    );
};

export default Body;