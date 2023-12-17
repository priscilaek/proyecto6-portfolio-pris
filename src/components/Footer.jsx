
import { getCopyrightYear } from "../utils/date";

export default function Footer() {
    return (
        <footer className="bg-neutGray-800 dark:bg-neutGray-1050 mt-auto px-mobileBound py-8 sm:px-6 sm:py-9 md:px-7 md:py-10 lg:px-8">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <iframe src="https://zeno.fm/player/salvation-inforadio" width="575" height="250" frameBorder="0" scrolling="no" title="Zeno.FM Player"></iframe>
            <a href="https://zeno.fm/player/salvation-inforadio" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '0.9em', lineHeight: '10px' }}>Inforadio 24h.</a>
            </div>
            < br/>
            <p className="font-heading text-center mx-auto">&copy; {getCopyrightYear()} Designed by Ed Park edited by Prisk.</p>
        </footer>
    );
}