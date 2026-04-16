import React from "react";
import './body.css';
import Card from './card';

function Body() {

    const scrollToProducts = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
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
                    <div className="card">
                        <span className="badge">Destacado</span>
                        <img src="https://via.placeholder.com/200" alt="" />
                        <h3>Pechuga de pollo</h3>
                        <p>Fresca, lista para cocinar</p>
                        <div className="card-footer">
                            <span className="price">$12.000</span>
                            <button>Comprar</button>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge">Orgánico</span>
                        <img src="https://via.placeholder.com/200" alt="" />
                        <h3>Huevos AA</h3>
                        <p>Cubeta x30 unidades</p>
                        <div className="card-footer">
                            <span className="price">$18.000</span>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category">
                <h2>Pescado</h2>
                <div className="grid">
                    <div className="card">
                        <span className="badge">Nuevo</span>
                        <img src="https://via.placeholder.com/200" alt="" />
                        <h3>Tilapia fresca</h3>
                        <p>Directo del mar</p>
                        <div className="card-footer">
                            <span className="price">$15.000</span>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category">
                <h2>Lácteos</h2>
                <div className="grid">
                    <div className="card">
                        <span className="badge">Oferta</span>
                        <img src="https://via.placeholder.com/200" alt="" />
                        <h3>Queso campesino</h3>
                        <p>100% natural</p>
                        <div className="card-footer">
                            <span className="price">$9.000</span>
                            <button>Comprar</button>
                        </div>
                    </div>
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