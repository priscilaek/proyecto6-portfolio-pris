import {
    Turnstile,
} from "@marsidev/react-turnstile";

const turnstileSiteKey = '123';
const useBasinFormId = '123';

export default function ContactForm() {
    return (
        <>
            <p className="text-center">Campos mandatorios (*).</p>
            <form
                name="contact-form"
                action="mailto:priscilaek@gmail.com"
                method="POST"
                className="w-[100%] flex flex-col flex-nowrap items-center gap-7"
            >
                <label className="max-w-[30em] w-[100%]">
                    Nombre Completo *
                    <input
                        type="text"
                        id="contact-name"
                        name="contact-name"
                        className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                        placeholder="Name"
                        required />
                </label>

                <label className="max-w-[30em] w-[100%]">
                    Email *
                    <input
                        type="email"
                        id="contact-email"
                        name="contact-email"
                        className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                        placeholder="Email"
                        required />
                </label>

                <input type="hidden" name="_gotcha"></input>

                <label className="max-w-[30em] w-[100%]">
                    Mensaje *
                    <textarea
                        id="contact-message"
                        name="contact-message"
                        rows="4"
                        className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                        placeholder="Your message here..."
                        required
                    />
                </label>

                <Turnstile
                    siteKey={turnstileSiteKey}
                />

                <button
                    type="submit"
                    className="mt-8 glassy-icon px-6">Submit</button>
            </form>
        </>
    );
}