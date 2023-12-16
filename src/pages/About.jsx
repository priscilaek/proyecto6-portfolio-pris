
import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";

export default function About() {
    return (
        <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
            <h1 className="text-center max-w-[18em]">Acerca de mi</h1>
            <img className="w-[300px] profile-border" src="/assets/images/pris-elias.webp" alt="Profile of Priscila Elias" />
            <p className="text-justify">Hola, mi nombre es Priscila Elías y actualmente resido en Lima, Peru. Mi principal enfoque se centra en construir y mejorar websites para clientes con negocios, ayudándoles a establecer una presencia digital excepcional.</p>
            <p className="text-justify">Mi trayectoria en calidad de software está impulsada por el deseo de generar un impacto significativo tanto en las empresas como en las personas. Combinando mi experiencia técnica, creatividad y dedicación a la mejora continua, me esfuerzo por crear experiencias digitales convincentes que superen las expectativas.</p>
            <p className="text-justify">Si consideras que mis proyectos te han sido útiles, cómprame un café, gracias! .</p>
            <CubeCarousel name="desserts" carouselImages={dessertImages} /> 
        </section>
    );
}