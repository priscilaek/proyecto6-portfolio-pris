
import { Link } from 'react-router-dom';
import {
    generalServices,
} from '../constants/data';
import ServiceList from '../components/ServiceList';
import SpecialtiesList from '../components/SpecialtiesList';

export default function Services() {
    return (
        <>
            <h1 className="mt-9 sm:mt-10 md:mt-11 text-center max-w-[18em]">Services</h1>
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h2 className='text-center'>Cómo puedo ayudarte?</h2>
                <ServiceList services={generalServices} />
            </section>
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h2 className='text-center'>Mis especialidades</h2>
                <SpecialtiesList />
            </section>
            <div className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <p className="text-justify mx-auto sm:mt-5 lg:mt-6">Si está interesado en explorar la lista de mis skills y experiencia, te invito a revisar mi <Link className="inline-link" to="/resume">resume</Link>.</p>
            </div>
        </>
    );
}