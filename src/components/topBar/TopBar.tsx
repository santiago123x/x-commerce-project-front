import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";


const TopBar = () => {
    return (
    <div className="w-full bg-neutral-900 px-3 sm:px-6 py-3 sm:py-4">

        <div className="flex bg-white rounded-lg overflow-hidden h-10 min-w-0 w-full sm:hidden">
            <div className="relative min-w-[90px] w-24 h-full flex items-center">
                <select
                    className="appearance-none w-full h-full border-none pl-4 pr-8 py-2 text-neutral-900 bg-neutral-100 focus:outline-none text-xs sm:text-base font-semibold cursor-pointer rounded-l-lg shadow-sm focus:ring-2 focus:ring-neutral-300"
                >
                    <option value="">Todos</option>
                    <option value="#">Arte y artesanías</option>
                    <option value="#">Automotriz</option>
                    <option value="#">Bebé</option>
                    <option value="#">etc...</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 text-base">
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>
            <input
                className="flex-1 px-3 py-2 text-neutral-900 border-none outline-none text-xs font-medium min-w-0 bg-white"
                type="text"
                placeholder="Buscar en X-commerce"
            />
            <button className="px-4 py-2 bg-neutral-200 text-neutral-900 border-none cursor-pointer text-base h-full flex items-center justify-center transition-colors hover:bg-neutral-300">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>

        <div className="hidden sm:flex flex-row items-center gap-6 w-full">
            <Link href="/" className="relative w-16 h-16 flex-shrink-0 block">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    sizes="64px"
                    priority
                />
            </Link>
            <div className="flex bg-white rounded-lg overflow-hidden h-10 min-w-0 flex-1 max-w-4xl mx-auto">
                <div className="relative min-w-[90px] w-40 h-full flex items-center">
                    <select
                        className="appearance-none w-full h-full border-none pl-4 pr-8 py-2 text-neutral-900 bg-neutral-100 focus:outline-none text-base font-semibold cursor-pointer rounded-l-lg shadow-sm focus:ring-2 focus:ring-neutral-300 transition-colors hover:bg-neutral-200"
                    >
                        <option value="">Todos</option>
                        <option value="#">Arte y artesanias</option>
                        <option value="#">Automotriz</option>
                        <option value="#">Bebé</option>
                        <option value="#">etc...</option>
                    </select>
                    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 text-base">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
                <input
                    className="flex-1 px-4 py-2 text-neutral-900 border-none outline-none text-base font-medium min-w-0 bg-white"
                    type="text"
                    placeholder="Buscar en X-commerce"
                />
                <button className="px-5 py-2 bg-neutral-200 text-neutral-900 border-none cursor-pointer text-base h-full flex items-center justify-center transition-colors hover:bg-neutral-300">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <Link href="/login" className="text-white font-medium text-lg hover:underline cursor-pointer transition-colors whitespace-nowrap">
                Iniciar sesión
            </Link>
        </div>
    </div>
    );
};

export default TopBar;